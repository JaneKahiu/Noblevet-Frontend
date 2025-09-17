import axios from "axios";

// Basic Auth credentials from environment variables
const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD?.replace(/"/g, '') || "576guuetu588y685gnbmkg!!@##$558585d";

// Debug: Log if credentials are loaded (don't log actual values in production)
console.log('API Username loaded:', username ? 'YES' : 'NO');
console.log('API Password loaded:', password ? 'YES' : 'NO');

// Fallback to hardcoded values if env vars are not loaded
const finalUsername = username || "546r6fbfbffhhf!25353";
const finalPassword = password || "576guuetu588y685gnbmkg!!@##$558585d";

// Create auth header
const authHeader = "Basic " + btoa(finalUsername + ":" + finalPassword);
console.log('Authorization header created');

// Use proxy path for API requests
const apiBaseUrl = '/api';

console.log('API Base URL (via proxy):', apiBaseUrl, '-> will proxy to', import.meta.env.VITE_API_BASE_URL);

const api = axios.create({
	baseURL: apiBaseUrl,
	headers: {
		"Content-Type": "application/json",
		"Cache-Control": "no-cache",
		"Pragma": "no-cache",
		"Authorization": authHeader
	},
	withCredentials: false,
	timeout: 30000,
	validateStatus: function (status) {
		return status < 500; // Accept all status codes less than 500
	}
	});


// Add request interceptor
api.interceptors.request.use(
	(config) => {
		// Ensure auth and cache headers are always set
		config.headers['Authorization'] = authHeader;
		config.headers['Cache-Control'] = 'no-cache';
		config.headers['Pragma'] = 'no-cache';
		
		console.log('Request interceptor: Making request to:', config.baseURL + config.url);
		console.log('Full URL:', config.baseURL + config.url);
		console.log('Request headers:', {
			'Content-Type': config.headers['Content-Type'],
			'Authorization': config.headers['Authorization'] ? 'SET (Basic Auth)' : 'NOT_SET',
			'Cache-Control': config.headers['Cache-Control']
		});
		
		return config;
	},
	(error) => {
		console.error('Request interceptor error:', error);
		return Promise.reject(error);
	}
);

// Add response interceptor
api.interceptors.response.use(
	(response) => {
		console.log('Response received:', {
			status: response.status,
			url: response.config.url,
			method: response.config.method?.toUpperCase(),
			dataKeys: response.data ? Object.keys(response.data) : []
		});
		return response;
	},
	(error) => {
		if (error.response) {
			console.error('API Error Response:', {
				status: error.response.status,
				statusText: error.response.statusText,
				url: error.config?.url,
				method: error.config?.method?.toUpperCase(),
				data: error.response.data
			});
			
			if (error.response.status === 401) {
				console.error('401 Unauthorized - Basic Auth failed');
				console.error('Check your API credentials');
			}
			
			if (error.response.status === 404) {
				console.error('404 Not Found - Check the API endpoint URL');
			}
		} else if (error.request) {
			console.error('Network Error - No response received:', error.message);
		} else {
			console.error('Request setup error:', error.message);
		}
		return Promise.reject(error);
	}
);

export default api;
import api from '../index'; // Import your existing API service

// Use environment variables for configuration
const DEFAULT_BCHECK = import.meta.env.VITE_BCHECK || "f6dc706a84ac125fac24f1ba61acc9fe5747h67j";

// Debug environment variables
console.log('AuthService Environment Check:', {
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'NOT_SET',
  VITE_API_USERNAME: import.meta.env.VITE_API_USERNAME ? 'SET' : 'NOT_SET', 
  VITE_API_PASSWORD: import.meta.env.VITE_API_PASSWORD ? 'SET' : 'NOT_SET',
  VITE_BCHECK: import.meta.env.VITE_BCHECK ? 'SET' : 'NOT_SET'
});

// Helper to get Basic Auth header from env
const getAuthHeader = () => {
  const username = import.meta.env.VITE_API_USERNAME;
  const password = import.meta.env.VITE_API_PASSWORD;
  if (!username || !password) {
    console.error('API credentials missing from environment variables.');
    return '';
  }
  return 'Basic ' + btoa(username + ':' + password);
};

// Direct API Test (bypassing proxy) - runs on import
// Direct API test removed. All authentication now uses environment variables only.

// Test function to check if /vstartonline is working
export const testVstartonline = async () => {
  try {
    console.log('Testing /vstartonline endpoint...');
    const response = await api.post('/vstartonline', new URLSearchParams({ ip: '127.0.0.1' }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    console.log('Test response:', response);
    return response;
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
};

// Get UID from /vstartonline using IP address
export const getUid = async (ip) => {
  try {
    console.log('Getting UID for IP:', ip);
    const params = new URLSearchParams();
    params.append('ip', ip);
    const paramsString = params.toString();
    console.log('IP value being sent:', ip);
    console.log('UID request params (string):', paramsString);
    console.log('Making request to: /vstartonline');
    const { data } = await api.post('/vstartonline', paramsString, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*'
      }
    });
    console.log('=== FULL /vstartonline RESPONSE ===');
    console.log('Raw response:', data);
    console.log('Response type:', typeof data);
    console.log('Response keys:', data ? Object.keys(data) : 'No data');
    console.log('Stringified response:', JSON.stringify(data, null, 2));
    console.log('=== END RESPONSE DEBUG ===');
    
    // Check for different response formats
    if (data && data.error) {
      console.error('API returned error:', data.error);
      throw new Error(data.error);
    }
    
    if (data && data.Message && data.Message.includes('Error')) {
      console.error('API returned Message error:', data.Message);
      throw new Error(data.Message);
    }
    
    // Check for UID in different possible fields
    let uid = null;
    if (data && data.uid) {
      uid = data.uid;
      console.log('Found UID in data.uid:', uid);
    } else if (data && data.UID) {
      uid = data.UID;
      console.log('Found UID in data.UID:', uid);
    } else if (data && data.session_id) {
      uid = data.session_id;
      console.log('Found UID in data.session_id:', uid);
    } else if (data && data.id) {
      uid = data.id;
      console.log('Found UID in data.id:', uid);
    }
    
    if (uid) {
      return { uid, ...data };
    }
    
    // If no UID found, show the full response and try to proceed anyway
    console.warn('No UID found in any expected field. Full response:', data);
    
    // For debugging, let's try to use a fallback UID if the endpoint doesn't provide one
    console.log('Using fallback approach - generating temporary UID');
    const fallbackUid = 'temp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    console.log('Generated fallback UID:', fallbackUid);
    
    return { uid: fallbackUid, ...data };
    
  } catch (err) {
    console.error('=== UID REQUEST FAILED ===');
    console.error('Error message:', err.message);
    console.error('Error details:', {
      message: err.message,
      response: err.response?.data,
      status: err.response?.status,
      responseText: err.response?.statusText
    });
    console.error('Full error object:', err);
    console.error('=== END ERROR DEBUG ===');
    
    // Provide more specific error messages
    if (err.response?.status === 404) {
      throw new Error('Session service not found. Please contact support.');
    } else if (err.response?.status >= 500) {
      throw new Error('Server error. Please try again later.');
    } else if (err.message.includes('Network Error')) {
      throw new Error('Network error. Please check your connection.');
    }
    
    throw new Error(`Failed to get session ID: ${err.message}`);
  }
};

export const login = async ({ uid, username, password, bcheck }) => {
  try {
    console.log('Login attempt with dynamic UID:', { 
      uid: uid ? uid.substring(0, 10) + '...' : 'NOT_SET', 
      username, 
      bcheck: bcheck ? bcheck.substring(0, 10) + '...' : 'none' 
    });
    
    if (!uid || !username || !password) {
      throw new Error('Missing required fields: uid, username (phone), or password');
    }
    
    const loginPayload = {
      uid,
      username,
      password,
      bcheck: bcheck || DEFAULT_BCHECK
    };
    
    console.log('Login payload prepared (JSON)');
    
    const { data } = await api.post('/vlogin', loginPayload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('JSON Login Response:', data);
    
    if (data && data.error) {
      console.error('API Error:', data.error);
      if (data.error.includes('Details Not Found')) {
        throw new Error('Account not found. Please check your phone number and try again.');
      }
      throw new Error(data.error);
    }
    
    if (data && data.Message && data.Message.includes('Not Found')) {
      throw new Error('User not found. Please check your credentials.');
    }
    
    if (data && data.code) {
      const code = parseInt(data.code);
      if (code !== 200) {
        let errorMessage = 'Login failed';
        
        switch (code) {
          case 7401:
            errorMessage = 'Invalid phone number or password';
            break;
          case 7402:
          case 7405:
            errorMessage = 'Account not found';
            break;
          case 7403:
            errorMessage = 'Account is suspended';
            break;
          default:
            errorMessage = data.message || data.error || `Login failed with code: ${code}`;
        }
        
        throw new Error(errorMessage);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Login service error:', error);
    
    if (error.response) {
      const errorData = error.response.data;
      console.error('Response error data:', errorData);
      
      if (errorData && errorData.code === 7405) {
        throw new Error('Account not found. Please verify your phone number.');
      }
      
      if (errorData && errorData.Message) {
        throw new Error(errorData.Message);
      }
      
      if (errorData && errorData.error) {
        if (errorData.error.includes('Details Not Found')) {
          throw new Error('Account details not found. Please verify your phone number.');
        }
        throw new Error(errorData.error);
      }
    }
    
    throw error;
  }
};

export const loginFormData = async ({ uid, phone, password, bcheck }) => {
  try {
    console.log('Login attempt (form-data):', { 
      uid: uid ? uid.substring(0, 10) + '...' : 'NOT_SET', 
      phone, 
      bcheck: bcheck ? bcheck.substring(0, 10) + '...' : 'none' 
    });
    
    if (!uid || !username || !password) {
      throw new Error('Missing required fields: uid, username (phone), or password');
    }
    
    const params = new URLSearchParams();
    params.append('uid', uid);
    params.append('username', username);
    params.append('password', password);
    params.append('bcheck', bcheck || DEFAULT_BCHECK);
    
    console.log('Form params prepared:', params.toString());
    
    const { data } = await api.post('/vlogin', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    console.log('Form-data Login Response:', data);
    
    // Handle specific error responses
    if (data && data.error) {
      console.error('API Error (form-data):', data.error);
      
      if (data.error.includes('Details Not Found')) {
        throw new Error('Account not found. Please check your phone number and try again.');
      }
      
      throw new Error(data.error);
    }
    
    if (data && data.Message && data.Message.includes('Not Found')) {
      throw new Error('User not found. Please check your credentials.');
    }
    
    // Check for error codes
    if (data && data.code) {
      const code = parseInt(data.code);
      if (code !== 200) {
        let errorMessage = 'Login failed';
        
        switch (code) {
          case 7401:
            errorMessage = 'Invalid phone number or password';
            break;
          case 7402:
          case 7405:
            errorMessage = 'Account not found';
            break;
          case 7403:
            errorMessage = 'Account is suspended';
            break;
          default:
            errorMessage = data.message || data.error || `Login failed with code: ${code}`;
        }
        
        throw new Error(errorMessage);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Login service error (form-data):', error);
    
    if (error.response) {
      const errorData = error.response.data;
      console.error('Response error data (form-data):', errorData);
      
      if (errorData && errorData.code === 7405) {
        throw new Error('Account not found. Please verify your phone number.');
      }
      
      if (errorData && errorData.Message) {
        throw new Error(errorData.Message);
      }
      
      if (errorData && errorData.error) {
        if (errorData.error.includes('Details Not Found')) {
          throw new Error('Account details not found. Please verify your phone number.');
        }
        throw new Error(errorData.error);
      }
    }
    
    throw error;
  }
};

// Helper to get user's IP address
const getIpAddress = async () => {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch {
    return '';
  }
};

export const handleUserLogin = async (phone, password, userIP = null) => {
  try {
    console.log('Starting complete login process...');
    
    // Get user IP if not provided
    const ip = userIP || await getIpAddress();
    if (!ip) {
      throw new Error('Could not get IP address');
    }
    
    // Get UID from /vstartonline
    const uidResponse = await getUid(ip);
    console.log('UID Response:', uidResponse);
    
    if (!uidResponse || !uidResponse.uid) {
      throw new Error('Failed to get UID');
    }
    
    // Try login with dynamic UID
    try {
      const loginResponse = await login({
        uid: uidResponse.uid,
        username: phone,
        password: password,
        bcheck: uidResponse.bcheck || DEFAULT_BCHECK
      });
      return loginResponse;
    } catch (loginError) {
      console.log('JSON login failed, trying form-data...', loginError.message);
      const loginResponse = await loginFormData({
        uid: uidResponse.uid,
        username: phone,
        password: password,
        bcheck: uidResponse.bcheck || DEFAULT_BCHECK
      });
      return loginResponse;
    }
    
  } catch (error) {
    console.error('Complete login process failed:', error);
    throw error;
  }
};


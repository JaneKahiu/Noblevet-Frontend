import { useState } from 'react';
import { getUid, login } from '../../api/services/authService';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Heart, Stethoscope, Shield } from 'lucide-react';

// Helper to get user's IP address
const getIpAddress = async () => {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch {
    return '127.0.0.1'; // fallback IP
  }
};

export default function AuthPages() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      if (isLogin) {
        // Validation for login
        if (!formData.phone || !formData.password) {
          setError('Please enter both phone number and password.');
          setLoading(false);
          return;
        }

        console.log('Starting login process...');
        
        // Step 1: Get user's IP address
        const userIP = await getIpAddress();
        console.log('User IP:', userIP);
        
        // Step 2: Get UID from /vstartonline
        const uidResponse = await getUid(userIP);
        console.log('UID Response:', uidResponse);
        
        if (!uidResponse.uid) {
          setError('Failed to initialize session. Please try again.');
          setLoading(false);
          return;
        }
        
        // Step 3: Login with dynamic UID
        const loginRes = await login({
          uid: uidResponse.uid,
          username: formData.phone,
          password: formData.password,
          bcheck: import.meta.env.VITE_BCHECK || "f6dc706a84ac125fac24f1ba61acc9fe5747h67j"
        });
        
        console.log('Login Response:', loginRes);
        
        // Handle successful login
        if (loginRes && (loginRes.customer_id || loginRes.customer || loginRes.message === 'Successful Login')) {
          const customerData = loginRes.customer || loginRes;
          
          // Save to localStorage
          localStorage.setItem('uid', uidResponse.uid);
          localStorage.setItem('customer', JSON.stringify(customerData));
          localStorage.setItem('bcheck', import.meta.env.VITE_BCHECK || "f6dc706a84ac125fac24f1ba61acc9fe5747h67j");
          
          console.log('Login successful, redirecting to dashboard...');
          navigate('/dashboard');
          return;
        }
        
        setError('Login failed. Please check your credentials.');
      } else {
        // Registration validation
        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
          setError('Please fill in all fields.');
          setLoading(false);
          return;
        }
        
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match.');
          setLoading(false);
          return;
        }
        
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters long.');
          setLoading(false);
          return;
        }
        
        // Registration logic would go here
        setError('Registration is not implemented yet.');
      }
    } catch (err) {
      console.error('Login error:', err);
      
      // Enhanced error handling
      if (err.response) {
        const status = err.response.status;
        const responseData = err.response.data;
        
        console.log('Error response:', { status, responseData });
        
        // Handle API-specific error format
        if (responseData && responseData.code) {
          switch (responseData.code) {
            case 7401:
              setError('Invalid phone number or password. Please check your credentials.');
              break;
            case 7402:
            case 7405:
              setError('Account not found. Please verify your phone number.');
              break;
            case 7403:
              setError('Account is suspended. Please contact support.');
              break;
            default:
              setError(responseData.error || responseData.message || `Error code: ${responseData.code}`);
          }
        } else {
          // Handle standard HTTP error responses
          if (status === 401) {
            setError('Invalid credentials. Please check your phone number and password.');
          } else if (status === 400) {
            const message = responseData?.message || responseData?.error || 'Bad request';
            setError(`Bad request: ${message}`);
          } else if (status >= 500) {
            setError('Server error. Please try again later.');
          } else {
            const message = responseData?.message || responseData?.error || err.message || 'Unknown error';
            setError(`Error: ${message}`);
          }
        }
      } else if (err.request) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError(err.message || 'An unexpected error occurred. Please try again.');
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.4), rgba(20, 83, 45, 0.5)), url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Heart className="absolute top-1/4 left-1/4 w-8 h-8 text-emerald-300/30 animate-bounce delay-0" />
        <Stethoscope className="absolute top-1/3 right-1/4 w-10 h-10 text-teal-300/30 animate-bounce delay-700" />
        <Shield className="absolute bottom-1/4 left-1/3 w-6 h-6 text-green-300/30 animate-bounce delay-1000" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="flex w-full max-w-6xl items-center gap-12">
          {/* Left Side - Welcome Text */}
          <div className="hidden lg:flex flex-1 flex-col space-y-6 text-white -mt-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Welcome to<br />
                <span className="text-emerald-300">Noble Vet</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Join thousands of pet parents who trust us with their beloved companions
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Compassionate Care</h3>
                  <p className="text-white/80">Expert veterinary services with love and dedication</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Stethoscope className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">24/7 Emergency</h3>
                  <p className="text-white/80">Round-the-clock care when your pet needs it most</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Trusted Professionals</h3>
                  <p className="text-white/80">Certified veterinarians with years of experience</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center space-x-8 text-white/90">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-300">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-300">10K+</div>
                  <div className="text-sm">Happy Pets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="w-full max-w-md lg:flex-shrink-0">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Noble Vet</h1>
              <p className="text-emerald-200">Animal Health You Can Trust</p>
            </div>

            {/* Auth Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
              {/* Toggle Buttons */}
              <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isLogin
                      ? 'bg-emerald-500 text-white shadow-lg transform scale-105'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    !isLogin
                      ? 'bg-emerald-500 text-white shadow-lg transform scale-105'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Error Display */}
              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-xl text-red-300 text-sm backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field (Register only) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300 group-focus-within:text-emerald-400 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field (Register only) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300 group-focus-within:text-emerald-400 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Enter your email"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Phone Field - for both login and register */}
                <div className="group">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300 group-focus-within:text-emerald-400 transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your phone number (e.g., 0723899726)"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300 group-focus-within:text-emerald-400 transition-colors" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-300 hover:text-emerald-400 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field (Register only) */}
                {!isLogin && (
                  <div className="group">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300 group-focus-within:text-emerald-400 transition-colors" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400 focus:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-300 hover:text-emerald-400 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Forgot Password (Login only) */}
                {isLogin && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-emerald-300 hover:text-emerald-400 text-sm transition-colors"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Terms & Conditions (Register only) */}
                {!isLogin && (
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 w-4 h-4 text-emerald-500 bg-white/10 border-white/20 rounded focus:ring-emerald-400"
                      required
                    />
                    <label htmlFor="terms" className="text-white/80 text-sm">
                      I agree to the{' '}
                      <button type="button" className="text-emerald-300 hover:text-emerald-400 transition-colors">
                        Terms & Conditions
                      </button>{' '}
                      and{' '}
                      <button type="button" className="text-emerald-300 hover:text-emerald-400 transition-colors">
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  <span>{loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}</span>
                  {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center my-8">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="px-4 text-white/60 text-sm">or</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* Switch Mode */}
              <div className="text-center mt-8">
                <span className="text-white/60">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError(null); // Clear errors when switching modes
                  }}
                  className="ml-2 text-emerald-300 hover:text-emerald-400 font-medium transition-colors"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-6 text-white/60 text-sm">
              <p>Professional veterinary care for all animals in Kenya</p>
              <p className="mt-2">24/7 Emergency Services Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
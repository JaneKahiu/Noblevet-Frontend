import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Camera, 
  Save,
  X,
  Eye,
  EyeOff,
  Shield,
  Bell,
  Heart,
  PawPrint
} from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+254 123 456 789',
    address: '123 Pet Street, Nairobi, Kenya',
    emergencyContact: 'Jane Doe (+254 987 654 321)',
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      appointmentReminders: true,
      marketingEmails: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('preferences.')) {
      const prefKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const profileStats = [
    { label: 'Pets Registered', value: '3', icon: PawPrint, color: 'from-blue-500 to-indigo-500' },
    { label: 'Appointments Completed', value: '24', icon: Heart, color: 'from-emerald-500 to-teal-500' },
    { label: 'Years as Client', value: '2', icon: User, color: 'from-purple-500 to-pink-500' },
    { label: 'Loyalty Points', value: '1,250', icon: Shield, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Profile</h1>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Manage your account information and preferences
          </p>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {profileStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`bg-gradient-to-r ${stat.color} rounded-xl p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
                <Icon className="h-8 w-8 text-white/60" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                  isEditing 
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {isEditing ? <X className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                <span>{isEditing ? 'Cancel' : 'Edit'}</span>
              </button>
            </div>

            {/* Profile Picture */}
            <div className="flex items-center space-x-6 mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-white" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </button>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-gray-600">Pet Owner</p>
                <p className="text-sm text-emerald-600">Verified Account</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{formData.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-gray-900 py-2">{formData.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <p className="text-gray-900">{formData.email}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <p className="text-gray-900">{formData.phone}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                {isEditing ? (
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                ) : (
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                    <p className="text-gray-900">{formData.address}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-gray-900 py-2">{formData.emergencyContact}</p>
                )}
              </div>

              {isEditing && (
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Settings & Preferences */}
        <div className="space-y-6">
          {/* Account Security */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
            <div className="space-y-3">
              <button
                onClick={() => setShowPasswordForm(true)}
                className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <span className="text-sm">Change Password</span>
                </div>
                <span className="text-gray-400">›</span>
              </button>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Two-Factor Authentication</span>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Enabled</span>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Email Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="preferences.emailNotifications"
                    checked={formData.preferences.emailNotifications}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">SMS Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="preferences.smsNotifications"
                    checked={formData.preferences.smsNotifications}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Appointment Reminders</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="preferences.appointmentReminders"
                    checked={formData.preferences.appointmentReminders}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span className="text-sm">Marketing Emails</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="preferences.marketingEmails"
                    checked={formData.preferences.marketingEmails}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Download My Data
              </button>
              <button className="w-full text-left p-3 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                Deactivate Account
              </button>
              <button className="w-full text-left p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showPasswordForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full animate-fade-in-up">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Change Password</h2>
                <button
                  onClick={() => setShowPasswordForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowPasswordForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

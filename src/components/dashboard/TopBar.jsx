import { useState } from 'react';
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  LogOut, 
  Moon, 
  Sun,
  Menu,
  MessageSquare,
  Calendar,
  ChevronDown,
  MapPin,
  Phone
} from 'lucide-react';

export default function TopBar({ isCollapsed, setIsCollapsed }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const notifications = [
    { id: 1, message: "Appointment reminder: Fluffy's checkup at 2:00 PM", time: "5 min ago", type: "reminder" },
    { id: 2, message: "New message from Dr. Smith", time: "10 min ago", type: "message" },
    { id: 3, message: "Invoice #1234 is ready for review", time: "1 hour ago", type: "invoice" },
  ];

  return (
    <div className={`${isCollapsed ? 'ml-20' : 'ml-72'} transition-all duration-300 bg-white shadow-lg border-b border-gray-200 sticky top-0 z-10`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments, pets, or messages..."
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Nairobi, Kenya</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-fade-in-up">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          {notification.type === 'reminder' && (
                            <Calendar className="h-5 w-5 text-blue-500" />
                          )}
                          {notification.type === 'message' && (
                            <MessageSquare className="h-5 w-5 text-green-500" />
                          )}
                          {notification.type === 'invoice' && (
                            <Bell className="h-5 w-5 text-orange-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <button className="w-full text-center text-emerald-600 hover:text-emerald-700 font-medium">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Pet Owner</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-fade-in-up">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">John Doe</p>
                      <p className="text-sm text-gray-500">john.doe@email.com</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <p className="text-xs text-gray-500">+254 123 456 789</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">View Profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
                    <Settings className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">Account Settings</span>
                  </button>
                  <hr className="my-2" />
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-red-50 transition-colors text-red-600">
                    <LogOut className="h-4 w-4" />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

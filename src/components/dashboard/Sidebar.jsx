import { useState } from 'react';
import { 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings, 
  Bell, 
  Heart, 
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  LogOut,
  PawPrint,
  CreditCard,
  BarChart3,
  UserCheck,
  MapPin,
  Phone
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isCollapsed, setIsCollapsed, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'pets', label: 'My Pets', icon: PawPrint },
    { id: 'invoices', label: 'Invoices', icon: CreditCard },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'reminders', label: 'Reminders', icon: Bell },
    { id: 'profile', label: 'Profile', icon: UserCheck },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    // { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={`
      ${isCollapsed ? 'w-20' : 'w-72'} 
      bg-gradient-to-b from-emerald-800 to-emerald-900 
      h-screen fixed left-0 top-0 z-40 
      transition-all duration-300 ease-in-out shadow-2xl
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      {/* Header */}
      <div className="p-6 border-b border-emerald-700/50">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <div className="relative">
                <Heart className="h-8 w-8 text-emerald-300 animate-pulse" />
                <Stethoscope className="h-6 w-6 text-emerald-200 absolute -top-1 -right-1" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">NobleVet</h2>
                <p className="text-emerald-200 text-xs">Client Portal</p>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              if (window.innerWidth < 1024) {
                // On mobile, close the menu instead of collapsing
                setIsMobileMenuOpen(false);
              } else {
                // On desktop, toggle collapse
                setIsCollapsed(!isCollapsed);
              }
            }}
            className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white transition-colors duration-200"
          >
            {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 px-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                // Close mobile menu when item is selected
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(false);
                }
              }}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 group
                ${isActive 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg transform scale-[1.02]' 
                  : 'text-emerald-200 hover:bg-emerald-700/50 hover:text-white hover:transform hover:scale-[1.01]'
                }
                animate-fade-in-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
              {!isCollapsed && isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-ping"></div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-emerald-700/50">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-emerald-200 hover:bg-red-600/20 hover:text-red-300 transition-all duration-200 group">
          <LogOut className="h-5 w-5 group-hover:animate-bounce" />
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}

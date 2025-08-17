import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import DashboardHome from './pages/DashboardHome';
import Appointments from './pages/Appointments';
import MyPets from './pages/MyPets';
import Invoices from './pages/Invoices';
import Messages from './pages/Messages';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Contacts from './pages/Contacts';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'appointments':
        return <Appointments />;
      case 'pets':
        return <MyPets />;
      case 'invoices':
        return <Invoices />;
      case 'messages':
        return <Messages />;
      case 'reminders':
        return <Reminders />;
      case 'profile':
        return <Profile />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      case 'services':
        return <Services />;
      case 'locations':
        return <Locations />;
      case 'contacts':
        return <Contacts />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex flex-col">
        <TopBar 
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className={`${isCollapsed ? 'lg:ml-20' : 'lg:ml-72'} ml-0 transition-all duration-300 p-6 min-h-screen`}>
          <div className="animate-fade-in-up">
            {renderActiveComponent()}
          </div>
        </main>
      </div>
    </div>
  );
}

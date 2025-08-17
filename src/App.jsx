import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/layout/Navigation.jsx';
import Footer from '../src/components/layout/Footer.jsx';
import Home from '../src/components/ pages/Home.jsx';
import About from '../src/components/ pages/About.jsx';
import Services from '../src/components/ pages/Services.jsx';
import Locations from '../src/components/ pages/Locations.jsx';
import Contacts from '../src/components/ pages/Contacts.jsx';
import LoginPage from '../src/components/auth/LoginPage.jsx';
import Dashboard from '../src/components/dashboard/Dashboard.jsx';
import './index.css';
// Coming Soon Component for placeholder pages
const ComingSoon = ({ title, icon }) => (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                {icon}
            </div>
            <h1 className="text-6xl font-bold text-emerald-600 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">Coming Soon - Under Development</p>
            <div className="mt-8">
                <button
                    onClick={() => window.location.href = '/'}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                >
                    Return to Home
                </button>
            </div>
        </div>
    </div>
);

// Layout component for pages with navigation and footer
const Layout = ({ children }) => (
    <div className="min-h-screen bg-white">
        <Navigation />
        <main>
            {children}
        </main>
        <Footer />
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Login route without navigation/footer */}
                <Route path="/login" element={<LoginPage />} />
                
                {/* Dashboard route without navigation/footer */}
                <Route path="/dashboard" element={<Dashboard />} />
                
                {/* All other routes with navigation/footer */}
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/services" element={<Layout><Services /></Layout>} />
                <Route path="/locations" element={<Layout><Locations /></Layout>} />
                <Route path="/contact" element={<Layout><Contacts /></Layout>} />
            </Routes>
        </Router>
    );
};

export default App;
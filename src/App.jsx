import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/layout/Navigation.jsx';
import Footer from '../src/components/layout/Footer.jsx';
import Home from '../src/components/ pages/Home.jsx';
import About from '../src/components/ pages/About.jsx';
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
                <Route 
                    path="/services" 
                    element={
                        <Layout>
                            <ComingSoon 
                                title="Services Page"
                                icon={
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.415-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                                    </svg>
                                }
                            />
                        </Layout>
                    } 
                />
                <Route 
                    path="/locations" 
                    element={
                        <Layout>
                            <ComingSoon 
                                title="Locations Page"
                                icon={
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                }
                            />
                        </Layout>
                    } 
                />
                <Route 
                    path="/contact" 
                    element={
                        <Layout>
                            <ComingSoon 
                                title="Contact Page"
                                icon={
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                }
                            />
                        </Layout>
                    } 
                />
            </Routes>
        </Router>
    );
};

export default App;
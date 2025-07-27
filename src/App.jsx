import React, { useState } from 'react';
import Navigation from '../src/components/layout/Navigation.jsx';
import Footer from '../src/components/layout/Footer.jsx';
import Home from '../src/components/ pages/Home.jsx';
import About from '../src/components/ pages/About.jsx';
import './index.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'services':
                return (
                    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.415-3.414l5-5A2 2 0 009 11.172V5l-1-1z" />
                                </svg>
                            </div>
                            <h1 className="text-6xl font-bold text-emerald-600 mb-4">Services Page</h1>
                            <p className="text-xl text-gray-600">Coming Soon - Under Development</p>
                            <div className="mt-8">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                                >
                                    Return to Home
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'locations':
                return (
                    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h1 className="text-6xl font-bold text-emerald-600 mb-4">Locations Page</h1>
                            <p className="text-xl text-gray-600">Coming Soon - Under Development</p>
                            <div className="mt-8">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                                >
                                    Return to Home
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h1 className="text-6xl font-bold text-emerald-600 mb-4">Contact Page</h1>
                            <p className="text-xl text-gray-600">Coming Soon - Under Development</p>
                            <div className="mt-8">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
                                >
                                    Return to Home
                                </button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <Home />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;
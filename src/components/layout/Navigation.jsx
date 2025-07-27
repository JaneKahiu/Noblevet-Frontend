import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Stethoscope, Heart } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Locations', id: 'locations' },
        { name: 'Contact', id: 'contact' }
    ];

    const handleNavClick = (pageId) => {
        setCurrentPage(pageId);
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
            isScrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-emerald-100/50'
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo - Medium Size */}
                    <div
                        className="flex items-center space-x-3 cursor-pointer group"
                        onClick={() => handleNavClick('home')}
                    >
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                                <Stethoscope className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse">
                                <Heart className="w-2 h-2 text-white m-0.5" />
                            </div>
                        </div>
                        <div className="group-hover:scale-105 transition-transform duration-300">
                            <div className={`font-bold text-lg transition-colors duration-300 ${
                                isScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                                Noble Vet
                            </div>
                            <div className={`text-xs font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-emerald-600' : 'text-emerald-200'
                            }`}>
                                Surgeons Kenya
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation - Medium Size */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`relative font-semibold transition-all duration-300 py-2 px-3 rounded-lg group ${
                                    currentPage === item.id
                                        ? 'text-emerald-600 bg-emerald-50'
                                        : isScrolled ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50' : 'text-white hover:text-emerald-300 hover:bg-white/10'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform origin-left transition-all duration-300 rounded-full ${
                                    currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>
                            </button>
                        ))}

                        <button className="group bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 flex items-center space-x-2 border border-white/20">
                            <Phone className="w-4 h-4 group-hover:animate-bounce" />
                            <span className="text-sm">Emergency</span>
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-ping"></div>
                        </button>
                    </div>

                    {/* Mobile Menu Button - Medium Size */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative group p-2"
                    >
                        <div className="relative w-6 h-6">
                            <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                                isOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                            } ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                            <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                            } ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu - Medium Size */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-emerald-100">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`block w-full text-left py-3 px-4 rounded-xl font-semibold transition-all duration-300 mb-2 ${
                                    currentPage === item.id
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                                        : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 hover:scale-102'
                                }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                {item.name}
                            </button>
                        ))}
                        <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-xl font-semibold mt-3 flex items-center justify-center space-x-2 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg">
                            <Phone className="w-4 h-4" />
                            <span>Emergency Call</span>
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
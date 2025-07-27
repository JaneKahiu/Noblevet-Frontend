import React from 'react';
import { Phone, Mail, MapPin, Stethoscope, Heart, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
    const quickLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Locations', id: 'locations' },
        { name: 'Contact', id: 'contact' }
    ];

    const services = ['Emergency Care', 'Vaccination', 'Pet Boarding', 'Grooming'];

    const handleNavClick = (pageId) => {
        setCurrentPage(pageId);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Emergency Banner - Compact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 relative z-10">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-white animate-pulse" />
                            <span className="font-semibold text-sm">24/7 Emergency Services Available</span>
                        </div>
                        <button className="bg-white text-red-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 text-xs">
                            Call: +254 123 456 789
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                    {/* Company Info - Medium */}
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                                <Stethoscope className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <div className="font-bold">Noble Vet</div>
                                <div className="text-emerald-400 text-xs">Surgeons</div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">
                            Kenya's premier veterinary clinic providing professional care for all animals since 2009.
                        </p>
                    </div>

                    {/* Quick Links - Medium */}
                    <div>
                        <h3 className="font-semibold text-emerald-400 mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => handleNavClick(link.id)}
                                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-xs"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services - Medium */}
                    <div>
                        <h3 className="font-semibold text-emerald-400 mb-2">Services</h3>
                        <ul className="space-y-1">
                            {services.map((service, index) => (
                                <li key={index}>
                  <span className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer text-xs">
                    {service}
                  </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Medium */}
                    <div>
                        <h3 className="font-semibold text-emerald-400 mb-2">Contact</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-3 h-3 text-emerald-400" />
                                <span className="text-gray-400 text-xs">+254 123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-3 h-3 text-emerald-400" />
                                <span className="text-gray-400 text-xs">info@noblevet.co.ke</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-3 h-3 text-emerald-400" />
                                <span className="text-gray-400 text-xs">Nairobi, Kenya</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Medium */}
                <div className="border-t border-gray-700 pt-3 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-gray-400 text-xs mb-2 md:mb-0">
                        <p>&copy; 2025 Noble Veterinary Surgeons. All rights reserved.</p>
                    </div>

                    {/* Social Links - Medium */}
                    <div className="flex space-x-2">
                        {[Facebook, Twitter, Instagram].map((Icon, index) => (
                            <button
                                key={index}
                                className="w-6 h-6 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110"
                            >
                                <Icon className="w-3 h-3" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
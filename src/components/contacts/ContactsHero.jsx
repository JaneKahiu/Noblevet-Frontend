import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, MapPin, ArrowDown, Sparkles, Award, Headphones, Clock, Users } from 'lucide-react';

const ContactsHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Floating icon circles data for contacts
    const floatingIcons = [
        { icon: Phone, delay: '0s', duration: '8s', size: 'w-12 h-12', position: 'top-20 left-10' },
        { icon: Mail, delay: '2s', duration: '10s', size: 'w-10 h-10', position: 'top-40 right-20' },
        { icon: MessageCircle, delay: '4s', duration: '12s', size: 'w-14 h-14', position: 'top-60 left-1/4' },
        { icon: Headphones, delay: '1s', duration: '9s', size: 'w-8 h-8', position: 'bottom-40 right-10' },
        { icon: Clock, delay: '3s', duration: '11s', size: 'w-10 h-10', position: 'bottom-60 left-16' },
        { icon: Users, delay: '5s', duration: '7s', size: 'w-12 h-12', position: 'top-1/3 right-1/4' },
        { icon: MapPin, delay: '6s', duration: '13s', size: 'w-9 h-9', position: 'bottom-1/3 right-1/3' },
        { icon: Award, delay: '2.5s', duration: '10s', size: 'w-11 h-11', position: 'top-1/2 left-8' }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden flex items-center">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>

                {/* Mouse-following gradient */}
                <div
                    className="absolute w-[600px] h-[600px] bg-gradient-radial from-emerald-400/10 via-teal-400/5 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-1000 ease-out"
                    style={{
                        left: mousePosition.x - 300,
                        top: mousePosition.y - 300,
                    }}
                ></div>
            </div>

            {/* Floating Icon Circles */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute ${item.position} animate-float-rotate opacity-70 hover:opacity-100 transition-opacity duration-300`}
                        style={{
                            animationDelay: item.delay,
                            animationDuration: item.duration
                        }}
                    >
                        <div className={`${item.size} bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-1/2 h-1/2 text-emerald-300" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 12}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className={`inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group mb-8 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <Sparkles className="w-5 h-5 text-emerald-300 mr-3 animate-spin" />
                        <span className="text-base font-semibold">Get in Touch</span>
                        <Award className="w-5 h-5 text-yellow-400 ml-3 animate-bounce" />
                    </div>

                    {/* Main Title */}
                    <h1 className={`text-5xl lg:text-7xl font-black text-white leading-tight mb-8 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.2s' }}>
                        <span className="block">We're Here to</span>
                        <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                            Help & Support
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.4s' }}>
                        Have questions about our services? Need to schedule an appointment? 
                        Our dedicated team is ready to assist you with all your pet care needs.
                    </p>

                    {/* Stats Row */}
                    <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.6s' }}>
                        {[
                            { icon: Clock, number: '< 2hrs', label: 'Response Time' },
                            { icon: Users, number: '24/7', label: 'Support Team' },
                            { icon: Phone, number: '5+', label: 'Contact Methods' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border border-white/30">
                                    <stat.icon className="w-8 h-8 text-emerald-300" />
                                </div>
                                <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Contact Actions */}
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.7s' }}>
                        <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            WhatsApp
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center">
                            <Mail className="w-5 h-5 mr-2" />
                            Email Us
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className={`transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.8s' }}>
                        <div className="flex flex-col items-center text-white/60">
                            <span className="text-sm font-medium mb-2">Explore Contact Options</span>
                            <ArrowDown className="w-6 h-6 animate-bounce" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes float-rotate {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-20px) rotate(90deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(180deg);
                    }
                    75% {
                        transform: translateY(-30px) rotate(270deg);
                    }
                }
                
                .animate-float-rotate {
                    animation: float-rotate var(--animation-duration, 10s) ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default ContactsHero;
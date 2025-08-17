import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Navigation, ArrowDown, Sparkles, Award, Building, Car, Zap } from 'lucide-react';

const LocationsHero = () => {
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

    // Floating icon circles data for locations
    const floatingIcons = [
        { icon: MapPin, delay: '0s', duration: '8s', size: 'w-12 h-12', position: 'top-20 left-10' },
        { icon: Building, delay: '2s', duration: '10s', size: 'w-10 h-10', position: 'top-40 right-20' },
        { icon: Car, delay: '4s', duration: '12s', size: 'w-14 h-14', position: 'top-60 left-1/4' },
        { icon: Phone, delay: '1s', duration: '9s', size: 'w-8 h-8', position: 'bottom-40 right-10' },
        { icon: Clock, delay: '3s', duration: '11s', size: 'w-10 h-10', position: 'bottom-60 left-16' },
        { icon: Navigation, delay: '5s', duration: '7s', size: 'w-12 h-12', position: 'top-1/3 right-1/4' },
        { icon: Zap, delay: '6s', duration: '13s', size: 'w-9 h-9', position: 'bottom-1/3 right-1/3' },
        { icon: Award, delay: '2.5s', duration: '10s', size: 'w-11 h-11', position: 'top-1/2 left-8' }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden flex items-center">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>

                {/* Mouse-following gradient */}
                <div
                    className="absolute w-[600px] h-[600px] bg-gradient-radial from-green-400/10 via-teal-400/5 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-1000 ease-out"
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
                            <item.icon className="w-1/2 h-1/2 text-green-300" />
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
                        <Sparkles className="w-5 h-5 text-green-300 mr-3 animate-spin" />
                        <span className="text-base font-semibold">Our Locations</span>
                        <Award className="w-5 h-5 text-yellow-400 ml-3 animate-bounce" />
                    </div>

                    {/* Main Title */}
                    <h1 className={`text-5xl lg:text-7xl font-black text-white leading-tight mb-8 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.2s' }}>
                        <span className="block">Convenient Locations</span>
                        <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                            Across Kenya
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className={`text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.4s' }}>
                        Find the nearest Noble Vet Surgeons clinic to you. We have strategically located
                        facilities to serve you better with quality veterinary care.
                    </p>

                    {/* Stats Row */}
                    <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.6s' }}>
                        {[
                            { icon: MapPin, number: '8+', label: 'Locations' },
                            { icon: Building, number: '3', label: 'Cities' },
                            { icon: Clock, number: '24/7', label: 'Emergency Access' }
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border border-white/30">
                                    <stat.icon className="w-8 h-8 text-green-300" />
                                </div>
                                <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className={`transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ animationDelay: '0.8s' }}>
                        <div className="flex flex-col items-center text-white/60">
                            <span className="text-sm font-medium mb-2">Explore Our Locations</span>
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

export default LocationsHero;
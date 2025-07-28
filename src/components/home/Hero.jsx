import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Phone, Clock, Shield, Star, Sparkles, Award, Stethoscope, Activity, Zap, Users } from 'lucide-react';

const Hero = () => {
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

    // Floating icon circles data for Home Hero
    const floatingIcons = [
        { icon: Stethoscope, delay: '0s', duration: '9s', size: 'w-10 h-10', position: 'top-16 left-8' },
        { icon: Heart, delay: '1.5s', duration: '11s', size: 'w-8 h-8', position: 'top-32 right-16' },
        { icon: Activity, delay: '3s', duration: '8s', size: 'w-12 h-12', position: 'top-52 left-1/4' },
        { icon: Users, delay: '0.5s', duration: '10s', size: 'w-9 h-9', position: 'bottom-32 right-8' },
        { icon: Zap, delay: '2s', duration: '12s', size: 'w-10 h-10', position: 'bottom-48 left-12' },
        { icon: Star, delay: '4s', duration: '9s', size: 'w-8 h-8', position: 'top-1/3 right-1/4' },
        { icon: Shield, delay: '1s', duration: '13s', size: 'w-11 h-11', position: 'bottom-1/4 right-1/3' }
    ];

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '30s' }}></div>

                {/* Mouse-following gradient */}
                <div
                    className="absolute w-80 h-80 bg-gradient-radial from-emerald-400/10 via-teal-400/5 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-1000 ease-out"
                    style={{
                        left: mousePosition.x - 160,
                        top: mousePosition.y - 160,
                    }}
                ></div>
            </div>

            {/* Floating Icon Circles */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingIcons.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute ${item.position} animate-float-rotate opacity-60 hover:opacity-100 transition-opacity duration-300`}
                        style={{
                            animationDelay: item.delay,
                            animationDuration: item.duration
                        }}
                    >
                        <div className={`${item.size} bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/25 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-1/2 h-1/2 text-emerald-200" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            animationDuration: `${8 + Math.random() * 12}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content - Fixed Spacing */}
                    <div className={`space-y-6 transform transition-all duration-1000 ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                            <Sparkles className="w-4 h-4 text-emerald-300 mr-2 animate-spin" />
                            <span className="text-sm font-medium">Kenya's Premier Animal Healthcare</span>
                            <Award className="w-4 h-4 text-yellow-400 ml-2 animate-bounce" />
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            <span className="inline-block animate-fade-in-up">Professional </span>
                            <span className="inline-block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                Animal Care
                            </span>
                            <span className="block text-emerald-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                You Trust
                            </span>
                        </h1>

                        <p className="text-lg text-white/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            Comprehensive veterinary services for pets, livestock, and exotic animals.
                            Serving Nairobi, Kiambu and beyond with 24/7 emergency care and expert compassion.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <button className="group bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 flex items-center justify-center">
                                Book Appointment
                                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                                <Phone className="inline mr-2 w-4 h-4 group-hover:animate-bounce" />
                                Emergency Call
                            </button>
                        </div>

                        {/* Enhanced Stats with rotation */}
                        <div className="flex items-center space-x-6 pt-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                            {[
                                { number: '15+', label: 'Years Experience', icon: Award },
                                { number: '12K+', label: 'Animals Treated', icon: Heart },
                                { number: '98%', label: 'Success Rate', icon: Star }
                            ].map((stat, index) => (
                                <div key={index} className="text-center group cursor-pointer">
                                    <div className="flex items-center justify-center mb-1">
                                        <stat.icon className="w-4 h-4 text-emerald-300 mr-1 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                                        <div className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">{stat.number}</div>
                                    </div>
                                    <div className="text-white/70 text-xs font-medium group-hover:text-white transition-colors duration-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image - With Animated Green Overlay */}
                    <div className={`relative transform transition-all duration-1000 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`} style={{ animationDelay: '0.3s' }}>
                        <div className="relative group">
                            <div className="w-full h-[450px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Professional Veterinary Care"
                                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Animated Green Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/70 via-emerald-600/40 to-emerald-400/20 animate-pulse"></div>

                                {/* Floating green particles overlay */}
                                <div className="absolute inset-0">
                                    {[...Array(15)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute w-2 h-2 bg-emerald-300/60 rounded-full animate-float"
                                            style={{
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                animationDelay: `${Math.random() * 8}s`,
                                                animationDuration: `${6 + Math.random() * 8}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>

                                {/* Animated green wave overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-gradient opacity-60"></div>

                                {/* Breathing green glow effect */}
                                <div className="absolute inset-0 bg-emerald-400/20 animate-pulse opacity-40"></div>
                            </div>

                            {/* Enhanced Floating Info Cards with rotation */}
                            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-xl animate-float hover:shadow-2xl transition-all duration-300 cursor-pointer group/card border border-emerald-100 hover:rotate-2">
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-300">
                                        <Clock className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-gray-900">24/7 Care</div>
                                        <div className="text-emerald-600 font-medium text-xs">Available</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-xl animate-float hover:shadow-2xl transition-all duration-300 cursor-pointer group/card border border-emerald-100 hover:-rotate-2" style={{ animationDelay: '2s' }}>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-300">
                                        <Shield className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-gray-900">Expert Vets</div>
                                        <div className="text-teal-600 font-medium text-xs">Certified</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -right-6 bg-white rounded-xl p-3 shadow-xl animate-float hover:shadow-2xl transition-all duration-300 cursor-pointer group/card border border-emerald-100 hover:rotate-1" style={{ animationDelay: '4s' }}>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-12 transition-transform duration-300">
                                        <Heart className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-gray-900">Caring</div>
                                        <div className="text-pink-600 font-medium text-xs">Love</div>
                                    </div>
                                </div>
                            </div>
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
                        transform: translateY(-15px) rotate(90deg);
                    }
                    50% {
                        transform: translateY(-8px) rotate(180deg);
                    }
                    75% {
                        transform: translateY(-20px) rotate(270deg);
                    }
                }
                
                .animate-float-rotate {
                    animation: float-rotate var(--animation-duration, 10s) ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
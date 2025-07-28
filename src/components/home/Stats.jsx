import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Heart, Star, TrendingUp, Shield } from 'lucide-react';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValues, setAnimatedValues] = useState({});
    const sectionRef = useRef(null);

    const stats = [
        {
            id: 'experience',
            number: 15,
            suffix: '+',
            label: 'Years Experience',
            icon: Award,
            color: 'from-blue-500 to-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            id: 'vets',
            number: 8,
            suffix: '',
            label: 'Expert Veterinarians',
            icon: Users,
            color: 'from-emerald-500 to-emerald-600',
            bgColor: 'bg-emerald-50'
        },
        {
            id: 'animals',
            number: 12000,
            suffix: '+',
            label: 'Animals Treated',
            icon: Heart,
            color: 'from-pink-500 to-pink-600',
            bgColor: 'bg-pink-50'
        },
        {
            id: 'success',
            number: 98,
            suffix: '%',
            label: 'Success Rate',
            icon: Star,
            color: 'from-purple-500 to-purple-600',
            bgColor: 'bg-purple-50'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                    // Start counting animation when component becomes visible
                    setTimeout(() => {
                        animateNumbers();
                    }, 200); // Small delay for better effect
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateNumbers = () => {
        stats.forEach((stat, index) => {
            // Stagger the animation start for each stat
            setTimeout(() => {
                let current = 0;
                const target = stat.number;
                const duration = 2000; // 2 seconds
                const steps = 60; // 60 steps for smooth animation
                const increment = target / steps;
                const stepDuration = duration / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }

                    setAnimatedValues(prev => ({
                        ...prev,
                        [stat.id]: Math.floor(current)
                    }));
                }, stepDuration);
            }, index * 150); // Stagger each number by 150ms
        });
    };

    const formatNumber = (stat) => {
        const value = animatedValues[stat.id] || 0;
        if (stat.id === 'animals' && value > 999) {
            return (value / 1000).toFixed(1) + 'K';
        }
        return value;
    };

    return (
        <section ref={sectionRef} className="py-16 relative overflow-hidden">
            {/* Emerald Green Background with Overlay */}
            <div className="absolute inset-0">
                {/* Veterinary Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Modern Veterinary Background"
                    className="w-full h-full object-cover"
                />

                {/* Emerald Green Gradient Overlay (matching site theme) */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-teal-900/90"></div>

                {/* Light Green Gradient Overlay (like hero) */}
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

                {/* Additional Emerald Effects */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`text-center group cursor-pointer transform transition-all duration-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* Modern Card Container */}
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300 shadow-xl group-hover:scale-105">
                                {/* Icon Container */}
                                <div className="relative mx-auto mb-4">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-white/30 shadow-lg">
                                        <stat.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}></div>
                                </div>

                                {/* Animated Number */}
                                <div className="text-3xl lg:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className={`inline-block drop-shadow-lg transition-all duration-300 ${
                      animatedValues[stat.id] ? 'scale-110' : 'scale-100'
                  }`}>
                    {formatNumber(stat)}{stat.suffix}
                  </span>
                                </div>

                                {/* Label */}
                                <div className="text-white/90 text-sm font-semibold group-hover:text-white transition-colors duration-300 drop-shadow-md">
                                    {stat.label}
                                </div>

                                {/* Animated Progress Line */}
                                <div className="w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mt-3 group-hover:w-16 transition-all duration-500 rounded-full shadow-lg"
                                     style={{
                                         width: isVisible ? '12px' : '0px',
                                         transitionDelay: `${index * 0.2 + 0.5}s`
                                     }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement Badges */}
                <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                        <TrendingUp className="w-5 h-5 text-emerald-300" />
                        <span className="text-white font-semibold">Growing Daily</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-3 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300">
                        <Shield className="w-5 h-5 text-emerald-300" />
                        <span className="text-white font-semibold">Certified Excellence</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Shield, Users, Award, Zap, Globe } from 'lucide-react';

const Values = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    const values = [
        {
            icon: Heart,
            title: "Compassion",
            description: "Every animal deserves love, care, and respect. We treat each patient as if they were our own family.",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-50"
        },
        {
            icon: Shield,
            title: "Excellence",
            description: "We maintain the highest standards in veterinary medicine with continuous learning and advanced technology.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50"
        },
        {
            icon: Users,
            title: "Community",
            description: "Building strong relationships with pet owners and supporting animal welfare across Kenya.",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-emerald-50"
        },
        {
            icon: Award,
            title: "Integrity",
            description: "Honest, transparent communication and ethical practices in everything we do.",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-purple-50"
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Embracing new technologies and methods to provide the best possible care for animals.",
            color: "from-yellow-500 to-orange-500",
            bgColor: "bg-yellow-50"
        },
        {
            icon: Globe,
            title: "Accessibility",
            description: "Making quality veterinary care available to all animals, regardless of location or circumstances.",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = sectionRef.current?.querySelectorAll('.value-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Floating particles */}
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
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold mb-6 border border-white/20">
                        <Heart className="w-5 h-5 mr-2 text-pink-300" />
                        Our Values
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        What Drives Us
                        <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              Every Single Day
            </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Our core values guide every decision we make and every service we provide.
                        They are the foundation of our commitment to exceptional animal care.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`value-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group transform ${
                                visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                                {value.title}
                            </h3>
                            <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {value.description}
                            </p>

                            {/* Hover line */}
                            <div className="w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mt-6 group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
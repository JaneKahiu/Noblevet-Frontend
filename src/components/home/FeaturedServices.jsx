import React, { useState, useEffect, useRef } from 'react';
import { Activity, Shield, Heart, Star, Stethoscope, Clock, ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    const services = [
        {
            icon: Activity,
            title: "Advanced Diagnostics",
            description: "State-of-the-art diagnostic equipment for comprehensive health analysis.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            iconBg: "bg-blue-100",
            hoverColor: "hover:bg-blue-100"
        },
        {
            icon: Shield,
            title: "Vaccination Programs",
            description: "Complete immunization services with customized vaccination schedules.",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-emerald-50",
            iconBg: "bg-emerald-100",
            hoverColor: "hover:bg-emerald-100"
        },
        {
            icon: Heart,
            title: "Pet Boarding",
            description: "Premium boarding facilities with 24/7 monitoring and personalized care.",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-50",
            iconBg: "bg-pink-100",
            hoverColor: "hover:bg-pink-100"
        },
        {
            icon: Star,
            title: "Pet Grooming",
            description: "Professional grooming services to keep your pets healthy and beautiful.",
            color: "from-purple-500 to-indigo-500",
            bgColor: "bg-purple-50",
            iconBg: "bg-purple-100",
            hoverColor: "hover:bg-purple-100"
        },
        {
            icon: Stethoscope,
            title: "Dental Care",
            description: "Complete dental services including cleaning and oral surgery.",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50",
            iconBg: "bg-orange-100",
            hoverColor: "hover:bg-orange-100"
        },
        {
            icon: Clock,
            title: "Emergency Care",
            description: "24/7 emergency services with immediate response capabilities.",
            color: "from-red-500 to-pink-500",
            bgColor: "bg-red-50",
            iconBg: "bg-red-100",
            hoverColor: "hover:bg-red-100"
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
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.service-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium mb-4 hover:bg-emerald-200 transition-colors duration-300 cursor-pointer">
                        <Star className="w-4 h-4 mr-2 animate-pulse" />
                        Our Services
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Complete Animal
                        <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Healthcare Solutions
            </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        From routine check-ups to emergency care, we provide comprehensive veterinary services
                        for all types of animals with cutting-edge technology and compassionate care.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`service-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-500 cursor-pointer border border-gray-100 ${service.hoverColor} ${
                                visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${index * 0.1}s`,
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                            {/* Icon */}
                            <div className="relative mb-4">
                                <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                    <service.icon className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 group/btn flex items-center text-sm">
                                Learn More
                                <ArrowRight className="inline ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </button>

                            {/* Floating effect indicator */}
                            <div className="absolute bottom-3 right-3 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto">
                        View All Services
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
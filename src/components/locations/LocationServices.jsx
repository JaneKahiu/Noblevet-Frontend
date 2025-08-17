import React, { useState, useEffect } from 'react';
import { MapPin, Stethoscope, Car, Clock, Shield, Heart, Zap, Users } from 'lucide-react';

const LocationServices = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('location-services-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: Car,
            title: 'Mobile Veterinary Services',
            description: 'Bringing professional veterinary care directly to your home or farm.',
            features: [
                'Home visits for routine care',
                'Farm animal health checks',
                'Emergency mobile response',
                'Vaccination programs',
                'Health consultations'
            ],
            coverage: 'Available within 50km radius of each location',
            availability: 'Monday - Saturday, 8 AM - 6 PM',
            color: 'from-blue-500 to-indigo-600'
        },
        {
            icon: Clock,
            title: '24/7 Emergency Services',
            description: 'Round-the-clock emergency care at our main facilities.',
            features: [
                'Emergency surgery capabilities',
                'Critical care monitoring',
                'Trauma treatment',
                'Poison control assistance',
                'Emergency diagnostics'
            ],
            coverage: 'Nairobi Central & Mombasa locations',
            availability: '24 hours, 7 days a week',
            color: 'from-red-500 to-pink-600'
        },
        {
            icon: Shield,
            title: 'Preventive Care Programs',
            description: 'Comprehensive wellness programs to keep your pets healthy.',
            features: [
                'Annual health packages',
                'Vaccination schedules',
                'Parasite prevention',
                'Dental care programs',
                'Senior pet care'
            ],
            coverage: 'All locations',
            availability: 'Available during regular hours',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: Heart,
            title: 'Specialized Care',
            description: 'Expert care for specific conditions and specialized treatments.',
            features: [
                'Cardiology services',
                'Dermatology treatments',
                'Orthopedic surgery',
                'Exotic pet care',
                'Wildlife rehabilitation'
            ],
            coverage: 'Select locations with specialists',
            availability: 'By appointment only',
            color: 'from-purple-500 to-violet-600'
        }
    ];

    const locationCapabilities = [
        {
            location: 'Nairobi Central',
            capabilities: ['Full Surgery Suite', '24/7 Emergency', 'Laboratory', 'Imaging', 'ICU'],
            specialties: ['Cardiology', 'Orthopedics', 'Emergency Medicine'],
            level: 'Level 3 Facility'
        },
        {
            location: 'Westlands',
            capabilities: ['Minor Surgery', 'Pharmacy', 'Grooming', 'Boarding'],
            specialties: ['General Practice', 'Preventive Care', 'Grooming'],
            level: 'Level 2 Facility'
        },
        {
            location: 'Karen',
            capabilities: ['Wildlife Care', 'Rehabilitation', 'Exotic Pets', 'General Surgery'],
            specialties: ['Wildlife Medicine', 'Exotic Animals', 'Rehabilitation'],
            level: 'Level 2+ Facility'
        },
        {
            location: 'Mombasa',
            capabilities: ['Full Surgery Suite', '24/7 Emergency', 'Marine Animals', 'Laboratory'],
            specialties: ['Marine Animal Care', 'Emergency Medicine', 'General Surgery'],
            level: 'Level 3 Facility'
        },
        {
            location: 'Kisumu',
            capabilities: ['Livestock Care', 'Mobile Services', 'Vaccination Programs'],
            specialties: ['Large Animal Medicine', 'Rural Veterinary Services'],
            level: 'Level 2 Facility'
        }
    ];

    return (
        <section id="location-services-section" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white font-semibold mb-4 border border-white/20">
                        <Stethoscope className="w-5 h-5 mr-2 text-purple-300" />
                        Location-Based Services
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        Specialized Services
                        <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                            At Each Location
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Each of our locations offers unique services and capabilities designed to meet
                        the specific needs of the communities we serve.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-white/70 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                {service.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center text-white/60">
                                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Service Details */}
                            <div className="space-y-3 pt-4 border-t border-white/10">
                                <div className="flex items-start">
                                    <MapPin className="w-4 h-4 text-white/40 mr-3 mt-0.5" />
                                    <div>
                                        <span className="text-white/40 text-sm">Coverage: </span>
                                        <span className="text-white/70 text-sm">{service.coverage}</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Clock className="w-4 h-4 text-white/40 mr-3 mt-0.5" />
                                    <div>
                                        <span className="text-white/40 text-sm">Available: </span>
                                        <span className="text-white/70 text-sm">{service.availability}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Location Capabilities */}
                <div className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <h3 className="text-3xl font-bold text-white text-center mb-8">
                        Facility Capabilities by Location
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {locationCapabilities.map((location, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                {/* Location Header */}
                                <div className="text-center mb-6">
                                    <h4 className="text-lg font-bold text-white mb-2">{location.location}</h4>
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {location.level}
                                    </span>
                                </div>

                                {/* Capabilities */}
                                <div className="mb-6">
                                    <h5 className="text-white/80 font-semibold text-sm mb-3">Capabilities</h5>
                                    <div className="space-y-2">
                                        {location.capabilities.map((capability, capIndex) => (
                                            <div key={capIndex} className="flex items-center text-white/60 text-sm">
                                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                                                {capability}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Specialties */}
                                <div>
                                    <h5 className="text-white/80 font-semibold text-sm mb-3">Specialties</h5>
                                    <div className="space-y-2">
                                        {location.specialties.map((specialty, specIndex) => (
                                            <div key={specIndex} className="flex items-center text-white/60 text-sm">
                                                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>
                                                {specialty}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '1s' }}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Need Help Choosing the Right Location?
                        </h3>
                        <p className="text-white/70 mb-8 text-lg">
                            Our team can help you find the location with the specific services and expertise your pet needs.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                Talk to Our Team
                            </button>
                            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                View All Locations
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationServices;
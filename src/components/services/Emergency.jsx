import React, { useState, useEffect } from 'react';
import { Phone, Clock, AlertTriangle, Activity, Zap, Shield, MapPin, ArrowRight } from 'lucide-react';

const Emergency = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('emergency-section');
        if (element) observer.observe(element);

        // Update time every second
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            observer.disconnect();
            clearInterval(timer);
        };
    }, []);

    const emergencyTypes = [
        {
            icon: AlertTriangle,
            title: 'Trauma & Injuries',
            description: 'Accidents, cuts, fractures, and physical injuries requiring immediate attention.',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: Activity,
            title: 'Respiratory Distress',
            description: 'Difficulty breathing, choking, or any breathing-related emergencies.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: Zap,
            title: 'Poisoning',
            description: 'Suspected ingestion of toxic substances or poisonous materials.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Critical Illness',
            description: 'Sudden onset of severe symptoms or deteriorating health conditions.',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const emergencySteps = [
        {
            step: '1',
            title: 'Stay Calm',
            description: 'Keep yourself and your pet as calm as possible'
        },
        {
            step: '2',
            title: 'Call Us',
            description: 'Contact our emergency line immediately'
        },
        {
            step: '3',
            title: 'First Aid',
            description: 'Follow our phone guidance for immediate care'
        },
        {
            step: '4',
            title: 'Transport',
            description: 'Safely bring your pet to our emergency facility'
        }
    ];

    return (
        <section id="emergency-section" className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-red-100/20 backdrop-blur-sm rounded-full px-6 py-2 text-red-200 font-semibold mb-4 border border-red-300/30">
                        <AlertTriangle className="w-5 h-5 mr-2 animate-pulse" />
                        Emergency Care
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        24/7 Emergency
                        <span className="block bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
                            Veterinary Services
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        When your pet faces a medical emergency, every second counts. Our dedicated emergency
                        team is available around the clock to provide immediate, life-saving care.
                    </p>
                </div>

                {/* Emergency Contact Card */}
                <div className={`max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.2s' }}>
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 shadow-2xl border border-red-400/30">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                    <Phone className="w-6 h-6 mr-3 animate-pulse" />
                                    Emergency Hotline
                                </h3>
                                <div className="text-4xl font-black text-white mb-4">
                                    +254 700 123 456
                                </div>
                                <p className="text-red-100 mb-6">
                                    Available 24/7 for immediate emergency assistance. 
                                    Our emergency veterinarians are standing by to help.
                                </p>
                                <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 flex items-center">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now
                                </button>
                            </div>
                            
                            <div className="text-center">
                                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                                    <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                                    <h4 className="text-white font-bold text-lg mb-2">Current Time</h4>
                                    <div className="text-2xl font-mono text-white">
                                        {currentTime.toLocaleTimeString()}
                                    </div>
                                    <div className="text-red-200 text-sm mt-2">
                                        We're Open - Emergency Services Available
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Emergency Types */}
                <div className={`mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.4s' }}>
                    <h3 className="text-3xl font-bold text-white text-center mb-8">
                        Common Emergency Situations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {emergencyTypes.map((emergency, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-r ${emergency.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                                    <emergency.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-3 text-center">
                                    {emergency.title}
                                </h4>
                                <p className="text-white/70 text-sm text-center leading-relaxed">
                                    {emergency.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Emergency Steps */}
                <div className={`mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.6s' }}>
                    <h3 className="text-3xl font-bold text-white text-center mb-8">
                        What to Do in an Emergency
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {emergencySteps.map((step, index) => (
                                <div key={index} className="relative">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                                            {step.step}
                                        </div>
                                        <h4 className="text-white font-bold mb-2">{step.title}</h4>
                                        <p className="text-white/70 text-sm">{step.description}</p>
                                    </div>
                                    
                                    {/* Arrow for desktop */}
                                    {index < emergencySteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                                            <ArrowRight className="w-6 h-6 text-white/50" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Location & Additional Info */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    {/* Location */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="flex items-center mb-6">
                            <MapPin className="w-6 h-6 text-red-300 mr-3" />
                            <h4 className="text-white font-bold text-xl">Emergency Location</h4>
                        </div>
                        <div className="space-y-4 text-white/80">
                            <div>
                                <strong className="text-white">Main Emergency Center:</strong>
                                <br />
                                123 Veterinary Street, Nairobi
                            </div>
                            <div>
                                <strong className="text-white">GPS Coordinates:</strong>
                                <br />
                                -1.2921° S, 36.8219° E
                            </div>
                            <div>
                                <strong className="text-white">Parking:</strong>
                                <br />
                                Free emergency parking available 24/7
                            </div>
                        </div>
                        <button className="mt-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                            Get Directions
                        </button>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="flex items-center mb-6">
                            <Shield className="w-6 h-6 text-red-300 mr-3" />
                            <h4 className="text-white font-bold text-xl">Important Notes</h4>
                        </div>
                        <div className="space-y-4 text-white/80">
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                                <span>Bring your pet's medical records if available</span>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                                <span>Have a list of any medications your pet is taking</span>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                                <span>Emergency fees apply after regular hours</span>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                                <span>Payment required before treatment begins</span>
                            </div>
                            <div className="flex items-start">
                                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2"></div>
                                <span>Call ahead when possible for faster service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;
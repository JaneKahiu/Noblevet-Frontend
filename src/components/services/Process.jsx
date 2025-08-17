import React, { useState, useEffect } from 'react';
import { Calendar, ClipboardCheck, Stethoscope, Heart, ArrowRight, Phone, Clock, MapPin } from 'lucide-react';

const Process = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('process-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % 4);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    const steps = [
        {
            icon: Calendar,
            title: 'Book Appointment',
            description: 'Schedule your visit through our easy booking system or call us directly.',
            details: ['Online booking available 24/7', 'Same-day appointments for emergencies', 'Reminder notifications sent'],
            color: 'from-blue-500 to-indigo-600'
        },
        {
            icon: ClipboardCheck,
            title: 'Health Assessment',
            description: 'Our team conducts a thorough examination of your pet\'s health.',
            details: ['Comprehensive physical examination', 'Medical history review', 'Symptom evaluation'],
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: Stethoscope,
            title: 'Treatment Plan',
            description: 'We develop a personalized treatment plan based on your pet\'s needs.',
            details: ['Customized treatment approach', 'Clear explanation of procedures', 'Cost-effective solutions'],
            color: 'from-purple-500 to-violet-600'
        },
        {
            icon: Heart,
            title: 'Follow-up Care',
            description: 'Continued support and monitoring to ensure your pet\'s complete recovery.',
            details: ['Regular check-ups scheduled', 'Progress monitoring', '24/7 support for concerns'],
            color: 'from-pink-500 to-rose-600'
        }
    ];

    return (
        <section id="process-section" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white font-semibold mb-4 border border-white/20">
                        <Heart className="w-5 h-5 mr-2 text-pink-300" />
                        Our Process
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        How We Care for
                        <span className="block bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent">
                            Your Beloved Pets
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Our streamlined process ensures your pet receives the best care from the moment you contact us
                        until they're healthy and happy again.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                        {/* Connection Lines for Desktop */}
                        <div className="hidden lg:block absolute top-20 left-0 right-0">
                            <div className="flex justify-between items-center px-20">
                                {[0, 1, 2].map((index) => (
                                    <div key={index} className="flex-1 flex items-center">
                                        <div className={`h-1 flex-1 transition-all duration-1000 ${
                                            activeStep > index ? 'bg-gradient-to-r from-pink-400 to-violet-400' : 'bg-white/20'
                                        }`}></div>
                                        <ArrowRight className={`w-6 h-6 mx-2 transition-colors duration-1000 ${
                                            activeStep > index ? 'text-pink-400' : 'text-white/40'
                                        }`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Steps */}
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative transform transition-all duration-1000 ${
                                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                                } ${activeStep === index ? 'scale-105' : 'scale-100'}`}
                                style={{ transitionDelay: `${index * 0.2}s` }}
                            >
                                {/* Step Card */}
                                <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 h-full ${
                                    activeStep === index ? 'ring-2 ring-pink-400 shadow-2xl shadow-pink-400/20' : ''
                                }`}>
                                    {/* Step Number */}
                                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0`}>
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-4 text-center lg:text-left">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/70 mb-6 leading-relaxed text-center lg:text-left">
                                        {step.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-3">
                                        {step.details.map((detail, detailIndex) => (
                                            <div key={detailIndex} className="flex items-start text-sm text-white/60">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-6">
                                        <ArrowRight className={`w-6 h-6 transition-colors duration-1000 ${
                                            activeStep > index ? 'text-pink-400' : 'text-white/40'
                                        }`} />
                                    </div>
                                )}
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
                            Ready to Start Your Pet's Care Journey?
                        </h3>
                        <p className="text-white/70 mb-8 text-lg">
                            Book an appointment today and experience our comprehensive care process.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Online
                            </button>
                            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 text-white/60">
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span className="text-sm">Open 24/7 for Emergencies</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">Multiple Locations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
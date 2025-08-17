import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Calendar, MapPin, Clock, Headphones, Video } from 'lucide-react';

const ContactMethods = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('contact-methods-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our veterinary team for immediate assistance and consultations.',
            features: [
                'Immediate assistance for emergencies',
                'Professional veterinary advice',
                'Appointment scheduling',
                'Follow-up consultations',
                'Insurance claim support'
            ],
            availability: '24/7 Emergency | 7 AM - 8 PM Regular',
            responseTime: 'Immediate',
            bestFor: 'Emergencies, urgent questions, appointment booking',
            contactInfo: {
                main: '+254 700 123 456',
                emergency: '+254 700 123 999',
                appointments: '+254 700 123 457'
            },
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp Chat',
            description: 'Quick messaging service for non-emergency inquiries and appointment updates.',
            features: [
                'Quick responses to general questions',
                'Appointment reminders',
                'Photo sharing for consultations',
                'Prescription refill requests',
                'General pet care tips'
            ],
            availability: '8 AM - 8 PM Daily',
            responseTime: 'Within 30 minutes',
            bestFor: 'Quick questions, appointment updates, photo consultations',
            contactInfo: {
                general: '+254 700 123 458',
                appointments: '+254 700 123 459'
            },
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Comprehensive email support for detailed inquiries and documentation.',
            features: [
                'Detailed medical consultations',
                'Document sharing and forms',
                'Insurance correspondence',
                'Billing and payment inquiries',
                'Detailed treatment plans'
            ],
            availability: 'Monitored 24/7',
            responseTime: 'Within 2-4 hours',
            bestFor: 'Detailed inquiries, document sharing, billing questions',
            contactInfo: {
                general: 'info@noblevetkenya.com',
                medical: 'medical@noblevetkenya.com',
                billing: 'billing@noblevetkenya.com'
            },
            color: 'from-purple-500 to-violet-600'
        },
        {
            icon: Video,
            title: 'Video Consultations',
            description: 'Remote veterinary consultations via secure video calling platform.',
            features: [
                'Face-to-face consultations from home',
                'Visual health assessments',
                'Follow-up appointments',
                'Behavioral consultations',
                'Second opinion services'
            ],
            availability: 'Mon-Fri: 9 AM - 6 PM',
            responseTime: 'Scheduled appointments',
            bestFor: 'Remote consultations, follow-ups, behavioral advice',
            contactInfo: {
                booking: 'telemedicine@noblevetkenya.com',
                support: '+254 700 123 461'
            },
            color: 'from-orange-500 to-red-600'
        },
        {
            icon: Calendar,
            title: 'Online Booking',
            description: 'Convenient 24/7 online appointment scheduling system.',
            features: [
                'Real-time availability checking',
                'Appointment reminders',
                'Service selection',
                'Preferred veterinarian choice',
                'Rescheduling capabilities'
            ],
            availability: '24/7 Online Portal',
            responseTime: 'Instant confirmation',
            bestFor: 'Scheduling regular appointments, check-ups, routine services',
            contactInfo: {
                portal: 'www.noblevetkenya.com/book',
                support: 'booking@noblevetkenya.com'
            },
            color: 'from-pink-500 to-rose-600'
        },
        {
            icon: MapPin,
            title: 'Walk-in Services',
            description: 'Visit any of our convenient locations for immediate assistance.',
            features: [
                'No appointment necessary',
                'Emergency walk-ins accepted',
                'Quick consultations',
                'Prescription pickups',
                'Pet supply purchases'
            ],
            availability: 'During clinic hours',
            responseTime: 'Based on queue',
            bestFor: 'Emergency situations, quick questions, prescription pickups',
            contactInfo: {
                locations: '8 locations across Kenya',
                nearest: 'Find nearest clinic'
            },
            color: 'from-indigo-500 to-blue-600'
        }
    ];

    return (
        <section id="contact-methods-section" className="py-20 bg-gradient-to-br from-slate-50 to-violet-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-violet-100 rounded-full px-6 py-2 text-violet-700 font-semibold mb-4">
                        <Headphones className="w-5 h-5 mr-2" />
                        Contact Methods
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Choose Your Preferred
                        <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                            Communication Method
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We offer multiple ways to connect with our team. Choose the method that works
                        best for your situation and get the support you need.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            } ${selectedMethod === index ? 'ring-2 ring-violet-400 shadow-violet-200' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedMethod(index)}
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${method.color} p-6 text-white`}>
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                                    <method.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{method.description}</p>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Key Info */}
                                <div className="grid grid-cols-1 gap-3 mb-6">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600 font-medium flex items-center">
                                            <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                            Availability:
                                        </span>
                                        <span className="text-gray-900 font-semibold text-right">{method.availability}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-600 font-medium">Response Time:</span>
                                        <span className="text-gray-900 font-semibold">{method.responseTime}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">What we can help with:</h4>
                                    <div className="space-y-2">
                                        {method.features.slice(0, 3).map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${method.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                        {method.features.length > 3 && (
                                            <div className="text-sm text-gray-500 mt-2">
                                                +{method.features.length - 3} more services
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Best For */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Best for:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{method.bestFor}</p>
                                </div>

                                {/* Contact Info */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information:</h4>
                                    <div className="space-y-2">
                                        {Object.entries(method.contactInfo).map(([key, value], contactIndex) => (
                                            <div key={contactIndex} className="flex justify-between items-center text-sm">
                                                <span className="text-gray-600 capitalize">{key}:</span>
                                                <span className="text-gray-900 font-medium text-right">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className={`w-full bg-gradient-to-r ${method.color} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                                    Use This Method
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Emergency Banner */}
                <div className={`mt-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Phone className="w-8 h-8 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Pet Emergency?</h3>
                            <p className="text-red-100 mb-6 text-lg">
                                For life-threatening emergencies, don't wait. Call our emergency hotline immediately
                                for immediate assistance and guidance.
                            </p>
                            
                            <div className="text-4xl font-black mb-6">+254 700 123 999</div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
                                    Call Emergency Now
                                </button>
                                <div className="text-red-200 text-sm">
                                    Available 24/7 at Nairobi Central & Mombasa locations
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMethods;
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Navigation, Car } from 'lucide-react';

const ContactInfo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedContactMethod, setSelectedContactMethod] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('contact-info-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const contactMethods = [
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Speak directly with our team for immediate assistance',
            action: 'Call Now',
            details: [
                { label: 'Main Line', value: '+254 700 123 456' },
                { label: 'Emergency', value: '+254 700 123 999' },
                { label: 'Appointments', value: '+254 700 123 457' }
            ],
            availability: '24/7 Emergency | 7 AM - 8 PM Regular',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            description: 'Quick messaging for non-emergency inquiries',
            action: 'Start Chat',
            details: [
                { label: 'General Inquiries', value: '+254 700 123 458' },
                { label: 'Appointment Booking', value: '+254 700 123 459' }
            ],
            availability: '8 AM - 8 PM Daily',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: Mail,
            title: 'Email',
            description: 'Send detailed inquiries and receive comprehensive responses',
            action: 'Send Email',
            details: [
                { label: 'General', value: 'info@noblevetkenya.com' },
                { label: 'Appointments', value: 'appointments@noblevetkenya.com' },
                { label: 'Emergency', value: 'emergency@noblevetkenya.com' }
            ],
            availability: 'Response within 2-4 hours',
            color: 'from-purple-500 to-pink-600'
        },
        {
            icon: Calendar,
            title: 'Online Booking',
            description: 'Schedule appointments at your convenience',
            action: 'Book Appointment',
            details: [
                { label: 'Regular Appointments', value: 'Available 24/7' },
                { label: 'Emergency Booking', value: 'Call for immediate' }
            ],
            availability: 'Online portal available 24/7',
            color: 'from-orange-500 to-red-600'
        }
    ];

    const transportOptions = [
        {
            icon: Car,
            title: 'Drive to Our Clinic',
            description: 'Free parking available at all locations',
            time: 'Immediate access during operating hours'
        },
        {
            icon: Navigation,
            title: 'Mobile Service',
            description: 'We come to you for certain services',
            time: 'Schedule 24 hours in advance'
        },
        {
            icon: Phone,
            title: 'Emergency Transport',
            description: 'Emergency pet ambulance service',
            time: 'Available for critical cases'
        }
    ];

    const operatingHours = [
        { location: 'Nairobi Central', hours: 'Mon-Fri: 7:00 AM - 8:00 PM | Weekends: 8:00 AM - 6:00 PM', emergency: true },
        { location: 'Westlands', hours: 'Mon-Fri: 8:00 AM - 7:00 PM | Weekends: 9:00 AM - 5:00 PM', emergency: false },
        { location: 'Karen', hours: 'Mon-Fri: 8:00 AM - 6:00 PM | Weekends: 9:00 AM - 4:00 PM', emergency: false },
        { location: 'Mombasa', hours: 'Mon-Fri: 7:30 AM - 7:30 PM | Weekends: 8:30 AM - 5:30 PM', emergency: true },
        { location: 'Kisumu', hours: 'Mon-Fri: 8:00 AM - 6:00 PM | Weekends: 9:00 AM - 4:00 PM', emergency: false }
    ];

    return (
        <section id="contact-info-section" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-emerald-100 rounded-full px-6 py-2 text-emerald-700 font-semibold mb-4">
                        <Phone className="w-5 h-5 mr-2" />
                        Get in Touch
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Multiple Ways to
                        <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Reach Us
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Choose the most convenient way to contact us. We're here to help with
                        appointments, emergencies, and all your pet care questions.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            } ${selectedContactMethod === index ? 'ring-2 ring-emerald-400' : ''}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedContactMethod(index)}
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${method.color} rounded-t-2xl p-6 text-white`}>
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                    <method.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                                <p className="text-white/80 text-sm">{method.description}</p>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Contact Details */}
                                <div className="space-y-3 mb-6">
                                    {method.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600 font-medium">{detail.label}:</span>
                                            <span className="text-gray-900 font-semibold">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Availability */}
                                <div className="mb-6">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                                        {method.availability}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className={`w-full bg-gradient-to-r ${method.color} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}>
                                    {method.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Operating Hours */}
                <div className={`mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.6s' }}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Operating Hours by Location
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {operatingHours.map((location, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2">{location.location}</h4>
                                        <div className="text-sm text-gray-600 leading-relaxed">
                                            {location.hours}
                                        </div>
                                        {location.emergency && (
                                            <div className="mt-2 inline-flex items-center bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse"></div>
                                                24/7 Emergency
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Transportation Options */}
                <div className={`mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                        Getting to Our Clinics
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {transportOptions.map((option, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <option.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                                <div className="text-emerald-600 text-sm font-medium">{option.time}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Emergency Contact */}
                <div className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '1s' }}>
                    <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Phone className="w-8 h-8 animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
                            <p className="text-red-100 mb-6">
                                For life-threatening emergencies, call our 24/7 emergency hotline immediately.
                                Do not delay critical care for your pet.
                            </p>
                            
                            <div className="text-4xl font-black mb-6">+254 700 123 999</div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105">
                                    Call Emergency Line
                                </button>
                                <div className="text-red-200 text-sm">
                                    Available 24/7 at Nairobi Central & Mombasa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
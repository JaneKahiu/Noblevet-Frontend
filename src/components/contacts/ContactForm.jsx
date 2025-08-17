import React, { useState, useEffect } from 'react';
import { Send, User, Mail, Phone, MessageCircle, Calendar, FileText, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        petName: '',
        inquiryType: '',
        urgency: '',
        location: '',
        preferredContact: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('contact-form-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const inquiryTypes = [
        'General Information',
        'Appointment Booking',
        'Emergency Consultation',
        'Medical Question',
        'Billing Inquiry',
        'Service Feedback',
        'Insurance Claims',
        'Other'
    ];

    const urgencyLevels = [
        { value: 'low', label: 'Low - General inquiry', color: 'text-green-600' },
        { value: 'medium', label: 'Medium - Within 24 hours', color: 'text-yellow-600' },
        { value: 'high', label: 'High - Same day response', color: 'text-orange-600' },
        { value: 'urgent', label: 'Urgent - Immediate attention', color: 'text-red-600' }
    ];

    const locations = [
        'Nairobi Central',
        'Nairobi Westlands',
        'Nairobi Karen',
        'Mombasa',
        'Kisumu',
        'No preference'
    ];

    const contactPreferences = [
        { value: 'phone', label: 'Phone Call', icon: Phone },
        { value: 'email', label: 'Email', icon: Mail },
        { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
        { value: 'any', label: 'Any Method', icon: MessageCircle }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        
        // Reset form or show success message
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            petName: '',
            inquiryType: '',
            urgency: '',
            location: '',
            preferredContact: '',
            message: ''
        });
    };

    return (
        <section id="contact-form-section" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white font-semibold mb-4 border border-white/20">
                        <Send className="w-5 h-5 mr-2 text-purple-300" />
                        Contact Form
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                        Send Us a
                        <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                            Detailed Message
                        </span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Fill out the form below with your inquiry details. The more information you provide,
                        the better we can assist you and your pet.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Form */}
                        <div className={`lg:col-span-2 transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`} style={{ transitionDelay: '0.2s' }}>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <User className="w-4 h-4 inline mr-2" />
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <FileText className="w-4 h-4 inline mr-2" />
                                                Pet's Name
                                            </label>
                                            <input
                                                type="text"
                                                name="petName"
                                                value={formData.petName}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                                placeholder="Enter your pet's name"
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <Mail className="w-4 h-4 inline mr-2" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <Phone className="w-4 h-4 inline mr-2" />
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                                placeholder="+254 700 000 000"
                                            />
                                        </div>
                                    </div>

                                    {/* Inquiry Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <FileText className="w-4 h-4 inline mr-2" />
                                                Inquiry Type *
                                            </label>
                                            <select
                                                name="inquiryType"
                                                value={formData.inquiryType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                            >
                                                <option value="" className="text-gray-900">Select inquiry type</option>
                                                {inquiryTypes.map((type, index) => (
                                                    <option key={index} value={type} className="text-gray-900">{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <Clock className="w-4 h-4 inline mr-2" />
                                                Urgency Level *
                                            </label>
                                            <select
                                                name="urgency"
                                                value={formData.urgency}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                            >
                                                <option value="" className="text-gray-900">Select urgency</option>
                                                {urgencyLevels.map((level, index) => (
                                                    <option key={index} value={level.value} className="text-gray-900">{level.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Location and Preference */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <MapPin className="w-4 h-4 inline mr-2" />
                                                Preferred Location
                                            </label>
                                            <select
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                            >
                                                <option value="" className="text-gray-900">Select location</option>
                                                {locations.map((location, index) => (
                                                    <option key={index} value={location} className="text-gray-900">{location}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-white font-semibold mb-2">
                                                <MessageCircle className="w-4 h-4 inline mr-2" />
                                                Preferred Contact Method
                                            </label>
                                            <select
                                                name="preferredContact"
                                                value={formData.preferredContact}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                            >
                                                <option value="" className="text-gray-900">Select method</option>
                                                {contactPreferences.map((pref, index) => (
                                                    <option key={index} value={pref.value} className="text-gray-900">{pref.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-white font-semibold mb-2">
                                            <MessageCircle className="w-4 h-4 inline mr-2" />
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
                                            placeholder="Please provide details about your inquiry, your pet's condition, symptoms, or any specific questions you have..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Side Information */}
                        <div className={`transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`} style={{ transitionDelay: '0.4s' }}>
                            <div className="space-y-6">
                                {/* Response Times */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">Expected Response Times</h3>
                                    <div className="space-y-3">
                                        {urgencyLevels.map((level, index) => (
                                            <div key={index} className="flex items-center justify-between">
                                                <span className={`text-sm font-medium ${level.color}`}>
                                                    {level.label.split(' - ')[0]}
                                                </span>
                                                <span className="text-white/70 text-sm">
                                                    {level.value === 'low' ? '24-48 hrs' :
                                                     level.value === 'medium' ? '12-24 hrs' :
                                                     level.value === 'high' ? '2-6 hrs' : 'Within 1 hr'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Preferences */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">Contact Methods</h3>
                                    <div className="space-y-3">
                                        {contactPreferences.map((pref, index) => (
                                            <div key={index} className="flex items-center text-white/80">
                                                <pref.icon className="w-4 h-4 mr-3 text-purple-300" />
                                                <span className="text-sm">{pref.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Help */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                                    <p className="text-white/70 text-sm mb-4">
                                        For emergencies or urgent matters, don't wait for a form response.
                                    </p>
                                    <div className="space-y-3">
                                        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                                            Emergency: +254 700 123 999
                                        </button>
                                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                                            WhatsApp: +254 700 123 458
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
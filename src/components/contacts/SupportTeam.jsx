import React, { useState, useEffect } from 'react';
import { Users, Phone, Mail, MessageCircle, Clock, Star, Award, Heart } from 'lucide-react';

const SupportTeam = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTeamMember, setActiveTeamMember] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('support-team-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        {
            name: 'Dr. Sarah Kimani',
            role: 'Chief Veterinarian & Support Lead',
            specialization: 'Emergency Medicine, Customer Relations',
            location: 'Nairobi Central',
            experience: '12 years',
            languages: ['English', 'Swahili', 'Kikuyu'],
            availability: '24/7 Emergency Consultation',
            image: '/api/placeholder/200/200',
            bio: 'Dr. Kimani leads our customer support initiatives and emergency response team. She believes in clear communication and compassionate care.',
            contactMethods: ['Phone', 'Email', 'WhatsApp'],
            rating: 4.9,
            reviews: 245,
            color: 'from-blue-500 to-indigo-600'
        },
        {
            name: 'Mary Wanjiku',
            role: 'Customer Service Manager',
            specialization: 'Appointment Coordination, General Inquiries',
            location: 'All Locations',
            experience: '8 years',
            languages: ['English', 'Swahili'],
            availability: 'Mon-Fri: 7 AM - 8 PM, Weekends: 8 AM - 6 PM',
            image: '/api/placeholder/200/200',
            bio: 'Mary coordinates all customer service activities across our locations. She ensures every client receives personalized attention.',
            contactMethods: ['Phone', 'Email', 'WhatsApp', 'In-Person'],
            rating: 4.8,
            reviews: 189,
            color: 'from-green-500 to-emerald-600'
        },
        {
            name: 'James Ochieng',
            role: 'Technical Support Specialist',
            specialization: 'Online Booking, Digital Services',
            location: 'Remote Support',
            experience: '5 years',
            languages: ['English', 'Swahili', 'Luo'],
            availability: '24/7 Online Support',
            image: '/api/placeholder/200/200',
            bio: 'James helps clients navigate our digital platforms and ensures smooth online experiences for all our services.',
            contactMethods: ['Email', 'WhatsApp', 'Live Chat'],
            rating: 4.7,
            reviews: 156,
            color: 'from-purple-500 to-violet-600'
        },
        {
            name: 'Dr. Fatuma Hassan',
            role: 'Consultation Coordinator',
            specialization: 'Telemedicine, Follow-up Care',
            location: 'Mombasa',
            experience: '10 years',
            languages: ['English', 'Swahili', 'Arabic'],
            availability: 'Mon-Sat: 8 AM - 7 PM',
            image: '/api/placeholder/200/200',
            bio: 'Dr. Hassan specializes in remote consultations and ensuring continuity of care for all our patients.',
            contactMethods: ['Video Call', 'Phone', 'Email'],
            rating: 4.9,
            reviews: 198,
            color: 'from-pink-500 to-rose-600'
        }
    ];

    const supportStats = [
        { icon: Users, number: '15+', label: 'Support Team Members', color: 'text-blue-600' },
        { icon: Clock, number: '< 2hrs', label: 'Average Response Time', color: 'text-green-600' },
        { icon: Star, number: '4.8/5', label: 'Customer Satisfaction', color: 'text-yellow-600' },
        { icon: Phone, number: '24/7', label: 'Emergency Support', color: 'text-red-600' }
    ];

    const supportChannels = [
        {
            icon: Phone,
            title: 'Phone Support',
            description: 'Direct access to our support team',
            availability: '24/7 Emergency | Regular hours for general inquiries',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp Support',
            description: 'Quick messaging for immediate help',
            availability: '8 AM - 8 PM Daily',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Detailed assistance and documentation',
            availability: 'Response within 2-4 hours',
            color: 'from-purple-500 to-violet-600'
        }
    ];

    return (
        <section id="support-team-section" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 text-blue-700 font-semibold mb-4">
                        <Users className="w-5 h-5 mr-2" />
                        Our Support Team
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Meet the People
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Behind Our Service
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our dedicated support team is here to ensure you and your pet receive the best
                        possible care and assistance throughout your journey with Noble Vet Surgeons.
                    </p>
                </div>

                {/* Support Stats */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.2s' }}>
                    {supportStats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className={`w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                                <stat.icon className={`w-7 h-7 ${stat.color}`} />
                            </div>
                            <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team Members */}
                <div className={`mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.4s' }}>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Key Support Team Members
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                                    activeTeamMember === index ? 'ring-2 ring-blue-400' : ''
                                }`}
                                onClick={() => setActiveTeamMember(index)}
                            >
                                {/* Image Header */}
                                <div className={`h-48 bg-gradient-to-r ${member.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                        <Star className="w-4 h-4 text-yellow-300 mr-1" />
                                        <span className="text-white text-sm font-medium">{member.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                                        <div className="text-white/80 text-sm">{member.role}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Basic Info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Location:</span>
                                            <span className="text-gray-900 font-medium">{member.location}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-600">Experience:</span>
                                            <span className="text-gray-900 font-medium">{member.experience}</span>
                                        </div>
                                    </div>

                                    {/* Specialization */}
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-900 mb-2">Specialization:</h5>
                                        <p className="text-sm text-gray-600">{member.specialization}</p>
                                    </div>

                                    {/* Languages */}
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-900 mb-2">Languages:</h5>
                                        <div className="flex flex-wrap gap-1">
                                            {member.languages.map((lang, langIndex) => (
                                                <span key={langIndex} className={`bg-gradient-to-r ${member.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="mb-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                            {member.availability}
                                        </div>
                                    </div>

                                    {/* Contact Methods */}
                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-900 mb-2">Available via:</h5>
                                        <div className="flex flex-wrap gap-1">
                                            {member.contactMethods.map((method, methodIndex) => (
                                                <span key={methodIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                                                    {method}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Reviews */}
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Heart className="w-4 h-4 mr-1 text-red-400" />
                                                {member.reviews} reviews
                                            </div>
                                            <div className="flex items-center">
                                                <Award className="w-4 h-4 mr-1 text-blue-400" />
                                                Verified Expert
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support Channels */}
                <div className={`mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.6s' }}>
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        How to Reach Our Support Team
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {supportChannels.map((channel, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <channel.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{channel.title}</h4>
                                <p className="text-gray-600 mb-4">{channel.description}</p>
                                <div className="text-sm text-gray-500">{channel.availability}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`text-center transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Ready to Get Support?</h3>
                        <p className="text-blue-100 mb-8 text-lg">
                            Our dedicated support team is standing by to help you with any questions,
                            concerns, or assistance you need for your pet's care.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                                Contact Support Now
                            </button>
                            <div className="text-blue-200 text-sm">
                                Average response time: Under 2 hours
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportTeam;
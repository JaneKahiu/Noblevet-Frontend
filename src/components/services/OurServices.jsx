import React, { useState, useEffect } from 'react';
import { Stethoscope, Scissors, Pill, Microscope, Heart, Shield, Clock, Activity, Zap, Eye } from 'lucide-react';

const OurServices = () => {
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

        const element = document.getElementById('services-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: Stethoscope,
            title: 'General Check-ups',
            description: 'Comprehensive health examinations for preventive care and early detection.',
            features: ['Physical examination', 'Vital signs monitoring', 'Health consultations', 'Vaccination updates'],
            color: 'from-blue-500 to-indigo-600'
        },
        {
            icon: Scissors,
            title: 'Surgical Procedures',
            description: 'Advanced surgical interventions performed with precision and care.',
            features: ['Spay/Neuter operations', 'Tumor removals', 'Orthopedic surgery', 'Emergency procedures'],
            color: 'from-red-500 to-pink-600'
        },
        {
            icon: Pill,
            title: 'Medical Treatment',
            description: 'Comprehensive medical care for various health conditions.',
            features: ['Medication therapy', 'Pain management', 'Chronic disease care', 'Recovery monitoring'],
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: Microscope,
            title: 'Laboratory Services',
            description: 'Advanced diagnostic testing for accurate health assessments.',
            features: ['Blood analysis', 'Urine tests', 'Parasite screening', 'Genetic testing'],
            color: 'from-purple-500 to-violet-600'
        },
        {
            icon: Heart,
            title: 'Cardiology',
            description: 'Specialized heart and cardiovascular system care.',
            features: ['Heart examinations', 'ECG monitoring', 'Blood pressure checks', 'Cardiac medication'],
            color: 'from-pink-500 to-rose-600'
        },
        {
            icon: Eye,
            title: 'Ophthalmology',
            description: 'Complete eye care and vision health services.',
            features: ['Eye examinations', 'Vision tests', 'Eye surgery', 'Injury treatment'],
            color: 'from-cyan-500 to-blue-600'
        },
        {
            icon: Shield,
            title: 'Preventive Care',
            description: 'Proactive healthcare to prevent diseases and maintain wellness.',
            features: ['Vaccination programs', 'Parasite prevention', 'Dental care', 'Nutrition counseling'],
            color: 'from-amber-500 to-orange-600'
        },
        {
            icon: Activity,
            title: 'Emergency Care',
            description: '24/7 emergency services for urgent medical situations.',
            features: ['Trauma treatment', 'Poison control', 'Critical care', 'Emergency surgery'],
            color: 'from-red-600 to-red-700'
        }
    ];

    return (
        <section id="services-section" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 text-blue-700 font-semibold mb-4">
                        <Stethoscope className="w-5 h-5 mr-2" />
                        Our Services
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Complete Veterinary
                        <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Healthcare Solutions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We offer a comprehensive range of veterinary services, from routine care to specialized treatments,
                        ensuring your pets receive the best possible healthcare.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            {/* Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            <div className="relative bg-white m-1 rounded-xl p-8 h-full">
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 opacity-70`}></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Need a Specific Service?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Can't find what you're looking for? Contact us to discuss your pet's specific needs.
                        </p>
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurServices;
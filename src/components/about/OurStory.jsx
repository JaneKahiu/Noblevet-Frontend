import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Heart, Award, Stethoscope, ArrowRight } from 'lucide-react';

const OurStory = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    const milestones = [
        {
            year: '2009',
            title: 'Foundation',
            description: 'Noble Vet Surgeons was founded with a simple mission: to provide exceptional veterinary care to all animals in Kenya.',
            icon: Calendar,
            color: 'from-emerald-500 to-teal-500',
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            year: '2012',
            title: 'First Expansion',
            description: 'Opened our second location in Kiambu, extending our reach to serve more communities across Kenya.',
            icon: MapPin,
            color: 'from-blue-500 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            year: '2016',
            title: 'Team Growth',
            description: 'Expanded our team to include specialized veterinarians in exotic animal care and emergency medicine.',
            icon: Users,
            color: 'from-purple-500 to-indigo-500',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            year: '2020',
            title: '24/7 Services',
            description: 'Launched round-the-clock emergency services with mobile veterinary units across Nairobi and surrounding areas.',
            icon: Heart,
            color: 'from-pink-500 to-rose-500',
            image: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
            year: '2023',
            title: 'Excellence Award',
            description: 'Recognized as Kenya\'s leading veterinary clinic with the highest success rate and customer satisfaction.',
            icon: Award,
            color: 'from-yellow-500 to-orange-500',
            image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
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
            { threshold: 0.3 }
        );

        const cards = sectionRef.current?.querySelectorAll('.milestone-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
            {/* Minimal background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold mb-6">
                        <Stethoscope className="w-5 h-5 mr-2 text-emerald-600" />
                        Our Journey
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Our Story of
                        <span className="block text-emerald-600">
              Compassionate Care
            </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From humble beginnings to becoming Kenya's most trusted veterinary clinic,
                        our journey has been driven by an unwavering commitment to animal welfare.
                    </p>
                </div>

                {/* Modern Card Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`milestone-card group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform ${
                                visibleItems.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            {/* Image Header */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={milestone.image}
                                    alt={milestone.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Year Badge */}
                                <div className="absolute top-4 left-4">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                                        <span className="text-emerald-600 font-black text-lg">{milestone.year}</span>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="absolute bottom-4 right-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <milestone.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                                    {milestone.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {milestone.description}
                                </p>

                                {/* Learn More Link */}
                                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 group/btn flex items-center">
                                    Learn More
                                    <ArrowRight className="inline ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Be Part of Our Story?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Join thousands of satisfied pet owners who have trusted us with their beloved animals over the years.
                        </p>
                        <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 inline-flex items-center">
                            Schedule Your Visit
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
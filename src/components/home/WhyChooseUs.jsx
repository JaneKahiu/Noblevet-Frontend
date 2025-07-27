import React, { useState, useEffect, useRef } from 'react';
import { Clock, Users, Heart, Shield, Award, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [activeFeature, setActiveFeature] = useState(0);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: Clock,
            title: "24/7 Emergency Care",
            description: "Round-the-clock emergency veterinary services with immediate response and mobile ambulance ready to assist whenever you need us.",
            benefits: ["Immediate response", "Mobile ambulance", "Emergency surgery", "Critical care unit"],
            color: "from-red-500 to-pink-500"
        },
        {
            icon: Users,
            title: "Experienced Veterinarians",
            description: "Our team of certified veterinarians brings years of experience and specialized knowledge to provide the best care for your animals.",
            benefits: ["Certified professionals", "Specialized training", "Continuous education", "Compassionate care"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Heart,
            title: "Compassionate Care",
            description: "We treat every animal with love and respect, ensuring they feel comfortable and safe throughout their treatment journey.",
            benefits: ["Gentle approach", "Stress-free environment", "Patient comfort", "Family involvement"],
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: Shield,
            title: "Advanced Technology",
            description: "State-of-the-art medical equipment and modern diagnostic tools ensure accurate diagnosis and effective treatment.",
            benefits: ["Digital imaging", "Laboratory services", "Surgical equipment", "Monitoring systems"],
            color: "from-emerald-500 to-teal-500"
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

        const elements = sectionRef.current?.querySelectorAll('.feature-item');
        elements?.forEach((element) => observer.observe(element));

        // Auto-rotate active feature
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % features.length);
        }, 4000);

        return () => {
            observer.disconnect();
            clearInterval(interval);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium mb-4">
                        <Award className="w-4 h-4 mr-2" />
                        Why Choose Us
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by
                        <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Thousands of Pet Owners
            </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're committed to providing exceptional veterinary care that goes beyond treatment.
                        Here's what makes us the preferred choice for animal healthcare in Kenya.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    {/* Features List */}
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className={`feature-item group p-4 rounded-xl border border-gray-100 cursor-pointer transition-all duration-500 transform ${
                                    activeFeature === index
                                        ? 'bg-emerald-50 border-emerald-200 shadow-lg scale-105'
                                        : 'bg-white hover:bg-gray-50 hover:shadow-md'
                                } ${
                                    visibleItems.includes(index)
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="flex items-start space-x-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                        activeFeature === index
                                            ? 'bg-emerald-600 shadow-lg scale-110'
                                            : 'bg-gray-100 group-hover:bg-emerald-100'
                                    }`}>
                                        <feature.icon className={`w-5 h-5 transition-colors duration-300 ${
                                            activeFeature === index ? 'text-white' : 'text-gray-600 group-hover:text-emerald-600'
                                        }`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                                            activeFeature === index ? 'text-emerald-600' : 'text-gray-900'
                                        }`}>
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                                            {feature.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <span
                                                    key={benefitIndex}
                                                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                                                        activeFeature === index
                                                            ? 'bg-emerald-100 text-emerald-700'
                                                            : 'bg-gray-100 text-gray-600'
                                                    }`}
                                                >
                          <CheckCircle className="w-2 h-2 mr-1" />
                                                    {benefit}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Feature Showcase */}
                    <div className="relative">
                        <div className="relative group">
                            <div className="aspect-square bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Professional Veterinary Care"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                            </div>

                            {/* Floating testimonial */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                        <Heart className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">Sarah M.</div>
                                        <div className="text-xs text-gray-600">"Outstanding care for my dog!"</div>
                                        <div className="flex text-yellow-400 text-xs">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-xl animate-float">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-emerald-600">98%</div>
                                    <div className="text-xs text-gray-600">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-3">Ready to Give Your Pet the Best Care?</h3>
                        <p className="text-lg text-emerald-100 mb-6 max-w-xl mx-auto">
                            Join thousands of satisfied pet owners who trust us with their beloved animals.
                            Schedule your appointment today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                                Book Appointment
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transform hover:scale-105 transition-all duration-300">
                                Call: +254 123 456 789
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
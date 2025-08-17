import React, { useState, useEffect } from 'react';
import { Check, Star, Zap, Heart, Shield, Crown, Sparkles } from 'lucide-react';

const Pricing = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(1);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('pricing-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const plans = [
        {
            name: 'Basic Care',
            icon: Heart,
            price: 'KSh 2,500',
            period: '/visit',
            description: 'Essential care for your pet\'s basic health needs',
            features: [
                'General health check-up',
                'Basic vaccination',
                'Weight & vital monitoring',
                'Health consultation',
                'Basic parasite check'
            ],
            color: 'from-blue-500 to-cyan-600',
            popular: false
        },
        {
            name: 'Complete Care',
            icon: Shield,
            price: 'KSh 8,500',
            period: '/month',
            description: 'Comprehensive healthcare package for ongoing wellness',
            features: [
                'All Basic Care services',
                'Advanced diagnostics',
                'Lab work & testing',
                'Dental examination',
                'Nutritional counseling',
                'Emergency consultation',
                '24/7 phone support'
            ],
            color: 'from-emerald-500 to-teal-600',
            popular: true
        },
        {
            name: 'Premium Care',
            icon: Crown,
            price: 'KSh 15,000',
            period: '/month',
            description: 'VIP treatment with priority access and specialized care',
            features: [
                'All Complete Care services',
                'Priority appointment booking',
                'Specialist consultations',
                'Advanced imaging (X-ray, Ultrasound)',
                'Surgical procedures (minor)',
                'Home visit services',
                'Pet grooming services',
                'Health insurance consultation'
            ],
            color: 'from-purple-500 to-pink-600',
            popular: false
        }
    ];

    const additionalServices = [
        { name: 'Emergency Surgery', price: 'KSh 25,000+' },
        { name: 'Specialized Surgery', price: 'KSh 35,000+' },
        { name: 'Advanced Imaging', price: 'KSh 5,000' },
        { name: 'Laboratory Tests', price: 'KSh 2,000' },
        { name: 'Pet Grooming', price: 'KSh 1,500' },
        { name: 'Home Visit', price: 'KSh 3,000' }
    ];

    return (
        <section id="pricing-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 text-blue-700 font-semibold mb-4">
                        <Star className="w-5 h-5 mr-2" />
                        Our Pricing
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Transparent &
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Affordable Pricing
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Choose the perfect care package for your pet. All our services come with a
                        satisfaction guarantee and flexible payment options.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative transform transition-all duration-700 hover:scale-105 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            } ${plan.popular ? 'lg:-translate-y-4' : ''}`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                            onClick={() => setSelectedPlan(index)}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                                        <Sparkles className="w-4 h-4 mr-2" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div className={`bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 h-full ${
                                plan.popular ? 'border-emerald-200 shadow-emerald-100' : 'border-gray-100 hover:border-blue-200'
                            } ${selectedPlan === index ? 'ring-4 ring-blue-200' : ''}`}>
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${plan.color} rounded-t-2xl p-8 text-white text-center`}>
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <plan.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                                    <div className="text-center">
                                        <span className="text-4xl font-black">{plan.price}</span>
                                        <span className="text-white/80 text-lg">{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="p-8">
                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start">
                                                <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                                    <Check className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                                        {plan.popular ? 'Get Started' : 'Choose Plan'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '0.8s' }}>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                            Additional Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {additionalServices.map((service, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                                    <span className="text-gray-700 font-medium">{service.name}</span>
                                    <span className="text-blue-600 font-bold">{service.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-gray-600 text-sm">
                                * Prices may vary based on pet size, condition complexity, and required materials.
                                Contact us for detailed quotes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Payment Options */}
                <div className={`text-center mt-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '1s' }}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Flexible Payment Options</h3>
                        <p className="text-white/90 mb-6">
                            We accept various payment methods including M-Pesa, bank transfers, and insurance claims.
                            Payment plans available for major procedures.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                                M-Pesa
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                                Bank Transfer
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                                Insurance Claims
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                                Payment Plans
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
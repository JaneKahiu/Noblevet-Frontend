import React, { useState, useEffect } from 'react';
import { Target, Eye, Heart, ArrowRight, Phone, Calendar } from 'lucide-react';

const Mission = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${8 + Math.random() * 12}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Mission & Vision */}
                    <div className={`space-y-12 transform transition-all duration-1000 ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>
                        {/* Mission */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white ml-4">Our Mission</h3>
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed">
                                To provide exceptional, compassionate veterinary care to all animals while
                                building lasting relationships with pet owners and supporting animal welfare
                                throughout Kenya. We strive to be the most trusted name in veterinary medicine.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white ml-4">Our Vision</h3>
                            </div>
                            <p className="text-white/90 text-lg leading-relaxed">
                                To create a Kenya where every animal receives the highest quality veterinary care,
                                where pet ownership is a joy, and where the human-animal bond is celebrated and protected
                                for generations to come.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`transform transition-all duration-1000 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                    }`} style={{ animationDelay: '0.3s' }}>
                        <div className="bg-white rounded-3xl p-10 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Ready to Experience Our Care?
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Join thousands of satisfied pet owners who trust Noble Vet Surgeons
                                    with their beloved animals. Schedule your appointment today and see
                                    the difference our expertise makes.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center group">
                                    <Calendar className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                                    Book an Appointment
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>

                                <button className="w-full border-2 border-emerald-600 text-emerald-600 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                                    <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                                    Call Us: +254 123 456 789
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">15+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">12K+</div>
                                    <div className="text-sm text-gray-600">Happy Pets</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">98%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
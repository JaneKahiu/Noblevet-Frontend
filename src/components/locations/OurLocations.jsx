import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Car, Star, Navigation, Shield, Users } from 'lucide-react';

const OurLocations = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('locations-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const locations = [
        {
            name: 'Noble Vet Nairobi Central',
            address: '123 Kenyatta Avenue, Nairobi CBD',
            city: 'Nairobi',
            phone: '+254 700 123 456',
            email: 'nairobi.central@noblevetkenya.com',
            hours: {
                weekdays: '7:00 AM - 8:00 PM',
                weekends: '8:00 AM - 6:00 PM',
                emergency: '24/7 Emergency Services'
            },
            services: ['General Care', 'Surgery', 'Emergency', 'Laboratory', 'Pharmacy'],
            features: ['Free Parking', 'Pet Grooming', 'Pharmacy', 'X-Ray Facility'],
            rating: 4.9,
            reviews: 234,
            image: '/api/placeholder/400/300',
            coordinates: { lat: -1.2921, lng: 36.8219 },
            color: 'from-blue-500 to-indigo-600'
        },
        {
            name: 'Noble Vet Westlands',
            address: '456 Waiyaki Way, Westlands',
            city: 'Nairobi',
            phone: '+254 700 123 457',
            email: 'westlands@noblevetkenya.com',
            hours: {
                weekdays: '8:00 AM - 7:00 PM',
                weekends: '9:00 AM - 5:00 PM',
                emergency: 'Emergency Referrals to Central'
            },
            services: ['General Care', 'Vaccination', 'Grooming', 'Dental Care'],
            features: ['Free Parking', 'Pet Supplies', 'Grooming Salon', 'Boarding'],
            rating: 4.8,
            reviews: 189,
            image: '/api/placeholder/400/300',
            coordinates: { lat: -1.2632, lng: 36.8064 },
            color: 'from-green-500 to-emerald-600'
        },
        {
            name: 'Noble Vet Karen',
            address: '789 Karen Road, Karen',
            city: 'Nairobi',
            phone: '+254 700 123 458',
            email: 'karen@noblevetkenya.com',
            hours: {
                weekdays: '8:00 AM - 6:00 PM',
                weekends: '9:00 AM - 4:00 PM',
                emergency: 'Emergency Referrals to Central'
            },
            services: ['General Care', 'Exotic Pets', 'Wildlife Care', 'Rehabilitation'],
            features: ['Spacious Grounds', 'Wildlife Expertise', 'Rehabilitation Center'],
            rating: 4.9,
            reviews: 156,
            image: '/api/placeholder/400/300',
            coordinates: { lat: -1.3194, lng: 36.7083 },
            color: 'from-purple-500 to-pink-600'
        },
        {
            name: 'Noble Vet Mombasa',
            address: '321 Moi Avenue, Mombasa',
            city: 'Mombasa',
            phone: '+254 700 123 459',
            email: 'mombasa@noblevetkenya.com',
            hours: {
                weekdays: '7:30 AM - 7:30 PM',
                weekends: '8:30 AM - 5:30 PM',
                emergency: '24/7 Emergency Services'
            },
            services: ['General Care', 'Surgery', 'Marine Animal Care', 'Emergency'],
            features: ['Beach Access', 'Marine Expertise', 'Climate Controlled'],
            rating: 4.7,
            reviews: 198,
            image: '/api/placeholder/400/300',
            coordinates: { lat: -4.0434, lng: 39.6682 },
            color: 'from-cyan-500 to-blue-600'
        },
        {
            name: 'Noble Vet Kisumu',
            address: '654 Oginga Odinga Street, Kisumu',
            city: 'Kisumu',
            phone: '+254 700 123 460',
            email: 'kisumu@noblevetkenya.com',
            hours: {
                weekdays: '8:00 AM - 6:00 PM',
                weekends: '9:00 AM - 4:00 PM',
                emergency: 'Emergency Referrals Available'
            },
            services: ['General Care', 'Livestock Care', 'Vaccination Programs'],
            features: ['Livestock Expertise', 'Rural Outreach', 'Mobile Services'],
            rating: 4.6,
            reviews: 142,
            image: '/api/placeholder/400/300',
            coordinates: { lat: -0.1009, lng: 34.7617 },
            color: 'from-orange-500 to-red-600'
        }
    ];

    return (
        <section id="locations-section" className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 text-green-700 font-semibold mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        Find Us
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Our Clinic
                        <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Locations
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're strategically located across Kenya to provide you with convenient access
                        to quality veterinary care wherever you are.
                    </p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedLocation(index)}
                        >
                            {/* Image Header */}
                            <div className={`h-48 bg-gradient-to-r ${location.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {location.city}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                    <Star className="w-4 h-4 text-yellow-300 mr-1" />
                                    <span className="text-white text-sm font-medium">{location.rating}</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{location.name}</h3>
                                    <div className="flex items-center text-white/80 text-sm">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {location.address}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Contact Info */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-gray-600">
                                        <Phone className="w-4 h-4 mr-3 text-green-500" />
                                        <span className="text-sm">{location.phone}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="w-4 h-4 mr-3 text-green-500" />
                                        <div className="text-sm">
                                            <div>Mon-Fri: {location.hours.weekdays}</div>
                                            <div>Weekends: {location.hours.weekends}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {location.services.slice(0, 3).map((service, serviceIndex) => (
                                            <span key={serviceIndex} className={`bg-gradient-to-r ${location.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                                                {service}
                                            </span>
                                        ))}
                                        {location.services.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                                +{location.services.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                                    <div className="space-y-2">
                                        {location.features.slice(0, 3).map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${location.color} rounded-full mr-3`}></div>
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    <button className={`flex-1 bg-gradient-to-r ${location.color} text-white py-2 px-4 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}>
                                        <Navigation className="w-4 h-4 mr-2" />
                                        Directions
                                    </button>
                                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Reviews */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 mr-1" />
                                            {location.reviews} reviews
                                        </div>
                                        <div className="flex items-center">
                                            <Shield className="w-4 h-4 mr-1" />
                                            Verified
                                        </div>
                                    </div>
                                </div>
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
                            Can't Find a Location Near You?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            We're expanding! Contact us to learn about upcoming locations or our mobile services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                                Request Mobile Service
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                Suggest a Location
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurLocations;
import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, Clock, Star, Filter, Search } from 'lucide-react';

const LocationMap = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [filterCity, setFilterCity] = useState('All');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('location-map-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const locations = [
        {
            id: 1,
            name: 'Noble Vet Nairobi Central',
            city: 'Nairobi',
            address: '123 Kenyatta Avenue, Nairobi CBD',
            phone: '+254 700 123 456',
            coordinates: { lat: -1.2921, lng: 36.8219 },
            hours: '7:00 AM - 8:00 PM',
            rating: 4.9,
            services: ['Emergency', 'Surgery', 'Laboratory'],
            color: 'bg-red-500'
        },
        {
            id: 2,
            name: 'Noble Vet Westlands',
            city: 'Nairobi',
            address: '456 Waiyaki Way, Westlands',
            phone: '+254 700 123 457',
            coordinates: { lat: -1.2632, lng: 36.8064 },
            hours: '8:00 AM - 7:00 PM',
            rating: 4.8,
            services: ['General Care', 'Grooming', 'Boarding'],
            color: 'bg-blue-500'
        },
        {
            id: 3,
            name: 'Noble Vet Karen',
            city: 'Nairobi',
            address: '789 Karen Road, Karen',
            phone: '+254 700 123 458',
            coordinates: { lat: -1.3194, lng: 36.7083 },
            hours: '8:00 AM - 6:00 PM',
            rating: 4.9,
            services: ['Exotic Pets', 'Wildlife', 'Rehabilitation'],
            color: 'bg-green-500'
        },
        {
            id: 4,
            name: 'Noble Vet Mombasa',
            city: 'Mombasa',
            address: '321 Moi Avenue, Mombasa',
            phone: '+254 700 123 459',
            coordinates: { lat: -4.0434, lng: 39.6682 },
            hours: '7:30 AM - 7:30 PM',
            rating: 4.7,
            services: ['Emergency', 'Marine Animals', 'Surgery'],
            color: 'bg-cyan-500'
        },
        {
            id: 5,
            name: 'Noble Vet Kisumu',
            city: 'Kisumu',
            address: '654 Oginga Odinga Street, Kisumu',
            phone: '+254 700 123 460',
            coordinates: { lat: -0.1009, lng: 34.7617 },
            hours: '8:00 AM - 6:00 PM',
            rating: 4.6,
            services: ['Livestock', 'Mobile Services', 'Vaccination'],
            color: 'bg-orange-500'
        }
    ];

    const cities = ['All', 'Nairobi', 'Mombasa', 'Kisumu'];

    const filteredLocations = filterCity === 'All' 
        ? locations 
        : locations.filter(location => location.city === filterCity);

    return (
        <section id="location-map-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 text-blue-700 font-semibold mb-4">
                        <MapPin className="w-5 h-5 mr-2" />
                        Interactive Map
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Find Your Nearest
                        <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                            Noble Vet Clinic
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Use our interactive map to locate the nearest clinic, check operating hours,
                        and get directions to our facilities across Kenya.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Map Container */}
                        <div className={`lg:col-span-2 transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`} style={{ transitionDelay: '0.2s' }}>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                {/* Map Header */}
                                <div className="p-6 border-b border-gray-100">
                                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                        <h3 className="text-xl font-bold text-gray-900">Kenya Locations</h3>
                                        
                                        {/* Filter */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                                <Filter className="w-4 h-4 text-gray-500 mr-2 ml-2" />
                                                <select 
                                                    value={filterCity}
                                                    onChange={(e) => setFilterCity(e.target.value)}
                                                    className="bg-transparent text-sm font-medium text-gray-700 border-none outline-none"
                                                >
                                                    {cities.map(city => (
                                                        <option key={city} value={city}>{city}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                                    {/* Kenya Map Outline (Simplified) */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-80 h-80">
                                            {/* Simplified Kenya shape */}
                                            <svg viewBox="0 0 200 300" className="w-full h-full opacity-20">
                                                <path 
                                                    d="M50 50 L150 30 L180 80 L170 150 L160 200 L140 250 L100 270 L60 250 L40 200 L30 150 L40 100 Z" 
                                                    fill="currentColor" 
                                                    className="text-gray-400"
                                                />
                                            </svg>

                                            {/* Location Markers */}
                                            {filteredLocations.map((location, index) => (
                                                <div
                                                    key={location.id}
                                                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                                                        selectedLocation?.id === location.id ? 'scale-125' : 'hover:scale-110'
                                                    }`}
                                                    style={{
                                                        // Approximate positions for demonstration
                                                        left: location.city === 'Nairobi' ? '60%' : 
                                                              location.city === 'Mombasa' ? '85%' : 
                                                              location.city === 'Kisumu' ? '25%' : '60%',
                                                        top: location.city === 'Nairobi' ? '55%' : 
                                                             location.city === 'Mombasa' ? '85%' : 
                                                             location.city === 'Kisumu' ? '30%' : 
                                                             location.name.includes('Westlands') ? '50%' : '65%'
                                                    }}
                                                    onClick={() => setSelectedLocation(location)}
                                                >
                                                    <div className={`w-4 h-4 ${location.color} rounded-full border-2 border-white shadow-lg`}>
                                                        <div className="absolute -top-8 -left-8 w-16 h-8 bg-white rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <span className="text-xs font-medium text-gray-700">{location.city}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Map Controls */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                                        <button className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <Navigation className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <button className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <Search className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>

                                    {/* Legend */}
                                    <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                                        <h4 className="text-sm font-bold text-gray-900 mb-2">Legend</h4>
                                        <div className="space-y-1">
                                            <div className="flex items-center text-xs text-gray-600">
                                                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                                Emergency Services
                                            </div>
                                            <div className="flex items-center text-xs text-gray-600">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                                General Care
                                            </div>
                                            <div className="flex items-center text-xs text-gray-600">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                                Specialized Care
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Details Sidebar */}
                        <div className={`transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`} style={{ transitionDelay: '0.4s' }}>
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">
                                    {selectedLocation ? 'Location Details' : 'Select a Location'}
                                </h3>

                                {selectedLocation ? (
                                    <div className="space-y-6">
                                        {/* Location Info */}
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">{selectedLocation.name}</h4>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                                    {selectedLocation.address}
                                                </div>
                                                <div className="flex items-center">
                                                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                                    {selectedLocation.phone}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                                    {selectedLocation.hours}
                                                </div>
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                                                    {selectedLocation.rating} rating
                                                </div>
                                            </div>
                                        </div>

                                        {/* Services */}
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-3">Services Available</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedLocation.services.map((service, index) => (
                                                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="space-y-3">
                                            <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center">
                                                <Navigation className="w-4 h-4 mr-2" />
                                                Get Directions
                                            </button>
                                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                                                <Phone className="w-4 h-4 mr-2" />
                                                Call Now
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500 mb-6">
                                            Click on any location marker on the map to view details, 
                                            contact information, and available services.
                                        </p>
                                        
                                        {/* Quick Location List */}
                                        <div className="space-y-2">
                                            {filteredLocations.slice(0, 3).map((location) => (
                                                <button
                                                    key={location.id}
                                                    onClick={() => setSelectedLocation(location)}
                                                    className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 border border-gray-100"
                                                >
                                                    <div className="flex items-center">
                                                        <div className={`w-3 h-3 ${location.color} rounded-full mr-3`}></div>
                                                        <div>
                                                            <div className="font-medium text-gray-900 text-sm">{location.name}</div>
                                                            <div className="text-gray-500 text-xs">{location.city}</div>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
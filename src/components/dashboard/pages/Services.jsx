import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  Heart, 
  Stethoscope, 
  Scissors, 
  Shield, 
  Activity,
  Calendar,
  ArrowRight,
  Plus,
  ChevronDown,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', name: 'All Services', icon: Activity },
    { id: 'medical', name: 'Medical Care', icon: Stethoscope },
    { id: 'preventive', name: 'Preventive Care', icon: Shield },
    { id: 'grooming', name: 'Grooming', icon: Scissors },
    { id: 'emergency', name: 'Emergency', icon: Heart }
  ];

  const services = [
    {
      id: 1,
      name: 'Annual Health Checkup',
      category: 'preventive',
      description: 'Comprehensive health examination for your pet including vaccinations and wellness screening.',
      price: '$85 - $120',
      duration: '45 minutes',
      rating: 4.9,
      reviews: 324,
      image: '/api/placeholder/300/200',
      features: ['Physical Examination', 'Vaccination Updates', 'Weight Assessment', 'Dental Check'],
      availability: 'Available Today'
    },
    {
      id: 2,
      name: 'Dental Cleaning',
      category: 'medical',
      description: 'Professional dental cleaning and oral health assessment to prevent dental diseases.',
      price: '$200 - $350',
      duration: '90 minutes',
      rating: 4.8,
      reviews: 187,
      image: '/api/placeholder/300/200',
      features: ['Ultrasonic Cleaning', 'Polishing', 'Oral Examination', 'Dental X-rays'],
      availability: 'Next Available: Tomorrow'
    },
    {
      id: 3,
      name: 'Full Grooming Package',
      category: 'grooming',
      description: 'Complete grooming service including bath, nail trim, ear cleaning, and styling.',
      price: '$60 - $100',
      duration: '2 hours',
      rating: 4.7,
      reviews: 256,
      image: '/api/placeholder/300/200',
      features: ['Shampoo & Conditioning', 'Nail Trimming', 'Ear Cleaning', 'Styling'],
      availability: 'Available This Week'
    },
    {
      id: 4,
      name: 'Emergency Care',
      category: 'emergency',
      description: '24/7 emergency veterinary care for urgent medical situations.',
      price: '$150 - $500',
      duration: 'Variable',
      rating: 4.9,
      reviews: 98,
      image: '/api/placeholder/300/200',
      features: ['24/7 Availability', 'Critical Care', 'Emergency Surgery', 'Trauma Treatment'],
      availability: 'Available 24/7'
    },
    {
      id: 5,
      name: 'Vaccination Package',
      category: 'preventive',
      description: 'Essential vaccinations to protect your pet from common diseases.',
      price: '$45 - $80',
      duration: '30 minutes',
      rating: 4.8,
      reviews: 412,
      image: '/api/placeholder/300/200',
      features: ['Core Vaccines', 'Lifestyle Vaccines', 'Health Certificate', 'Follow-up Reminders'],
      availability: 'Available Today'
    },
    {
      id: 6,
      name: 'Surgical Procedures',
      category: 'medical',
      description: 'Comprehensive surgical services including spay/neuter and advanced procedures.',
      price: '$300 - $1200',
      duration: '1-3 hours',
      rating: 4.9,
      reviews: 145,
      image: '/api/placeholder/300/200',
      features: ['Pre-surgical Assessment', 'Advanced Anesthesia', 'Post-op Care', 'Pain Management'],
      availability: 'Consultation Required'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBookService = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">Our Services</h1>
          <p className="text-emerald-100 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive veterinary care for your beloved pets
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <Stethoscope className="h-32 w-32 absolute top-4 right-4 animate-pulse" />
          <Heart className="h-20 w-20 absolute bottom-8 right-16 animate-bounce" />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in-up">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Service Image */}
            <div className="h-48 bg-gradient-to-r from-emerald-400 to-teal-400 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Stethoscope className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  service.availability.includes('Available') 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {service.availability}
                </span>
              </div>
            </div>

            {/* Service Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                  <span className="text-xs text-gray-500">({service.reviews})</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

              {/* Service Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-700">Price:</span>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">{service.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-gray-700">Duration:</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{service.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleBookService(service)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
                >
                  Book Now
                </button>
                <button className="px-4 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <Stethoscope className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedService.name}</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Service Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Service Overview</h3>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing and Duration */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="h-5 w-5 text-emerald-600" />
                      <span className="font-semibold text-emerald-800">Price Range</span>
                    </div>
                    <p className="text-xl font-bold text-emerald-600">{selectedService.price}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-800">Duration</span>
                    </div>
                    <p className="text-xl font-bold text-blue-600">{selectedService.duration}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                    <Calendar className="inline h-5 w-5 mr-2" />
                    Schedule Appointment
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse">
          <Plus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
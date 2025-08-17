import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Navigation, 
  Star, 
  Calendar,
  Car,
  Search,
  Filter,
  ChevronDown,
  Heart,
  Stethoscope,
  ArrowRight,
  Plus,
  Users,
  Award,
  Zap
} from 'lucide-react';

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const locations = [
    {
      id: 1,
      name: 'NobleVet Downtown',
      address: '123 Main Street, Downtown City, NY 10001',
      phone: '(555) 123-4567',
      email: 'downtown@noblevet.com',
      hours: {
        weekdays: '8:00 AM - 8:00 PM',
        saturday: '9:00 AM - 6:00 PM',
        sunday: '10:00 AM - 4:00 PM'
      },
      services: ['Emergency Care', 'Surgery', 'Dental Care', 'Grooming'],
      rating: 4.9,
      reviews: 487,
      distance: '2.3 miles',
      image: '/api/placeholder/400/250',
      specialties: ['Emergency Medicine', 'Orthopedic Surgery', 'Cardiology'],
      staff: 25,
      established: 2015,
      features: ['24/7 Emergency', 'Advanced Surgery', 'Digital X-Ray', 'In-house Lab'],
      parking: 'Free parking available',
      accessibility: 'Wheelchair accessible',
      type: 'full-service'
    },
    {
      id: 2,
      name: 'NobleVet Westside',
      address: '456 Oak Avenue, Westside District, NY 10002',
      phone: '(555) 234-5678',
      email: 'westside@noblevet.com',
      hours: {
        weekdays: '7:00 AM - 7:00 PM',
        saturday: '8:00 AM - 5:00 PM',
        sunday: 'Closed'
      },
      services: ['Wellness Exams', 'Vaccinations', 'Grooming', 'Boarding'],
      rating: 4.8,
      reviews: 312,
      distance: '4.7 miles',
      image: '/api/placeholder/400/250',
      specialties: ['Preventive Care', 'Dermatology', 'Behavioral Training'],
      staff: 18,
      established: 2018,
      features: ['Wellness Programs', 'Pet Boarding', 'Training Classes', 'Grooming Spa'],
      parking: 'Street parking',
      accessibility: 'Wheelchair accessible',
      type: 'wellness'
    },
    {
      id: 3,
      name: 'NobleVet Emergency Center',
      address: '789 Emergency Drive, Medical District, NY 10003',
      phone: '(555) 911-PETS',
      email: 'emergency@noblevet.com',
      hours: {
        weekdays: '24/7',
        saturday: '24/7',
        sunday: '24/7'
      },
      services: ['Emergency Care', 'Critical Care', 'Surgery', 'Trauma Care'],
      rating: 4.9,
      reviews: 256,
      distance: '6.1 miles',
      image: '/api/placeholder/400/250',
      specialties: ['Emergency Medicine', 'Critical Care', 'Trauma Surgery'],
      staff: 35,
      established: 2020,
      features: ['24/7 Emergency', 'ICU', 'Advanced Imaging', 'Blood Bank'],
      parking: 'Valet parking available',
      accessibility: 'Fully accessible',
      type: 'emergency'
    },
    {
      id: 4,
      name: 'NobleVet Mobile Service',
      address: 'Serving Greater Metro Area',
      phone: '(555) 345-6789',
      email: 'mobile@noblevet.com',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'By appointment'
      },
      services: ['Home Visits', 'Wellness Exams', 'Vaccinations', 'End-of-life Care'],
      rating: 4.7,
      reviews: 189,
      distance: 'Comes to you',
      image: '/api/placeholder/400/250',
      specialties: ['Geriatric Care', 'Hospice Care', 'House Call Medicine'],
      staff: 8,
      established: 2021,
      features: ['Home Visits', 'Mobile X-Ray', 'Lab Services', 'Comfort Care'],
      parking: 'N/A',
      accessibility: 'Mobile service',
      type: 'mobile'
    }
  ];

  const filterOptions = [
    { id: 'all', name: 'All Locations', icon: MapPin },
    { id: 'full-service', name: 'Full Service', icon: Stethoscope },
    { id: 'emergency', name: 'Emergency Only', icon: Zap },
    { id: 'wellness', name: 'Wellness Center', icon: Heart },
    { id: 'mobile', name: 'Mobile Service', icon: Car }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.services.some(service => 
                           service.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesType = filterType === 'all' || location.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleGetDirections = (location) => {
    const address = encodeURIComponent(location.address);
    window.open(`https://maps.google.com/?q=${address}`, '_blank');
  };

  const handleCallLocation = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">Our Locations</h1>
          <p className="text-emerald-100 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Find the nearest NobleVet clinic for your pet's needs
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <MapPin className="h-32 w-32 absolute top-4 right-4 animate-pulse" />
          <Navigation className="h-20 w-20 absolute bottom-8 right-16 animate-bounce" />
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
              placeholder="Search by location, address, or services..."
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
            <span>Filter by Type</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in-up">
            <div className="flex flex-wrap gap-3">
              {filterOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setFilterType(option.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      filterType === option.id
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{option.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLocations.map((location, index) => (
          <div
            key={location.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Location Image */}
            <div className="h-48 bg-gradient-to-r from-emerald-400 to-teal-400 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-white opacity-50" />
              </div>
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  location.type === 'emergency' 
                    ? 'bg-red-100 text-red-700'
                    : location.type === 'mobile'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {location.type === 'full-service' ? 'Full Service' :
                   location.type === 'emergency' ? '24/7 Emergency' :
                   location.type === 'wellness' ? 'Wellness Center' :
                   'Mobile Service'}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{location.rating}</span>
                </div>
              </div>
            </div>

            {/* Location Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                <span className="text-sm text-emerald-600 font-medium">{location.distance}</span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-2 mb-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">{location.address}</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">{location.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm text-gray-700">{location.hours.weekdays}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Users className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{location.staff}</div>
                  <div className="text-xs text-gray-600">Staff</div>
                </div>
                <div className="text-center">
                  <Award className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{location.reviews}</div>
                  <div className="text-xs text-gray-600">Reviews</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-gray-900">{new Date().getFullYear() - location.established}</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {location.services.slice(0, 3).map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {location.services.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                      +{location.services.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleGetDirections(location)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg transition-colors text-sm font-medium"
                >
                  <Navigation className="inline h-4 w-4 mr-1" />
                  Directions
                </button>
                <button
                  onClick={() => handleCallLocation(location.phone)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors text-sm font-medium"
                >
                  <Phone className="inline h-4 w-4 mr-1" />
                  Call
                </button>
                <button
                  onClick={() => setSelectedLocation(location)}
                  className="px-3 py-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors text-sm"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredLocations.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No locations found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
        </div>
      )}

      {/* Location Details Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedLocation.name}</h2>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-gray-600">{selectedLocation.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-gray-600">{selectedLocation.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">{selectedLocation.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Hours of Operation</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="font-medium">{selectedLocation.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="font-medium">{selectedLocation.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="font-medium">{selectedLocation.hours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Parking:</span> {selectedLocation.parking}</p>
                      <p><span className="font-medium">Accessibility:</span> {selectedLocation.accessibility}</p>
                      <p><span className="font-medium">Established:</span> {selectedLocation.established}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Services Offered</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedLocation.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2 p-2 bg-emerald-50 rounded-lg">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-emerald-800">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Specialties</h3>
                    <div className="space-y-2">
                      {selectedLocation.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Features & Equipment</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedLocation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6 border-t mt-6">
                <button
                  onClick={() => handleGetDirections(selectedLocation)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                >
                  <Navigation className="inline h-5 w-5 mr-2" />
                  Get Directions
                </button>
                <button
                  onClick={() => handleCallLocation(selectedLocation.phone)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-medium"
                >
                  <Phone className="inline h-5 w-5 mr-2" />
                  Call Now
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="inline h-5 w-5 mr-2" />
                  Book Appointment
                </button>
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
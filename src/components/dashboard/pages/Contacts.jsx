import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  MapPin, 
  User,
  Send,
  CheckCircle,
  AlertCircle,
  Info,
  Heart,
  Stethoscope,
  Calendar,
  FileText,
  Users,
  Search,
  Filter,
  ChevronDown,
  Star,
  ArrowRight,
  Plus,
  Zap,
  Shield
} from 'lucide-react';

export default function Contacts() {
  const [activeTab, setActiveTab] = useState('contact');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    priority: 'normal',
    message: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const tabs = [
    { id: 'contact', name: 'Contact Us', icon: MessageSquare },
    { id: 'emergency', name: 'Emergency', icon: Zap },
    { id: 'directory', name: 'Staff Directory', icon: Users }
  ];

  const departments = [
    {
      id: 'general',
      name: 'General Inquiries',
      icon: Info,
      description: 'General questions and information',
      email: 'info@noblevet.com',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 8AM-6PM'
    },
    {
      id: 'appointments',
      name: 'Appointments',
      icon: Calendar,
      description: 'Schedule, reschedule, or cancel appointments',
      email: 'appointments@noblevet.com',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 7AM-8PM, Sat: 8AM-5PM'
    },
    {
      id: 'billing',
      name: 'Billing & Insurance',
      icon: FileText,
      description: 'Questions about bills, payments, and insurance',
      email: 'billing@noblevet.com',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 9AM-5PM'
    },
    {
      id: 'emergency',
      name: 'Emergency Services',
      icon: Zap,
      description: '24/7 emergency care for urgent situations',
      email: 'emergency@noblevet.com',
      phone: '(555) 911-PETS',
      hours: '24/7 Available'
    }
  ];

  const emergencyContacts = [
    {
      type: 'Primary Emergency',
      name: 'NobleVet Emergency Center',
      phone: '(555) 911-PETS',
      address: '789 Emergency Drive, Medical District',
      available: '24/7',
      services: ['Critical Care', 'Emergency Surgery', 'Trauma Care']
    },
    {
      type: 'After Hours',
      name: 'NobleVet After Hours Clinic',
      phone: '(555) 555-NIGHT',
      address: '123 Main Street, Downtown',
      available: 'Weekends & Holidays',
      services: ['Urgent Care', 'Minor Emergencies', 'Consultations']
    },
    {
      type: 'Poison Control',
      name: 'Pet Poison Control Hotline',
      phone: '(855) 764-7661',
      address: 'National Hotline',
      available: '24/7',
      services: ['Poison Emergencies', 'Toxicity Consultations']
    }
  ];

  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Chief Veterinarian',
      department: 'Medical',
      specialties: ['Internal Medicine', 'Surgery'],
      phone: '(555) 123-4567 ext. 101',
      email: 's.johnson@noblevet.com',
      location: 'Downtown Clinic',
      experience: '15 years',
      rating: 4.9,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Emergency Veterinarian',
      department: 'Emergency',
      specialties: ['Emergency Medicine', 'Critical Care'],
      phone: '(555) 123-4567 ext. 201',
      email: 'm.chen@noblevet.com',
      location: 'Emergency Center',
      experience: '12 years',
      rating: 4.8,
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Veterinary Specialist',
      department: 'Specialty',
      specialties: ['Dermatology', 'Behavioral Medicine'],
      phone: '(555) 123-4567 ext. 301',
      email: 'e.rodriguez@noblevet.com',
      location: 'Westside Clinic',
      experience: '10 years',
      rating: 4.9,
      image: '/api/placeholder/100/100'
    },
    {
      id: 4,
      name: 'Lisa Thompson',
      title: 'Practice Manager',
      department: 'Administration',
      specialties: ['Practice Management', 'Client Relations'],
      phone: '(555) 123-4567 ext. 401',
      email: 'l.thompson@noblevet.com',
      location: 'All Locations',
      experience: '8 years',
      rating: 4.7,
      image: '/api/placeholder/100/100'
    }
  ];

  const filteredStaff = staffMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', contactForm);
    // Reset form or show success message
  };

  const handleInputChange = (field, value) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderContactForm = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
      
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={contactForm.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={contactForm.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={contactForm.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              value={contactForm.department}
              onChange={(e) => handleInputChange('department', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Select a department</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>{dept.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              required
              value={contactForm.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Brief subject of your message"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              value={contactForm.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            required
            rows={6}
            value={contactForm.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Please provide details about your inquiry..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );

  const renderEmergencyTab = () => (
    <div className="space-y-6">
      {/* Emergency Alert */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 animate-fade-in-up">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-6 w-6 text-red-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Situations</h3>
            <p className="text-red-700 mb-4">
              If your pet is experiencing a life-threatening emergency, please call immediately or visit our emergency center.
            </p>
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block">
              <strong>Emergency Hotline: (555) 911-PETS</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {emergencyContacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{contact.type}</h3>
                <p className="text-sm text-gray-600">{contact.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium">{contact.phone}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-600 mt-0.5" />
                <span className="text-sm text-gray-600">{contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-gray-600">{contact.available}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-1">
                {contact.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.open(`tel:${contact.phone}`, '_self')}
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors font-medium"
            >
              Call Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDirectoryTab = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search staff by name, title, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStaff.map((member, index) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-4">
              {/* Profile Image */}
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-10 w-10 text-white" />
              </div>

              {/* Staff Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-emerald-600 font-medium">{member.title}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{member.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Department:</span> {member.department}</p>
                  <p><span className="font-medium">Location:</span> {member.location}</p>
                  <p><span className="font-medium">Experience:</span> {member.experience}</p>
                </div>

                {/* Specialties */}
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => window.open(`tel:${member.phone}`, '_self')}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Phone className="inline h-4 w-4 mr-1" />
                    Call
                  </button>
                  <button
                    onClick={() => window.open(`mailto:${member.email}`, '_self')}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStaff.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No staff members found</h3>
          <p className="text-gray-500">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">Contact Us</h1>
          <p className="text-emerald-100 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We're here to help you and your pets
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <MessageSquare className="h-32 w-32 absolute top-4 right-4 animate-pulse" />
          <Heart className="h-20 w-20 absolute bottom-8 right-16 animate-bounce" />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-emerald-600 text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {renderContactForm()}
            </div>

            {/* Quick Contact & Departments */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Phone className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">(555) 123-4567</p>
                      <p className="text-sm text-gray-600">Main Office</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">info@noblevet.com</p>
                      <p className="text-sm text-gray-600">General Inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">123 Main Street</p>
                      <p className="text-sm text-gray-600">Downtown City, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Departments</h3>
                <div className="space-y-3">
                  {departments.map((dept) => {
                    const Icon = dept.icon;
                    return (
                      <div key={dept.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="h-5 w-5 text-emerald-600" />
                          <span className="font-medium text-gray-900">{dept.name}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{dept.phone}</span>
                          <span>{dept.hours}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'emergency' && renderEmergencyTab()}
        {activeTab === 'directory' && renderDirectoryTab()}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse">
          <Plus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { 
  PawPrint, 
  Plus, 
  Heart, 
  Calendar, 
  User, 
  Phone,
  MapPin,
  Edit,
  Eye,
  Trash2,
  Search,
  Filter,
  Camera,
  Award,
  Activity
} from 'lucide-react';
import AddPetModal from '../modals/AddPetModal';

export default function MyPets() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleAddPet = (petData) => {
    console.log('Adding new pet:', petData);
    // Here you would typically add the pet to your pets array or send to API
    setShowAddModal(false);
  };

  const pets = [
    {
      id: 1,
      name: "Fluffy",
      type: "Cat",
      breed: "Persian",
      age: "3 years",
      gender: "Female",
      weight: "4.2 kg",
      color: "White",
      microchipId: "123456789012345",
      owner: "John Doe",
      phone: "+254 123 456 789",
      address: "123 Pet Street, Nairobi",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      lastVisit: "2025-08-10",
      nextVisit: "2025-08-16",
      vaccinations: ["Rabies", "FVRCP"],
      medications: [],
      notes: "Very friendly, loves treats"
    },
    {
      id: 2,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: "5 years",
      gender: "Male",
      weight: "28.5 kg",
      color: "Golden",
      microchipId: "987654321098765",
      owner: "John Doe",
      phone: "+254 123 456 789",
      address: "123 Pet Street, Nairobi",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      lastVisit: "2025-07-25",
      nextVisit: "2025-08-18",
      vaccinations: ["Rabies", "DHPP", "Bordetella"],
      medications: ["Joint supplement"],
      notes: "Energetic, needs regular exercise"
    },
    {
      id: 3,
      name: "Bella",
      type: "Dog",
      breed: "Labrador",
      age: "2 years",
      gender: "Female",
      weight: "22.1 kg",
      color: "Black",
      microchipId: "456789123456789",
      owner: "John Doe",
      phone: "+254 123 456 789",
      address: "123 Pet Street, Nairobi",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      lastVisit: "2025-08-01",
      nextVisit: "2025-09-01",
      vaccinations: ["Rabies", "DHPP"],
      medications: [],
      notes: "Well-behaved, good with children"
    }
  ];

  const getTypeIcon = (type) => {
    return type.toLowerCase() === 'cat' ? '🐱' : '🐶';
  };

  const getTypeColor = (type) => {
    return type.toLowerCase() === 'cat' 
      ? 'from-purple-500 to-pink-500' 
      : 'from-blue-500 to-indigo-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">My Pets</h1>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Manage your beloved companions
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Plus className="h-5 w-5" />
          <span>Add New Pet</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search pets..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Pet Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{pets.length}</h3>
              <p className="text-emerald-100">Total Pets</p>
            </div>
            <PawPrint className="h-8 w-8 text-emerald-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{pets.filter(p => p.type === 'Dog').length}</h3>
              <p className="text-blue-100">Dogs</p>
            </div>
            <span className="text-3xl">🐶</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{pets.filter(p => p.type === 'Cat').length}</h3>
              <p className="text-purple-100">Cats</p>
            </div>
            <span className="text-3xl">🐱</span>
          </div>
        </div>
      </div>

      {/* Pets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {pets.map((pet, index) => (
          <div
            key={pet.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            {/* Pet Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <span>{getTypeIcon(pet.type)}</span>
                  <span>{pet.type}</span>
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>

            {/* Pet Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{pet.name}</h3>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => setSelectedPet(pet)}
                    className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Breed:</span>
                  <span className="font-medium">{pet.breed}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{pet.age}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-medium">{pet.weight}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Visit:</span>
                  <span className="font-medium">{pet.lastVisit}</span>
                </div>
              </div>

              {/* Vaccinations */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Vaccinations</h4>
                <div className="flex flex-wrap gap-2">
                  {pet.vaccinations.map((vaccine, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1"
                    >
                      <Award className="h-3 w-3" />
                      <span>{vaccine}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Next Appointment */}
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center space-x-2 text-emerald-700">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Next Visit: {pet.nextVisit}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Book Appointment
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  View History
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {pets.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <PawPrint className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No pets found</h3>
          <p className="text-gray-500 mb-6">Add your first pet to get started with managing their care.</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Add Your First Pet
          </button>
        </div>
      )}

      {/* Pet Detail Modal */}
      {selectedPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <div className="relative h-64">
              <img
                src={selectedPet.image}
                alt={selectedPet.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPet(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedPet.name}</h2>
                <span className={`px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getTypeColor(selectedPet.type)}`}>
                  {selectedPet.type}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Basic Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Breed:</span> {selectedPet.breed}</div>
                    <div><span className="text-gray-600">Age:</span> {selectedPet.age}</div>
                    <div><span className="text-gray-600">Gender:</span> {selectedPet.gender}</div>
                    <div><span className="text-gray-600">Weight:</span> {selectedPet.weight}</div>
                    <div><span className="text-gray-600">Color:</span> {selectedPet.color}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Medical Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Microchip:</span> {selectedPet.microchipId}</div>
                    <div><span className="text-gray-600">Last Visit:</span> {selectedPet.lastVisit}</div>
                    <div><span className="text-gray-600">Next Visit:</span> {selectedPet.nextVisit}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Vaccinations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPet.vaccinations.map((vaccine, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {vaccine}
                    </span>
                  ))}
                </div>
              </div>

              {selectedPet.medications.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Current Medications</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPet.medications.map((medication, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {medication}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
                <p className="text-gray-700 text-sm">{selectedPet.notes}</p>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  Book Appointment
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  View Medical History
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Pet Modal */}
      <AddPetModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddPet}
      />
    </div>
  );
}

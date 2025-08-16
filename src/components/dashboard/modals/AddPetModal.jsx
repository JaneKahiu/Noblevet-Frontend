import { useState } from 'react';
import { X, PawPrint, Camera, Calendar } from 'lucide-react';

export default function AddPetModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    type: 'dog',
    breed: '',
    age: '',
    weight: '',
    gender: 'male',
    color: '',
    microchipId: '',
    vaccinations: [],
    medicalConditions: '',
    allergies: '',
    medications: '',
    notes: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  const petTypes = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Guinea Pig', 'Hamster', 'Other'];
  const commonVaccinations = ['Rabies', 'DHPP', 'FVRCP', 'Bordetella', 'FeLV'];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({...formData, image: file});
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleVaccinationChange = (vaccination) => {
    const updatedVaccinations = formData.vaccinations.includes(vaccination)
      ? formData.vaccinations.filter(v => v !== vaccination)
      : [...formData.vaccinations, vaccination];
    setFormData({...formData, vaccinations: updatedVaccinations});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      type: 'dog',
      breed: '',
      age: '',
      weight: '',
      gender: 'male',
      color: '',
      microchipId: '',
      vaccinations: [],
      medicalConditions: '',
      allergies: '',
      medications: '',
      notes: '',
      image: null
    });
    setImagePreview(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <PawPrint className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Add New Pet</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Pet Image Upload */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Pet preview" className="w-full h-full object-cover" />
                ) : (
                  <PawPrint className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 p-2 bg-emerald-600 text-white rounded-full cursor-pointer hover:bg-emerald-700 transition-colors">
                <Camera className="h-4 w-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Pet Photo</h3>
              <p className="text-sm text-gray-500">Upload a photo of your pet</p>
            </div>
          </div>

          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                >
                  {petTypes.map((type) => (
                    <option key={type} value={type.toLowerCase()}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
                <input
                  type="text"
                  value={formData.breed}
                  onChange={(e) => setFormData({...formData, breed: e.target.value})}
                  placeholder="e.g., Golden Retriever"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  placeholder="e.g., 3 years, 6 months"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                <input
                  type="text"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  placeholder="e.g., 25 kg"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <input
                  type="text"
                  value={formData.color}
                  onChange={(e) => setFormData({...formData, color: e.target.value})}
                  placeholder="e.g., Golden, Black and White"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Microchip ID</label>
                <input
                  type="text"
                  value={formData.microchipId}
                  onChange={(e) => setFormData({...formData, microchipId: e.target.value})}
                  placeholder="15-digit microchip number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Medical Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Information</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Vaccinations</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {commonVaccinations.map((vaccination) => (
                  <label key={vaccination} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.vaccinations.includes(vaccination)}
                      onChange={() => handleVaccinationChange(vaccination)}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm">{vaccination}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                <textarea
                  value={formData.medicalConditions}
                  onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}
                  rows={3}
                  placeholder="Any ongoing medical conditions..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                <input
                  type="text"
                  value={formData.allergies}
                  onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                  placeholder="Food allergies, environmental allergies, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                <input
                  type="text"
                  value={formData.medications}
                  onChange={(e) => setFormData({...formData, medications: e.target.value})}
                  placeholder="List any current medications..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  rows={3}
                  placeholder="Behavioral notes, special care instructions, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Add Pet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

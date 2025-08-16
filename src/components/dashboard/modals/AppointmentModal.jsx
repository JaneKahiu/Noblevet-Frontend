import { useState } from 'react';
import { X, Calendar, Clock, User, PawPrint, Stethoscope } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, onSubmit, pets = [] }) {
  const [formData, setFormData] = useState({
    petId: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    doctor: '',
    notes: '',
    urgency: 'normal'
  });

  const services = [
    'Annual Checkup',
    'Vaccination',
    'Dental Cleaning',
    'Surgery Consultation',
    'Emergency Visit',
    'Grooming',
    'Behavioral Consultation',
    'Nutritional Consultation'
  ];

  const doctors = [
    'Dr. Smith',
    'Dr. Johnson', 
    'Dr. Brown',
    'Dr. Wilson'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      petId: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      doctor: '',
      notes: '',
      urgency: 'normal'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Book Appointment</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Pet</label>
              <select
                value={formData.petId}
                onChange={(e) => setFormData({...formData, petId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                <option value="">Choose a pet...</option>
                {pets.map((pet) => (
                  <option key={pet.id} value={pet.id}>{pet.name} ({pet.type})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                <option value="">Select service...</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
              <input
                type="time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Doctor</label>
            <select
              value={formData.doctor}
              onChange={(e) => setFormData({...formData, doctor: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">No preference</option>
              {doctors.map((doctor) => (
                <option key={doctor} value={doctor}>{doctor}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
            <div className="grid grid-cols-3 gap-2">
              {['normal', 'urgent', 'emergency'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({...formData, urgency: level})}
                  className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                    formData.urgency === level
                      ? level === 'emergency' 
                        ? 'bg-red-50 border-red-300 text-red-700'
                        : level === 'urgent'
                        ? 'bg-yellow-50 border-yellow-300 text-yellow-700'
                        : 'bg-green-50 border-green-300 text-green-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows={4}
              placeholder="Any additional information about your pet's condition or special requirements..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
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
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

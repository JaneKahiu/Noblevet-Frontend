import { useState } from 'react';
import { 
  Calendar, 
  Plus, 
  Clock, 
  MapPin, 
  User, 
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';

export default function Appointments() {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const appointments = {
    upcoming: [
      {
        id: 1,
        petName: "Fluffy",
        petType: "Cat",
        service: "Annual Checkup",
        date: "2025-08-16",
        time: "10:30 AM",
        doctor: "Dr. Smith",
        status: "confirmed",
        location: "Main Clinic",
        notes: "Regular checkup and vaccination"
      },
      {
        id: 2,
        petName: "Max",
        petType: "Dog",
        service: "Vaccination",
        date: "2025-08-18",
        time: "2:00 PM",
        doctor: "Dr. Johnson",
        status: "pending",
        location: "Branch Office",
        notes: "Annual vaccinations due"
      }
    ],
    past: [
      {
        id: 3,
        petName: "Fluffy",
        petType: "Cat",
        service: "Dental Cleaning",
        date: "2025-08-10",
        time: "9:00 AM",
        doctor: "Dr. Brown",
        status: "completed",
        location: "Main Clinic",
        notes: "Dental cleaning completed successfully"
      }
    ],
    cancelled: [
      {
        id: 4,
        petName: "Bella",
        petType: "Dog",
        service: "Surgery Consultation",
        date: "2025-08-05",
        time: "11:00 AM",
        doctor: "Dr. Wilson",
        status: "cancelled",
        location: "Main Clinic",
        notes: "Cancelled due to emergency"
      }
    ]
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Appointments</h1>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Manage your pet's appointments
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Plus className="h-5 w-5" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <nav className="-mb-px flex space-x-8">
          {Object.keys(appointments).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                selectedTab === tab
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab} ({appointments[tab].length})
            </button>
          ))}
        </nav>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments[selectedTab].map((appointment, index) => (
          <div
            key={appointment.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{appointment.petName}</h3>
                    <p className="text-gray-600">{appointment.petType} - {appointment.service}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(appointment.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{appointment.doctor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{appointment.location}</span>
                  </div>
                  <div className="md:col-span-2 flex items-start space-x-2">
                    <span className="font-medium">Notes:</span>
                    <span>{appointment.notes}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedAppointment(appointment)}
                  className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                >
                  <Eye className="h-4 w-4" />
                </button>
                {appointment.status !== 'completed' && appointment.status !== 'cancelled' && (
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="h-4 w-4" />
                  </button>
                )}
                {appointment.status === 'pending' && (
                  <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {appointments[selectedTab].length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {selectedTab} appointments</h3>
            <p className="text-gray-500 mb-6">You don't have any {selectedTab} appointments at the moment.</p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Book Your First Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

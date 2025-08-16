import { useState } from 'react';
import { 
  Bell, 
  Plus, 
  Calendar, 
  Clock, 
  Heart, 
  Pill, 
  Stethoscope,
  Search,
  Filter,
  Check,
  X,
  Edit,
  Trash2,
  AlertTriangle
} from 'lucide-react';

export default function Reminders() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState('all');

  const reminders = [
    {
      id: 1,
      title: 'Fluffy\'s Annual Checkup',
      description: 'Time for Fluffy\'s yearly health examination and vaccinations',
      petName: 'Fluffy',
      type: 'appointment',
      date: '2025-08-16',
      time: '10:30 AM',
      status: 'active',
      priority: 'high',
      icon: Stethoscope,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 2,
      title: 'Max\'s Medication',
      description: 'Give Max his joint supplement with morning meal',
      petName: 'Max',
      type: 'medication',
      date: '2025-08-15',
      time: '8:00 AM',
      status: 'active',
      priority: 'medium',
      icon: Pill,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 3,
      title: 'Bella\'s Vaccination Due',
      description: 'Bella is due for her annual vaccinations',
      petName: 'Bella',
      type: 'vaccination',
      date: '2025-08-20',
      time: '2:00 PM',
      status: 'active',
      priority: 'high',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Grooming Appointment',
      description: 'Monthly grooming session for all pets',
      petName: 'All Pets',
      type: 'grooming',
      date: '2025-08-25',
      time: '11:00 AM',
      status: 'active',
      priority: 'low',
      icon: Heart,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      title: 'Fluffy\'s Dental Checkup',
      description: 'Completed dental examination and cleaning',
      petName: 'Fluffy',
      type: 'appointment',
      date: '2025-08-10',
      time: '9:00 AM',
      status: 'completed',
      priority: 'medium',
      icon: Stethoscope,
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const tabs = [
    { key: 'all', label: 'All Reminders', count: reminders.length },
    { key: 'active', label: 'Active', count: reminders.filter(r => r.status === 'active').length },
    { key: 'completed', label: 'Completed', count: reminders.filter(r => r.status === 'completed').length },
    { key: 'overdue', label: 'Overdue', count: 0 }
  ];

  const filterReminders = () => {
    if (selectedTab === 'all') return reminders;
    return reminders.filter(reminder => reminder.status === selectedTab);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'appointment':
        return Stethoscope;
      case 'medication':
        return Pill;
      case 'vaccination':
        return Heart;
      default:
        return Bell;
    }
  };

  const reminderTypes = [
    { value: 'appointment', label: 'Appointment', icon: Stethoscope },
    { value: 'medication', label: 'Medication', icon: Pill },
    { value: 'vaccination', label: 'Vaccination', icon: Heart },
    { value: 'grooming', label: 'Grooming', icon: Heart },
    { value: 'feeding', label: 'Feeding', icon: Bell },
    { value: 'exercise', label: 'Exercise', icon: Bell }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Reminders</h1>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Never miss important pet care tasks
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <Plus className="h-5 w-5" />
          <span>Add Reminder</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{reminders.filter(r => r.status === 'active').length}</h3>
              <p className="text-emerald-100">Active</p>
            </div>
            <Bell className="h-8 w-8 text-emerald-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{reminders.filter(r => r.priority === 'high').length}</h3>
              <p className="text-blue-100">High Priority</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-yellow-100">Due Today</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{reminders.filter(r => r.status === 'completed').length}</h3>
              <p className="text-green-100">Completed</p>
            </div>
            <Check className="h-8 w-8 text-green-200" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search reminders..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedTab(tab.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === tab.key
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      {/* Reminders List */}
      <div className="space-y-4">
        {filterReminders().map((reminder, index) => {
          const Icon = reminder.icon;
          return (
            <div
              key={reminder.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${reminder.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{reminder.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(reminder.priority)}`}>
                        {reminder.priority}
                      </span>
                      {reminder.status === 'completed' && (
                        <Check className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{reminder.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{reminder.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{reminder.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>Pet: {reminder.petName}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  {reminder.status === 'active' && (
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Mark as completed">
                      <Check className="h-4 w-4" />
                    </button>
                  )}
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filterReminders().length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <Bell className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {selectedTab} reminders</h3>
            <p className="text-gray-500 mb-6">You don't have any {selectedTab} reminders at the moment.</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Create Your First Reminder
            </button>
          </div>
        )}
      </div>

      {/* Add Reminder Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full animate-fade-in-up">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Add New Reminder</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Reminder title..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Reminder description..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  {reminderTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  Add Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

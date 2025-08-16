import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  Download,
  Filter,
  PawPrint,
  Heart,
  Clock,
  Activity
} from 'lucide-react';

export default function Reports() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportTypes = [
    { key: 'overview', label: 'Overview', icon: BarChart3 },
    { key: 'financial', label: 'Financial Summary', icon: DollarSign },
    { key: 'health', label: 'Health Records', icon: Heart },
    { key: 'appointments', label: 'Appointment History', icon: Calendar }
  ];

  const periods = [
    { key: '3months', label: 'Last 3 Months' },
    { key: '6months', label: 'Last 6 Months' },
    { key: '1year', label: 'Last Year' },
    { key: 'all', label: 'All Time' }
  ];

  const overviewStats = [
    {
      title: 'Total Appointments',
      value: '24',
      change: '+12%',
      trend: 'up',
      color: 'from-blue-500 to-indigo-500',
      icon: Calendar
    },
    {
      title: 'Total Spent',
      value: '$2,450',
      change: '+8%',
      trend: 'up',
      color: 'from-emerald-500 to-teal-500',
      icon: DollarSign
    },
    {
      title: 'Health Score',
      value: '92%',
      change: '+5%',
      trend: 'up',
      color: 'from-green-500 to-emerald-500',
      icon: Heart
    },
    {
      title: 'Active Treatments',
      value: '3',
      change: '-2',
      trend: 'down',
      color: 'from-orange-500 to-red-500',
      icon: Activity
    }
  ];

  const appointmentData = [
    { month: 'Jan', appointments: 4, cost: 320 },
    { month: 'Feb', appointments: 2, cost: 180 },
    { month: 'Mar', appointments: 5, cost: 450 },
    { month: 'Apr', appointments: 3, cost: 280 },
    { month: 'May', appointments: 6, cost: 520 },
    { month: 'Jun', appointments: 4, cost: 380 }
  ];

  const petHealthSummary = [
    {
      name: 'Fluffy',
      type: 'Cat',
      appointments: 8,
      lastVisit: '2025-08-10',
      healthScore: 95,
      treatments: ['Dental Care', 'Vaccinations'],
      totalCost: 840
    },
    {
      name: 'Max',
      type: 'Dog',
      appointments: 12,
      lastVisit: '2025-07-25',
      healthScore: 88,
      treatments: ['Joint Care', 'Regular Checkups'],
      totalCost: 1180
    },
    {
      name: 'Bella',
      type: 'Dog',
      appointments: 4,
      lastVisit: '2025-08-01',
      healthScore: 92,
      treatments: ['Vaccinations'],
      totalCost: 430
    }
  ];

  const recentTreatments = [
    {
      date: '2025-08-10',
      pet: 'Fluffy',
      treatment: 'Dental Cleaning',
      doctor: 'Dr. Brown',
      cost: 200,
      status: 'completed'
    },
    {
      date: '2025-07-25',
      pet: 'Max',
      treatment: 'Joint Supplement Consultation',
      doctor: 'Dr. Johnson',
      cost: 120,
      status: 'completed'
    },
    {
      date: '2025-08-01',
      pet: 'Bella',
      treatment: 'Annual Vaccination',
      doctor: 'Dr. Smith',
      cost: 85,
      status: 'completed'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Reports & Analytics</h1>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Track your pet's health and care history
          </p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Download className="h-5 w-5" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {reportTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.key}
                  onClick={() => setSelectedReport(type.key)}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    selectedReport === type.key
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mb-2" />
                  <div className="text-sm font-medium">{type.label}</div>
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="sm:w-48">
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {periods.map((period) => (
              <option key={period.key} value={period.key}>{period.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        {overviewStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className={`bg-gradient-to-r ${stat.color} rounded-xl p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-white/80" />
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-white/90' : 'text-white/70'
                }`}>
                  <TrendingUp className={`h-4 w-4 ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-white/80 text-sm">{stat.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointment Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Appointment Trends</h3>
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {appointmentData.map((data, index) => (
              <div key={data.month} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 bg-gray-200 rounded-full flex-1 max-w-32">
                        <div 
                          className="h-2 bg-emerald-500 rounded-full" 
                          style={{ width: `${(data.appointments / 6) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{data.appointments}</span>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900">${data.cost}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pet Health Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Pet Health Summary</h3>
          
          <div className="space-y-4">
            {petHealthSummary.map((pet, index) => (
              <div key={pet.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <PawPrint className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{pet.name}</h4>
                      <p className="text-sm text-gray-600">{pet.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${
                      pet.healthScore >= 90 ? 'text-green-600' :
                      pet.healthScore >= 80 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      Health Score: {pet.healthScore}%
                    </div>
                    <div className="text-xs text-gray-500">${pet.totalCost} total</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Appointments:</span>
                    <span className="ml-2 font-medium">{pet.appointments}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Last Visit:</span>
                    <span className="ml-2 font-medium">{pet.lastVisit}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="text-xs text-gray-600 mb-1">Active Treatments:</div>
                  <div className="flex flex-wrap gap-1">
                    {pet.treatments.map((treatment, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Treatments */}
      <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Treatments</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Pet</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Treatment</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Doctor</th>
                <th className="text-right py-3 px-4 font-medium text-gray-600">Cost</th>
                <th className="text-center py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTreatments.map((treatment, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{treatment.date}</td>
                  <td className="py-3 px-4 text-sm font-medium">{treatment.pet}</td>
                  <td className="py-3 px-4 text-sm">{treatment.treatment}</td>
                  <td className="py-3 px-4 text-sm">{treatment.doctor}</td>
                  <td className="py-3 px-4 text-sm text-right font-medium">${treatment.cost}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      {treatment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5 text-gray-600" />
            <span>Export as PDF</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5 text-gray-600" />
            <span>Export as CSV</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="h-5 w-5 text-gray-600" />
            <span>Email Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}

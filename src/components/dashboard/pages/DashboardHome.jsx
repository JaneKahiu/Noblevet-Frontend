import { useState } from 'react';
import { 
  Calendar, 
  PawPrint, 
  CreditCard, 
  MessageSquare, 
  TrendingUp, 
  Heart,
  Clock,
  Plus,
  ArrowRight,
  Bell,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function DashboardHome() {
  const [showQuickActions, setShowQuickActions] = useState(false);

  const stats = [
    {
      title: "Total Pets",
      value: "3",
      icon: PawPrint,
      color: "from-blue-500 to-blue-600",
      change: "+1 this month"
    },
    {
      title: "Upcoming Appointments",
      value: "2",
      icon: Calendar,
      color: "from-emerald-500 to-emerald-600",
      change: "Next: Tomorrow"
    },
    {
      title: "Outstanding Bills",
      value: "$250",
      icon: CreditCard,
      color: "from-orange-500 to-orange-600",
      change: "Due this week"
    },
    {
      title: "Unread Messages",
      value: "5",
      icon: MessageSquare,
      color: "from-purple-500 to-purple-600",
      change: "2 from Dr. Smith"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "appointment",
      title: "Vaccination for Fluffy completed",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      id: 2,
      type: "reminder",
      title: "Checkup reminder for Max tomorrow",
      time: "1 day ago",
      icon: Bell,
      color: "text-blue-500"
    },
    {
      id: 3,
      type: "message",
      title: "New message from Dr. Johnson",
      time: "2 days ago",
      icon: MessageSquare,
      color: "text-purple-500"
    },
    {
      id: 4,
      type: "alert",
      title: "Medication refill needed for Bella",
      time: "3 days ago",
      icon: AlertTriangle,
      color: "text-orange-500"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      petName: "Fluffy",
      type: "Annual Checkup",
      date: "Tomorrow",
      time: "10:30 AM",
      doctor: "Dr. Smith"
    },
    {
      id: 2,
      petName: "Max",
      type: "Vaccination",
      date: "Friday",
      time: "2:00 PM",
      doctor: "Dr. Johnson"
    }
  ];

  const quickActions = [
    { title: "Book Appointment", icon: Calendar, color: "bg-emerald-500" },
    { title: "Add New Pet", icon: PawPrint, color: "bg-blue-500" },
    { title: "View Messages", icon: MessageSquare, color: "bg-purple-500" },
    { title: "Pay Bills", icon: CreditCard, color: "bg-orange-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">Welcome back, John!</h1>
          <p className="text-emerald-100 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Here's what's happening with your pets today
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <Heart className="h-32 w-32 absolute top-4 right-4 animate-pulse" />
          <PawPrint className="h-20 w-20 absolute bottom-8 right-16 animate-bounce" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{stat.title}</p>
              <p className="text-xs text-emerald-600">{stat.change}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <Icon className={`h-5 w-5 mt-1 ${activity.color}`} />
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.title}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border-l-4 border-emerald-500 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{appointment.petName}</h3>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                      {appointment.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{appointment.type}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">{appointment.time}</span>
                    <span className="text-sm text-emerald-600">{appointment.doctor}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
              View All Appointments
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.title}
                    className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-105 group`}
                  >
                    <Icon className="h-6 w-6 mb-2 group-hover:animate-bounce" />
                    <p className="text-xs font-medium">{action.title}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setShowQuickActions(!showQuickActions)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

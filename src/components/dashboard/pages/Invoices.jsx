import { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  Eye, 
  Calendar, 
  DollarSign,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Search,
  Filter,
  Printer
} from 'lucide-react';

export default function Invoices() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const invoices = [
    {
      id: 'INV-2025-001',
      petName: 'Fluffy',
      service: 'Annual Checkup & Vaccination',
      date: '2025-08-10',
      dueDate: '2025-08-24',
      amount: 150.00,
      status: 'paid',
      doctor: 'Dr. Smith',
      items: [
        { description: 'Annual Checkup', quantity: 1, price: 80.00 },
        { description: 'Rabies Vaccination', quantity: 1, price: 40.00 },
        { description: 'FVRCP Vaccination', quantity: 1, price: 30.00 }
      ]
    },
    {
      id: 'INV-2025-002',
      petName: 'Max',
      service: 'Vaccination Package',
      date: '2025-08-12',
      dueDate: '2025-08-26',
      amount: 120.00,
      status: 'pending',
      doctor: 'Dr. Johnson',
      items: [
        { description: 'DHPP Vaccination', quantity: 1, price: 50.00 },
        { description: 'Rabies Vaccination', quantity: 1, price: 40.00 },
        { description: 'Bordetella Vaccination', quantity: 1, price: 30.00 }
      ]
    },
    {
      id: 'INV-2025-003',
      petName: 'Bella',
      service: 'Emergency Visit',
      date: '2025-08-05',
      dueDate: '2025-08-19',
      amount: 250.00,
      status: 'overdue',
      doctor: 'Dr. Brown',
      items: [
        { description: 'Emergency Consultation', quantity: 1, price: 100.00 },
        { description: 'X-Ray', quantity: 2, price: 60.00 },
        { description: 'Medication', quantity: 1, price: 30.00 }
      ]
    },
    {
      id: 'INV-2025-004',
      petName: 'Fluffy',
      service: 'Dental Cleaning',
      date: '2025-07-28',
      dueDate: '2025-08-11',
      amount: 200.00,
      status: 'cancelled',
      doctor: 'Dr. Wilson',
      items: [
        { description: 'Dental Cleaning', quantity: 1, price: 150.00 },
        { description: 'Anesthesia', quantity: 1, price: 50.00 }
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'overdue':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-gray-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'overdue':
        return 'bg-red-100 text-red-700';
      case 'cancelled':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filterInvoices = () => {
    if (selectedTab === 'all') return invoices;
    return invoices.filter(invoice => invoice.status === selectedTab);
  };

  const getTotalAmount = (status) => {
    const filtered = status === 'all' ? invoices : invoices.filter(inv => inv.status === status);
    return filtered.reduce((sum, inv) => sum + inv.amount, 0).toFixed(2);
  };

  const tabs = [
    { key: 'all', label: 'All Invoices', count: invoices.length },
    { key: 'pending', label: 'Pending', count: invoices.filter(inv => inv.status === 'pending').length },
    { key: 'paid', label: 'Paid', count: invoices.filter(inv => inv.status === 'paid').length },
    { key: 'overdue', label: 'Overdue', count: invoices.filter(inv => inv.status === 'overdue').length },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 animate-fade-in-up">Invoices</h1>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Manage your veterinary bills and payments
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">${getTotalAmount('all')}</h3>
              <p className="text-emerald-100">Total Amount</p>
            </div>
            <DollarSign className="h-8 w-8 text-emerald-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">${getTotalAmount('pending')}</h3>
              <p className="text-yellow-100">Pending</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">${getTotalAmount('paid')}</h3>
              <p className="text-green-100">Paid</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-white animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">${getTotalAmount('overdue')}</h3>
              <p className="text-red-100">Overdue</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-200" />
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search invoices..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
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

      {/* Invoices List */}
      <div className="space-y-4">
        {filterInvoices().map((invoice, index) => (
          <div
            key={invoice.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{invoice.id}</h3>
                    <p className="text-gray-600">{invoice.petName} - {invoice.service}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(invoice.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Date: {invoice.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Due: {invoice.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">${invoice.amount.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Doctor: {invoice.doctor}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedInvoice(invoice)}
                  className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="View Details"
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download PDF">
                  <Download className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors" title="Print">
                  <Printer className="h-4 w-4" />
                </button>
                {invoice.status === 'pending' || invoice.status === 'overdue' ? (
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors">
                    Pay Now
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}

        {filterInvoices().length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <CreditCard className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {selectedTab} invoices</h3>
            <p className="text-gray-500">You don't have any {selectedTab} invoices at the moment.</p>
          </div>
        )}
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Invoice Details</h2>
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Invoice Information</h3>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Invoice ID:</span> {selectedInvoice.id}</div>
                    <div><span className="text-gray-600">Date:</span> {selectedInvoice.date}</div>
                    <div><span className="text-gray-600">Due Date:</span> {selectedInvoice.dueDate}</div>
                    <div><span className="text-gray-600">Pet:</span> {selectedInvoice.petName}</div>
                    <div><span className="text-gray-600">Doctor:</span> {selectedInvoice.doctor}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Status</h3>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(selectedInvoice.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedInvoice.status)}`}>
                      {selectedInvoice.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Items</h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="text-left p-3 text-sm font-semibold text-gray-900">Description</th>
                        <th className="text-right p-3 text-sm font-semibold text-gray-900">Qty</th>
                        <th className="text-right p-3 text-sm font-semibold text-gray-900">Price</th>
                        <th className="text-right p-3 text-sm font-semibold text-gray-900">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice.items.map((item, index) => (
                        <tr key={index} className="border-t border-gray-200">
                          <td className="p-3 text-sm">{item.description}</td>
                          <td className="p-3 text-sm text-right">{item.quantity}</td>
                          <td className="p-3 text-sm text-right">${item.price.toFixed(2)}</td>
                          <td className="p-3 text-sm text-right font-medium">${(item.quantity * item.price).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-100 border-t-2 border-gray-300">
                      <tr>
                        <td colSpan="3" className="p-3 text-sm font-semibold text-right">Total Amount:</td>
                        <td className="p-3 text-lg font-bold text-right">${selectedInvoice.amount.toFixed(2)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
                {(selectedInvoice.status === 'pending' || selectedInvoice.status === 'overdue') && (
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

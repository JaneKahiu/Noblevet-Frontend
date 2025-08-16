import { AlertTriangle, CheckCircle, X, Trash2 } from 'lucide-react';

export default function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  type = 'warning',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmButtonClass = ''
}) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-12 w-12 text-green-500" />;
      case 'danger':
        return <Trash2 className="h-12 w-12 text-red-500" />;
      case 'warning':
      default:
        return <AlertTriangle className="h-12 w-12 text-yellow-500" />;
    }
  };

  const getDefaultButtonClass = () => {
    switch (type) {
      case 'success':
        return 'bg-green-600 hover:bg-green-700';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700';
      case 'warning':
      default:
        return 'bg-yellow-600 hover:bg-yellow-700';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full animate-scale-in">
        <div className="p-6 text-center">
          <div className="flex justify-center mb-4">
            {getIcon()}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors ${
                confirmButtonClass || getDefaultButtonClass()
              }`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

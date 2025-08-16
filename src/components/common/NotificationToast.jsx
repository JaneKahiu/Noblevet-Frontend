import { useState, useEffect } from 'react';
import { CheckCircle, X, AlertTriangle, Info, XCircle } from 'lucide-react';

export default function NotificationToast({ 
  isVisible, 
  onClose, 
  type = 'success', 
  title, 
  message, 
  duration = 5000,
  position = 'top-right'
}) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 300);
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-l-green-500';
      case 'error':
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'info':
        return 'border-l-blue-500';
      default:
        return 'border-l-gray-500';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      default:
        return 'top-4 right-4';
    }
  };

  if (!isVisible && !isExiting) return null;

  return (
    <div 
      className={`fixed z-50 ${getPositionClasses()} transition-all duration-300 ${
        isExiting 
          ? 'opacity-0 transform translate-x-full' 
          : 'opacity-100 transform translate-x-0'
      }`}
    >
      <div className={`bg-white rounded-lg shadow-2xl border-l-4 ${getBorderColor()} max-w-sm w-full`}>
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {getIcon()}
            </div>
            <div className="ml-3 flex-1">
              {title && <h4 className="text-sm font-semibold text-gray-900">{title}</h4>}
              {message && <p className="text-sm text-gray-600 mt-1">{message}</p>}
            </div>
            <button
              onClick={handleClose}
              className="ml-4 flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className={`h-1 bg-gray-200 rounded-b-lg overflow-hidden`}>
          <div 
            className={`h-full ${
              type === 'success' ? 'bg-green-500' :
              type === 'error' ? 'bg-red-500' :
              type === 'warning' ? 'bg-yellow-500' :
              type === 'info' ? 'bg-blue-500' : 'bg-gray-500'
            } animate-pulse`}
            style={{
              animation: `shrink ${duration}ms linear forwards`
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}

// Toast Container Component
export function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className="pointer-events-auto"
          style={{ zIndex: 1000 + index }}
        >
          <NotificationToast
            {...toast}
            isVisible={true}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
}

// Hook for managing toasts
export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const showSuccess = (title, message) => addToast({ type: 'success', title, message });
  const showError = (title, message) => addToast({ type: 'error', title, message });
  const showWarning = (title, message) => addToast({ type: 'warning', title, message });
  const showInfo = (title, message) => addToast({ type: 'info', title, message });

  return {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
}

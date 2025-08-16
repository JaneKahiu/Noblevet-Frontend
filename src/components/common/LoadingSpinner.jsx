import { Heart, Stethoscope } from 'lucide-react';

export default function LoadingSpinner({ size = 'md', text = 'Loading...', fullScreen = false }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const LoadingContent = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {/* Spinning ring */}
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-3 border-gray-200 border-t-emerald-600`}></div>
        
        {/* Pulsing heart in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-5 h-5'} text-emerald-600 animate-pulse`} />
        </div>
      </div>
      
      {text && (
        <p className={`text-gray-600 font-medium animate-pulse ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-6">
            <div className="relative mx-auto w-20 h-20">
              <div className="w-20 h-20 animate-spin rounded-full border-4 border-gray-200 border-t-emerald-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  <Heart className="w-6 h-6 text-emerald-600 animate-pulse" />
                  <Stethoscope className="w-5 h-5 text-teal-600 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">NobleVet</h3>
          <p className="text-gray-600 animate-pulse">{text}</p>
        </div>
      </div>
    );
  }

  return <LoadingContent />;
}

// Skeleton loader for cards
export function SkeletonCard({ className = '' }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 animate-pulse ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
}

// Skeleton loader for table rows
export function SkeletonTableRow({ columns = 4 }) {
  return (
    <tr className="animate-pulse">
      {Array.from({ length: columns }).map((_, index) => (
        <td key={index} className="px-6 py-4">
          <div className="h-4 bg-gray-300 rounded"></div>
        </td>
      ))}
    </tr>
  );
}

// Button loading state
export function LoadingButton({ 
  children, 
  isLoading, 
  onClick, 
  className = '', 
  disabled = false,
  loadingText = 'Loading...'
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative ${className} ${
        isLoading || disabled ? 'opacity-75 cursor-not-allowed' : ''
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

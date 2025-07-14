import React from 'react';
import { Loader2 } from 'lucide-react';

export const Button = ({
  onClick,
  children,
  className = '',
  disabled = false,
  isLoading = false,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      className={`
        px-4 py-2 rounded-lg font-medium text-center
        transition-all duration-200 ease-in-out
        flex items-center justify-center gap-2
        ${isLoading ? 'cursor-not-allowed opacity-70' : ''}
        ${disabled ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}
        ${className}
      `}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};
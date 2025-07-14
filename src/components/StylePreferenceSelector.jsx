import React from 'react';

export const StylePreferenceSelector = ({
  currentStyle,
  onSelectStyle,
  disabled = false
}) => {
  const styles = [
    'modern', 'classic', 'minimalist', 'bold',
    'elegant', 'creative', 'corporate', 'playful'
  ];

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        Website Style Preference
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {styles.map(style => (
          <button
            key={style}
            type="button"
            onClick={() => onSelectStyle(style)}
            className={`p-3 rounded-lg border text-sm font-medium capitalize text-gray-700 transition-all duration-200
              ${currentStyle === style
                ? 'border-blue-600 bg-blue-50 text-blue-800 shadow-md scale-105'
                : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'
              }
              ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
            `}
            disabled={disabled}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
};
import React from 'react';

export const StylePreferenceSelector = ({ currentStyle, onSelectStyle, disabled }) => {
  const styles = ['modern', 'classic', 'minimalist', 'bold', 'elegant', 'creative', 'corporate', 'playful'];

  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 mb-2">Website Style Preference</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {styles.map(style => (
          <button
            key={style}
            type="button"
            onClick={() => onSelectStyle(style)}
            disabled={disabled}
            className={`p-3 rounded-lg border text-sm font-medium capitalize transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500
              ${currentStyle === style
                ? 'border-blue-600 bg-blue-100 text-blue-800 shadow-md ring-2 ring-blue-500'
                : 'border-slate-300 bg-slate-50 text-slate-600 hover:border-blue-500 hover:bg-white'
              }
              ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
            `}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
};
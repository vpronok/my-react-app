import React from 'react';

export const SelectInput = ({
  label,
  value,
  onChange,
  options,
  id,
  required = false,
  disabled = false,
  className = ''
}) => {
  return (
    <div>
      {/* The label is now only rendered if it exists */}
      {label && (
        <label htmlFor={id} className="block text-sm font-semibold text-slate-800 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-2 border border-slate-300 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      >
        {/* THE FIX: Check if label exists before using it. */}
        <option value="">{`Select ${ (label || '').toLowerCase().replace(' *', '')}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
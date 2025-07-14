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
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-200 appearance-none ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${className}`}
      >
        <option value="">{`Select ${label.toLowerCase().replace(' *', '')}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
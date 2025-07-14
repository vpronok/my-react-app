import React from 'react';

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  id,
  type = 'text',
  required = false,
  rows,
  disabled = false,
  className = ''
}) => {
  const InputElement = rows ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-800 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <InputElement
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        disabled={disabled}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${
          rows ? 'resize-y' : ''
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${className}`}
      />
    </div>
  );
};
import React from 'react';
import { Palette, Type, RefreshCw } from 'lucide-react';

export const DesignPanel = ({ theme, onUpdateTheme }) => {
  const { colors = {}, fonts = {} } = theme || {};
  
  const availableFonts = [
    { value: 'Inter, sans-serif', label: 'Inter (Modern)' }, { value: 'Roboto, sans-serif', label: 'Roboto (Clean)' },
    { value: 'Merriweather, serif', label: 'Merriweather (Classic)' }, { value: 'Playfair Display, serif', label: 'Playfair Display (Elegant)' },
  ];

  const handleColorChange = (colorName, value) => onUpdateTheme(`theme.colors.${colorName}`, value);
  const handleFontChange = (fontType, value) => onUpdateTheme(`theme.fonts.${fontType}`, value);

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><Palette /> Design Settings</h2>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Colors</h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(colors).map(([name, value]) => (
            <div key={name}>
              <label className="capitalize text-sm font-medium">{name}</label>
              <input type="color" value={value} onChange={(e) => handleColorChange(name, e.target.value)} className="w-full h-10 mt-1 rounded"/>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Fonts</h3>
        <div>
          <label htmlFor="heading-font" className="text-sm font-medium">Heading Font</label>
          <select id="heading-font" value={fonts.heading || ''} onChange={(e) => handleFontChange('heading', e.target.value)} className="w-full mt-1 p-2 border rounded-lg bg-white">
            {availableFonts.map(font => <option key={font.value} value={font.value}>{font.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="body-font" className="text-sm font-medium">Body Font</label>
          <select id="body-font" value={fonts.body || ''} onChange={(e) => handleFontChange('body', e.target.value)} className="w-full mt-1 p-2 border rounded-lg bg-white">
            {availableFonts.map(font => <option key={font.value} value={font.value}>{font.label}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};
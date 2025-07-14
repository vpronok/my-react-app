import React, { useState, useEffect } from 'react';
import { Type, Edit } from 'lucide-react';

export const ContentPanel = ({ content, onUpdateContent }) => {
  const [editedContent, setEditedContent] = useState({});

  useEffect(() => {
    // Flatten content for easy state management
    const flatten = (obj, prefix = '') => Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) Object.assign(acc, flatten(obj[k], pre + k));
      else acc[pre + k] = obj[k];
      return acc;
    }, {});
    setEditedContent(flatten(content || {}));
  }, [content]);

  const handleChange = (path, value) => {
    setEditedContent(prev => ({ ...prev, [path]: value }));
    onUpdateContent(`content.${path}`, value);
  };
  
  const renderField = (path, label, options = {}) => (
    <div key={path}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={editedContent[path] || ''}
        onChange={(e) => handleChange(path, e.target.value)}
        rows={options.rows || 2}
        className="w-full p-2 border border-gray-300 rounded-lg resize-y"
      />
    </div>
  );

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><Type /> Content Editor</h2>
      <div className="space-y-4">
        {renderField('homepage.hero.title', 'Homepage Hero Title')}
        {renderField('homepage.hero.subtitle', 'Homepage Hero Subtitle')}
        {renderField('homepage.about.content', 'Homepage About Content', {rows: 4})}
        {renderField('about.content', 'About Page Content', {rows: 6})}
      </div>
    </div>
  );
};
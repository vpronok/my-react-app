import React from 'react';
import { Layout, Rows, Columns } from 'lucide-react';

export const LayoutPanel = ({ layout, onUpdateLayout }) => {
  const { header = {}, footer = {} } = layout || {};

  const headerTypes = [ { value: 'centered-logo-nav', label: 'Centered Nav' }, { value: 'left-logo-right-nav', label: 'Split Nav' } ];
  const footerTypes = [ { value: 'simple-copyright', label: 'Simple Copyright' }, { value: 'multi-column-social', label: 'Multi-Column' } ];

  const renderSelector = (title, items, currentType, path) => (
    <div>
        <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
        <div className="grid grid-cols-2 gap-2">
            {items.map(type => (
                <button
                    key={type.value}
                    onClick={() => onUpdateLayout(path, type.value)}
                    className={`p-3 rounded-lg border text-center ${currentType === type.value ? 'border-blue-600 bg-blue-50' : 'bg-white'}`}
                >
                    {type.label}
                </button>
            ))}
        </div>
    </div>
  );

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><Layout /> Layout Structure</h2>
      {renderSelector('Header Layout', headerTypes, header.type, 'layout.header.type')}
      {renderSelector('Footer Layout', footerTypes, footer.type, 'layout.footer.type')}
    </div>
  );
};
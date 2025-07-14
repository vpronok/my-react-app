import React from 'react';
import { Monitor, Tablet, Smartphone, Download } from 'lucide-react';
import { Button } from '../button'; // Using the reusable Button component

export const PreviewControls = ({
  previewMode,
  onSetPreviewMode,
  onExport,
  businessName
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Device Preview Mode Buttons */}
      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 shadow-sm">
        <button
          onClick={() => onSetPreviewMode('desktop')}
          className={`p-2 rounded-md transition-colors ${
            previewMode === 'desktop' ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:bg-gray-200'
          }`}
          title="Desktop View"
        >
          <Monitor className="h-5 w-5" />
        </button>
        <button
          onClick={() => onSetPreviewMode('tablet')}
          className={`p-2 rounded-md transition-colors ${
            previewMode === 'tablet' ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:bg-gray-200'
          }`}
          title="Tablet View"
        >
          <Tablet className="h-5 w-5" />
        </button>
        <button
          onClick={() => onSetPreviewMode('mobile')}
          className={`p-2 rounded-md transition-colors ${
            previewMode === 'mobile' ? 'bg-white shadow text-blue-600' : 'text-gray-600 hover:bg-gray-200'
          }`}
          title="Mobile View"
        >
          <Smartphone className="h-5 w-5" />
        </button>
      </div>

      {/* Export to WordPress Button */}
      <Button onClick={onExport} className="bg-green-600 hover:bg-green-700">
        <Download className="h-5 w-5" />
        Export to WordPress
      </Button>
    </div>
  );
};
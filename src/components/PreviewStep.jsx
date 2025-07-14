import React, { useState } from 'react';
import { PreviewControls } from './preview/PreviewControls';
import { CustomizationSidebar } from './preview/CustomizationSidebar';
import { WebsitePreviewFrame } from './preview/WebsitePreviewFrame';
import { CustomizationPanel } from './preview/CustomizationPanel';

export const PreviewStep = ({ projectData, generatedContent, onExport, onUpdateGeneratedContent }) => {
  const [activeTab, setActiveTab] = useState('design');
  const [previewMode, setPreviewMode] = useState('desktop');

  // Guard clause for when content is not yet available
  if (!generatedContent) {
    return (
        <div className="flex items-center justify-center h-full">
            <p>Loading Preview...</p>
        </div>
    );
  }

  return (
    <div className="space-y-6 flex flex-col h-full">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Review & Customize</h2>
          <p className="text-gray-600">Your AI-generated website is ready. Make adjustments below.</p>
        </div>
        <PreviewControls
          previewMode={previewMode}
          onSetPreviewMode={setPreviewMode}
          onExport={onExport}
          businessName={projectData.businessName}
        />
      </div>

      <div className="flex flex-grow gap-6" style={{ height: 'calc(100vh - 200px)'}}>
        <aside className="w-1/4 min-w-[300px]">
          <CustomizationSidebar activeTab={activeTab} onSetActiveTab={setActiveTab} />
        </aside>
        
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden h-3/5">
            <WebsitePreviewFrame
              generatedContent={generatedContent}
              projectData={projectData}
              previewMode={previewMode}
            />
          </div>

          <div className="flex-grow bg-white rounded-lg shadow-md overflow-y-auto h-2/5">
            {/* The onUpdate function is now passed directly */}
            <CustomizationPanel
              activeTab={activeTab}
              generatedContent={generatedContent}
              onUpdate={onUpdateGeneratedContent}
              projectData={projectData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
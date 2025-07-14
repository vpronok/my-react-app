import React from 'react';

// These imports will cause errors until you complete Step 2
import { DesignPanel } from './customizationPanels/DesignPanel';
import { ContentPanel } from './customizationPanels/ContentPanel';
import { LayoutPanel } from './customizationPanels/LayoutPanel';
import { SEOSettingsPanel } from './customizationPanels/SEOSettingsPanel';

export const CustomizationPanel = ({ activeTab, generatedContent, onUpdate, projectData }) => {
  const { theme, content, layout, seoData } = generatedContent;

  const renderPanelContent = () => {
    switch (activeTab) {
      case 'design': 
        return <DesignPanel theme={theme} onUpdate={onUpdate} />;
      case 'content': 
        return <ContentPanel content={content} onUpdate={onUpdate} />;
      case 'layout': 
        return <LayoutPanel layout={layout} onUpdate={onUpdate} />;
      case 'seo': 
        return <SEOSettingsPanel seoData={seoData} onUpdate={onUpdate} projectData={projectData} />;
      default: 
        return (
          <div className="p-6 text-center text-gray-500">
            <p>Select a customization option from the sidebar to begin editing.</p>
          </div>
        );
    }
  };

  return <div className="h-full">{renderPanelContent()}</div>;
};
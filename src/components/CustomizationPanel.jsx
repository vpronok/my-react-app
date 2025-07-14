import React from 'react';
import { DesignPanel } from './customizationPanels/DesignPanel';
import { ContentPanel } from './customizationPanels/ContentPanel';
import { LayoutPanel } from './customizationPanels/LayoutPanel';
import { SEOSettingsPanel } from './customizationPanels/SEOSettingsPanel';

export const CustomizationPanel = ({ activeTab, generatedContent, onUpdate, projectData }) => {
  const { theme, content, layout, seoData } = generatedContent;

  const renderPanelContent = () => {
    switch (activeTab) {
      case 'design': return <DesignPanel theme={theme} onUpdateTheme={onUpdate} />;
      case 'content': return <ContentPanel content={content} onUpdateContent={onUpdate} />;
      case 'layout': return <LayoutPanel layout={layout} onUpdateLayout={onUpdate} />;
      case 'seo': return <SEOSettingsPanel seoData={seoData} onUpdateSEO={onUpdate} projectData={projectData} />;
      default: return <div className="p-4 text-center text-gray-500">Select a customization option.</div>;
    }
  };

  return <div className="h-full">{renderPanelContent()}</div>;
};
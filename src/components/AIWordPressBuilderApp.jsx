import React, { useState } from 'react';

import { InputStep } from './InputStep';
import { GeneratingStep } from './GeneratingStep';
import { PreviewStep } from './PreviewStep';
import { Header } from './Header';

// A safe utility to set a value in a nested object.
const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return obj;
};

const AIWordPressBuilderApp = () => {
  const [currentStep, setCurrentStep] = useState('input');
  const [projectData, setProjectData] = useState({
    businessType: '',
    businessName: '',
    description: '',
    targetAudience: '',
    goals: '',
    colorPreference: '',
    stylePreference: 'modern'
  });
  const [generatedContent, setGeneratedContent] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // ==================================================================
  // FIX: ADDING THE MISSING HANDLER FUNCTIONS BACK IN
  // ==================================================================

  const handleInputChange = (field, value) => {
    setProjectData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const callGoogleAIBackend = async (data, type) => {
    console.log(`Calling backend for AI generation (type: ${type}) with data:`, data);
    await new Promise(resolve => setTimeout(resolve, 2500 + Math.random() * 1000));

    const mockResponses = {
      content: { homepage: { hero: { title: `Welcome to ${data.businessName || 'Your Business'}`, subtitle: `Professional ${data.businessType || 'services'} tailored for you.`, cta: 'Get Started' }, about: { title: 'About Our Company', content: `We are a leading ${data.businessType || 'company'} dedicated to exceptional service.` }, services: { title: 'Our Services', items: [`Premium ${data.businessType || 'Solutions'}`, 'Expert Consultation', 'Seamless Implementation'] } } },
      theme: { colors: { primary: '#2563eb', secondary: '#64748b', accent: '#f59e0b', background: '#ffffff', text: '#1f2937' }, fonts: { heading: 'Inter, sans-serif', body: 'Inter, sans-serif' }, style: data.stylePreference },
      layout: { header: { type: 'centered-logo-nav', navigation: ['Home', 'About', 'Services', 'Contact'] }, footer: { type: 'simple-copyright' }, pages: ['home', 'about', 'services', 'contact'] },
      seoData: { homepage: { metaTitle: `${data.businessName}`, metaDescription: data.description }, about: {}, services: {}, contact: {} }
    };
    return mockResponses[type];
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setCurrentStep('generating');

    try {
      const [content, theme, layout, seoData] = await Promise.all([
        callGoogleAIBackend(projectData, 'content'),
        callGoogleAIBackend(projectData, 'theme'),
        callGoogleAIBackend(projectData, 'layout'),
        callGoogleAIBackend(projectData, 'seoData')
      ]);

      setGeneratedContent({ pages: layout.pages, theme, layout, content, seoData });
      setCurrentStep('preview');
    } catch (error) {
      console.error('Website generation failed:', error);
      alert('Failed to generate website. Please try again.');
      setCurrentStep('input');
    } finally {
      setIsGenerating(false);
    }
  };

  const exportToWordPress = () => {
    console.log('Initiating WordPress export...');
    const wpExportData = {
      themeConfig: generatedContent.theme,
      pagesContent: generatedContent.content,
      layoutStructure: generatedContent.layout,
      seoConfig: generatedContent.seoData,
      projectMetadata: projectData,
      generatedAt: new Date().toISOString()
    };
    const dataStr = JSON.stringify(wpExportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const filename = `${projectData.businessName.toLowerCase().replace(/\s/g, '-') || 'my-ai-website'}-data.json`;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Your WordPress export file has been downloaded!');
  };

  const handleUpdateGeneratedContent = (path, value) => {
    setGeneratedContent(prevContent => {
      const newContent = JSON.parse(JSON.stringify(prevContent));
      setNestedValue(newContent, path, value);
      return newContent;
    });
  };

  // ==================================================================

  const renderContent = () => {
    switch (currentStep) {
      case 'input':
        // This line will now work correctly
        return <InputStep projectData={projectData} onInputChange={handleInputChange} onGenerate={handleGenerate} isGenerating={isGenerating} />;
      case 'generating':
        return <GeneratingStep message="We're crafting your unique design, content, and layout..." />;
      case 'preview':
        return <PreviewStep projectData={projectData} generatedContent={generatedContent} onExport={exportToWordPress} onUpdateGeneratedContent={handleUpdateGeneratedContent} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 w-full">
        {renderContent()}
      </main>
    </div>
  );
};

export default AIWordPressBuilderApp;
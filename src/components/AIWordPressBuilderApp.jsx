import React, { useState } from 'react';

import { InputStep } from './InputStep';
import { GeneratingStep } from './GeneratingStep';
import { PreviewStep } from './PreviewStep';
import { Header } from './Header';

// The nested value utility is still useful for the preview step customization
const setNestedValue = (obj, path, value) => {
    // ... (keep the same setNestedValue function from before)
};

const AIWordPressBuilderApp = () => {
  const [currentStep, setCurrentStep] = useState('input');
  // State is now much simpler at the start!
  const [projectDescription, setProjectDescription] = useState('');
  const [projectData, setProjectData] = useState(null); // Will hold the AI-extracted data
  const [generatedContent, setGeneratedContent] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // This is a NEW mock function that simulates the advanced AI backend
  const callAdvancedAIBackend = async (description) => {
    console.log("Calling ADVANCED backend with description:", description);
    await new Promise(resolve => setTimeout(resolve, 3500)); // Simulate a longer thinking time

    // --- MOCK AI EXTRACTION AND GENERATION ---
    // In a real backend, your prompt would ask the LLM to return a JSON object like this.
    const extractedData = {
      businessName: 'The Cozy Corner',
      businessType: 'Cafe',
      description: "A small, rustic cafe in downtown Toronto selling artisanal coffee, fresh pastries, and light sandwiches.",
      targetAudience: 'Young professionals and students',
      goals: 'Show menu and location to attract foot traffic',
      stylePreference: 'elegant',
      colorPreference: 'warm, earthy tones',
    };

    // The backend now generates everything based on the extractedData
    const fullSite = {
      projectData: extractedData,
      generatedContent: {
        theme: { colors: { primary: '#854d0e', secondary: '#f5f5f4', accent: '#facc15', background: '#fafaf9', text: '#292524' }, fonts: { heading: 'Playfair Display, serif', body: 'Inter, sans-serif' } },
        layout: { header: { navigation: ['Home', 'Menu', 'Our Story', 'Contact'] }, footer: { type: 'simple-copyright' } },
        content: {
          homepage: { hero: { title: "Welcome to The Cozy Corner", subtitle: "Your quiet escape in the heart of the city.", cta: "View Our Menu" }, about: { title: "Our Story", content: "Born from a love for good coffee and warm spaces, The Cozy Corner is a haven for thinkers, dreamers, and friends." } },
          about: { title: "About The Cozy Corner", content: "We believe in simple pleasures: a perfectly brewed coffee, a freshly-baked pastry, and a comfortable chair to enjoy them in." },
        },
        seoData: { homepage: { metaTitle: "The Cozy Corner - Artisanal Cafe in Toronto", metaDescription: "Discover The Cozy Corner, a rustic cafe offering artisanal coffee and fresh pastries. A perfect spot to work or relax." } }
      }
    };
    // -------------------------------------------

    return fullSite;
  };

  // The generate handler is now simpler
  const handleGenerate = async (description) => {
    setIsGenerating(true);
    setProjectDescription(description); // Save the original description
    setCurrentStep('generating');

    try {
      // Send the single description, get the whole site back
      const { projectData: extractedData, generatedContent: siteContent } = await callAdvancedAIBackend(description);

      setProjectData(extractedData); // Save the AI-extracted data
      setGeneratedContent(siteContent); // Save the generated site content
      setCurrentStep('preview');

    } catch (error) {
      console.error('Website generation failed:', error);
      alert('Failed to generate website. Please try again.');
      setCurrentStep('input');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUpdateGeneratedContent = (path, value) => {
    // This function for the preview step remains the same
    // ...
  };
  
  const exportToWordPress = () => {
    // This function also remains largely the same
    // ...
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'input':
        // InputStep now only needs onGenerate and isGenerating
        return <InputStep onGenerate={handleGenerate} isGenerating={isGenerating} />;
      case 'generating':
        return <GeneratingStep message="Our AI is analyzing your vision and building your custom website..." />;
      case 'preview':
        return <PreviewStep projectData={projectData} generatedContent={generatedContent} onExport={exportToWordPress} onUpdateGeneratedContent={handleUpdateGeneratedContent} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto max-w-7xl px-4 lg:px-8 py-8 w-full">
        {renderContent()}
      </main>
    </div>
  );
};

export default AIWordPressBuilderApp;
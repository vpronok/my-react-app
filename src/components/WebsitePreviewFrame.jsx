import React from 'react';
import { WebsiteHeader } from './websiteSections/WebsiteHeader';
import { HeroSection } from './websiteSections/HeroSection';
import { AboutSection } from './websiteSections/AboutSection';
import { ServicesSection } from './websiteSections/ServicesSection';
import { ContactSection } from './websiteSections/ContactSection';
import { WebsiteFooter } from './websiteSections/WebsiteFooter';

export const WebsitePreviewFrame = ({ generatedContent, previewMode, projectData }) => {
  const { theme, layout, content } = generatedContent;

  const previewWidth = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  }[previewMode];

  const rootStyles = {
    '--primary-color': theme?.colors?.primary || '#2563eb',
    '--secondary-color': theme?.colors?.secondary || '#64748b',
    '--accent-color': theme?.colors?.accent || '#f59e0b',
    '--background-color': theme?.colors?.background || '#ffffff',
    '--text-color': theme?.colors?.text || '#1f2937',
    '--heading-font': theme?.fonts?.heading || 'Inter, sans-serif',
    '--body-font': theme?.fonts?.body || 'Inter, sans-serif',
  };

  return (
    <div className="h-full w-full bg-gray-200 overflow-hidden flex items-center justify-center">
        <div
            className={`relative h-full overflow-y-auto border-8 border-gray-800 rounded-lg shadow-2xl transition-all duration-300 mx-auto bg-white ${previewWidth}`}
            style={rootStyles}
        >
            <WebsiteHeader data={content?.homepage?.hero} layoutConfig={layout?.header} businessName={projectData.businessName} />
            <main>
                <HeroSection data={content?.homepage?.hero} businessName={projectData.businessName} />
                <AboutSection data={content?.homepage?.about} />
                <ServicesSection data={content?.homepage?.services} />
                <ContactSection data={content?.contact} />
            </main>
            <WebsiteFooter layoutConfig={layout?.footer} businessName={projectData.businessName} />
        </div>
    </div>
  );
};
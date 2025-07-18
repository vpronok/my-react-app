import React from 'react';
// (Keep all imports)

export const WebsitePreviewFrame = ({ generatedContent, previewMode, projectData }) => {
  // (Keep all logic)
  const { theme, layout, content } = generatedContent;
  const previewWidth = { desktop: 'w-full', tablet: 'w-[768px]', mobile: 'w-[375px]' }[previewMode];
  const rootStyles = { /* ... (keep this) ... */ };

  return (
    <div className="h-full w-full bg-slate-800 overflow-hidden flex items-center justify-center p-4 transition-all duration-500">
      <div className={`relative h-full overflow-hidden border-[14px] border-black bg-black rounded-3xl shadow-2xl transition-all duration-500 ease-in-out mx-auto ${previewWidth}`} style={rootStyles}>
        {/* Device Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-black rounded-b-lg z-20"></div>
        {/* Screen Content */}
        <div className="overflow-y-auto h-full w-full bg-white">
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
    </div>
  );
};
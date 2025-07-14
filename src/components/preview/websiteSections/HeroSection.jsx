import React from 'react';

export const HeroSection = ({ data, businessName }) => {
  const { title, subtitle, cta } = data || {};
  return (
    <section className="py-24 text-center" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold" style={{ fontFamily: 'var(--heading-font)' }}>{title || `Welcome to ${businessName}`}</h1>
        <p className="text-xl mt-4 opacity-90">{subtitle || 'Your journey to success starts here.'}</p>
        <button className="mt-8 px-8 py-3 rounded-full font-semibold" style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}>{cta || 'Learn More'}</button>
      </div>
    </section>
  );
};
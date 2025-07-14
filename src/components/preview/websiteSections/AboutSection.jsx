import React from 'react';

export const AboutSection = ({ data }) => {
  const { title, content } = data || {};
  if (!title && !content) return null;
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-color)', fontFamily: 'var(--heading-font)' }}>{title || 'About Us'}</h2>
        <p className="text-lg leading-relaxed">{content || 'A leading provider in our industry, dedicated to innovation and customer satisfaction.'}</p>
      </div>
    </section>
  );
};
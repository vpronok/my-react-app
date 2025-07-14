import React from 'react';

export const WebsiteHeader = ({ layoutConfig, businessName }) => {
  const { navigation = ['Home', 'About', 'Services'] } = layoutConfig || {};
  return (
    <header className="py-4 shadow-sm" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold" style={{ color: 'var(--primary-color)', fontFamily: 'var(--heading-font)' }}>
          {businessName || 'Your Business'}
        </div>
        <nav className="flex items-center gap-6">
          {navigation.map(item => (
            <a key={item} href="#" className="font-medium hover:text-opacity-80" style={{ color: 'var(--text-color)' }}>{item}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};
import React from 'react';

export const WebsiteFooter = ({ layoutConfig, businessName }) => {
  // Placeholder - Build this out later
  return (
    <footer className="py-6 text-center text-sm" style={{backgroundColor: '#f8f9fa'}}>
        <p>© {new Date().getFullYear()} {businessName}. All Rights Reserved.</p>
    </footer>
  );
};
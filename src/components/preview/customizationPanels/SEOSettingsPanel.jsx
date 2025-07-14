import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export const SEOSettingsPanel = ({ seoData, onUpdateSEO, projectData }) => {
  const [editedSeo, setEditedSeo] = useState(seoData || {});

  useEffect(() => {
    setEditedSeo(seoData || {});
  }, [seoData]);

  const handleChange = (page, field, value) => {
    const newSeo = { ...editedSeo, [page]: { ...editedSeo[page], [field]: value } };
    setEditedSeo(newSeo);
    onUpdateSEO(`seoData.${page}.${field}`, value);
  };
  
  const renderSeoFields = (pageKey, pageTitle) => (
    <div key={pageKey} className="p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold mb-2">{pageTitle} SEO</h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium">Meta Title</label>
          <input type="text" value={editedSeo[pageKey]?.metaTitle || ''} onChange={e => handleChange(pageKey, 'metaTitle', e.target.value)} className="w-full mt-1 p-2 border rounded" />
        </div>
        <div>
          <label className="text-sm font-medium">Meta Description</label>
          <textarea value={editedSeo[pageKey]?.metaDescription || ''} onChange={e => handleChange(pageKey, 'metaDescription', e.target.value)} rows="3" className="w-full mt-1 p-2 border rounded resize-y" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2"><Search /> SEO Settings</h2>
      <div className="space-y-4">
        {Object.keys(editedSeo).map(page => renderSeoFields(page, page.charAt(0).toUpperCase() + page.slice(1)))}
      </div>
    </div>
  );
};
import React from 'react';

export const GeneratingStep = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-700 p-6">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500 mb-6"></div>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Generating your website with AI...
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-xl">
        {message || "Please wait a moment while our AI crafts your unique design, content, and layout."}
      </p>
    </div>
  );
};
import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from './Button';

export const InputStep = ({ onGenerate, isGenerating }) => {
  const [description, setDescription] = useState('');

  const canGenerate = description.trim().length > 20; // Require a decent description

  const handleGenerateClick = () => {
    onGenerate(description); // Pass the description directly to the handler
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 rounded-xl shadow-lg border border-slate-200 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-slate-900">Describe the Website You Want to Build</h2>
        <p className="text-lg text-slate-500 mt-2">
          Just tell us about your business or project in plain English. The more detail you provide, the better the result.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="website-description" className="block text-sm font-semibold text-slate-800 mb-2">
            Your Website Description
          </label>
          <textarea
            id="website-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={8}
            className="w-full p-4 border border-slate-300 bg-slate-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-y"
            placeholder="e.g., I need a modern portfolio website for a freelance photographer named Jane Doe. It should showcase her wedding and portrait work. The main goal is to get new client inquiries. The style should be minimalist and elegant with a black and white color scheme..."
            disabled={isGenerating}
          />
        </div>
      </div>

      <Button
        onClick={handleGenerateClick}
        isLoading={isGenerating}
        disabled={!canGenerate || isGenerating}
        className="w-full py-3 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      >
        <Wand2 className="h-6 w-6" />
        {isGenerating ? 'Building Your Vision...' : 'Generate My Website'}
      </Button>
      {!canGenerate && !isGenerating && (
        <p className="text-center text-sm text-slate-500 mt-2">
          Please provide a more detailed description to begin.
        </p>
      )}
    </div>
  );
};
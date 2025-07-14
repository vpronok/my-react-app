import React from 'react';
import { Wand2 } from 'lucide-react';
import { TextInput } from './form/TextInput';
import { SelectInput } from './form/SelectInput';
import { StylePreferenceSelector } from './StylePreferenceSelector';
import { Button } from './button';

export const InputStep = ({ projectData, onInputChange, onGenerate, isGenerating }) => {
  const canGenerate =
    projectData.businessName.trim() !== '' &&
    projectData.businessType.trim() !== '' &&
    projectData.description.trim() !== '';

  const businessTypeOptions = [
    { value: 'e-commerce', label: 'E-commerce Store' }, { value: 'service-based', label: 'Service-Based Business' },
    { value: 'portfolio', label: 'Portfolio/Creative' }, { value: 'blog', label: 'Blog/Publisher' },
    { value: 'restaurant', label: 'Restaurant/Cafe' }, { value: 'real estate', label: 'Real Estate' },
    { value: 'technology', label: 'Technology/SaaS' }, { value: 'other', label: 'Other' },
  ];

  const primaryGoalOptions = [
    { value: 'generate-leads', label: 'Generate Leads / Inquiries' }, { value: 'sell-products', label: 'Sell Products / Services' },
    { value: 'showcase-portfolio', label: 'Showcase Portfolio / Work' }, { value: 'provide-information', label: 'Provide Information' },
    { value: 'book-appointments', label: 'Book Appointments' },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8 bg-white p-8 rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Build Your Website with AI</h2>
        <p className="text-lg text-gray-600 mt-2">Tell us about your business, and our AI will create a custom site tailored to your vision.</p>
      </div>

      <div className="space-y-6">
        <TextInput id="businessName" label="Business Name" value={projectData.businessName} onChange={(value) => onInputChange('businessName', value)} placeholder="e.g., 'Acme Solutions'" required disabled={isGenerating} />
        <SelectInput id="businessType" label="Business Type" value={projectData.businessType} onChange={(value) => onInputChange('businessType', value)} options={businessTypeOptions} required disabled={isGenerating} />
        <TextInput id="description" label="Business Description" value={projectData.description} onChange={(value) => onInputChange('description', value)} rows={4} placeholder="Describe what your business does, its unique selling points, and target customers." required disabled={isGenerating} />
        <TextInput id="targetAudience" label="Target Audience" value={projectData.targetAudience} onChange={(value) => onInputChange('targetAudience', value)} placeholder="e.g., 'Small business owners in Melbourne'" disabled={isGenerating} />
        <SelectInput id="goals" label="Primary Goal for the Website" value={projectData.goals} onChange={(value) => onInputChange('goals', value)} options={primaryGoalOptions} disabled={isGenerating} />
        <StylePreferenceSelector currentStyle={projectData.stylePreference} onSelectStyle={(value) => onInputChange('stylePreference', value)} disabled={isGenerating} />
        <TextInput id="colorPreference" label="Color Preference (Optional)" value={projectData.colorPreference} onChange={(value) => onInputChange('colorPreference', value)} placeholder="e.g., 'professional blue and gray', 'warm earthy tones'" disabled={isGenerating} />
      </div>

      <Button onClick={onGenerate} isLoading={isGenerating} disabled={!canGenerate || isGenerating} className="w-full py-3 text-lg">
        <Wand2 className="h-6 w-6" />
        {isGenerating ? 'Generating...' : 'Generate Website'}
      </Button>
      {!canGenerate && !isGenerating && <p className="text-center text-sm text-red-500">Please fill in all required fields (*).</p>}
    </div>
  );
};
import React from 'react';
import { Palette, Type, Layout, Globe } from 'lucide-react';
import { AIAssistantInfo } from './AIAssistantInfo';

export const CustomizationSidebar = ({ activeTab, onSetActiveTab }) => {
  const tabs = [
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'content', label: 'Content', icon: Type },
    { id: 'layout', label: 'Layout', icon: Layout },
    { id: 'seo', label: 'SEO', icon: Globe },
  ];
  
  const mockAiMessages = [
    { id: 'content-optimized', text: 'Content optimized for engagement', status: 'success' },
    { id: 'seo-friendly', text: 'Core SEO elements are in place', status: 'success' },
    { id: 'ai-suggestions', text: 'AI suggestions available in panels', status: 'suggestion' },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-xl p-4 space-y-6 h-full flex flex-col">
      <div>
        <h3 className="font-bold text-gray-900 text-lg mb-3 px-2">Customize</h3>
        <nav className="space-y-1">
          {tabs.map(tab => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onSetActiveTab(tab.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 font-medium transition-colors
                  ${activeTab === tab.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}
                `}
              >
                <IconComponent className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-200 pt-6 mt-auto">
        <AIAssistantInfo messages={mockAiMessages} />
      </div>
    </div>
  );
};
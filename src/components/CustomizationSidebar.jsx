import React from 'react';
import { Palette, Type, Layout, Globe } from 'lucide-react';
import { AIAssistantInfo } from './AIAssistantInfo';

export const CustomizationSidebar = ({ activeTab, onSetActiveTab }) => {
  // (keep tabs and mockAiMessages arrays)

  return (
    // Update main container styles
    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-4 space-y-6 h-full flex flex-col">
      <div>
        <h3 className="font-bold text-slate-900 text-lg mb-3 px-2">Customize</h3>
        <nav className="space-y-1">
          {tabs.map(tab => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onSetActiveTab(tab.id)}
                // Update button styles for better clarity and feel
                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 font-semibold transition-colors duration-200
                  ${activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }
                `}
              >
                <IconComponent className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="border-t border-slate-200 pt-6 mt-auto">
        <AIAssistantInfo messages={mockAiMessages} />
      </div>
    </div>
  );
};
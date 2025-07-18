import React from 'react';
import { Bot } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-md">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">AI WordPress Builder</h1>
              <p className="text-sm text-slate-500">Powered by Google AI</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
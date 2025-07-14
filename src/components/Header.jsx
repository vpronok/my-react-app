import React from 'react';
import { Bot } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI WordPress Builder</h1>
              <p className="text-sm text-gray-600">Powered by Google AI</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
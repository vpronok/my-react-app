import React from 'react';
import { CheckCircle, Info, Lightbulb, Zap } from 'lucide-react';

export const AIAssistantInfo = ({ messages }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'info': return <Info className="h-5 w-5 text-blue-500" />;
      case 'suggestion': return <Lightbulb className="h-5 w-5 text-purple-500" />;
      case 'warning': return <Zap className="h-5 w-5 text-yellow-500" />;
      default: return <Info className="h-5 w-5 text-gray-500" />;
    }
  };

  if (!messages || messages.length === 0) {
    return null; // Don't render anything if there are no messages
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-gray-800 text-base mb-3">AI Assistant Insights</h3>
      <div className="space-y-3 text-sm">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-3 text-gray-700">
            <div className="flex-shrink-0 mt-0.5">{getStatusIcon(msg.status)}</div>
            <p className="flex-1">{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// After creating these two files inside the `src/components/preview/` folder, the error should be resolved, and you will likely encounter the next one for `WebsitePreviewFrame`. Let's get this next part running
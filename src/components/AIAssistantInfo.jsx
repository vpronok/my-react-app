import React from 'react';
import { CheckCircle, Info, Lightbulb, Zap } from 'lucide-react';

export const AIAssistantInfo = ({ messages }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'info': return <Info className="h-4 w-4 text-blue-500" />;
      case 'suggestion': return <Lightbulb className="h-4 w-4 text-purple-500" />;
      case 'warning': return <Zap className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  if (!messages || messages.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-bold text-gray-800 text-base mb-3">AI Assistant Insights</h3>
      <div className="space-y-3 text-sm">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-2 text-gray-700">
            <div className="flex-shrink-0 mt-0.5">{getStatusIcon(msg.status)}</div>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
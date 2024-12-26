import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  isBot: boolean;
  timestamp: number;
}

export default function ChatBubble({ message, isBot, timestamp }: ChatBubbleProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'items-start' : 'items-start flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-primary-light' : 'bg-white/10'
      }`}>
        {isBot ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
      </div>
      <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
        isBot ? 'bg-white/10 text-white' : 'bg-primary-light text-white'
      }`}>
        <div className="text-sm prose prose-invert" dangerouslySetInnerHTML={{ __html: message }} />
        <div className="text-xs opacity-50 mt-1">
          {new Date(timestamp).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
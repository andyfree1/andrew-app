import React from 'react';
import { Bot } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="group bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 transition-colors"
      aria-label="Ask about my experience"
    >
      <Bot className="w-6 h-6 text-white" />
      <span className="absolute -top-10 right-0 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Ask about my experience
      </span>
    </button>
  );
}
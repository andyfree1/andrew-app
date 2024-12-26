import React from 'react';
import { Bot, X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="p-4 bg-primary-light flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Bot className="w-5 h-5 text-white" />
        <h3 className="text-white font-semibold">AI Assistant (Claude)</h3>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
import React from 'react';
import { X } from 'lucide-react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import type { Message } from '../../../hooks/useAIChat';

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  onClose: () => void;
  onSendMessage: (message: string) => void;
}

export default function ChatWindow({ messages, isTyping, onClose, onSendMessage }: ChatWindowProps) {
  return (
    <div className="w-96 h-[500px] bg-primary-dark/90 backdrop-blur-md rounded-xl shadow-xl flex flex-col overflow-hidden">
      <div className="p-4 bg-white/10 flex items-center justify-between">
        <h3 className="text-white font-semibold">Ask About My Experience</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      
      <ChatMessages messages={messages} isTyping={isTyping} />
      <ChatInput onSend={onSendMessage} disabled={isTyping} />
    </div>
  );
}
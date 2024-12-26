import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { useAIChat } from '../../../hooks/useAIChat';
import ChatWindow from './ChatWindow';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isTyping, sendMessage } = useAIChat();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={() => setIsOpen(false)}
          onSendMessage={sendMessage}
        />
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-white/10 backdrop-blur-md rounded-full p-4 hover:bg-white/20 transition-colors"
        >
          <Bot className="w-6 h-6 text-white" />
          <span className="absolute -top-10 right-0 px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask about my experience
          </span>
        </button>
      )}
    </div>
  );
}
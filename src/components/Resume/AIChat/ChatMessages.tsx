import React, { useRef, useEffect } from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from '../../../hooks/useAIChat';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
}

export default function ChatMessages({ messages, isTyping }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex gap-3 ${message.isBot ? 'items-start' : 'items-start flex-row-reverse'}`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            message.isBot ? 'bg-primary-light' : 'bg-white/10'
          }`}>
            {message.isBot ? (
              <Bot className="w-5 h-5 text-white" />
            ) : (
              <User className="w-5 h-5 text-white" />
            )}
          </div>
          <div className={`max-w-[80%] rounded-xl px-4 py-2 ${
            message.isBot ? 'bg-white/10' : 'bg-primary-light'
          } text-white`}>
            <div dangerouslySetInnerHTML={{ __html: message.text }} />
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex gap-2 items-center text-white/50">
          <Bot className="w-4 h-4" />
          <span>Typing...</span>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
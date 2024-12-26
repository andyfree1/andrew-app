import { useState, useCallback } from 'react';
import { generateAIResponse } from '../utils/ai-utils';

export interface Message {
  text: string;
  isBot: boolean;
  timestamp: number;
}

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "This is Andrew your A.I. assistant. How may Press Play assist you today?",
      isBot: true,
      timestamp: Date.now()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    setMessages(prev => [...prev, { text, isBot: false, timestamp: Date.now() }]);
    setIsTyping(true);

    try {
      const response = await generateAIResponse(text);
      setMessages(prev => [...prev, {
        text: response,
        isBot: true,
        timestamp: Date.now()
      }]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setMessages(prev => [...prev, {
        text: "I apologize, but I'm having trouble processing your request. Please try again.",
        isBot: true,
        timestamp: Date.now()
      }]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  return {
    messages,
    isTyping,
    sendMessage
  };
}
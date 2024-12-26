import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';
import { useAIChat } from '../../../hooks/useAIChat';

export default function AIResumeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isTyping, sendMessage } = useAIChat();

  const handleToggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          onClose={handleToggle}
          onSendMessage={sendMessage}
        />
      ) : (
        <ChatButton onClick={handleToggle} />
      )}
    </div>
  );
}
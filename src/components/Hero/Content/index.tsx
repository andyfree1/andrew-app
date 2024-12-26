import React from 'react';
import Title from './Title';
import Description from './Description';
import Actions from './Actions';

interface ContentProps {
  onChatClick: () => void;
}

export default function Content({ onChatClick }: ContentProps) {
  return (
    <div className="container relative z-10 mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[100px] animate-pulse-slow" />
        
        <div className="text-center relative space-y-8">
          <Title />
          <Description />
          <Actions onChatClick={onChatClick} />
        </div>
      </div>
    </div>
  );
}
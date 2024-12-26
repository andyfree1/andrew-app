import React from 'react';
import Background from './Hero/Background';
import Title from './Hero/Title';
import Description from './Hero/Description';
import Actions from './Hero/Actions';

interface HeroProps {
  onChatClick: () => void;
}

export default function Hero({ onChatClick }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <Background />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Glowing circle behind the title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-[100px] animate-pulse-slow" />
          
          <div className="text-center relative">
            <Title />
            <Description />
            <Actions onChatClick={onChatClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
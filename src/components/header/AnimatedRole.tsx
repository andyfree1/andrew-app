import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export default function AnimatedRole() {
  const { displayedText } = useTypingEffect(
    'Creative Technologist & Sales Executive',
    50
  );

  return (
    <p className="text-xl text-white/80 h-8 min-h-[2rem]">
      {displayedText}
    </p>
  );
}
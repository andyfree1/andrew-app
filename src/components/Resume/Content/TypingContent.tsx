import React from 'react';
import { useTypingEffect } from '../../../hooks/useTypingEffect';
import { Role } from '../../../types/resume';

interface TypingContentProps {
  role: Role;
}

const roleContent = {
  tech: {
    title: 'Creative Technologist',
    summary: 'AI integration specialist with 17+ years in video production'
  },
  sales: {
    title: 'Sales Executive',
    summary: 'Sales leader leveraging AI for $20M+ in revenue'
  }
} as const;

export default function TypingContent({ role }: TypingContentProps) {
  const { displayedText: title } = useTypingEffect(roleContent[role].title, 50);
  const { displayedText: summary } = useTypingEffect(roleContent[role].summary, 30);

  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-white mb-4 h-8">{title}</h2>
      <p className="text-lg text-white/80 h-8">{summary}</p>
    </div>
  );
}
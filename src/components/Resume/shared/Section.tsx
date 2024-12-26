import React from 'react';
import { cn } from '../../../utils/classNames';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function Section({ children, title, className }: SectionProps) {
  return (
    <div className={cn('space-y-8', className)}>
      <h3 className="text-2xl font-bold text-white text-center">{title}</h3>
      {children}
    </div>
  );
}
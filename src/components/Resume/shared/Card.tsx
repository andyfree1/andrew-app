import React from 'react';
import { cn } from '../../../utils/classNames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({ children, className, interactive = true }: CardProps) {
  return (
    <div 
      className={cn(
        'glass p-6 rounded-xl',
        interactive && 'hover-card',
        className
      )}
    >
      {children}
    </div>
  );
}
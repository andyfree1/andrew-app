import React from 'react';
import { cn } from '../../../utils/classNames';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-sm',
        variant === 'default' && 'bg-white/10 text-white/70',
        variant === 'outline' && 'border border-white/20 text-white/80',
        className
      )}
    >
      {children}
    </span>
  );
}
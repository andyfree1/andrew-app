import React from 'react';
import { useFilterContext } from '../../../contexts/FilterContext';
import { cn } from '../../../utils/classNames';

interface FilterButtonProps {
  filter: string;
  children: React.ReactNode;
}

export default function FilterButton({ filter, children }: FilterButtonProps) {
  const { activeFilter, setFilter } = useFilterContext();
  
  const isActive = activeFilter === filter;
  
  return (
    <button
      onClick={() => setFilter(filter)}
      className={cn(
        'px-6 py-2 rounded-full transition-all',
        isActive 
          ? 'bg-white text-[#1E3D59]' 
          : 'bg-white/10 text-white hover:bg-white/20'
      )}
    >
      {children}
    </button>
  );
}
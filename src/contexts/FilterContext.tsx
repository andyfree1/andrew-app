import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
  activeFilter: string;
  setFilter: (filter: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const setFilter = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <FilterContext.Provider value={{ activeFilter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
}
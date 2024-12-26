import React from 'react';
import FilterButton from './FilterButton';
import { ProjectCategory } from '../../types/portfolio';

interface CategoryFilterProps {
  categories: ProjectCategory[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="flex justify-center gap-4 mb-12 flex-wrap">
      {categories.map(category => (
        <FilterButton key={category} filter={category}>
          {category}
        </FilterButton>
      ))}
    </div>
  );
}
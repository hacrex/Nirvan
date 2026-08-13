'use client';

import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              isActive
                ? 'bg-[#436444] text-white shadow-soft'
                : 'bg-[#F2E8DA] text-[#66615C] hover:bg-[#e6e2dc] hover:text-[#2D2A26]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

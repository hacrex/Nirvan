import React from 'react';
import { List } from 'lucide-react';

export interface TOCItem {
  id: string;
  text: string;
}

export const TableOfContents: React.FC<{ items: TOCItem[] }> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="p-6 rounded-[16px] bg-[#F2E8DA]/60 border border-[#e6e2dc] space-y-3">
      <div className="flex items-center gap-2 font-bold text-[#2D2A26] text-base">
        <List className="w-5 h-5 text-[#436444]" />
        <span>Table of Contents</span>
      </div>
      <ul className="space-y-2 text-sm text-[#66615C]">
        {items.map((item, idx) => (
          <li key={idx}>
            <a
              href={`#${item.id}`}
              className="hover:text-[#436444] transition-colors block py-0.5"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

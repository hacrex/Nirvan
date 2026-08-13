import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';

export interface ModuleItem {
  title: string;
  description: string;
  activities: string[];
}

interface RehabModulesProps {
  modules: ModuleItem[];
  sectionTitle?: string;
}

export const RehabModules: React.FC<RehabModulesProps> = ({
  modules,
  sectionTitle = 'Core Rehabilitation Modules',
}) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod, idx) => (
          <Card key={idx} className="p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-bold text-[#2D2A26]">{mod.title}</h3>
              </div>
              <p className="text-sm text-[#66615C] leading-relaxed">{mod.description}</p>
            </div>

            <div className="pt-4 border-t border-[#e6e2dc] space-y-2">
              <span className="text-xs font-bold text-[#2D2A26] uppercase tracking-wider">
                Key Components
              </span>
              <ul className="space-y-1.5 text-xs text-[#66615C]">
                {mod.activities.map((act, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59] shrink-0" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

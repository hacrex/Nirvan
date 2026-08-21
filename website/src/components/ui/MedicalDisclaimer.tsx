import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface MedicalDisclaimerProps {
  className?: string;
  compact?: boolean;
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({
  className = '',
  compact = false,
}) => {
  if (compact) {
    return (
      <div className={`p-4 rounded-[12px] bg-[#F2E8DA]/60 border border-[#e6e2dc] text-xs text-[#66615C] flex items-start gap-2.5 ${className}`}>
        <ShieldAlert className="w-4 h-4 text-[#8c4e33] shrink-0 mt-0.5" />
        <p>
          <strong className="font-semibold text-[#2D2A26]">Medical Disclaimer:</strong> NIRVAN provides clinician-reviewed educational content and rehabilitation support. It does not diagnose medical conditions, prescribe medication, replace healthcare professionals, or provide emergency services.
        </p>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-[16px] bg-[#F2E8DA]/80 border border-[#e6e2dc] text-sm text-[#66615C] flex flex-col md:flex-row items-start gap-4 ${className}`}>
      <div className="p-3 rounded-full bg-[#8c4e33]/10 text-[#8c4e33] shrink-0">
        <ShieldAlert className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h2 className="font-semibold text-[#2D2A26] text-base">Important Medical & Safety Disclaimer</h2>
        <p className="leading-relaxed">
          NIRVAN provides clinician-reviewed educational content, routine tracking, and rehabilitation guidance designed to support your recovery journey. <strong className="text-[#2D2A26]">NIRVAN is not a medical device, does not diagnose conditions, prescribe medications, or replace direct clinical oversight.</strong> Always consult your physician or qualified healthcare provider before starting any rehabilitation or physical activity program. If you experience severe symptoms, chest pain, or a medical emergency, seek immediate medical attention or call emergency services.
        </p>
      </div>
    </div>
  );
};

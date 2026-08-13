import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-[#2D2A26]">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 min-h-[48px] bg-white border border-[#c2c8be] rounded-[12px] text-[#2D2A26] placeholder-[#66615C]/60 focus:outline-none focus:border-[#436444] focus:ring-2 focus:ring-[#436444]/20 transition-all ${
          error ? 'border-[#C0564B] focus:border-[#C0564B] focus:ring-[#C0564B]/20' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-medium text-[#C0564B]">{error}</span>}
      {!error && helperText && <span className="text-xs text-[#66615C]">{helperText}</span>}
    </div>
  );
};

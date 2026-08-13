import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
}) => {
  const variantStyles = {
    primary: 'bg-[#E1EADF] text-[#2e4e30] border border-[#436444]/20',
    secondary: 'bg-[#feae8c]/30 text-[#6f371e] border border-[#8c4e33]/20',
    success: 'bg-[#4A7C59]/15 text-[#2e4e30] border border-[#4A7C59]/30',
    warning: 'bg-[#D99100]/15 text-[#805500] border border-[#D99100]/30',
    info: 'bg-[#5B8FB9]/15 text-[#2a4d6c] border border-[#5B8FB9]/30',
    neutral: 'bg-[#F2E8DA] text-[#66615C] border border-[#e6e2dc]',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3.5 py-1.5',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full ${variantStyles[variant]} ${sizeStyles[size]}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

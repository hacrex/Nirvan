import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'default' | 'surfaceVariant' | 'outline';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default',
}) => {
  const variantStyles = {
    default: 'bg-[#ffffff] shadow-soft border border-[#e6e2dc]',
    surfaceVariant: 'bg-[#F2E8DA] border border-[#ebe8e2]',
    outline: 'bg-transparent border-2 border-[#c2c8be]',
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg'
    : '';

  return (
    <div className={`rounded-[16px] p-6 ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

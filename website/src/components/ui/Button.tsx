import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-[12px] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#8c4e33] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[48px]', // Minimum 48px touch target for accessibility
    lg: 'px-8 py-4 text-lg min-h-[56px]',
  };
  
  const variantStyles = {
    primary: 'bg-[#436444] text-white hover:bg-[#2e4e30] active:bg-[#233d25] shadow-soft',
    secondary: 'bg-[#8c4e33] text-white hover:bg-[#6f371e] active:bg-[#522815] shadow-soft',
    outline: 'border-2 border-[#436444] text-[#436444] hover:bg-[#E1EADF] active:bg-[#c6d7c3]',
    ghost: 'text-[#436444] hover:bg-[#E1EADF]/50 active:bg-[#E1EADF]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

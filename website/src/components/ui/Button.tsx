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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-[12px] transition-[background-color,border-color,color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c66b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f5ef] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]',
  };

  const variantStyles = {
    primary: 'bg-[#285b4a] text-white hover:bg-[#173d32] active:bg-[#173d32] shadow-soft',
    secondary: 'bg-[#c66b4a] text-white hover:bg-[#9f4f35] active:bg-[#9f4f35] shadow-soft',
    outline: 'border-2 border-[#285b4a] bg-transparent text-[#285b4a] hover:bg-[#eef4ee] active:bg-[#dce8df]',
    ghost: 'text-[#285b4a] hover:bg-[#eef4ee] active:bg-[#dce8df]',
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

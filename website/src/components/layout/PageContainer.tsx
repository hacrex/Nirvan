import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'narrow' | 'wide';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  size = 'normal',
}) => {
  const sizeStyles = {
    narrow: 'max-w-4xl',
    normal: 'max-w-7xl',
    wide: 'max-w-[1400px]',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
};

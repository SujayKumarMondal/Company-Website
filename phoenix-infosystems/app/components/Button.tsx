'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  ariaLabel,
}: ButtonProps) => {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-blue-500/50 focus:ring-blue-500',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
    outline:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

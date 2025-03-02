
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary relative overflow-hidden group",
        // Variants
        variant === 'primary' && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === 'outline' && "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground text-foreground",
        variant === 'ghost' && "hover:bg-accent hover:text-accent-foreground text-foreground",
        // Sizes
        size === 'sm' && "text-sm h-8 px-3",
        size === 'md' && "text-sm h-10 px-4",
        size === 'lg' && "text-base h-12 px-6",
        className
      )}
      {...props}
    >
      {children}
      <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
    </button>
  );
};

export default Button;

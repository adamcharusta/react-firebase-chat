import React from 'react';

interface IButtonComponent {
  children: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  color?: 'primary' | 'secondary' | 'google';
  fullWidth?: boolean;
  className?: string;
}

const ButtonComponent = ({
  children,
  disabled = false,
  onClick,
  type = 'button',
  color = 'primary',
  fullWidth = false,
  className = '',
}: IButtonComponent) => {
  let hoverClass = '';
  const disabledClass = 'cursor-default disabled:opacity-70';
  let baseClass = '';

  switch (color) {
    case 'primary':
      hoverClass = 'hover:bg-indigo-500';
      baseClass = 'bg-indigo-600';
      break;
    case 'secondary':
      hoverClass = 'hover:bg-amber-500';
      baseClass = 'bg-amber-600';
      break;
    case 'google':
      hoverClass = 'hover:bg-googleLightBlue';
      baseClass = 'bg-googleBlue';
      break;
    default:
      break;
  }

  return (
    <button
      className={`cursor-pointer text-white p-3 ${fullWidth ? 'w-full' : ''} ${baseClass} ${
        !disabled && hoverClass
      } ${disabled && disabledClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;

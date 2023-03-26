import React, { KeyboardEventHandler, useEffect, useRef } from 'react';

interface ITextFieldComponent {
  placeholder?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: () => void;
  value: string;
  fullWidth?: boolean;
  className?: string;
}

const TextFieldComponent = ({
  placeholder = '',
  disabled = false,
  value,
  onChange,
  fullWidth = false,
  className = '',
  onKeyDown = () => {
    /**/
  },
}: ITextFieldComponent) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setElementHeight();
  }, [value]);

  const setElementHeight = () => {
    const input = ref.current;
    if (input) {
      input.style.height = 'auto';
      input.style.height = `${input.scrollHeight}px`;
    }
  };

  // Enter click support. Enter alone triggers the event, Shit+Enter gives a new line.
  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = async (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await onKeyDown();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setElementHeight();

    onChange(event);
  };

  return (
    <textarea
      ref={ref}
      onKeyDown={handleKeyDown}
      className={`resize-none p-3 text-black outline-0 ${fullWidth ? 'w-full' : ''} ${className}`}
      value={value}
      disabled={disabled}
      rows={1}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default TextFieldComponent;

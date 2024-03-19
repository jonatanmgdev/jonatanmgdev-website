'use client';
import React from "react";

interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled,
  className,
  id,
  text,
  href
}) => {

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <button
      type="button"
      title={text}
      role="button"
      disabled={disabled}
      id={id}
      className={`p-3 shrink-0 rounded-md ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;

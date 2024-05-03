"use client";
import React from "react";

interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
  type? : "submit" | "reset" | "button" | undefined; 
  id?: string;
  href?: string;
  onClickFunc?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled,
  className,
  id,
  text,
  href,
  type,
  onClickFunc
}) => {

  const handleClick = () => {
    if (onClickFunc) {
      onClickFunc();
    }
    if (href) {
      window.location.href = href;
    }
  };


  return (

    <button
      type={type}
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

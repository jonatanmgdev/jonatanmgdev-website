"use client";
import React from "react";

interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
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
  onClickFunc
}) => {


  return (
    <button
      type="button"
      title={text}
      role="button"
      disabled={disabled}
      id={id}
      className={`p-3 shrink-0 rounded-md ${className}`}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};

export default CustomButton;

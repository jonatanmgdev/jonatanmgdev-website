import React from "react";

interface CustomButtonProps {
  text: string;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled,
  className,
  id,
  text
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      id={id}
      className={`p-2 shrink-0 rounded-md ${className}`}

    >
      {text}
    </button>
  );
};

export default CustomButton;

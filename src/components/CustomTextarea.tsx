import React from "react";

interface CustomTextareaProps {
  backgroundColor: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  backgroundColor,
  placeholder,
  value,
  onChange,
  disabled,
  className,
  id,
  name,
}) => {
  return (
    <textarea
      className={`w-full p-5 border border-[--primary-color] focus:border-[--tertiary-color] rounded-md outline-none bg-[${backgroundColor}] text-[--text-color] placeholder-[--text-color]   ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
    />
  );
};

export default CustomTextarea;
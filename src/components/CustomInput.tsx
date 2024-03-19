import React from "react";

interface CustomInputProps {
  backgroundColor: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  backgroundColor,
  placeholder,
  type,
  value,
  onChange,
  disabled,
  className,
  id,
  name,
}) => {
  return (
    <input
      type={type}
      className={`w-full p-5 border border-[--primary-color] focus:border-[--tertiary-color] rounded-lg outline-none bg-[${backgroundColor}] text-[--text-color] placeholder-[--text-color] ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
    />
  );
};

export default CustomInput;

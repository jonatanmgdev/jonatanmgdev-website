import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps {
  placeholder: string;
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  alt?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  type,
  value,
  onChange,
  disabled,
  className,
  id,
  alt,
  name,
  required,
  register
}) => {
  return (
    <input
      alt={alt}
      type={type}
      className={`${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
      required={required}
      {...register}
    />
  );
};

export default CustomInput;

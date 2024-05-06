import React, { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  alt?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

type Ref = HTMLInputElement;

const CustomInput = forwardRef<Ref, CustomInputProps> ((props, ref) => {

  const {
    placeholder,
    type,
    value,
    onChange,
    disabled,
    className,
    id,
    name,
    alt,
    required,
  } = props;
  
  return (
    <input
      alt={alt}
      type={type}
      ref={ref}
      className={`${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
      required={required}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
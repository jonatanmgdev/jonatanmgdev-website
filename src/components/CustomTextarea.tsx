import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextareaProps {
  backgroundColor: string;
  placeholder: string;
  rows?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  title?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  backgroundColor,
  placeholder,
  value,
  onChange,
  disabled,
  className,
  id,
  title,
  rows,
  required,
  register
}) => {
  return (
    <textarea
      className={`w-full p-5 border border-[--primary-color] focus:border-[--tertiary-color] rounded-lg outline-none bg-[${backgroundColor}] text-[--text-color] placeholder-[--text-color]   ${className}`}
      placeholder={placeholder}
      title={title}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      rows={rows}
      required={required}
      {...register}
    />
  );
};

export default CustomTextarea;
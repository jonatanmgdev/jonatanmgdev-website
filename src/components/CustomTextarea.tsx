import React, { forwardRef, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  placeholder: string;
  rows?: number;
  value?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  title?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
}

type Ref = HTMLTextAreaElement;

export const CustomTextarea = forwardRef<Ref, CustomTextareaProps> ((props, ref) =>  {

  const {
    placeholder,
    rows,
    value,
    onChange,
    disabled,
    className,
    id,
    title,
    required,
    register
  } = props;

  return (
    <textarea
      className={`${className}`}
      ref={ref}
      placeholder={placeholder}
      title={title}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      rows={rows}
      required={required}
    />
  );
});
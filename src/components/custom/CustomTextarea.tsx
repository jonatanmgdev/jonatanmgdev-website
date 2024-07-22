import React, { forwardRef, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn, UseFormRegister, RegisterOptions } from "react-hook-form";

interface CustomTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name?: string;
  placeholder: string;
  rows?: number;
  value?: string;
  disabled?: boolean;
  className?: string;
  inputVariant?: keyof typeof InputStyles;
  title?: string;
  required?: boolean;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  errors?: any;
  errorsClasses?: string;
}

enum InputStyles {
  OUTLINED = "block px-2.5 py-4 w-full border-b-2 border-neutral-medium focus:border-primary-dark peer placeholder-transparent text-white focus:placeholder-neutral-dark focus:outline-none outline-none",
  SOLID = "block px-2.5 py-4 w-full bg-neutral-light/20 border-b-2 border-neutral-medium focus:border-primary-dark text-white focus:placeholder-textcolor-secondary focus:outline-none outline-none peer placeholder-transparent focus:placeholder-neutral-dark transition-all",
}

export const CustomTextarea = (props: CustomTextareaProps) => {  
  const {
    placeholder,
    name,
    rows,
    value,
    disabled,
    className,
    inputVariant = "OUTLINED",
    id,
    title,
    required,
    rules,
    errors,
    errorsClasses,
    register = () => {},
    ...rest
  } = props;

  const inputStyle = InputStyles[inputVariant] || InputStyles.OUTLINED;

  return (
    <div className={`${className}`}>
      <div className="relative w-full min-w-[200px]">
        <textarea
          {...register(id, rules)}
          {...rest}
          id={id}
          name={name}
          className={`${inputStyle} peer border-b-2 border-neutral-medium ${errors ? "focus:border-red-400" : 'focus:border-primary-dark' }`}
          placeholder={placeholder}
          title={title}
          value={value}
          disabled={disabled}
          rows={rows}
          required={required}
        />
        <label className="absolute text-sm text-textcolor-secondary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary-dark peer-focus:dark:text-primary-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
          {title}
        </label>
      </div>
      {errors && (
        <div className="text-sm text-red-700 mt-1">
          <span className={errorsClasses}>{errors.message}</span>
        </div>
      )}
    </div>
  );
};

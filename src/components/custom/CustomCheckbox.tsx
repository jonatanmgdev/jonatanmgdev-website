"use client";
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface CustomCheckboxProps {
  id: string;
  isChecked: boolean;
  labelText: JSX.Element;
  register?: UseFormRegister<any>;
  rules?: RegisterOptions;
  errors?: any;
  errorsClasses?: string;
  className?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  isChecked,
  labelText,
  register = () => {},
  rules,
  errors,
  errorsClasses = "text-red-500",
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex w-full items-center">
        <input
          id={id}
          {...register(id, rules)}
          type="checkbox"
          defaultChecked={isChecked}
          className={`w-5 h-5 ${isChecked ? "accent-green-700" : ""}`}
        />
        <label
          htmlFor={id}
          className={`ms-2 ${
            isChecked ? "text-neutral-light" : "text-neutral-dark"
          }`}
        >
          {labelText}
        </label>
      </div>
      {errors?.message && (
        <div className="flex mt-1">
          <span className={errorsClasses}>{errors.message}</span>
        </div>
      )}
    </div>
  );
};

export default CustomCheckbox;

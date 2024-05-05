"use client";
import React from "react";

interface CustomCheckboxProps {
  isChecked: boolean;
  labelText: JSX.Element;
  className?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  isChecked,
  labelText,
  className
}) => {
  const handleCheckboxChange = () => {};

  return (
    <div className={`flex items-center me-4 ${className}`}>
      <input
        id="link-checkbox"
        type="checkbox"
        value=""
        className={`w-5 h-5 ${isChecked ? "accent-green-700" : ""}`}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor="link-checkbox"
        className={`ms-2 text-neutral-light ${
          isChecked ? "text-neutral-light" : ""
        }`}
      >
        {labelText}
      </label>
    </div>
  );
};

export default CustomCheckbox;

"use client";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type BaseInputAttributes = React.ComponentPropsWithoutRef<"input">;

interface CommonInputProps extends BaseInputAttributes {
  id: string;
  label: string;
  type: string;
  value?: any;
  inputVariant?: keyof typeof InputStyles;
  hidden?: boolean;
  className?: string;
  inputClassName?: string;
  name?: string;
  rules?: RegisterOptions;
  register?: UseFormRegister<any>;
  onchange?: (event: React.ChangeEvent<any>) => void;
  defaultValue?: string;
  adornment?: JSX.Element | null;
  errors?: any;
  errorsClasses?: string;
}

enum InputStyles {
  OUTLINED = "block px-2.5 py-4 w-full bg-transparent border-b-2 border-neutral-medium focus:border-primary-dark text-white focus:placeholder-neutral-light focus:outline-none peer placeholder-transparent focus:placeholder-neutral-dark focus:outline-none outline-none",
  SOLID = "block px-2.5 py-4 w-full bg-neutral-light/20 text-white focus:placeholder-textcolor-secondary focus:outline-none peer placeholder-transparent focus:placeholder-neutral-dark focus:outline-none outline-none transition-all duration-300",
}

export const CustomInput = (props: CommonInputProps) => {
  const {
    id,
    name = "",
    label,
    placeholder,
    register = () => {},
    rules,
    errors,
    errorsClasses,
    type,
    defaultValue,
    className,
    inputVariant = "OUTLINED",
    inputClassName,
    adornment,
    hidden = false,
    value,
    onchange,
    ...rest
  } = props;


  const inputStyle = InputStyles[inputVariant] || InputStyles.OUTLINED;

  return (
    <div className={`${className}`}>
      <div className="relative">
        <input
          {...register(id, rules)}
          {...rest}
          id={id}
          name={name}
          type={type}
          hidden={hidden}
          defaultValue={defaultValue}
          placeholder={placeholder || " "}
          value={value}
          className={`${inputClassName} ${inputStyle} border-b-2 border-neutral-medium ${errors ? "focus:border-red-400" : 'focus:border-primary-dark' }`}
        />
        {adornment && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">{adornment}</div>
        )}
        <label
          htmlFor={id}
          className="absolute text-sm text-textcolor-secondary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {label}
        </label>
      </div>
      {errors && (
        <div className="mt-1">
          <span className={errorsClasses}>{errors.message}</span>
        </div>
      )}
    </div>
  );
};
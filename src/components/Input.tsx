import React, { useEffect, useState } from "react";
import { RoundedConsts } from "../@core/consts/Rounded";
import { RoundedType } from "../@core/types/Rounded";
import { InputType } from "../@core/types/Input";

interface ValidationRule {
  rule: (value: string) => boolean;
  message: string;
}

interface Props {
  id: string;
  type: InputType;
  enable: boolean;
  rounded: RoundedType;
  label: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  validations?: ValidationRule[];
  errorMessage?: string;
}

export default function Input({
  id,
  type,
  label,
  enable,
  rounded = "sm",
  value,
  onChange,
  required = false,
  validations = [],
  errorMessage = "",
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(
    value !== undefined ? value.toString() : ""
  );
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value.toString());
      setIsFocused(!!value);
    }
  }, [value]);

  useEffect(() => {
    validate(internalValue);
  }, [internalValue]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    if (!internalValue) {
      setIsFocused(false);
    }
    validate(internalValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    setInternalValue(newValue);
    onChange && onChange(event);
    setIsFocused(!!newValue);
  };

  const validate = (value: string) => {
    const newErrors: string[] = [];
    if (required && !value) {
      newErrors.push("Este campo é obrigatório.");
    }
    validations.forEach(({ rule, message }) => {
      if (!rule(value)) {
        newErrors.push(message);
      }
    });
    setErrors(newErrors);
  };

  return (
    <div className="relative">
      <input
        className={`peer ${rounded && RoundedConsts[rounded]} border ${
          errors.length ? "border-red-500" : "border-neutral-200"
        } focus:border-neutral-400 active:border-neutral-400 focus-visible:border-neutral-400 w-full pt-3 pb-2 text-neutral-500 px-3`}
        disabled={!enable}
        id={id}
        type={type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={internalValue}
      />
      <label
        htmlFor={id}
        className={`absolute px-2 left-3 transition-all duration-200 ease-in-out ${
          isFocused || !!internalValue
            ? "bg-white top-0 text-xs text-neutral-600"
            : "top-5 transform -translate-y-2 text-base text-neutral-400"
        } pointer-events-none`}
        style={{
          transform: isFocused || !!internalValue ? "translateY(-50%)" : "",
        }}
      >
        {label}
        {required && (
          <span className="text-red-500 text-sm ml-1">*</span>
        )}
      </label>
      {errors.length > 0 && (
        <div className="text-red-500 text-sm mt-1">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}
    </div>
  );
}

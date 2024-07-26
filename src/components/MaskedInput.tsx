import React, { useEffect, useState } from "react";

interface Props {
  id: string;
  name: string;
  label: string;
  mask: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function MaskedInput({
  id,
  name,
  label,
  mask,
  value,
  onChange,
  placeholder = "",
  disabled = false,
}: Props) {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value);
  
    useEffect(() => {
      setInternalValue(applyMask(value, mask));
    }, [value, mask]);
  
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
      if (internalValue === '') {
        setIsFocused(false);
      }
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      const maskedValue = applyMask(inputValue, mask);
      setInternalValue(maskedValue);
      onChange(inputValue);
    };
  
    const applyMask = (value: string, mask: string): string => {
      let maskedValue = '';
      let valueIndex = 0;
  
      for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
        if (mask[maskIndex] === '9') {
          if (value[valueIndex]) {
            maskedValue += value[valueIndex];
            valueIndex++;
          } else {
            break;
          }
        } else {
          maskedValue += mask[maskIndex];
        }
      }
  
      return maskedValue;
    };  

  return (
   <div className="relative">
      <input
        id={id}
        name={name}
        value={internalValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isFocused ? placeholder : ''}
        disabled={disabled}
        className="border border-neutral-200 focus:border-neutral-400 w-full pt-3 pb-2 text-neutral-500 px-3"
      />
      <label
        htmlFor={id}
        className={`absolute px-2 left-3 transition-all duration-200 ease-in-out ${
          isFocused || internalValue !== ''
            ? 'bg-white top-0 text-xs text-neutral-600'
            : 'top-1/2 transform -translate-y-1/2 text-base text-neutral-400'
        } pointer-events-none`}
        style={{
          transform: isFocused || internalValue !== '' ? 'translateY(-50%)' : '',
        }}
      >
        {label}
      </label>
    </div>
  );
}

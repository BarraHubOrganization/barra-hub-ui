import React, { useEffect, useState } from "react";
import { RoundedConsts } from "../@core/consts/Rounded";
import { RoundedType } from "../@core/types/Rounded";

interface Props {
  /** ID único para o input. Deve ser usado para associar o input ao label. */
  id: string;

  /** Indica se o input está habilitado ou desabilitado. */
  enable: boolean;

  /** Tipo de arredondamento do input. */
  rounded: RoundedType;

  /** Texto do label associado ao input. */
  label: string;

  /** Valor do input */
  value?: string | number;

  /** Função chamada quando o valor do input muda. */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  id,
  label,
  enable,
  rounded = "sm",
  value,
  onChange,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(
    value !== undefined ? value.toString() : ""
  );

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value.toString());
      setIsFocused(!!value);
    }
  }, [value]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    if (!internalValue) {
      setIsFocused(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value: newValue } = event.target;
    setInternalValue(newValue);
    onChange && onChange(event);
    setIsFocused(!!newValue);
  };

  useEffect(() => {
    setIsFocused(!!internalValue);
  }, [internalValue]);

  return (
    <div className="relative">
      <textarea
        className={`peer ${rounded && RoundedConsts[rounded]} border border-neutral-200 focus:border-neutral-400 active:border-neutral-400 focus-visible:border-neutral-400 w-full pt-3 pb-2 text-neutral-500 px-3`}
        disabled={!enable}
        id={id}
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
            : "top-1/2 transform -translate-y-1/2 text-base text-neutral-400"
        } pointer-events-none`}
        style={{
          transform: isFocused || !!internalValue ? "translateY(-50%)" : "",
        }}
      >
        {label}
      </label>
    </div>
  );
}

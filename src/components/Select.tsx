import React, { useState, useEffect } from "react";

import { RoundedConsts } from "../@core/consts/Rounded";
import { RoundedType } from "../@core/types/Rounded";

interface GenericSelect {
  key: number | string;
  value: string;
}

interface Props {
   /** Identificador único para o input */
   id: string;

   /** Lista de opções disponíveis no select */
   options: GenericSelect[];
 
   /** Nome do campo select */
   name: string;
 
   /** Indica se o select está habilitado ou desabilitado */
   enable: boolean;
 
   /** Tipo de arredondamento do select */
   rounded: RoundedType;
 
   /** Texto do label associado ao select */
   label: string;
 
   /** Função chamada quando o valor do select muda */
   onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
 
   /** Valor atualmente selecionado no select */
   value?: string | number;
}

export default function Select({
  id,
  name,
  options,
  enable,
  rounded = "sm",
  label,
  value,
  onChange,
}: Props) {
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setSelectedValue(value || "");
  }, [value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const isFloating = isFocused || selectedValue !== "";

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        className={`${rounded && RoundedConsts[rounded]} ${
          enable ? "" : "bg-neutral-50"
        } border border-neutral-200 focus:border-neutral-400 active:border-neutral-400 focus-visible:border-neutral-400 w-full pt-3 pb-2 text-neutral-500 px-3`}
        disabled={!enable}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={selectedValue}
      >
        {options.map((option) => (
          <option
            value={option.key}
            key={option.key}
            className="hover:bg-red-200"
          >
            {option.value}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute px-2 left-3 transition-all duration-200 ease-in-out ${
          isFloating
            ? "bg-white top-0 text-xs text-neutral-600"
            : "top-1/2 transform -translate-y-1/2 text-base text-neutral-400"
        } pointer-events-none`}
        style={{
          transform: isFloating ? "translateY(-50%)" : "",
        }}
      >
        {label}
      </label>
    </div>
  );
}

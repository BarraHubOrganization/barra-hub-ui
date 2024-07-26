import React from "react";

interface Props {
  /** ID único para o switch. Deve ser usado para associar o input ao label. */
  id: string;

  /** Texto do label associado ao switch. */
  label: string;

  /** Indica se o switch está habilitado ou desabilitado. */
  enable: boolean;

  /** Indica o estado atual do switch. */
  checked: boolean;

  /** Função chamada quando o estado do switch muda. */
  onChange: () => void;
}

export default function Checkbox({
  id,
  label,
  enable,
  checked,
  onChange,
}: Props) {
  return (
    <div id="checkbox" className="flex items-center">
      <input
        disabled={!enable}
        id={id}
        type="checkbox"
        checked={checked}
        className={`${!enable ? "bg-neutral-200 text-neutral-300" : " border border-neutral-300 rounded-sm bg-white checked:bg-primary"} focus:outline-none transition duration-200 cursor-pointer appearance-none h-5 w-5`}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`${enable ? "text-neutral-800 hover:text-primary" : "text-neutral-300"} ml-2 block w-full h-full  cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
}

import React from "react";

interface Props {
  id: string;
  label: string;
  enable: boolean;
  checked: boolean;
  onChange: () => void;
}

export default function Radio({
   /** ID único para o botão de rádio. Deve ser usado para associar o input ao label. */
  id,

  /** Texto do label associado ao botão de rádio. */
  label,

  /** Indica se o botão de rádio está habilitado ou desabilitado.
  - true: habilitado
  - false: desabilitado */
  enable,

  /** Indica o estado atual do botão de rádio.
  - true: selecionado
  - false: não selecionado */
  checked,

  /** Função chamada quando o estado do botão de rádio muda. */
  onChange,
}: Props) {
  return (
    <div className="flex items-center">
      <input
        disabled={!enable}
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        className={`${
          !enable
            ? "bg-neutral-50 text-neutral-200 focus:ring-neutral-200 checked:ring-neutral-100"
            : "checked:ring-primary focus:ring-red-500"
        } ${
          checked && !enable ? "bg-gray-50" : "checked:bg-red-500"
        } border border-gray-200 rounded-full focus:ring-2 focus:ring-offset-2 checked:ring-2 checked:ring-offset-2 focus:outline-none transition duration-200 cursor-pointer h-4 w-4 appearance-none`}
      />
      <label
        htmlFor={id}
        className={`${
          enable ? "text-neutral-800 hover:text-red-500" : "text-neutral-300"
        } ml-2 block w-full h-full cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
}

import React from "react";

interface Props {
  /** ID único para o switch. Deve ser usado para associar o input ao label. */
  id: string;

  /** Texto exibido quando o switch está ligado. */
  onText: string;

  /** Texto exibido quando o switch está desligado. */
  offText: string;

  /** Indica se o switch está habilitado ou desabilitado. */
  enable?: boolean;

  /** Indica se o switch está marcado.*/
  checked?: boolean;

  /** Função chamada quando o estado do switch muda. */
  onChange?: () => void;
}

export default function Switch({
  id,
  onText,
  offText,
  enable,
  checked,
  onChange,
}: Props) {
  return (
    <div className="flex items-center">
      <label
        htmlFor={id}
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          disabled={!enable}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-11 h-6 rounded-full transition-colors ${
            enable
              ? checked
                ? "bg-primary"
                : "bg-neutral-200"
              : checked
                ? "bg-secondary"
                : "bg-neutral-100"
          }`}
        />
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${checked ? "translate-x-5" : ""}`}
        />
        <span
          className={`ml-3 text-sm ${enable ? "text-neutral-800" : "text-neutral-300"}`}
        >
          {checked ? onText : offText}
        </span>
      </label>
    </div>
  );
}

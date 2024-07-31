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
export default function Switch({ id, onText, offText, enable, checked, onChange, }: Props): React.JSX.Element;
export {};

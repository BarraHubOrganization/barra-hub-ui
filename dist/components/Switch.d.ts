import React from "react";
interface Props {
    id: string;
    onText: string;
    offText: string;
    enable?: boolean;
    checked?: boolean;
    onChange?: () => void;
}
export default function Switch({ 
/** ID único para o switch. Deve ser usado para associar o input ao label. */
id, 
/** Texto exibido quando o switch está ligado. */
onText, 
/** Texto exibido quando o switch está desligado. */
offText, 
/** Indica se o switch está habilitado ou desabilitado.
- true: habilitado
- false: desabilitado */
enable, 
/** Indica se o switch está marcado (ligado).
- true: marcado (ligado)
- false: não marcado (desligado) */
checked, 
/** Função chamada quando o estado do switch muda. */
onChange, }: Props): React.JSX.Element;
export {};

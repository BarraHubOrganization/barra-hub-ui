import React from "react";
interface Props {
    id: string;
    label: string;
    enable: boolean;
    checked: boolean;
    onChange: () => void;
}
export default function Checkbox({ 
/** ID único para o switch. Deve ser usado para associar o input ao label. */
id, 
/** Texto do label associado ao switch. */
label, 
/** Indica se o switch está habilitado ou desabilitado.
- true: habilitado
- false: desabilitado */
enable, 
/** Indica o estado atual do switch.
- true: ligado
- false: desligado */
checked, 
/** Função chamada quando o estado do switch muda. */
onChange, }: Props): React.JSX.Element;
export {};

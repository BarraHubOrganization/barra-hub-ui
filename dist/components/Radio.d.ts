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
onChange, }: Props): React.JSX.Element;
export {};

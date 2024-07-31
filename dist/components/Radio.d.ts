import React from "react";
interface Props {
    /** ID único para o botão de rádio. Deve ser usado para associar o input ao label. */
    id: string;
    /** Texto do label associado ao botão de rádio. */
    label: string;
    /** Indica se o botão de rádio está habilitado ou desabilitado. */
    enable: boolean;
    /** Indica o estado atual do botão de rádio. */
    checked: boolean;
    /** Função chamada quando o estado do botão de rádio muda. */
    onChange: () => void;
}
export default function Radio({ id, label, enable, checked, onChange }: Props): React.JSX.Element;
export {};

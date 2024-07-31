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
export default function Checkbox({ id, label, enable, checked, onChange, }: Props): React.JSX.Element;
export {};

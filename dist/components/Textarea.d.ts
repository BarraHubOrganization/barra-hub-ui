import React from "react";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    /** ID único para o input. Deve ser usado para associar o input ao label. */
    id: string;
    /** Indica se o input está habilitado ou desabilitado. */
    enable: boolean;
    /** Tipo de arredondamento do input. */
    rounded: RoundedType;
    /** Texto do label associado ao input. */
    label: string;
    /** Valor do input */
    value?: string | number;
    /** Função chamada quando o valor do input muda. */
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function Textarea({ id, label, enable, rounded, value, onChange, }: Props): React.JSX.Element;
export {};

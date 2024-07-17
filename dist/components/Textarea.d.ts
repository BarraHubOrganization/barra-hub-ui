import React from "react";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    id: string;
    enable: boolean;
    rounded: RoundedType;
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string | number;
}
export default function Textarea({ 
/** ID único para o input. Deve ser usado para associar o input ao label. */
id, 
/** Texto do label associado ao input. */
label, 
/** Indica se o input está habilitado ou desabilitado.
- true: habilitado
- false: desabilitado */
enable, 
/** Tipo de arredondamento do input. */
rounded, 
/** Valor do input */
value, 
/** Função chamada quando o valor do input muda. */
onChange, }: Props): React.JSX.Element;
export {};

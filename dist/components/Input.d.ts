import { RoundedType } from "@/@core/types/Rounded";
import React from "react";
interface Props {
    id: string;
    enable: boolean;
    rounded: RoundedType;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ 
/** ID único para o switch. Deve ser usado para associar o input ao label. */
id, label, 
/** Indica se o switch está habilitado ou desabilitado.
- true: habilitado
- false: desabilitado */
enable, 
/** Tipo de arredondamento do botão. */
rounded, 
/** Função chamada quando o estado do switch muda. */
onChange, }: Props): React.JSX.Element;
export {};

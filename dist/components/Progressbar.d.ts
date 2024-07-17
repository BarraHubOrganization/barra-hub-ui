import React from "react";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    enable: boolean;
    value: number;
    rounded: RoundedType;
}
export default function Progressbar({ 
/** Indica se o input está habilitado ou desabilitado.
- true: habilitado
- false: desabilitado */
enable, 
/** Valor do input */
value, 
/** Tipo de arredondamento do input. */
rounded, }: Props): React.JSX.Element;
export {};

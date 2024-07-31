import React from "react";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    /** Indica se o input está habilitado ou desabilitado. */
    enable: boolean;
    /** Valor do input */
    value: number;
    /** Tipo de arredondamento do input. */
    rounded: RoundedType;
}
export default function Progressbar({ enable, value, rounded, }: Props): React.JSX.Element;
export {};

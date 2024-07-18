import React, { ReactNode } from "react";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
interface Props {
    /** Conteúdo do toaster*/
    content: ReactNode;
    /** Tipo de sombra do snackbar. */
    shadow?: ShadowType;
    /** Tipo de arredondamento do snackbar. */
    rounded: RoundedType;
    /** Distância da borda direita da janela. */
    right: number;
    /** Distância da borda superior da janela. */
    top: number;
    /** Distância da borda esquerda da janela. */
    left: number;
    /** Distância da borda inferior da janela. */
    bottom: number;
    /** Tempo em milissegundos antes de esconder o snackbar */
    duration?: number;
}
export default function Snackbar({ content, shadow, rounded, right, top, left, bottom, duration, }: Props): React.JSX.Element | null;
export {};

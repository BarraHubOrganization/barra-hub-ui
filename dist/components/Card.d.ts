import React, { ReactNode } from "react";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
interface Props {
    /** Conteúdo do card, permite o tipo texto ou html. */
    content: ReactNode;
    /** Define a borda arredondada do avatar. */
    rounded: RoundedType;
    /** Define a sombra do avatar. */
    shadow: ShadowType;
}
export default function Card({ content, rounded, shadow, }: Props): React.JSX.Element;
export {};

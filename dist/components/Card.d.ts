import React, { ReactNode } from "react";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
interface Props {
    content: ReactNode;
    /** Define a borda arredondada do avatar. */
    rounded: RoundedType;
    shadow: ShadowType;
}
export default function Card({ content, rounded, shadow, }: Props): React.JSX.Element;
export {};

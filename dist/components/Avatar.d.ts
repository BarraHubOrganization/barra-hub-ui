import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AvatarType } from "../@core/types/Avatar";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    /** Tipo de avatar: pode ser "icon" para ícone, "text" para texto ou "image" para imagem. */
    type: AvatarType;
    /** Texto a ser exibido se o tipo for "text". */
    text?: string;
    /** Ícone a ser exibido se o tipo for "icon". */
    icon?: IconProp;
    /** URL da imagem a ser exibida se o tipo for "image". */
    linkImage?: string;
    /** Define a borda arredondada do avatar. */
    rounded: RoundedType;
}
export default function Avatar({ type, text, icon, linkImage, rounded, }: Props): React.JSX.Element;
export {};

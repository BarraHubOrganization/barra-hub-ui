import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { RoundedType } from "../@core/types/Rounded";
import { AvatarType } from "@/@core/types/avatar";
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
    /** Define o tamanho do avatar.*/
    size?: number;
}
export default function Avatar({ type, text, icon, linkImage, rounded, size }: Props): React.JSX.Element;
export {};

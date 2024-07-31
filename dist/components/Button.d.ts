import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
import { FillModeType } from "../@core/types/FillMode";
interface Props {
    /** Texto a ser exibido dentro do botão. */
    text?: string;
    /** Ícone a ser exibido dentro do botão. */
    icon?: IconProp;
    /** Imagem a ser exibida dentro do botão */
    linkImage?: string;
    /** Tipo de arredondamento do botão. */
    rounded?: RoundedType;
    /** Tipo de sombra do botão. */
    shadow?: ShadowType;
    /** Estilo do botão */
    fillMode: FillModeType;
    /** Define se o botão está ativo ou não*/
    enable?: boolean;
    /** Função a ser executada quando o botão é clicado. */
    onClick?: () => void;
    [x: string]: any;
}
export default function Button({ text, icon, linkImage, rounded, shadow, fillMode, enable, onClick, ...props }: Props): React.JSX.Element;
export {};

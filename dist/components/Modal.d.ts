import React, { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
interface Props {
    /** Ícone no título do modal */
    iconTitle?: IconDefinition;
    /** Título do modal */
    title: string;
    /** Ícone do botão no footer do modal */
    iconButton?: IconDefinition;
    /** Texto do botão no footer do modal */
    textButton?: string;
    /** Função do botão no footer do modal */
    onClickButton?: () => void;
    /** Conteúdo do modal. */
    content: ReactNode;
    /** Define se o modal está visível. */
    isVisible: boolean;
    /** Define a borda arredondada do modal. */
    rounded?: RoundedType;
    /** Define a sombra do modal. */
    shadow?: ShadowType;
    /** Função para fechar o modal. */
    onClose: () => void;
}
export default function Modal({ iconTitle, title, iconButton, textButton, onClickButton, content, isVisible, rounded, shadow, onClose, }: Props): React.JSX.Element | null;
export {};

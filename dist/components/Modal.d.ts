import React, { ReactNode } from "react";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
interface ModalProps {
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
export default function Modal({ content, isVisible, rounded, shadow, onClose, }: ModalProps): React.JSX.Element | null;
export {};

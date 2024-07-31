import React, { ReactNode } from "react";
import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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

export default function Modal({
  content,
  isVisible,
  rounded = "sm",
  shadow = "sm",
  onClose,
}: ModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black h-screen w-full bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg flex">    
        <Card content={content} rounded={rounded} shadow={shadow} />
        <button
          className="text-gray-400 hover:text-gray-600 p-3"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
    </div>
  );
}

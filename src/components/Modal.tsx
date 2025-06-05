import React, { ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { RoundedType } from "../@core/types/Rounded";
import { ShadowType } from "../@core/types/Shadow";

import Card from "./Card";
import Button from "./Button";

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

export default function Modal({
  iconTitle,
  title,
  iconButton,
  textButton,
  onClickButton,
  content,
  isVisible,
  rounded = "sm",
  shadow = "sm",
  onClose,
}: Props) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg flex">
        <Card
          content={
            <>
              <div className="border-b border-b-neutral-200">
                <div className="m-3 flex justify-between text-neutral-700 items-center gap-6">
                  <div className="flex gap-2 items-center">
                    {iconTitle && <FontAwesomeIcon icon={iconTitle} />}
                    <span className="text-lg font-medium">{title}</span>
                  </div>
                  <div>
                    <button
                      className=" hover:text-neutral-900"
                      onClick={onClose}
                    >
                      <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3">{content}</div>
              {textButton && (
                <div className="border-t border-t-neutral-200 flex justify-end p-3">
                  <Button
                    fillMode="solid"
                    text={textButton}
                    onClick={onClickButton}
                    icon={iconButton}
                  />
                </div>
              )}
            </>
          }
          rounded={rounded}
          shadow={shadow}
        />
      </div>
    </div>
  );
}

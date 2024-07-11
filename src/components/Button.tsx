import Image from "next/image";
import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RoundedType } from "@/@core/types/Rounded";
import { RoundedConsts } from "@/@core/consts/Rounded";
import { ShadowConsts } from "@/@core/consts/Shadow";
import { ShadowType } from "@/@core/types/Shadow";
import { FillModeType } from "@/@core/types/FillMode";
import { FillMode } from "@/@core/consts/FillMode";

interface ButtonProps {
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

  /** Função a ser executada quando o botão é clicado. */
  onClick?: () => void;
}

export default function Button({
  text,
  icon,
  linkImage,
  rounded,
  shadow,
  fillMode,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`${rounded && RoundedConsts[rounded]} ${shadow && ShadowConsts[shadow]} ${FillMode[fillMode]} w-auto h-10 flex justify-center items-center relative gap-2 p-2`} onClick={onClick}
    >
        {icon && <FontAwesomeIcon icon={icon} className="text-xl" />}
        {linkImage && (
          <Image alt="image" src={linkImage} width={20} height={20} />
        )}
        {text && <span>{text}</span>}
    </button>
  );
}

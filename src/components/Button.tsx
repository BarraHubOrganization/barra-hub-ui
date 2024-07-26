import Image from "next/image";
import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RoundedType } from "../@core/types/Rounded";
import { RoundedConsts } from "../@core/consts/Rounded";
import { ShadowConsts } from "../@core/consts/Shadow";
import { ShadowType } from "../@core/types/Shadow";
import { FillModeType } from "../@core/types/FillMode";
import { FillMode } from "../@core/consts/FillMode";

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

export default function Button({
  text,
  icon,
  linkImage,
  rounded = 'sm',
  shadow,
  fillMode = 'solid',
  enable = true,
  onClick,
  ...props
}: Props) {
  return (
    <button
      disabled={!enable}
      className={`${rounded && RoundedConsts[rounded]} ${shadow && ShadowConsts[shadow]} ${FillMode[fillMode]} ${!enable && "bg-neutral-200 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-400"} w-auto h-10 flex justify-center items-center relative gap-2 p-2`}
      onClick={!enable ? () => {} : onClick}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-xl" />}
      {linkImage && (
        <Image alt="image" src={linkImage} width={20} height={20} />
      )}
      {text && <span>{text}</span>}
    </button>
  );
}

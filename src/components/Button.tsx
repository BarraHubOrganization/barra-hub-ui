import Image from "next/image";
import React, { useEffect, useState } from "react";

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

  backgroundColor?: string;
  /** Função a ser executada quando o botão é clicado. */
  onClick?: () => void;

  [x: string]: any;
}

export default function Button({
  text,
  icon,
  linkImage,
  rounded = "sm",
  shadow,
  fillMode = "solid",
  enable = true,
  backgroundColor = "#0e9da1",
  onClick,
  ...props
}: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [clientBackgroundColor, setClientBackgroundColor] = useState<string>(
    backgroundColor ? backgroundColor : ""
  );
  const [textColor, setTextColor] = useState<string>("#FFFFFF");

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      const getTextColor = (bgColor: string) => {
        const hexToRgb = (hex: string) => {
          let r = 0,
            g = 0,
            b = 0;
          if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
          } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
          }
          return [r, g, b];
        };

        const [r, g, b] = hexToRgb(bgColor);
        const luminance = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;
        return luminance < 0.5 ? "#FFFFFF" : "#333";
      };

      setTextColor(getTextColor(clientBackgroundColor));
    }
  }, [clientBackgroundColor, isMounted]);

  useEffect(() => {
    setClientBackgroundColor(backgroundColor);
  }, [backgroundColor]);

  const fillModeClass = FillMode[fillMode] || FillMode.solid;

  return (
    <button
      disabled={!enable}
      className={` 
        ${rounded && RoundedConsts[rounded]} 
        ${shadow && ShadowConsts[shadow]} 
        ${fillModeClass} 
        ${!enable ? "bg-neutral-200 text-neutral-400" : ""} 
        w-auto h-10 flex justify-center items-center gap-2 p-2`}
      onClick={enable ? onClick : undefined}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        border: enable ? "none" : "1px solid #ccc",
      }}
      {...props}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-xl" />}
      {linkImage && (
        <Image alt="button image" src={linkImage} width={20} height={20} />
      )}
      {text && <span>{text}</span>}
    </button>
  );
}

import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { AvatarType } from "../@core/types/Avatar";
import { RoundedType } from "../@core/types/Rounded";
import { RoundedConsts } from "../@core/consts/Rounded";

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

export default function Avatar({
  type,
  text,
  icon,
  linkImage,
  rounded = "sm",
  size = 40
}: Props) {
  return (
    <div
      className={`${RoundedConsts[rounded]} flex justify-center items-center transition-all duration-500 bg-primary relative`}
      style={{ width: size, height: size }}
    >
      {type === "icon" && icon && (
        <FontAwesomeIcon icon={icon} className="text-white text-xl" />
      )}
      {type === "text" && text && (
        <span className="text-white text-xl">{text}</span>
      )}
      {type === "image" && linkImage && (
        <Image
          alt="avatar image"
          src={linkImage}
          layout="fill"
          objectFit="cover"
          className={`${rounded}`}
        />
      )}
    </div>
  );
}

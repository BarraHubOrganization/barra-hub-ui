import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { AvatarType } from "@/@core/types/Avatar";
import { RoundedType } from "@/@core/types/Rounded";
import { RoundedConsts } from "@/@core/consts/Rounded";

interface AvatarProps {
  type: AvatarType;
  text?: string;
  icon?: IconProp;
  linkImage?: string;
  rounded: RoundedType;
}

export default function Avatar({
  type,
  text,
  icon,
  linkImage,
  rounded,
}: AvatarProps) {
  return (
    <div
      className={`${RoundedConsts[rounded]} w-10 h-10 flex justify-center items-center transition-all duration-500 bg-red-500 relative`}
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

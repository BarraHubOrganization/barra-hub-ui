import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { AvatarType } from "@/@core/types/Avatar";
import { RoundedType } from "@/@core/types/Rounded";
import { RoundedConsts } from "@/@core/consts/Rounded";

interface ButtonProps {
  type: AvatarType;
  text?: string;
  icon?: IconProp;
  linkImage?: string;
  rounded: RoundedType;
}

export default function Button({
  rounded,
}: ButtonProps) {
  return (
    <button
      className={`${RoundedConsts[rounded]} w-10 h-10 flex justify-center items-center transition-all duration-500 bg-red-500 relative px-8`}
    >
        Teste
    </button>
  );
}

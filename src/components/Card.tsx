import React, { ReactNode } from "react";

import { RoundedType } from "../@core/types/Rounded";
import { RoundedConsts } from "../@core/consts/Rounded";
import { ShadowType } from "../@core/types/Shadow";
import { ShadowConsts } from "../@core/consts/Shadow";

interface Props {
  /** Conteúdo do card, permite o tipo texto ou html. */
  content: ReactNode;

  /** Define a borda arredondada do avatar. */
  rounded: RoundedType;

  /** Define a sombra do avatar. */
  shadow: ShadowType;
}

export default function Card({
  content,
  rounded = "sm",
  shadow = "sm",
}: Props) {
  return (
    <div
      className={`${RoundedConsts[rounded]} ${ShadowConsts[shadow]} w-full h-full bg-white text-neutral-700`}
    >
      {content}
    </div>
  );
}

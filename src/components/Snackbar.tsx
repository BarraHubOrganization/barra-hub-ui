import React, { ReactNode, useEffect, useState } from "react";

import { RoundedType } from "../@core/types/Rounded";
import { RoundedConsts } from "../@core/consts/Rounded";
import { ShadowType } from "../@core/types/Shadow";
import { ShadowConsts } from "../@core/consts/Shadow";

interface Props {
  /** Conteúdo do toaster*/
  content: ReactNode;

  /** Tipo de sombra do snackbar. */
  shadow?: ShadowType;

  /** Tipo de arredondamento do snackbar. */
  rounded: RoundedType;

  /** Distância da borda direita da janela. */
  right: number;

  /** Distância da borda superior da janela. */
  top: number;

  /** Distância da borda esquerda da janela. */
  left: number;

  /** Distância da borda inferior da janela. */
  bottom: number;

  /** Tempo em milissegundos antes de esconder o snackbar */
  duration?: number;
}

export default function Snackbar({
  content,
  shadow = "sm",
  rounded = "sm",
  right,
  top,
  left,
  bottom,
  duration = 3000,
}: Props) {
  const [visible, setVisible] = useState(true);

  const style = {
    right: right !== undefined ? `${right}px` : "auto",
    top: top !== undefined ? `${top}px` : "auto",
    left: left !== undefined ? `${left}px` : "auto",
    bottom: bottom !== undefined ? `${bottom}px` : "auto",
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;
    return (    
    <div
      className={`${shadow && ShadowConsts[shadow]} ${rounded && RoundedConsts[rounded]} absolute bg-white border-l-4 min-h-9 border-l-primary p-2 text-neutral-500 max-w-72`}
      style={style}
    >
      {content}
    </div>
  );
}

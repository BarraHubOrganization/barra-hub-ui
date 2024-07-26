import React, { useEffect, useState } from "react";

import { RoundedType } from "../@core/types/Rounded";
import { RoundedConsts } from "../@core/consts/Rounded";

interface Props {
  /** Indica se o input está habilitado ou desabilitado. */
  enable: boolean;

  /** Valor do input */
  value: number;

  /** Tipo de arredondamento do input. */
  rounded: RoundedType;
}

export default function Progressbar({
  enable,
  value,
  rounded = "sm",
}: Props) {
  const [leftTextColor, setLeftTextColor] = useState("text-black");
  const [rightTextColor, setRightTextColor] = useState("text-black");

  function getLuminance(r: number, g: number, b: number): number {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function isDark(bgColor: string): boolean {
    const rgb = bgColor.match(/\d+/g)?.map(Number);
    if (!rgb || rgb.length !== 3) return false;
    const luminance = getLuminance(rgb[0], rgb[1], rgb[2]);
    return luminance < 0.5;
  }

  useEffect(() => {
    const bgColorClass = enable ? "rgb(239,68,68)" : "rgb(252,165,165)";
    setLeftTextColor(isDark(bgColorClass) ? "text-white" : "text-black");
    setRightTextColor(isDark("rgb(255,255,255)") ? "text-white" : "text-black");
  }, [enable]);

  const maxAndMinValue = value > 100 ? 100 : value < 0 ? 0 : value;
  const valuePercentage = `${maxAndMinValue}%`;

  return (
    <div
      className={`${rounded && RoundedConsts[rounded]} relative w-full h-6 bg-neutral-100`}
    >
      <div
        className={`${enable ? "bg-primary" : "bg-tertiary"} h-full`}
        style={{ width: `${maxAndMinValue}%` }}
      >
        {/* Layer for dark text */}
        <span
          className={`mx-2 font-medium absolute inset-0 ${leftTextColor}`}
          style={{ clipPath: `inset(0 ${100 - maxAndMinValue}% 0 0)` }}
        >
          {valuePercentage}
        </span>
        {/* Layer for light text */}
        <span
          className={`mx-2 font-medium absolute inset-0 ${rightTextColor}`}
          style={{ clipPath: `inset(0 0 0 ${maxAndMinValue - 3}%)` }}
        >
          {valuePercentage}
        </span>
      </div>
    </div>
  );
}

import { useEffect } from "react";

interface Props {
  /** Texto que será exibido dentro do tooltip quando o usuário passar o mouse sobre o elemento. */
  text: string;

  /** O ID do elemento ao qual o tooltip será anexado. Certifique-se de que este ID corresponda ao ID do elemento alvo na sua aplicação. */
  targetId: string;
}

export default function Tooltip({ text, targetId }: Props) {
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const tooltipElement = document.createElement("div");
    tooltipElement.className = `tooltip bg-gray-800 text-white text-sm rounded p-2 absolute hidden`;
    tooltipElement.innerText = text;
    document.body.appendChild(tooltipElement);

    const updateTooltipPosition = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      const offset = 10;

      tooltipElement.style.left = `${pageX + offset}px`;
      tooltipElement.style.top = `${pageY + offset}px`;
    };

    const showTooltip = (e: MouseEvent) => {
      tooltipElement.classList.remove("hidden");
      updateTooltipPosition(e);
    };

    const hideTooltip = () => {
      tooltipElement.classList.add("hidden");
    };

    target.addEventListener("mousemove", updateTooltipPosition);
    target.addEventListener("mouseenter", showTooltip);
    target.addEventListener("mouseleave", hideTooltip);

    return () => {
      target.removeEventListener("mousemove", updateTooltipPosition);
      target.removeEventListener("mouseenter", showTooltip);
      target.removeEventListener("mouseleave", hideTooltip);
      tooltipElement.remove();
    };
  }, [text, targetId]);

  return null;
}

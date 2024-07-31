interface Props {
    /** Texto que será exibido dentro do tooltip quando o usuário passar o mouse sobre o elemento. */
    text: string;
    /** O ID do elemento ao qual o tooltip será anexado. Certifique-se de que este ID corresponda ao ID do elemento alvo na sua aplicação. */
    targetId: string;
}
export default function Tooltip({ text, targetId }: Props): null;
export {};

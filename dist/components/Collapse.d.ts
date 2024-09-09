import { ReactNode } from "react";
interface SubCollapse {
    title: string;
    content: ReactNode;
    subCollapse?: SubCollapse[];
}
interface Props {
    /** Exibe o texto ou HTML que será o título deste item. */
    title: ReactNode;
    /** Define o conteúdo que será exibido quando o subcollapse estiver expandido, pode ser um conteúdo HTML. */
    children: ReactNode;
    /**  Lista opcional de sub-itens, representada por um array de objetos contendo `title` e `content`. */
    subCollapse?: SubCollapse[];
}
export default function Collapse({ title, children, subCollapse }: Props): import("react").JSX.Element;
export {};

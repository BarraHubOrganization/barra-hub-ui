import React from "react";
import { RoundedType } from "../@core/types/Rounded";
interface GenericSelect {
    key: number | string;
    value: string;
}
interface Props {
    /** Identificador único para o input */
    id: string;
    /** Lista de opções disponíveis no select */
    options: GenericSelect[];
    /** Nome do campo select */
    name: string;
    /** Indica se o select está habilitado ou desabilitado */
    enable: boolean;
    /** Tipo de arredondamento do select */
    rounded: RoundedType;
    /** Texto do label associado ao select */
    label: string;
    /** Função chamada quando o valor do select muda */
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    /** Valor atualmente selecionado no select */
    value?: string | number;
}
export default function Select({ id, name, options, enable, rounded, label, value, onChange, }: Props): React.JSX.Element;
export {};

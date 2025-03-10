import React from "react";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    id: string;
    name: string;
    rounded: RoundedType;
    label: string;
    mask: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
export default function MaskedInput({ id, rounded, name, label, mask, value, onChange, placeholder, disabled, }: Props): React.JSX.Element;
export {};

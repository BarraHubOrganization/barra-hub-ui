import React from "react";
interface Props {
    id: string;
    name: string;
    label: string;
    mask: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
export default function MaskedInput({ id, name, label, mask, value, onChange, placeholder, disabled, }: Props): React.JSX.Element;
export {};

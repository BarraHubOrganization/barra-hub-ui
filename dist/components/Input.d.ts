import React from "react";
import { RoundedType } from "../@core/types/Rounded";
import { InputType } from "../@core/types/Input";
interface ValidationRule {
    rule: (value: string) => boolean;
    message: string;
}
interface Props {
    id: string;
    type: InputType;
    enable: boolean;
    rounded: RoundedType;
    label: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    validations?: ValidationRule[];
    errorMessage?: string;
}
export default function Input({ id, type, label, enable, rounded, value, onChange, required, validations, errorMessage, }: Props): React.JSX.Element;
export {};

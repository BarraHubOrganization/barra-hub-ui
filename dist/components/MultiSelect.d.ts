import React from "react";
import { IKeyValuePair } from "@/@core/interfaces/IKeyValuePair";
import { RoundedType } from "../@core/types/Rounded";
interface Props {
    id: string;
    selectedValues: IKeyValuePair[];
    options: IKeyValuePair[];
    name: string;
    enable: boolean;
    rounded: RoundedType;
    label: string;
    onChange?: (selected: IKeyValuePair[]) => void;
}
export default function MultiSelect({ options, rounded, label, selectedValues, enable, onChange, }: Props): React.JSX.Element;
export {};

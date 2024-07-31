import React, { ReactNode } from "react";
interface Props {
    id: string;
    enable: boolean;
    value?: ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Editor({ id, enable, value, onChange }: Props): React.JSX.Element;
export {};

import React from "react";
interface Column {
    field: string;
    title: string;
    width?: number;
    attributes?: React.CSSProperties;
    headerAttributes?: React.CSSProperties;
    sortable?: boolean;
    template?: (row: RowData) => React.ReactNode;
}
interface RowData {
    [key: string]: any;
}
interface Props {
    columns: Column[];
    dataSource: RowData[];
    selectable?: boolean;
    itemsPerPage?: number;
    textButton?: string;
    onClickButton?: () => void;
}
export default function Table({ columns, dataSource, selectable, itemsPerPage, textButton, onClickButton, }: Props): React.JSX.Element;
export {};

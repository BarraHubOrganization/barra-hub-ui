import React from "react";
interface Column {
    field: string;
    title: string;
    width?: number;
    attributes?: React.CSSProperties;
    headerAttributes?: React.CSSProperties;
    sortable?: boolean;
}
interface RowData {
    [key: string]: any;
}
interface Props {
    columns: Column[];
    dataSource: RowData[];
    selectable?: boolean;
    itemsPerPage?: number;
}
export default function Table({ columns, dataSource, selectable, itemsPerPage, }: Props): React.JSX.Element;
export {};

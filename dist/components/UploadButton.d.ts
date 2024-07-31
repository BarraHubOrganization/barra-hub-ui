import React from "react";
interface Props {
    /** Função a ser chamada quando um arquivo é selecionado */
    onFileSelect: (file: File | null) => void;
    /** Texto a ser exibido no botão */
    buttonText?: string;
}
export default function UploadButton({ onFileSelect, buttonText }: Props): React.JSX.Element;
export {};

import React from "react";
interface Props {
    /** Função a ser chamada quando um arquivo é selecionado */
    onFileSelect: (file: File | null) => void;
    /** Texto a ser exibido no botão */
    buttonText?: string;
    /** Tipos de arquivos aceitos (ex: 'image/*,application/pdf') */
    accept?: string;
    /** Exibir preview da imagem selecionada */
    showPreview?: boolean;
}
export default function UploadButton({ onFileSelect, buttonText, accept, showPreview, }: Props): React.JSX.Element;
export {};

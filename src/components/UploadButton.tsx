/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

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

export default function UploadButton({
  onFileSelect,
  buttonText = "Upload",
  accept = "",
  showPreview = false,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onFileSelect(file);

    if (file && showPreview && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else setPreviewUrl(null);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded hover:bg-primary"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faUpload} />
        <span>{buttonText}</span>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept={accept}
      />
      {showPreview && previewUrl && (
        <div className="mt-2 w-48 h-48">
          <img
            width="100%"
            height="100%"
            src={previewUrl}
            alt="Preview"
            className="max-w-xs rounded shadow"
          />
        </div>
      )}
    </div>
  );
}

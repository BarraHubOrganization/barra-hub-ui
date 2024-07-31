import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

interface Props {
  /** Função a ser chamada quando um arquivo é selecionado */
  onFileSelect: (file: File | null) => void;
  /** Texto a ser exibido no botão */
  buttonText?: string;
}

export default function UploadButton({ onFileSelect, buttonText = "Upload" }: Props){
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onFileSelect(file);
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
      />
    </div>
  );
};

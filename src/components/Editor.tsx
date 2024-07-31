import { faAlignCenter, faAlignLeft, faAlignRight, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

interface Props {
  id: string;
  enable: boolean;
  value?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Editor({ id, enable, value, onChange }: Props) {
  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const innerHTML = (event.target as HTMLDivElement).innerHTML;
    if (onChange) {
      const syntheticEvent = {
        target: { value: innerHTML },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  const formatText = (command: string, value?: string) => {
    const selection = window.getSelection();
    if (selection?.toString()) {
      document.execCommand(command, false, value);
    } else {
      console.warn('Nenhum texto foi selecionado para o comando:', command);
    }
  };

  const setColor = (color: string) => {
    document.execCommand("foreColor", false, color);
  };

  const exportToPDF = () => {
    const content = document.getElementById(id);
    if (content) {
      const printWindow = window.open("", "", "width=800,height=600");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Exportar PDF</title>
              <style>
                body { font-family: Arial, sans-serif; }
                .editor-content { padding: 20px; }
              </style>
            </head>
            <body>
              <div class="editor-content">${content.innerHTML}</div>
              <script>
                window.print();
                window.onafterprint = function () {
                  window.close();
                };
              </script>
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    }
  };

  return (
    <div className="border border-gray-200 rounded-md p-2 bg-neutral-100">
      <div className="flex space-x-2 mb-2">
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("bold")}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("italic")}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("underline")}
        >
          <u>U</u>
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("strikeThrough")}
        >
          <span className="line-through">S</span>
        </button>     
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("justifyLeft")}
        >
          <span><FontAwesomeIcon icon={faAlignLeft}/></span>
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("justifyCenter")}
        >
          <span><FontAwesomeIcon icon={faAlignCenter}/></span>
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={() => formatText("justifyRight")}
        >
          <span><FontAwesomeIcon icon={faAlignRight}/></span>
        </button>   
        <button
          type="button"
          className="px-4 py-2 bg-primary hover:opacity-80 rounded"
          onClick={exportToPDF}
        >
          <span><FontAwesomeIcon icon={faFilePdf}/></span>
        </button>   
        <input
          type="color"
          className="w-8 h-8 border-none rounded cursor-pointer"
          onChange={(e) => setColor(e.target.value)}
          title="Text Color"
        />
      </div>
      <div
        id={id}
        className={`border border-gray-200 p-4 min-h-[200px] outline-none ${enable ? "bg-white" : "bg-neutral-50"}`}
        contentEditable={enable}
        onInput={handleInput}
        style={{ color: '#444' }}
        dangerouslySetInnerHTML={{ __html: value as string }}
      ></div>
    </div>
  );
}

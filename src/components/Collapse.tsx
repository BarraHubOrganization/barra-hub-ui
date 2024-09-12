import React, { ReactNode, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface SubCollapse {
  title: ReactNode;
  content: ReactNode;
  subCollapse?: SubCollapse[];
}

interface Props {
  /** Exibe o texto ou HTML que será o título deste item. */
  title: ReactNode;

  /** Define o conteúdo que será exibido quando o subcollapse estiver expandido, pode ser um conteúdo HTML. */
  children?: ReactNode;

  /**  Lista opcional de sub-itens, representada por um array de objetos contendo `title` e `content`. */
  subCollapse?: SubCollapse[];
}

export default function Collapse({ title, children, subCollapse = [] }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg my-2 w-full">
      <div
        className="bg-primary px-4 py-2 cursor-pointer flex justify-between items-center"
        onClick={toggleCollapse}
      >
        <span className="text-white">{title}</span>
        <span className="text-white">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </div>
      <div
        className={`transition-all ${isOpen ? "" : "hidden"}`}
      >
        <div className="p-4 text-neutral-600 ">{children}</div>
        {subCollapse.length > 0 &&
          subCollapse.map((sub, index) => (
            <div key={index} className="m-4">
              <Collapse title={sub.title} subCollapse={sub.subCollapse || []}>
                {sub.content}
              </Collapse>
            </div>
          ))}
      </div>
    </div>
  );
}

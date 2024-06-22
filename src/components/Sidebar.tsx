import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCircleChevronLeft,
  faCircleChevronRight,
  faUser,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import { ItemsSidebar } from "../@core/interfaces/Sidebar";
import React from "react";

interface Props {
  username: string;
  profile: string;
  itemsSidebar: ItemsSidebar[];
}

export default function SideBar(props: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <article className="h-screen">
      <button
        className={"sm:hidden flex items-center justify-center top-5 w-6 h-6 p-1 mt-4 left-1/2 fixed z-50"}
        onClick={toggleSidebar}
        title={isSidebarOpen ? "Fechar barra lateral" : "Abrir barra lateral"}
      >
        <FontAwesomeIcon icon={faBars} className="text-red-500 text-3xl" />
      </button>
      <div
        className={`fixed flex flex-col items-center gap-4 bg-slate-50 min-w-16 min-h-screen shadow-sm transition-all duration-500 shadow-white p-3 ${isSidebarOpen ? "sm:w-44 w-full" : "sm:w-16 sm:flex hidden"}`}
      >
        <button
          className={"sm:flex hidden items-center justify-center w-6 h-6 p-1 mt-4"}
          onClick={toggleSidebar}
          title={isSidebarOpen ? "Fechar barra lateral" : "Abrir barra lateral"}
        >
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={isSidebarOpen ? faCircleChevronLeft : faCircleChevronRight}
              className="text-gray-400 text-2xl"
            />
          </div>
        </button>
        <div className="flex w-full items-center justify-center gap-2 sm:mt-0 mt-20">
          <div
            className={`bg-red-500 rounded-md w-10 h-10 flex justify-center items-center transition-all duration-500`}
          >
            <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col leading-5 text-gray-800">
              <span className="font-semibold">{props.username}</span>
              <span className="font-light">{props.profile}</span>
            </div>
          )}
        </div>
        {props.itemsSidebar.map((item, index) => (
          <div key={index} className="flex w-full gap-2 justify-center items-center text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-500 p-2 rounded-md cursor-pointer">
            <FontAwesomeIcon icon={faChartLine} className="text-xl" />
            {isSidebarOpen && <span className="text-md">{item.name}</span>}
          </div>
        ))}
      </div>
    </article>
  );
}

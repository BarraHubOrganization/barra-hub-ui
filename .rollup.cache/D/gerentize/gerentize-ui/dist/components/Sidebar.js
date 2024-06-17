import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faCircleChevronLeft, faCircleChevronRight, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
export default function SideBar(props) {
    var _a = useState(false), isSidebarOpen = _a[0], setIsSidebarOpen = _a[1];
    var toggleSidebar = function () {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (React.createElement("article", { className: "h-screen" },
        React.createElement("button", { className: "sm:hidden flex items-center justify-center top-5 w-6 h-6 p-1 mt-4 left-1/2 fixed z-50", onClick: toggleSidebar, title: isSidebarOpen ? "Fechar barra lateral" : "Abrir barra lateral" },
            React.createElement(FontAwesomeIcon, { icon: faBars, className: "text-red-500 text-3xl" })),
        React.createElement("div", { className: "fixed flex flex-col items-center gap-4 bg-slate-50 min-w-16 min-h-screen shadow-sm transition-all duration-500 shadow-white p-3 ".concat(isSidebarOpen ? "sm:w-44 w-full" : "sm:w-16 sm:flex hidden") },
            React.createElement("button", { className: "sm:flex hidden items-center justify-center w-6 h-6 p-1 mt-4", onClick: toggleSidebar, title: isSidebarOpen ? "Fechar barra lateral" : "Abrir barra lateral" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement(FontAwesomeIcon, { icon: isSidebarOpen ? faCircleChevronLeft : faCircleChevronRight, className: "text-gray-400 text-2xl" }))),
            React.createElement("div", { className: "flex w-full items-center justify-center gap-2 sm:mt-0 mt-20" },
                React.createElement("div", { className: "bg-red-500 rounded-md w-10 h-10 flex justify-center items-center transition-all duration-500" },
                    React.createElement(FontAwesomeIcon, { icon: faUser, className: "text-white text-xl" })),
                isSidebarOpen && (React.createElement("div", { className: "flex flex-col leading-5 text-gray-800" },
                    React.createElement("span", { className: "font-semibold" }, props.username),
                    React.createElement("span", { className: "font-light" }, props.profile)))),
            props.itemsSidebar.map(function (item, index) { return (React.createElement("div", { key: index, className: "flex w-full gap-2 justify-center items-center text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-500 p-2 rounded-md cursor-pointer" },
                React.createElement(FontAwesomeIcon, { icon: faChartLine, className: "text-xl" }),
                isSidebarOpen && React.createElement("span", { className: "text-md" }, item.name))); }))));
}
//# sourceMappingURL=Sidebar.js.map
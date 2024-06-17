import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
var inter = Inter({ subsets: ["latin"] });
export var metadata = {
    title: "Gerentize",
    description: "A component library designed to speed up UI development by providing reusable, styled, and ready-to-use components, enabling the rapid and efficient creation of screens.",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className }, children)));
}
//# sourceMappingURL=layout.js.map
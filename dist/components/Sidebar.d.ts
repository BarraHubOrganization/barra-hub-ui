import { ItemsSidebar } from "../@core/interfaces/Sidebar";
import React from "react";
interface Props {
    username: string;
    profile: string;
    itemsSidebar: ItemsSidebar[];
}
export default function SideBar(props: Props): React.JSX.Element;
export {};

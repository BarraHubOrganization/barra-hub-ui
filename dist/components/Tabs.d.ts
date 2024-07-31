import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface TabProps {
    label: string;
    icon?: IconDefinition;
    content: React.ReactNode;
}
interface Props {
    tabs: TabProps[];
}
export default function Tabs({ tabs }: Props): React.JSX.Element;
export {};

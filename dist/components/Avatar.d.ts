import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { AvatarType } from "../@core/types/Avatar";
interface AvatarProps {
    type: AvatarType;
    text?: string;
    icon?: IconProp;
    linkImage?: string;
    rounded: string;
}
export default function Avatar({ type, text, icon, linkImage, rounded, }: AvatarProps): React.JSX.Element;
export {};

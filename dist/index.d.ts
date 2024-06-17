import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AvatarType } from '@/@core/types/avatar';

interface ItemsSidebar {
    name: string;
    link: string;
}

interface Props {
    username: string;
    profile: string;
    itemsSidebar: ItemsSidebar[];
}
declare function SideBar(props: Props): React.JSX.Element;

interface AvatarProps {
    type: AvatarType;
    text?: string;
    icon?: IconProp;
    linkImage?: string;
    rounded: string;
}
declare function Avatar({ type, text, icon, linkImage, rounded, }: AvatarProps): React.JSX.Element;

export { Avatar, SideBar as Sidebar };

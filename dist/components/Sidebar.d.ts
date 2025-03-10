import React from "react";
import { IItemsSidebar } from "../@core/interfaces/ISidebar";
interface Props {
    /** Nome de usuário para exibição no sidebar. */
    username: string;
    /** Tipo de perfil do usuário para exibição no sidebar. */
    profile: string;
    /** Itens de navegação a serem exibidos no sidebar. */
    itemsSidebar: IItemsSidebar[];
    onClickLogout: () => void;
}
export default function SideBar({ username, profile, itemsSidebar, onClickLogout, }: Props): React.JSX.Element;
export {};

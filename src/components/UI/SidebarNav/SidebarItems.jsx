import { LuRadar } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";


export const SidebarItems = [
    { id: 1, label: 'Dashboard', icon: <LuRadar />, setPath: 'dash'},
    { id: 2, label: 'Users', icon: <LuUserCircle />, setPath: 'user-management'},
    { id: 3, label: 'Settings', icon: <LuSettings />, setPath: 'settings'},
  ];
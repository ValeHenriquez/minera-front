import React from "react";
import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

export const defaultNavItems: NavItem[] = [
    {
        label: "Dashboard",
        href: "/",
        icon: <HomeIcon className="w-6 h-6" />,
    },
    {
        label: "Esperanza",
        href: "/esperanza",
        icon: <FolderIcon className="w-6 h-6" />,
    },
    {
        label: "Llano",
        href: "/llano",
        icon: <FolderIcon className="w-6 h-6" />,
    },
    {
        label: "Tesoro",
        href: "/tesoro",
        icon: <FolderIcon className="w-6 h-6" />,
    },
];

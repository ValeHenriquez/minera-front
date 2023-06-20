import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavbarItems, NavItem } from "./defaultNavItems";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ArrowLeftOnRectangleIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
import CircleIcon from "./assets/icons/CircleIconLetter";

// add NavItem prop to component prop
type Props = {
    collapsed: boolean;
    navItems?: NavItem[];
    setCollapsed(collapsed: boolean): void;
    shown: boolean;
};



const Sidebar = ({
    collapsed,
    navItems = defaultNavbarItems,
    shown,
    setCollapsed,
}: Props) => {
    const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
    return (
        <div
            className={classNames({
                "bg-indigo-700 text-zinc-50 fixed md:static md:translate-x-0 z-20":
                    true,
                "transition-all duration-300 ease-in-out": true,
                "w-[300px]": !collapsed,
                "w-16": collapsed,
                "-translate-x-full": !shown,
            })}
        >
            <div
                className={classNames({
                    "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
                })}
            >
                {/* logo and collapse button */}
                <div
                    className={classNames({
                        "flex items-center border-b border-b-indigo-800 transition-none":
                            true,
                        "p-4 justify-between": !collapsed,
                        "py-4 justify-center": collapsed,
                    })}
                >
                    {!collapsed && <span className="whitespace-nowrap">Minerales Raros S.A.</span>}
                    <button
                        className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Icon className="w-5 h-5" />
                    </button>
                </div>
                <div
                    className={classNames({
                        "grid place-content-stretch p-4 ": true,
                    })}
                >
                    <div className="flex gap-4 items-center h-11 overflow-hidden">
                        <Image
                            src={
                                "https://media.licdn.com/dms/image/C4D03AQHmgUQ5owkH1g/profile-displayphoto-shrink_800_800/0/1517586479720?e=2147483647&v=beta&t=V1imqkhAC5ZMf6UsNjIS_GsE90WkugTl5wB722mXDRA"
                            }
                            height={36}
                            width={36}
                            alt="profile image"
                            className="rounded-full"
                        />
                        {!collapsed && (
                            <div className="flex flex-col ">
                                <span className="text-indigo-50 my-0">C. Chiang</span>
                                <Link href="/auth/profile" className="text-indigo-200 text-sm">
                                    Admin
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-stretch pb-2">
                    <div
                        className={classNames({
                            "text-indigo-100 hover:bg-indigo-900 flex": true,
                            "transition-colors duration-300": true,
                            "rounded-md p-2 mx-3 gap-4": !collapsed,
                            "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                        })}
                    >
                        <Link href={'/'} className="flex gap-2">
                            <HomeIcon className="w-6 h-6" /> <span>{!collapsed && "Home"}</span>
                        </Link>
                    </div>
                </div>

                <nav className="flex-grow">
                    <ul className="my-2 flex flex-col gap-2 items-stretch ">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={classNames({
                                    "text-indigo-100 hover:bg-indigo-900 flex": true,
                                    "transition-colors duration-300": true,
                                    "rounded-md p-2 mx-3 gap-4": !collapsed,
                                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                                })}
                            >
                                <Link href={item.href} className="flex gap-2">
                                    <CircleIcon text={item.letter} /> <span>{!collapsed && item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex flex-col gap-2 items-stretch pb-2">
                    <div
                        className={classNames({
                            "text-indigo-100 hover:bg-indigo-900 flex": true,
                            "transition-colors duration-300": true,
                            "rounded-md p-2 mx-3 gap-4": !collapsed,
                            "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                        })}
                    >
                        <Link href={'/auth/login'} className="flex gap-2">
                            <ArrowLeftOnRectangleIcon className="w-6 h-6" /> <span>{!collapsed && "Salir"}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;

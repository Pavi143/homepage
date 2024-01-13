"use client"
import { Divider, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faH, faHome, faBlog, faPeopleGroup, faPhone, faUserPlus, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import DarkModeSwitcher from "./darkmodeswitcher";
import { start } from "repl";


const sidebarItems = [
    { label: 'Home', href: 'home', icon: faHome },
    { label: 'Activities', href: 'activities', icon: faPersonChalkboard },
    { label: 'Teams', href: 'teams', icon: faPeopleGroup },
    { label: 'Blogs', href: 'blogs', icon: faBlog },
    { label: 'Contact', href: 'contact', icon: faPhone },
    { label: 'Join Us', href: 'join', icon: faUserPlus }

]
export default function Sidebar({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    const isMobile = useMediaQuery("(max-width:640px)")
    return <div className="sticky flex justify-between bg-mantle" style={{ width: isMobile ? '100%' : open ? "10rem" : "4rem", height: isMobile ? open ? "100dvh" : "56px" : "100vh", right: open ? 0 : undefined, top: 0, bottom: 0 }}>
        <div className="p-4">
            <div className="flex gap-4 items-center" style={{ flexDirection: isMobile ? open ? "row" : "row" : "column", alignItems: isMobile ? 'center' : open ? "start" : "center" }}>
                <FontAwesomeIcon icon={faBars} className="cursor-pointer m-1 " onClick={() => setOpen(!open)}></FontAwesomeIcon>
                <DarkModeSwitcher />
            </div>
            {(!isMobile || open) && <div className="flex flex-col gap-4 mt-12">
                {sidebarItems.map((item, i) => <div key={i} className=" flex h-8  items-center gap-2  hover:bg-crust p-1 rounded cursor-pointer">
                    <FontAwesomeIcon icon={item.icon} className="text-sm" ></FontAwesomeIcon>
                    {open && <Link href={item.href} className="text-text text-sm no-underline  "> {item.label}</Link>}
                </div>)}
            </div>}
        </div>
        <Divider style={{height: "100%"}} orientation="vertical" />
    </div>
}
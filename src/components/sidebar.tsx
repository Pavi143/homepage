"use client"
import { Divider, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faH, faHome, faBlog, faPeopleGroup, faPhone, faUserPlus, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";


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

    return <div className="md:h-screen fixed left-0  bg-mantle p-4 " style={{ width: open ? '100%' : '4rem' , right: open ? 0 : undefined , top : open ? 0 : undefined , bottom : open ? 0 : undefined}}>
        <FontAwesomeIcon icon={faBars} className="cursor-pointer m-1 " onClick={() => setOpen(!open)}></FontAwesomeIcon>
        {(!isMobile || open) && <div className="flex flex-col gap-4 mt-12">
            {sidebarItems.map((item, i) => <div key={i} className=" flex h-8  items-center gap-2  hover:bg-crust p-1 rounded cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-sm" ></FontAwesomeIcon>
                {open && <Link href={item.href} className="text-text text-sm no-underline  "> {item.label}</Link>}
            </div>)}
        </div>}
    </div>
}
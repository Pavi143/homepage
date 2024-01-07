"use client"
import { Divider } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faH, faHome } from "@fortawesome/free-solid-svg-icons";


const sidebarItems = [
    { label: 'Home', href: 'home', icon: faHome },
    { label: 'Activities', href: 'activities', icon: faHome },
    { label: 'Teams', href: 'teams', icon: faHome },
    { label: 'Blogs', href: 'blogs', icon: faHome },
    { label: 'Contact', href: 'contact', icon: faHome },
    { label: 'Join Us', href: 'join', icon: faHome }

]
export default function Sidebar() {
    const [open, setOpen] = useState(true)
    return <div className="h-screen  bg-mantle p-4" style={{width:open?'10rem': '4rem'}}>
        <FontAwesomeIcon icon={faBars} className="cursor-pointer m-1 " onClick={() => setOpen(!open)}></FontAwesomeIcon>
        <div className="flex flex-col gap-4 mt-12">
            {sidebarItems.map((item, i) => <div key={i} className=" flex h-8  items-center gap-2  hover:bg-crust p-1 rounded cursor-pointer">
                <FontAwesomeIcon icon={item.icon} className="text-blue "></FontAwesomeIcon>
                {open && <Link href={item.href} className="text-blue no-underline  "> {item.label}</Link>}
            </div>)}
        </div>
    </div>
}
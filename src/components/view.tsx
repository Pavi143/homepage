"use client"

import { FolderNode } from "@/lib/normalize-path"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Collapse, Divider } from "@mui/material"
import { ReactNode, useState } from "react"
import DarkModeSwitcher from "./darkmodeSwitcher"
import { Tray } from "./navbar"

export default function View({ tree, children }: { tree: FolderNode | null, children: ReactNode }) {
    const [open, setOpen] = useState(false)
    return <div className='flex relative'>
        <div className=''>
            <Collapse orientation='horizontal' in={open}>
                <div className='w-[300px] h-screen py-6 px-4 flex flex-col gap-4 bg-mantle'>
                    <div className='flex items-center justify-start gap-4'>
                        <FontAwesomeIcon onClick={() => setOpen(!open)} className=" cursor-pointer" icon={open ? faArrowLeft : faArrowRight} />
                        <DarkModeSwitcher />
                    </div>
                    <p> Directory </p>
                    <Divider />
                    <Tray tree={tree} pl={6} />
                </div>
            </Collapse>
        </div>
        <div className='relative w-full p-4'>
            {!open && <div className='flex absolute items-center justify-start gap-4 my-2'>
                <FontAwesomeIcon onClick={() => setOpen(!open)} className=" cursor-pointer" icon={open ? faArrowLeft : faArrowRight} />
                <DarkModeSwitcher />
            </div>}
            <div className='mt-16'>
                {children}
            </div>
        </div>
    </div >
}
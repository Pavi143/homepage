"use client"

import { FolderNode } from "@/lib/normalize-path"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Collapse, Divider } from "@mui/material"
import { ReactNode, useState } from "react"
import DarkModeSwitcher from "../components/darkmodeSwitcher"
import { Tray } from "../components/navbar"

export default function View({ tree, children }: { tree: FolderNode | null, children: ReactNode }) {
    const [open, setOpen] = useState(true)
    return <div>
        <div className='flex relative w-full gap-4'>
            <Collapse orientation='horizontal' in={open}>
                <div className="flex w-[300px] h-screen">
                    <div className='w-full h-screen py-6 flex flex-col gap-4'>
                        <div className='flex items-center justify-start gap-4'>
                            <FontAwesomeIcon onClick={() => setOpen(!open)} className=" cursor-pointer" icon={open ? faArrowLeft : faArrowRight} />
                            <DarkModeSwitcher />
                        </div>
                        <p> Directory </p>
                        <Divider />
                        <Tray tree={tree} pl={6} />
                    </div>
                    <Divider orientation="vertical" />
                </div>
            </Collapse>
            <div style={{ width: open ? "calc(100% - 300px)" : "100%" }} className='relative p-4'>
                {!open && <div className='flex absolute items-center justify-start gap-4 my-2'>
                    <FontAwesomeIcon onClick={() => setOpen(!open)} className=" cursor-pointer" icon={open ? faArrowLeft : faArrowRight} />
                    <DarkModeSwitcher />
                </div>}
                <div className='mt-16'>
                    {children}
                </div>
            </div>
        </div >
    </div>
}
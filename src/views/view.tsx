"use client"

import { FolderNode } from "@/lib/normalize-path"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider } from "@mui/material"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { ReactNode } from "react"
import DarkModeSwitcher from "../components/darkmodeSwitcher"
import { Tray } from "../components/navbar"

export default function View({ tree, children }: { tree: FolderNode | null, children: ReactNode }) {
    const { data: session } = useSession();
    console.log(session)
    return <div>
        <div className='flex justify-center relative w-full'>
            <div className="w-[300px] h-screen mr-4 flex">
                <div className="flex flex-col w-[300px] h-full">
                    <div className='w-full h-[calc(100%-10rem)] overflow-y-scroll srollbar-hide p-4 flex flex-col gap-4'>
                        <div className='flex items-center justify-between'>
                            <DarkModeSwitcher />
                            <div className="flex gap-4 pr-4 items-center">
                                <Link className="no-underline" href="/">Home</Link>
                                <Link className="no-underline" href="/about">About</Link>
                            </div>
                        </div>
                        <p> Directory </p>
                        <Divider />
                        <Tray tree={tree} pl={6} />
                    </div>
                    <div className="flex h-[10rem] items-center p-4 justify-end">
                        {session?.user ? <div className="flex flex-col gap-4 w-full justify-center items-center">
                            <img className="h-[5rem] object-contain rounded-full" src={session.user.image!} alt="" />
                            <p> User: <span className="text-green"> {session.user.name} </span> </p>
                        </div> : <Button onClick={() => signIn()} className="flex items-center gap-2 w-full"> <span> Login with </span> <FontAwesomeIcon icon={faGithub} /> </Button>}
                    </div>
                </div>
                <Divider orientation="vertical" />
            </div>
            <div className='container w-[calc(100%-300px)]'>
                {children}
            </div>
        </div>
    </div>
}
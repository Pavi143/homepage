"use client"

import DarkModeSwitcher from "@/components/darkmodeSwitcher"
import { Logo } from "@/components/logo"
import { Tray } from "@/components/navbar"
import { FolderNode } from "@/lib/normalize-path"
import { faDiscord, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Link } from "@mui/material"
import { signIn, useSession } from "next-auth/react"
import { ReactNode } from "react"

const links = [
    {
        label: "Homepage",
        href: "https://codingclubgct.in"
    }, {
        label: "GitHub",
        href: "https://github.com/coding-club-gct"
    }, {
        label: "Coding Club App",
        href: "https://play.google.com/store/apps/details?id=com.codingclubgct.app&pcampaignid=web_share"
    }
]

const socials = [
    {
        icon: faDiscord,
        href: ""
    }, {
        icon: faLinkedin,
        href: ""
    }, {
        icon: faInstagram,
        href: ""
    },
]

const howTo = [
    {
        label: "How to blog?",
        href: "/how-to-blog"
    }, {
        label: "License",
        href: ""
    }
]

export default function View({ tree, children }: { tree: FolderNode | null, children: ReactNode }) {
    const { data: session } = useSession();
    return <div className="w-full">
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
        <Divider />
        <div className="p-4 pt-12 mx-auto container flex justify-evenly" id="#about">
            <Logo />
            <div className="flex flex-col gap-4">
                <p> Useful links </p>
                {links.map(({ href, label }, i) => <a key={i} href={href} target="_blank" className="text-subtext0 no-underline text-sm">
                    {label}
                </a>)}
            </div>
            <div className="flex flex-col gap-4">
                <p> Connect with us </p>
                <div className="flex gap-4">
                    {socials.map(({ icon, href }, i) => <a className="text-subtext0 no-underline" key={i} href="">
                        <FontAwesomeIcon icon={icon} />
                    </a>)}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <p> Support </p>
                {howTo.map(({ href, label }, i) => <a key={i} href={href} target="_blank" className="text-subtext0 no-underline text-sm">
                    {label}
                </a>)}
            </div>
        </div>
        <div className="flex justify-center my-4">
            <a className="text-center no-underline" href="https://github.com/coding-club-gct/blogs"> Source Code </a>
        </div>
    </div>
}
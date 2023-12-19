"use client"

import { faArrowLeft, faArrowRight, faFolderClosed, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, Container, Divider } from "@mui/material";
import dirTree from "directory-tree";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import DarkModeSwitcher from "./darkmodeSwitcher";

export default function View({ tree, children }: { tree: dirTree.DirectoryTree<Record<string, any>>, children: ReactNode }) {
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

function Tray({ tree, pl }: { tree?: dirTree.DirectoryTree<Record<string, any>>, pl: number }) {
    const router = useRouter()
    const [clicked, setClicked] = useState(false);

    if (!tree) {
        return null;
    }

    const handleItemClick = () => {
        if (tree.children?.length) {
            setClicked(!clicked);
        }
        router.push(tree.path.split("src/app")[1])
    };
    const renderTree = (node: dirTree.DirectoryTree<Record<string, any>>, pl: number) => {
        const isDir = Boolean(node.children?.length)
        return (
            <div key={node.path}>
                <div onClick={handleItemClick} style={{ paddingLeft: pl }} className="flex items-center text-overlay2 hover:text-text gap-2 hover:bg-crust p-1 cursor-pointer">
                    {isDir ? clicked ? <FontAwesomeIcon icon={faFolderOpen} className="text-mauve" /> : <FontAwesomeIcon icon={faFolderClosed} /> : <div className="w-2 h-2 rounded-full bg-mauve"></div>}
                    <p> {node.name === "app" ? "home" : node.name.replaceAll("-", " ")} </p>
                </div>
                {clicked && node.children?.map((child, index) => (
                    <Tray key={index} tree={child} pl={pl + 12} />
                ))}
            </div>
        );
    };

    return (
        <div className="text-sm">
            {renderTree(tree, pl)}
        </div>
    );
}

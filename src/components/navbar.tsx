"use client"

import dirTree from "directory-tree"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faFolderClosed, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";
import DarkModeSwitcher from "./darkmodeSwitcher";
import { Divider } from "@mui/material";

export default function Sidebar({ tree }: { tree: dirTree.DirectoryTree<Record<string, any>> }) {
    const [show, setShow] = useState(false)
    return <div style={{ width: show ? undefined : "3rem", alignItems: show ? undefined : "center" }} className="w-screen absolute md:static md:w-[200px] bg-mantle flex flex-col min-h-screen p-4 gap-4">
        <FontAwesomeIcon onClick={() => setShow(!show)} className="ml-auto mr-4 cursor-pointer" icon={show ? faClose : faBars} />
        <DarkModeSwitcher />
        {show && <>
            <Divider />
            <div>
                <p> Directory </p>
                <Tray tree={tree} pl={6} />
            </div>
        </>}
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
        } else {
            router.push(tree.path.split("src/app")[1])
        }
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

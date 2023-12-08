"use client"

import dirTree from "directory-tree"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation";

export default function Navbar({ tree, pl }: { tree?: dirTree.DirectoryTree<Record<string, any>>, pl: number }) {
    const router = useRouter()
    if (!tree) {
        return null;
    }

    const [clicked, setClicked] = useState(false);

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
                    {isDir ? clicked ? <FontAwesomeIcon icon={faFolderOpen} className="text-mauve"/> : <FontAwesomeIcon icon={faFolderClosed} /> : <div className="w-2 h-2 rounded-full bg-mauve"></div>}
                    <p> {node.name.replaceAll("-", " ")} </p>
                </div>
                {clicked && node.children?.map((child, index) => (
                    <Navbar key={index} tree={child} pl={pl + 12} />
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

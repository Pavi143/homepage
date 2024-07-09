import { fetchRepo, getAllBlogs } from "@/lib/helpers"
import { octokit } from "@/lib/octokit"
import { Blog, Profile } from "@/types/types"
import { faDiscord, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Divider } from "@mui/material"
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"
import { headers } from "next/headers"
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
    }, {
        label: "Algolab",
        href: "https://algolab.codingclubgct.in"
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

export default async function View({ children }: { children: ReactNode }) {
    const headersList = headers()
    const url = new URL(headersList.get("x-url")!)
    // if (url.pathname.split("/").length >= 2) {
    //     const blogData = await getBlogData(url.pathname)
    //     if (blogData) {
    //         const files = await fetchAllFiles(blogData.repo)
    //         console.log(files)
    //     }
    // }

    return <div className="w-full">
        <div className="flex min-h-screen">
            <div className="flex-1 min-w-[300px]">
                <Navbar />
            </div>
            <Divider className="self-stretch h-auto" orientation="vertical" />
            {children}
        </div>
        <div>

        </div>
    </div>
}

const Navbar = async () => {
    return <>
    </>
}

export type FileNode = {
    type: "file",
    name: string,
    download_url: string | null,
    path: string,
    level: number
}

export type DirectoryNode = {
    type: "dir",
    name: string,
    children: (FileNode | DirectoryNode)[],
    path: string,
    level: number,
}

export const fetchAllFilesForAllUsers = async () => {
    const allFilesPromise = await getAllBlogs().then(allBlogs => allBlogs.map(async entry => {
        const { profile, blogs } = entry
        const data = []
        for (const blog of blogs) {
            const repo = await fetchRepo(blog.remoteSource)
            if (!repo) return null
            const files = await fetchAllFiles(repo)
            data.push({
                ...blog,
                files: files
            })
        }
        return { profile, blogs: data }

    }))
    return Promise.all(allFilesPromise).then(res => res.filter(Boolean) as { profile: Profile, blogs: (Blog & { files: DirectoryNode })[] }[])
}

const fetchAllFiles = async (repo: GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.get>) => {
    const dfs = async (path: string = "", level: number = 0): Promise<DirectoryNode> => {
        const { data } = await octokit.repos.getContent({
            owner: repo.owner.login,
            repo: repo.name,
            path
        })

        const node: DirectoryNode = {
            type: "dir",
            name: path.split('/').pop() || "",
            children: [],
            level,
            path
        }

        if (Array.isArray(data)) {
            for (const file of data) {
                if (file.type === "file" && file.name.endsWith(".md")) {
                    node.children.push({
                        type: "file",
                        name: file.name,
                        download_url: file.download_url,
                        path: file.path,
                        level: level + 1
                    } as FileNode)
                } else if (file.type === "dir") {
                    const childNode = await dfs(file.path, level + 1)
                    if (childNode.children.length > 0) {
                        node.children.push(childNode)
                    }
                }
            }
        }

        return node
    }

    return dfs()
}
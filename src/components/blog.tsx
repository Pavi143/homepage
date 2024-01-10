'use client'
import { faArrowUpRightFromSquare, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";

const blogItems = [
    {
        "tags": [
            "tutorial",
        ],
        "url": "how-to-blog",
        "read": "5 mins",
        "coverImage": "/how-to-blog.svg",
        "title": "How to blog",
        "githubData": {
            "author": {
                "name": "Aprilia",
                "blog": "https://itzapril.tech",
                "html_url": "https://github.com/useEffects",
                "email": null,
                "avatar_url": "https://avatars.githubusercontent.com/u/80976002?v=4"
            },
            "committer": {
                "name": "Aprilia",
                "avatar_url": "https://avatars.githubusercontent.com/u/80976002?v=4",
                "committed_date": "Wed  20 Dec  23  12:53 am"
            }
        }
    },
    {
        "tags": [
            "tutorial",

        ],
        "url": "how-to-blog2",
        "read": "5 mins",
        "coverImage": "/how-to-blog.svg",
        "title": "How to blog",
        "githubData": {
            "author": {
                "name": "Aprilia",
                "blog": "https://itzapril.tech",
                "html_url": "https://github.com/useEffects",
                "email": null,
                "avatar_url": "https://avatars.githubusercontent.com/u/80976002?v=4"
            },
            "committer": {
                "name": "Aprilia",
                "avatar_url": "https://avatars.githubusercontent.com/u/80976002?v=4",
                "committed_date": "Tue  9 Jan  24  10:48 am"
            }
        }
    },
    {
        "tags": [
            "tutorial",
        ],
        "url": "how-to-blog3",
        "read": "5 mins",
        "coverImage": "/how-to-blog.svg",
        "title": "How to blog",
        "githubData": {
            "author": {
                "name": "Aprilia",
                "blog": "https://itzapril.tech",
                "html_url": "https://github.com/useEffects",
                "email": null,
                "avatar_url": "https://avatars.githubusercontent.com/u/80976002?v=4"
            },
            "committer": {
                "name": "Aprilia",
                "avatar_url": "https://avatars.githubusercontent.com/u/80976002?v=4",
                "committed_date": "Tue  9 Jan  24  10:48 am"
            }
        }
    }
];
type BlogItem = {
    tags: string[],
    url: string,
    read: string,
    coverImage: string,
    title: string,
    githubData: {
        author: {
            name: string,
            blog: string | null
            html_url: string,
            email: string | null
            avatar_url: string
        },
        committer: {
            name: string,
            avatar_url: string,
            committed_date: string
        }
    }
}
export default  function Blog() {
    const [blogItems, setBlogItems] = useState<BlogItem[]>([])
    useEffect(() => {
        async function fetchBlogs() {

            const _blogItems: BlogItem[] = await fetch('https://blogs.codingclubgct.in/api').then(res => res.json())
            setBlogItems(_blogItems)
        }
        fetchBlogs()
    }, [])
    return (
        <div className=" flex justify-between gap-12  mb-12 w-full ">
            {blogItems.map((blogItem, i) => (
                <div key={i} className="flex flex-col   p-4 w-1/3 gap-2 bg-mantle rounded ">
                    <img src={`https://blogs.codingclubgct.in/${blogItem.coverImage}`} className="w-64 object-cover"></img>
                    <Divider className="my-4"></Divider>
                    <p className="text-text text-3xl font-medium">{blogItem.title}</p>
                    <p className="text-sm text-subtext0">{blogItem.githubData.committer.committed_date}</p>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faClock} className="w-4"></FontAwesomeIcon>
                        <p>{blogItem.read} read</p>
                    </div>

                    <div className="flex">
                        <div className="flex items-center">
                            <img src={blogItem.githubData.author.avatar_url} className="w-12 object-contain rounded-full" alt="Avatar" />
                        </div>
                        <div className="flex flex-col m-4">
                            <p className="p-1">{blogItem.githubData.author.name}</p>
                            <div className="flex justify-evenly gap-8 m-2">
                                {blogItem.githubData.author.blog && <div className="flex bg-mantle text-pink cursor-pointer gap-1">
                                    <a href={blogItem.githubData.author.blog} className="no-underline bg-mantle text-pink">Blog</a>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 ml-2 mt-[3px]"></FontAwesomeIcon>
                                </div>}
                                <div className="flex bg-mantle text-yellow cursor-pointer rounded gap-1">
                                    <a href={blogItem.githubData.author.html_url} className="no-underline text-yellow ">GitHub</a>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 ml-2 mt-[3px] "></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        {blogItem.tags.map((tag, j) => (
                            <div key={j} >
                                <span className="text-sm font-medium bg-crust rounded p-1" >{tag}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex  m-2">
                        <a href={`https://blogs.codingclubgct.in/${blogItem.url}`} className="text-blue no-underline">Read More</a>

                    </div>
                </div>
            ))}
        </div>
    );
}
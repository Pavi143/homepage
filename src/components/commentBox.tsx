"use client"

import { IssuesContext } from "@/context/issues"
import { CircularProgress } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import ReactReactions from "./reactReactions"

export default function CommentBox({ pathname }: { pathname: string }) {
    const { issues, refreshIssues, status } = useContext(IssuesContext)
    const [issue, setIssue] = useState<any>({})
    async function createInitialIssue() {
        await fetch("https://api.github.com/repos/coding-club-gct/blogs/issues", {
            method: "POST",
            headers: {
                "Accept": "application/vnd.github+json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT}`
            }, body: JSON.stringify({
                title: pathname,
                body: ""
            })
        }).then((res) => {
            refreshIssues()
        })
    }
    useEffect(() => {
        if (!issues) return
        const found = issues.find(({title}) => title === pathname)
        if(!found) {
            createInitialIssue()
        } else {
            setIssue(found)
        }
    }, [issues])
    return <div className="w-full">
        {true ? <div>
        </div>: <div className="w-full h-80 flex justify-center items-center"> {status === 403 && <div>
            <p className="font-semibold"> Comment Section temporarily closed</p>
            <p> We have been hit by the GitHub API Rate Limit </p>
            <p> Try again after sometime D: </p>
        </div> } </div>}
    </div>
}
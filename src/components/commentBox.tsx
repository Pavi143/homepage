"use client"

import { IssuesContext } from "@/context/issues"
import { CircularProgress } from "@mui/material"
import { useContext, useEffect, useState } from "react"

export default function CommentBox({ pathname }: { pathname: string }) {
    const { issues, refreshIssues, status } = useContext(IssuesContext)
    const [issue, setIssue] = useState<any>({})
    async function createInitialIssue() {
        await fetch("https://api.github.com/coding-club-gct/blogs/issues", {
            method: "POST",
            headers: {
                "Accept": "application/vnd.github+json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT}`
            }, body: JSON.stringify({
                title: pathname,
                body: ""
            })
        }).then(() => refreshIssues())
    }
    useEffect(() => {
        console.log(issues)
        const found = issues.find(({title}) => title === pathname)
        if(!found) {
            createInitialIssue()
        }
    }, [])
    return <div className="w-full">
        {Object.keys(issue).length ? <></>: <div className="w-full h-80 flex justify-center items-center"> {status === 403 && <div>
            <p className="font-semibold"> Comment Section temporarily closed</p>
            <p> We have been hit by the GitHub API Rate Limit </p>
            <p> Try again after sometime D: </p>
        </div> } </div>}
    </div>
}
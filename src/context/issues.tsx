"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface IssuesContextProps {
    issues: any[];
    refreshIssues: () => Promise<boolean>;
    status: number
}

export const IssuesContext = createContext<IssuesContextProps>({
    issues: [],
    refreshIssues: async () => false,
    status: NaN
});

export function IssuesProvider({ children }: { children: ReactNode }) {
    const [issues, setIssues] = useState<any[]>([]);
    const [status, setStatus] = useState<number>(NaN)

    async function fetchAllIssues() {
        try {
            const data = await fetch("https://api.github.com/repos/coding-club-gct/blogs/issues", {
                headers: {
                    "Accept": "application/vnd.github+json",
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT}`,
                },
            }).then(res => {
                setStatus(res.status)
                return res.json()
            });
            if (data.length) {
                setIssues(data);
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        fetchAllIssues();
    }, []);

    const refreshIssues: () => Promise<boolean> = async () => {
        const result = await fetchAllIssues();
        return result;
    };

    return (<IssuesContext.Provider value={{ issues, refreshIssues, status}}>
        {children}
    </IssuesContext.Provider>
    );
}

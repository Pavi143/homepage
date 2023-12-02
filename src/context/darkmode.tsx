"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({
    darkMode: true,
    toggleDarkMode: () => { },
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        document.querySelector("body")?.setAttribute("data-theme", darkMode ? "dark" : "light")
    }, [darkMode])
    return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode: () => setDarkMode((prev) => !prev) }}>{children}</DarkModeContext.Provider>;
}
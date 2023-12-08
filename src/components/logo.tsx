"use client"

import { DarkModeContext } from "@/context/darkmode"
import { useContext } from "react"

export function Logo() {
    const { darkMode } = useContext(DarkModeContext)
    return <img src={darkMode ? "/hyperd_dark.png" : "/hyperd_light.png"} className="w-24 h-24 object-contain" alt="logo" />
}
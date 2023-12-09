"use client"

import { DarkModeContext } from "@/context/darkmode"
import Image from "next/image"
import { useContext } from "react"

export function Logo() {
    const { darkMode } = useContext(DarkModeContext)
    return <Image src={darkMode ? "/hyperd_dark.png" : "/hyperd_light.png"} className="w-24 h-24 object-contain" alt="logo" />
}
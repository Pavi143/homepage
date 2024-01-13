"use client"
import Sidebar from '@/components/sidebar'
import { ReactNode, useEffect, useState } from "react"
import Footer from './footer'
import { Container, useMediaQuery } from '@mui/material'

export default function View({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(true)
    const isMobile = useMediaQuery("(max-width:640px)")
    useEffect(() => {
        if (isMobile) {
            setOpen(false)
        }
    }, [isMobile])
    return <div className="flex w-full justify-center relative md:flex-row flex-col">
        <Sidebar open={open} setOpen={setOpen} />
        {isMobile && open ? <></> : <div className='flex w-full flex-col'>
            <div style={{ paddingTop: isMobile ? '56px' : '0rem' }} className='px-0 w-full'>
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
        }
    </div>
}
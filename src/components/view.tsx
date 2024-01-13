"use client"
import Sidebar from '@/components/sidebar'
import { ReactNode, useState } from "react"
import Footer from './footer'
import { Container, useMediaQuery } from '@mui/material'

export default function View({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(true)
    const isMobile = useMediaQuery("(max-width:640px)")
    return <div className=''>
        <div className="flex justify-center relative w-full">
            <Sidebar open={open} setOpen={setOpen} />
            <div className='flex flex-col w-full'>
                <Container style={{ paddingLeft: isMobile ? "0rem" : open ? "10rem" : "4rem" }}>

                    {isMobile ? open ? <> </> : <>
                        <div>
                            {children}
                        </div>
                        
                    </> : <>  <div>
                        {children}
                    </div>
                    </>
                    }
                </Container>
                <div style={{ paddingLeft: isMobile ? "0rem" : open ? "10rem" : "4rem" }} >
                    <Footer />
                </div>
            </div>
        </div>

    </div>
}
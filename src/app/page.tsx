"use client"
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer"
import Blog from "@/components/blog";
import logo from "@/assets/codingclublogo.png"
import { Button, Divider, Container, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Services from "@/components/services";


export default function Page() {
  const [open, setOpen] = useState(true)
  const isMobile = useMediaQuery("(max-width:640px)")
  return <div className="flex">
    {/* <Sidebar open={open} setOpen={setOpen} /> */}
    <div >
      <div className="flex flex-col md:flex-row justify-around md:mt-28 mt-12 md:ml-10">
        <div className="w-full md:w-1/3 md:h-1/3">
          <img src={logo.src} className="object-contain w-full">
          </img>
        </div>
        <div className="h-full md:w-2/3 md:ml-10 w-full flex flex-col gap-4 p-4">
          <p className="text-6xl">Not a <span className="text-yellow">Rocket</span> Science</p>
          <p className="text-lg md:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique!</p>
          <div className="flex justify-center  md:w-3/4  gap-4 my-4">
            <Button variant="contained" >Collab with GitHub </Button>
            <Button variant="outlined"  >Join with Discord</Button>
          </div>
          <Divider></Divider>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem.</p>
        </div>
      </div>

      <p className="text-4xl my-12">Lorem ipsum dolor sit.</p>
      <Blog />
      {!isMobile && <Services />}
      <Footer />
    </div>
  </div>
}

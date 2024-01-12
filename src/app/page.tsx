"use client"
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer"
import Blog from "@/components/blog";
import logo from "@/assets/codingclublogo.png"
import { Button, Divider, Container } from "@mui/material";
import { useState } from "react";
import Services from "@/components/services";


export default function Page() {
  const [open, setOpen] = useState(true)
  return <div className="flex">
    <Sidebar open={open} setOpen={setOpen} />
    <Container style={{marginLeft : open? '10rem' : '4rem'}}>
      <div className="flex w-full">
        <div className="flex flex-col">
          <div className="flex justify-around mt-28 ml-10">
            <div className="w-1/3 h-1/3">
              <img src={logo.src} className="object-contain w-full">
              </img>
            </div>
            <div className="h-full w-2/3 ml-10 flex flex-col gap-4 p-4">
              <p className="text-6xl">Not a <span className="text-yellow">Rocket</span> Science</p>
              <p className="text-lg w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique!</p>
              <div className="flex justify-center w-3/4  gap-4 my-4">
                <Button variant="contained" >Collab with GitHub </Button>
                <Button variant="outlined"  >Join with Discord</Button>
              </div>
              <Divider></Divider>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-5xl my-12">Lorem ipsum dolor sit.</p>
      <Services/>
      <Blog/>
      <Footer />
    </Container>
  </div>
}

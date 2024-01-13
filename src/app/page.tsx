"use client"
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer"
import Blog from "@/components/blog";
import logo from "@/assets/codingclublogo.png"
import { Button, Divider, Container, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Services from "@/components/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";


export default function Page() {
  const [open, setOpen] = useState(true)
  const isMobile = useMediaQuery("(max-width:640px)")
  return <div className="flex">
    {/* <Sidebar open={open} setOpen={setOpen} /> */}
    <div >
      <div className="flex flex-col md:flex-row justify-around md:mt-28  md:ml-10">
        <div className="w-full mt-12 md:mt-0 md:w-1/3 md:h-1/3">
          <img src={logo.src} className="object-contain w-full">
          </img>
        </div>
        <div className="h-full md:w-2/3 md:ml-10 w-full flex flex-col gap-4 p-4">
          <p className="text-6xl">Not a <span className="text-yellow">Rocket</span> Science</p>
          <p className="text-lg md:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique!</p>
          <div className="flex justify-center  md:w-3/4  gap-4 my-4">
            <Button variant="contained" >Collab on GitHub </Button>
            <Button variant="outlined"  >Join with Discord</Button>
          </div>
          <Divider></Divider>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-8 m-4 pt-8 w-full bg-mantle p-4">
        <div className="flex flex-col gap-4 md:w-1/2 ml-4">
          <p className="text-3xl text-subtext0 font-medium text-center  mt-4">VISION</p>
          <p className="mt-6">To build a community that serves as a hub for young programmers to learn, develop and enrich their coding skills and also acts as a platform through which they can exhibit their skills to the technical world as talented programmers..</p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 ml-4 mb-4 ">
          <p className="text-3xl font-medium text-center mt-4 text-subtext0">MISSION</p>
          <div className="flex">
            <div className="flex flex-col gap-16 md:gap-8 mt-8 ml-2">
              <div className="flex ">
                <FontAwesomeIcon icon={faCode} className="m-1"></FontAwesomeIcon>
                <p className="pl-4">To elevate the programming skills of future engineers which will help them learn new tactics to deal with dynamic technologies.</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faCode} className="m-1"></FontAwesomeIcon>
                <p className="pl-4">To enrich the competitive programming skills of students by participating in renowned competitions.</p>
              </div>
              <div className="flex ">
                <FontAwesomeIcon icon={faCode} className="m-1"></FontAwesomeIcon>
                <p className="pl-4">To enrich the competitive programming skills of students by participating in renowned competitions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-4xl md:my-8 mx-2  my-12 md:pt-8 text-subtext0">Lorem ipsum dolor sit.</p>
      <p className="text-sm text-subtext0 mb-12 ml-2 max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore qui doloribus ea hic sunt enim tenetur autem sequi numquam.
      </p>
      <Blog />
      {!isMobile && <Services />}
    </div>
  </div>
}

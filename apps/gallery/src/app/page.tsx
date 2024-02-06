"use client"

import cover from "@/assests/img.png";
import { Avatar, AvatarGroup, Button, Container, Divider } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faYoutube, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faBookmark, faCalendar, faComment, faEarth, faEnvelope, faHeart, faPeopleGroup, faSave, faTag, faUpload } from "@fortawesome/free-solid-svg-icons"
import Header from "@/components/header"
import { team } from "@/lib/team"
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "@/context/darkmode";
import { CatppuccinContext } from "@/context/catppuccin";
import { events } from "@/lib/events"
import Link from "next/link";
import { InstagramEmbed } from 'react-social-media-embed';
import ccdark from "@/assests/codingclub/dark.png"
import cclight from "@/assests/codingclub/light.png"
import cartoon from "@/assests/cartoon.jpg"

const items = [
  {
    title: 'Title 1', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 2', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 3', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  },
  {
    title: 'Title 3', photo: cover.src, content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus qui repellat quidem libero minus illo fugit at molestiae natus provident deserunt nostrum ipsum esse voluptas, vero totam cumque consequatur quod tempore itaque, aut eveniet? Sed nemo et accusantium eos illum aliquam cupiditate quam esse minus provident beatae, quis ipsa blanditiis distinctio incidunt asperiores ad adipisci itaque corrupti, qui repudiandae iure."
  }

]
const socialMediaItems = [
  { icon: faDiscord, href: "" },
  { icon: faInstagram, href: "" },
  { icon: faYoutube, href: "" },
  { icon: faWhatsapp, href: "" },
  { icon: faLinkedin, href: "" },
  { icon: faEnvelope, href: "" }
]
const quickLinkItems = [
  { label: 'Home Page', href: "https://codingclubgct.in" },
  { label: 'Blogs', href: "https://blogs.codingclubgct.in" },
  { label: 'Join us', href: "https://codingclubgct.in/join" },
  { label: 'GitHub', href: "https://github.com/coding-club-gct" },
]
const serviceItems = [
  { icon: faCalendar, heading: "Event Management", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid tempora voluptatum modi ab ducimus? Iusto temporibus nulla, illum deserunt amet cum aut unde repudiandae totam adipisci voluptatum iure voluptate numquam neque! Fugiat, voluptate saepe. Delectus inventore sit quisquam, nesciunt neque adipisci explicabo, magnam officiis vel accusantium, odit eum numquam?" },
  { icon: faPeopleGroup, heading: "Internal Affairs and Coordination ", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit sit dolorem eius eligendi harum quas. Alias harum porro in ad suscipit necessitatibus a accusamus ipsum nobis, exercitationem, quam deleniti nihil. Hic sed quam et quae quia quod iusto incidunt ducimus consectetur dolores distinctio culpa quo facere, repellendus voluptatem! Optio." },
  { icon: faEarth, heading: "External Relaation and Networking", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iusto laudantium repellat, voluptas quam dolorum nihil illum eligendi dicta reiciendis vero quod tenetur doloribus accusamus ex doloremque harum. Dolor nisi labore voluptatibus quidem, assumenda modi quae fuga doloribus quasi alias magnam facere delectus sunt nesciunt eum dicta iste vitae dolores." }
]


export default function Home() {
  const [count, setCount] = useState<number | null>(null)
  const { darkMode } = useContext(DarkModeContext)
  const [current, setCurrent] = useState(team[0])
  const catppuccinColors = useContext(CatppuccinContext)

  useEffect(() => {
    async function fetchMemberCount() {
      const resp = await fetch("https://codingclubgct.in/api/discord/members").then(res => res.json())
      setCount(resp.approximate_member_count)
    }
    fetchMemberCount()
  }, [])

  return <div>
    <Header />
    <div className="p-4 gap-4">
      <p className="text-3xl p-4 "> Operation and HR team</p>
      <Divider></Divider>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-1/2 p-20 ">
          <div className="flex h-[600px] gap-6">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci assumenda iure ad neque nobis repudiandae officia magnam in commodi, esse ab deleniti nulla ea voluptates sed nemo expedita quod necessitatibus voluptatem, sequi suscipit placeat fugit perferendis? Quas quisquam minima temporibus sapiente repellendus ducimus dolorem libero quidem, voluptatum dolor nesciunt veniam.</p>
            <Divider orientation="vertical" className=" h-0  md:h-full "></Divider>
          </div>
        </div >
        <div className="w-1/2">
          {serviceItems.map((item, i) => <div className="flex ">
            <div className="p-8">
              <FontAwesomeIcon icon={item.icon} className="h-16 w-16 text-pink justify-center my-2" ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col mt-8 gap-4 ml-8">
              <p className="text-2xl p-2 text-pink">{item.heading}</p>
              <p className="text-subtext0  p-2">{item.content}</p>
              <Divider className=""></Divider>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
    {/* <Divider></Divider> */}
    <div className="">
      <Container className="flex gap-2 p-4 h-[850px]">
        <div className="w-1/4 h-full flex flex-col gap-2">
          <div className="w-full h-[300px] bg-crust rounded-xl justify-between p-4 flex flex-col">
            <p className="text-3xl"> Operations and HR Team </p>
            <p className="text-subtext0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, explicabo!</p>
            <AvatarGroup>
              {team.map((item, i) => <Avatar src={item.photo} key={i} />)}
            </AvatarGroup>
            <a href="https://codingclubgct.in/join">
              <Button className="text-mauve"> Join Now </Button>
            </a>
          </div>
          <div className="w-full h-[calc(100%-300px-1rem)] bg-mantle rounded-xl justify-between p-4 flex flex-col">
            <p className="text-3xl">Coding Club GCT</p>
            <p className="text-lg">Not a <span className="text-yellow"> Rocket</span> Science</p>
            <p className="text-subtext0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus officiis debitis saepe, voluptatem ea nemo consequatur nisi enim veritatis, corrupti maiores deleniti eaque voluptate fugiat, tempore tenetur culpa! Numquam, laudantium!</p>
            <div className="flex flex-col gap-1">
              {quickLinkItems.map((item, i) => <a href={item.href} key={i} className="text-blue no-underline">{item.label}</a>)}
            </div>
          </div>
        </div>
        <div className="w-[calc(75%-328px-2rem)] flex flex-col gap-2 h-full ">
          <div className="w-full flex gap-2 h-[100px]">
            <div className="w-2/3 rounded-xl bg-mantle flex items-center p-4 h-full">
              <img className="w-full object-contain" src={darkMode ? "/arrow_dark.png" : "arrow_light.png"} alt="" />
            </div>
            <div className="w-1/3 rounded-xl p-4 bg-crust h-full flex items-center">
              <p className="text-lg"> No Coding Required 😱 </p>
            </div>
          </div>
          <div className="w-full h-[calc(100%-100px-1rem)] rounded-xl">
            <div className="flex gap-2 h-[300px] items-center">
              <div className="w-1/2 flex flex-col justify-between items-center h-[calc(100%-0.5rem)] mb-2 bg-mantle rounded-xl p-4">
                <img className="h-4/5 object-contain" src={darkMode ? "/dark.png" : "/light.png"} alt="" />
                <p className="text-subtext0 text-lg text-center"> Lorem ipsum dolor sit amet. </p>
              </div>
              <div className="w-1/2 bg-crust rounded-tl-xl rounded-tr-xl h-full flex flex-col p-4 justify-evenly">
                <img src={cartoon.src} alt="try later" className="w-full object-contain"></img>
                {/* <p className="text-3xl text-subtext0">Maintaining</p> */}
                <p className="text-4xl font-bold">{count}+<span className="text-xl font-normal">members</span></p>
              </div>
            </div>
            <div className="bg-crust rounded-xl rounded-tr-none h-[calc(100%-300px)] p-4">
              <img src="/team-work.jpg" className="w-full h-full rounded-xl" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[calc(328px+2rem)] flex flex-col h-full justify-evenly">
          <div className="w-full h-[calc(100%-100px-1rem)] flex flex-col gap-4 bg-mantle p-4 rounded-xl">
            <p className="text-3xl"> Follow us on Instagram </p>
            <div className="bg-base h-full w-full flex flex-col justify-evenly ">
              <div className="flex gap-4 items-center p-2" >
                <img src={darkMode ? ccdark.src : cclight.src} alt="try later" className="rounded-full w-8 h-8"></img>
                <div className="flex flex-col">
                  <p>codingclub.gct</p>
                  <p className="text-subtext0 text-sm">Follow us</p>
                </div>
                <a href="" className="text-blue"><Button className="text-sm " >View Profile</Button></a>
              </div>
              <div >
                <img src={cartoon.src} className="w-full object-contain"></img>
              </div>
              <a href=" " className="p-2 text-blue no-underline"><Button className="text-blue">View more on Instagram</Button></a>
              <Divider></Divider>
              <div className="flex justify-between px-4" >
                <div className="flex  gap-4 " >
                  <FontAwesomeIcon icon={faHeart} className="w-6 h-6"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faComment} className="w-6 h-6"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faUpload} className="w-6 h-6"></FontAwesomeIcon>
                </div>
                <div className="flex ">
                  <FontAwesomeIcon icon={faBookmark} className="w-6 h-6"></FontAwesomeIcon>
                </div>
              </div>
              <Divider></Divider>
              <div className="flex px-4 justify-between ">
                <p>add a comment</p>
                <a href=" "><FontAwesomeIcon icon={faInstagram} className="w-6 h-6"></FontAwesomeIcon></a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 h-[100px] w-full p-4 bg-crust rounded-xl">
            <div className="flex justify-between items-center">
              {socialMediaItems.map((item, i) => <a className="text-subtext0 no-underline" href={item.href} key={i}><FontAwesomeIcon icon={item.icon} className=" w-6 h-6" /></a>)}
            </div>
            <p> For staff enquiries contact us <a className="text-blue no-underline" href="https://codingclubgct.in/contact"> here </a> </p>
          </div>
        </div>
      </Container>
    </div>
    <Container>
      <div>
        <div className="flex flex-col gap-4 my-12">
          <p className="text-3xl">Meet Our Team</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, pariatur.</p>
        </div>
        <div className=" flex h-[500px] ">
          <div className="w-1/2 flex flex-col gap-4 overflow-y-scroll h-[500px]">
            {team.map((item, i) => <div onClick={() => setCurrent(item)} key={i} className="flex  bg-mantle p-8 rounded-xl h-[500px]">
              <div className="w-2/3 flex flex-col justify-evenly h-[500px]">
                <p className="text-6xl font-bold">{item.name}</p>
                <p className="text-3xl">{item.roll}</p>
                <p className="text-3xl text-pink">{item.designation}</p>
              </div>
              <div className="w-1/3 h-full flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowRight} style={{ color: current.roll === item.roll ? catppuccinColors.mauve : catppuccinColors.text }} className="w-24 h-24"></FontAwesomeIcon>
              </div>
            </div>)}
          </div>
          <div className="w-1/2 ">
            <img src={current.photo} className="w-full object-contain h-full"></img>
          </div>
        </div>
      </div>
    </Container>
    <div className="w-full p-4 ">
      <Divider></Divider>
      <p className="text-4xl p-4">Recent Events</p>
      <Divider></Divider>
    </div>
    <div className="grid grid-rows-2 grid-cols-2 gap-8 m-4 ">
        {events.map((item,i)=><div key={i} >
          <div className="flex flex-col gap-8">
          <img src = {item.photo} className=" h-[50vw]"></img>
          <div className="flex flex-col md:flex justify-around">
            <p className="text-4xl">{item.name}</p>
            <Link href={item.slug}><Button>see more</Button></Link>
          </div>
          </div>
        </div>
          )}
    </div>
  </div>
}


"use client"
import { useState } from "react";
import Image from 'next/image'
import controlImage from "@/assets/control.png";
import logoImage from "@/assets/logo.webp";
import homeImage from "@/assets/home.png";
import teamImage from "@/assets/team.png";
import blogImage from "@/assets/blog.png";
import activitiesImage from "@/assets/activities.png";
import resourcesImage from "@/assets/resources.png";
import joinImage from "@/assets/join.png";
import contactImage from "@/assets/contact.png";

const Sidebar : React.FC = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", src: homeImage },
    { title: "Team", src: teamImage },
    { title: "Activities", src: activitiesImage },
    { title: "Resources", src: resourcesImage },
    { title: "Blog", src: blogImage },
    { title: "Contact", src: contactImage },
    { title: "Join Us", src: joinImage },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <Image
          src={controlImage} 
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="Control"
        />
        <div className="flex gap-x-4 items-center">
          <Image 
          src={logoImage} width={20} height={20}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            alt="Logo"
          />
          <h1
            className={`text-black origin-left font-medium text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Menu
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              }  `}
            >
              <Image src={Menu.src} alt={Menu.title} width={20} height={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

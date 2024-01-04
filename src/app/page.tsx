import DarkModeSwitcher from "@/components/darkmodeswitcher";
import Header from "@/components/header";
import Activities from "@/components/activities";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Joinus from "@/components/joinus";
import Home from "@/components/home";
import { Button } from "@mui/material";
import Resources from "@/components/resources";
import Team from "@/components/team";
import Main from "@/components/main";

export default function Head() {
  return <div className="w-full h-full">
    <DarkModeSwitcher />
    <div className="flex justify-evenly">
      <Header/>
      <div className="flex  justify-center space-x-20 ">
              <Home/>
              <Team/>
              <Activities/>
              <Resources/>
              <Blog/>
              <Contact/>
              <Joinus/>
              <Main/>
      </div>
    </div>

   
  </div>
}

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
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar"

export default function Head() {
  return <div className="w-full h-full">
    <DarkModeSwitcher />
    <div className="flex justify-evenly">
      <Header/>
      <div className="flex  space-x-20 ">
              <Sidebar/>
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
    <div style={{position: 'absolute', bottom:0, width:'100%'}}>
        <Footer/>
    </div>
  </div>
  
}

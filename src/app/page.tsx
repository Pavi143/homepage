import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer"
import logo from "@/assets/codingclublogo.png"
import { Button } from "@mui/material";
export default function Page() {
  return <div>
    <div className="flex ">
      <Sidebar />
     <div className="flex flex-col">
      <div className="flex w-full">
        <div className="flex w-1/2" >
          <img src={logo.src} className='w-12 h-12 mt-4 ml-2'></img>
          <h4 className='ml-2'>Coding Club GCT</h4>
        </div>
        <div className="flex justify-around w-1/2">
          <h5>Home</h5>
          <h5>Activities</h5>
          <h5>Teams</h5>
          <h5>Blogs</h5>
          <h5>Contact</h5>
          <h5>Join Us</h5>
        </div>
      </div>
      <div className="flex justify-around mt-28 ml-10">
        <div className="w-1/3 h-1/3">
          <img src={logo.src} className="object-contain w-full">
          </img>
        </div>
        <div className="h-full w-2/3 ml-10">
          <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-lg w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique!</p>
          <div className="flex justify-center w-3/4 ">
            <Button className="hover:bg-indigo-900 bg-indigo-600 text-white ">Get Started </Button>
            <Button className="ml-6 hover:bg-indigo-900 bg-indigo-600  text-white" >Learn More</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly mt-24">
        <h4>Learn</h4>
        <h4>Code</h4>
        <h4>Develope</h4>
        <h4>Share</h4>
        <h4>Repeat</h4>
      </div>
      </div>
    </div>
    <Footer/>
  </div>
}

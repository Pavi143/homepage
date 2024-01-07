import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer"
import logo from "@/assets/codingclublogo.png"
import { Button } from "@mui/material";
export default function Page() {
  return <div>
    <div className="flex">
      <Sidebar />
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <img src={logo.src} className="object-contain w-full">
          </img>
        </div>
        <div className="h-full w-2/3">
          <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
          <p className="text-lg w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique!</p>
          <div className="flex justify-center w-3/4">
            <Button>Github</Button>
            <Button>Discord</Button>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </div>
}

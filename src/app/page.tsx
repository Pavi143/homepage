import DarkModeSwitcher from "@/components/darkmodeswitcher";
import { Button } from "@mui/material";

export default function Home() {
  return <div className="w-full h-full">
    <DarkModeSwitcher />
    <Button> Hello </Button>
  </div>
}

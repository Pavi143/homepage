import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import dirTree from "directory-tree";
import { join } from "path";
import { cwd } from "process";
import { Container, Divider } from "@mui/material";
import Navbar from "@/components/navbar";
import DarkModeSwitcher from "@/components/darkmodeSwitcher";

export const tree = dirTree(join(cwd(), "src/app/"), {
  extensions: /\page.mdx/
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>
              <div className="flex">
                <div className="w-[300px] bg-mantle min-h-screen p-4">
                  <div className="my-4">
                    <DarkModeSwitcher />
                  </div>
                  <Divider className="my-4" />
                  <p> Directory </p>
                  <Navbar tree={tree} pl={6} />
                </div>
                <Container className="flex gap-4 p-4">
                  <div className="w-full h-full">
                    {children}
                  </div>
                </Container>
              </div>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
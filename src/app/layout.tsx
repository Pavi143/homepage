import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import dirTree from "directory-tree";
import { join } from "path";
import { cwd } from "process";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Sidebar from "@/components/navbar";

const tree = dirTree(join(cwd(), "src/app/"), {
  extensions: /\page.mdx/
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>
              <div className="flex w-full">
                <Sidebar tree={tree} />
                <div className="min-h-screen pl-12 pr-4 md:py-0 flex flex-col mx-auto md:w-[calc(100%-200px)] flex-grow">
                  <Container maxWidth="xl" className="flex gap-4 p-4">
                    <div className="w-full h-full">
                      {children}
                    </div>
                  </Container>
                </div>
              </div>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
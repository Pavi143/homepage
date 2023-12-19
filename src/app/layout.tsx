import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import dirTree from "directory-tree";
import { join } from "path";
import { cwd } from "process";
import { Box, Container, Typography } from "@mui/material";
import View from "@/components/navbar";

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
              <Container className="min-h-screen">
                <View tree={tree} children={children} />
              </Container>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
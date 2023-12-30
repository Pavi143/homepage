import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import { Container } from "@mui/material";
import View from "@/components/view";
import { allBlogs } from "contentlayer/generated";
import { normalizePaths } from "@/lib/normalize-path";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>
              <Container className="min-h-screen">
                <View tree={normalizePaths(allBlogs.map(blog => blog.url))} children={children} />
              </Container>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
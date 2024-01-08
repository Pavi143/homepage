import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import { Container } from "@mui/material";
import View from "@/views/view";
import { allBlogs } from "contentlayer/generated";
import { normalizePaths } from "@/lib/normalize-path";
import { IssuesProvider } from "@/context/issues";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>
              <IssuesProvider>
                <View tree={normalizePaths(allBlogs.map(blog => blog.url))}>
                  {children}
                </View>
              </IssuesProvider>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
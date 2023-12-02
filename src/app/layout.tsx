import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import dirTree from "directory-tree";
import { join } from "path";
import { cwd } from "process";
import Link from "next/link";
import { Container } from "@mui/material";

export const tree = dirTree(join(cwd(), "src/app/"), {
  extensions: /\page.mdx/
})

function Navbar({ tree }: { tree: dirTree.DirectoryTree<Record<string, any>> }) {
  if (!tree) {
    return null;
  }
  return (
    <ul>
      {tree.children?.map((item, key) => (
        <li key={key}>
          {item.children?.length ? (
            <>
              <Link className="text-inherit" href={"/" + item.path.split("src/app/")[1]}>
                <p style={{ whiteSpace: 'nowrap' }}>
                  {item.name}
                </p>
              </Link>
              <Navbar tree={item} />
            </>
          ) : (
            <Link className="text-inherit w-full" href={"/" + item.path.split("src/app/")[1]}>
              <p style={{ whiteSpace: 'nowrap' }}>
                {item.name}
              </p>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>
              <Container className="flex gap-4 p-4">
                <div className="md:block">
                  <Navbar tree={tree} />
                </div>
                <div>
                  {children}
                </div>
              </Container>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
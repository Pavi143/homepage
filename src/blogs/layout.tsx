import { Container } from "@mui/material";
import dirTree from "directory-tree";
import Link from "next/link";
import { join } from "path";
import { cwd } from "process";
import { ReactNode } from "react";

export const tree = dirTree(join(cwd(), "src/blogs"), {
  extensions: /\page.mdx/
})

function Navbar({ tree }: { tree: dirTree.DirectoryTree<Record<string, any>> }): ReactNode {
  if (!tree) {
    return null;
  }
  return (
    <ul>
      {tree.children?.map((item, key) => (
        <li key={key}>
          {item.children?.length ? (
            <>
              <Link className="text-inherit" href={"/blogs/" + item.path.split("blogs")[1]}>
                <p style={{ whiteSpace: 'nowrap' }}>
                  {item.name}
                </p>
              </Link>
              <Navbar tree={item} />
            </>
          ) : (
            <Link className="text-inherit w-full" href={"/blogs/" + item.path.split("blogs")[1]}>
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

export default function BlogsLayout({ children }: { children: React.ReactNode }): ReactNode {
  return <Container className="flex gap-4 p-4">
    <div className="hidden md:block">
      <Navbar tree={tree} />
    </div>
    <div>
      {children}
    </div>
  </Container>
}
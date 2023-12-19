import { BlogHeader } from "@/components/blogHeader";
import { Blog, allBlogs } from "contentlayer/generated";
import { MDXComponents } from "mdx/types";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

const mdxComponents: MDXComponents = {
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    /* @ts-expect-error Server Component */
    BlogHeader
}

export default async function Page({ params }: { params: { slug: string } }) {
    const blog: Blog | undefined = allBlogs.find((blog) => blog.url === params.slug);
    if (!blog) notFound()
    const MDXContent = getMDXComponent(blog.body.code)
    return <>
        <MDXContent components={mdxComponents} />
    </>
}

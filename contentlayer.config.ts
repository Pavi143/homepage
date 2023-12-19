import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
    name: "Blog",
    contentType: "mdx",
    filePathPattern: "**/*.mdx",
    fields: {
        tags: {
            type: "list",
            of: {
                type: "string"
            }
        }
    },
    computedFields: {
        url: {
            type: 'string', resolve: (blogs) => blogs._raw.sourceFilePath.replace(/\.mdx$/, ""),
        },
    }
}))

export default makeSource({ contentDirPath: 'src/blogs', documentTypes: [Blog] })
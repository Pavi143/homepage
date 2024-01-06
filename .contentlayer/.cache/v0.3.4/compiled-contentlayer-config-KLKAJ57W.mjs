// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";
import rehypeSlug from "rehype-slug";
var Blog = defineDocumentType(() => ({
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
      type: "string",
      resolve: (blogs) => blogs._raw.sourceFilePath.replace(/\.mdx$/, "")
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const content = groups?.content;
            return {
              text: content,
              slug: content ? slugger.slug(content) : void 0
            };
          }
        );
        return headings;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/blogs",
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [rehypeSlug]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KLKAJ57W.mjs.map

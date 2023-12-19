// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
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
    }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "src/blogs", documentTypes: [Blog] });
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MS742AYH.mjs.map

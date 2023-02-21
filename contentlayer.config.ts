import {
  defineDocumentType,
  makeSource,
  DocumentTypeDef,
} from "contentlayer/source-files";
import * as fs from "fs";

export const Post = defineDocumentType(() => {
  const def: DocumentTypeDef = {
    name: "Post",
    filePathPattern: `posts/*.md`,
    fields: {
      title: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
    },
    computedFields: {
      slug: {
        type: "string",
        resolve: (post) => {
          const filename = post._raw.sourceFileName;
          return filename
            .substring(0, filename.indexOf(".md"))
            .toLowerCase()
            .replaceAll(" ", "-");
        },
      },
      date: {
        type: "date",
        resolve: (post) => {
          const file = post._raw.sourceFilePath;
          return fs.statSync(file).birthtime;
        },
      },
    },
  };

  return def;
});

export default makeSource({
  contentDirPath: "",
  documentTypes: [Post],
});

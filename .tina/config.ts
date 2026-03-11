import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,
  clientId: "c70be351-9c83-44e0-99aa-775034c81512", // Get this from tina.io
  token: "5e46e819a677e89cdbe950c0e1fc6fe7b4562ef8", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "src/content/posts",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

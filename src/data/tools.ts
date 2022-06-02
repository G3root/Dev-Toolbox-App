import { UnionPath } from "../types";

type Tools = {
  name: string;
  link: UnionPath;
};

const toolsData: Tools[] = [
  {
    name: "Base64 Encode/Decode",
    link: "/base64",
  },
  {
    name: "Markdown to HTML",
    link: "/markdown-to-html",
  },
  {
    name: "Image to Base64",
    link: "/base64-image",
  },
  {
    name: "URL Encode/Decode",
    link: "/url-encode",
  },
  {
    name: "LoremIpsum Generator",
    link: "/lorem",
  },
  {
    name: "Text Case",
    link: "/text-case",
  },
];

export const tools = toolsData.sort((a, b) => (a.name > b.name ? 1 : -1));

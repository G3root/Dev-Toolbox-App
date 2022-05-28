interface Tools {
  name: string;
  link: string;
}

export const tools: Tools[] = [
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
].sort((a, b) => (a.name > b.name ? 1 : -1));

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
].sort((a, b) => (a.name > b.name ? 1 : -1));

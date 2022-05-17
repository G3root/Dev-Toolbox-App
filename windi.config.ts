import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [formsPlugin],
});

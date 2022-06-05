import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
import { radixColorPlugin, lightColors } from "./src/plugins";

const variables: Record<any, string> = {};

for (let [key, value] of Object.entries(lightColors)) {
  variables[`${key}`] = `var(--${key});`;
}
export default defineConfig({
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...variables,
        "low-contrast": "var(--lo-contrast);",
        "high-contrast": "var(--hi-contrast);",
      },
    },
  },
  plugins: [formsPlugin, radixColorPlugin],
});

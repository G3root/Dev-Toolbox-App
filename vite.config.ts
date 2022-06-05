import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import WindiCSS from "vite-plugin-windicss";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    solidPlugin(),
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"],
      },
    }),
    Icons({ compiler: "solid" }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});

import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import { Home, Base64, MarkdownToHtml, Base64Image, UrlEncode } from "./pages";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/base64",
    component: Base64,
  },
  {
    path: "/base64-image",
    component: Base64Image,
  },
  {
    path: "/url-encode",
    component: UrlEncode,
  },
  {
    path: "/markdown-to-html",
    component: MarkdownToHtml,
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];

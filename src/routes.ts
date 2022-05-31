import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import {
  Home,
  Base64,
  MarkdownToHtml,
  Base64Image,
  UrlEncode,
  LoremIpsum,
} from "./pages";

export const routesData = [
  {
    path: "/" as const,
    component: Home,
  },
  {
    path: "/base64" as const,
    component: Base64,
  },
  {
    path: "/base64-image" as const,
    component: Base64Image,
  },
  {
    path: "/url-encode" as const,
    component: UrlEncode,
  },
  {
    path: "/markdown-to-html" as const,
    component: MarkdownToHtml,
  },
  {
    path: "/lorem" as const,
    component: LoremIpsum,
  },
  {
    path: "**" as const,
    component: lazy(() => import("./errors/404")),
  },
];

export const routes: RouteDefinition[] = routesData;

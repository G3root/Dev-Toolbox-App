import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

export const routesData = [
  {
    path: "/" as const,
    component: lazy(() => import("./pages/home")),
  },
  {
    path: "/base64" as const,
    component: lazy(() => import("./pages/base64")),
  },
  {
    path: "/base64-image" as const,
    component: lazy(() => import("./pages/base64-image")),
  },
  {
    path: "/url-encode" as const,
    component: lazy(() => import("./pages/url-encode")),
  },
  {
    path: "/markdown-to-html" as const,
    component: lazy(() => import("./pages/markdown-to-html")),
  },
  {
    path: "/text-case" as const,
    component: lazy(() => import("./pages/text-case")),
  },
  {
    path: "/lorem" as const,
    component: lazy(() => import("./pages/lorem")),
  },
  {
    path: "/hash-generator" as const,
    component: lazy(() => import("./pages/hash-generator")),
  },
  {
    path: "**" as const,
    component: lazy(() => import("./errors/404")),
  },
];

export const routes: RouteDefinition[] = routesData;

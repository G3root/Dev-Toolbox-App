import { lazy } from "solid-js";
import type { RouteDefinition } from "solid-app-router";

import { Home, Base64 } from "./pages";

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
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];

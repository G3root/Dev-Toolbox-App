import type { Component } from "solid-js";
import { Sidebar } from "./sidebar";

export const Layout: Component = ({ children }) => {
  return (
    <div class="relative flex h-full min-h-screen w-full">
      <Sidebar />
      <div class="flex flex-1">
        <div class="relative flex max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-black">
          {children}
        </div>
      </div>
    </div>
  );
};

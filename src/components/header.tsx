import { Component } from "solid-js";
import { ThemeSwitcher } from "./theme-switcher";

export const Header: Component = () => {
  return (
    <div className="sticky top-0 z-10 flex flex-col justify-center px-3 py-2  min-h-12 border-b border-slate6">
      <div className="flex flex-none items-center justify-between">
        <div></div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
      <div />
    </div>
  );
};

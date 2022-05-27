import { Component, For } from "solid-js";
import { Link, useMatch } from "solid-app-router";
import { tools } from "../data";

const SideBarLink: Component<{ link: string; name: string }> = ({
  link,
  name,
}) => {
  const isActive = useMatch(() => link);
  return (
    <Link
      href={link}
      classList={{
        "px-4 py-1.5 rounded-md font-medium text-sm flex no-underline ": true,
        "bg-purple-600 text-white": Boolean(isActive()),
        "hover:bg-purple-300/20 text-black": !Boolean(isActive()),
      }}
    >
      {name}
    </Link>
  );
};

export const Sidebar: Component = ({ children }) => {
  return (
    <nav class="relative flex flex-col overflow-y-auto h-full max-h-screen min-h-screen flex-none border-r dark:border-gray-800 pb-0 relative w-56   border-gray-100">
      <div class="flex-1 px-2 py-3 space-y-1">
        <SideBarLink link="/" name="Home" />
        <For each={tools}>
          {(item) => <SideBarLink link={item.link} name={item.name} />}
        </For>
      </div>
    </nav>
  );
};

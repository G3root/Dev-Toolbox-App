import { Component, Show } from "solid-js";

import Sun from "~icons/fe/sunny-o";
import Moon from "~icons/fe/moon";
import { useAppContext } from "../AppContext";

export const ThemeSwitcher: Component = () => {
  const context = useAppContext();
  return (
    <button
      type="button"
      onClick={() => (context.isDark = !context.isDark)}
      class="p-1.5 rounded hover:bg-slate4"
      title="Toggle dark mode"
    >
      <Show when={context.isDark} fallback={<Moon class="bg-transparent" />}>
        <Sun class="bg-transparent" />
      </Show>
    </button>
  );
};

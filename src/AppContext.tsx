import { createContext, createEffect, useContext, Component } from "solid-js";
import { createCookieStorage } from "@solid-primitives/storage";

interface AppContextInterface {
  isDark: boolean;
}

const AppContext = createContext<AppContextInterface>({
  isDark: false,
});

export const AppContextProvider: Component = (props) => {
  const now = new Date();
  const cookieOptions = {
    expires: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
  };

  const [settings, set] = createCookieStorage();

  const isDark = () =>
    settings.dark === "true"
      ? true
      : settings.dark === "false"
      ? false
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

  createEffect(() => {
    if (isDark()) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  });

  const store = {
    set isDark(value) {
      set("dark", value === true ? "true" : "false", cookieOptions);
    },
    get isDark() {
      return isDark();
    },
  };
  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

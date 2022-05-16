import type { Component } from "solid-js";
import { routes } from "./routes";
import { useRoutes } from "solid-app-router";

const App: Component = () => {
  const Route = useRoutes(routes);
  return (
    <>
      <Route />
    </>
  );
};

export default App;

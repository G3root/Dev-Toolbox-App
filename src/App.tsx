import type { Component } from "solid-js";
import { routes } from "./routes";
import { useRoutes } from "solid-app-router";
import { Layout } from "./components";

const App: Component = () => {
  const Route = useRoutes(routes);
  return (
    <>
      <Layout>
        <Route />
      </Layout>
    </>
  );
};

export default App;

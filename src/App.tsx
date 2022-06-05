import { Component } from "solid-js";
import { routes } from "./routes";
import { useRoutes } from "solid-app-router";
import { Layout } from "./components";
import { AppContextProvider } from "./AppContext";

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <AppContextProvider>
        <Layout>
          <Route />
        </Layout>
      </AppContextProvider>
    </>
  );
};

export default App;

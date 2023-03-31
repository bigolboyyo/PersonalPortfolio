// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
import "@fontsource/rubik-bubbles";
import "@fontsource/freckle-face";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import routes from "./Exports/routes";
import App from "./App";
import { mainTheme } from "./Exports/themeConfig";
import { ThemeProvider } from "@emotion/react";
import Loading from "./components/Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  const router = createBrowserRouter(routes);

  const [loaded, setLoaded] = useState(false);

  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoaded(true);
    }, 10000);

    const loadHandler = () => {
      clearTimeout(timerId);
      setLoaded(true);
    };

    if (isFirstVisit) {
      window.addEventListener("load", loadHandler);
      window.addEventListener("DOMContentLoaded", loadHandler);
    } else {
      setLoaded(true);
    }

    return () => {
      window.removeEventListener("load", loadHandler);
      window.removeEventListener("DOMContentLoaded", loadHandler);
      clearTimeout(timerId);
    };
  }, [isFirstVisit]);

  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setIsFirstVisit(true);
      localStorage.setItem("visitedBefore", true);
    }
  }, []);

  return (
    <>
      {loaded ? (
        <React.StrictMode>
          <ThemeProvider theme={mainTheme}>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </ThemeProvider>
        </React.StrictMode>
      ) : (
        <Loading loading={!loaded} />
      )}
    </>
  );
}

root.render(<Root />);

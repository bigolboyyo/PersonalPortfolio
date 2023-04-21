import "@fontsource/rubik-bubbles";
import "@fontsource/freckle-face";

import App from "../App";
import React, { useEffect, useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../exports/routes";

import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "../exports/themeConfig";

import Loading from "../components/Loading";

function Root() {
  const router = createBrowserRouter(routes);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTimestamp = localStorage.getItem("loadTimestamp");

    if (loadTimestamp && Date.now() - loadTimestamp < 60 * 60 * 1000) {
      setLoaded(true);
      return;
    }

    const timerId = setTimeout(() => {
      setLoaded(true);
      localStorage.setItem("loadTimestamp", Date.now());
    }, 10000);

    const loadHandler = () => {
      clearTimeout(timerId);
      setLoaded(true);
      localStorage.setItem("loadTimestamp", Date.now());
    };

    window.addEventListener("load", loadHandler);
    window.addEventListener("DOMContentLoaded", loadHandler);

    return () => {
      window.removeEventListener("load", loadHandler);
      window.removeEventListener("DOMContentLoaded", loadHandler);
      clearTimeout(timerId);
    };
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

export default Root;

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

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setLoaded(true);
      }, 3000);
    });
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

// import reportWebVitals from "./reportWebVitals";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

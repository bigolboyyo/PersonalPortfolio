import React from "react";
import ReactDOM from "react-dom/client";

import routes from "./Exports/routes";

import App from "./App";

import { galaxyTheme } from "./Exports/themeConfig";
import { ThemeProvider } from "@emotion/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={galaxyTheme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// import reportWebVitals from "./reportWebVitals";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const routes = [
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];

export default routes;

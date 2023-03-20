import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const HeaderLayout = () => {
  return (
    <>
      <header className="navigation-bar">
        <Navigation />
      </header>
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

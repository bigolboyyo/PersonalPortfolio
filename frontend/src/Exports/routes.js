import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";
import HeaderLayout from "../components/HeaderLayout";

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

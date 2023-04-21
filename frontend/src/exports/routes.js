import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
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
        path: "/skills",
        element: <Skills />,
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

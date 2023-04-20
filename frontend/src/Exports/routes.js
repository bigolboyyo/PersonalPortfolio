import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
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

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";

const RenderRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
      <Route path="/work" component={<Work />} />
      <Route path="/contact" component={<Contact />} />
    </Routes>
  );
};

export default RenderRoutes;

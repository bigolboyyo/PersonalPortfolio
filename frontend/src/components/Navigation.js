import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;

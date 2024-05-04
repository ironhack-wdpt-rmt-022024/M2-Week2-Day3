import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <h1>Routing</h1>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        about
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        posts
      </NavLink>
      <NavLink
        to="/ragnars"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Ragnars
      </NavLink>
    </div>
  );
};

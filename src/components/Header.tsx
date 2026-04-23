import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold text-3xl text-red-500 ">.Jeyms</div>
      <nav className="space-x-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold underline" : ""
          }
        >
          About Me
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold underline" : ""
          }
        >
          Contact Me
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;

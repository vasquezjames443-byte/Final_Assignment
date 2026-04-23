import { NavLink } from "react-router-dom";
import { type Theme } from "../context/ThemeContext";

interface Props {
  theme: Theme;
  handleSwitchTheme: () => void;
}

function Header({ theme, handleSwitchTheme }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className={`font-bold text-3xl ${theme.colors.text_primary}`}>
        .Jeyms
      </div>
      <nav className="flex items-center gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? `${theme.colors.text_primary} font-bold underline` : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? `${theme.colors.text_primary} font-bold underline` : ""
          }
        >
          About Me
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? `${theme.colors.text_primary} font-bold underline` : ""
          }
        >
          Contact Me
        </NavLink>
        <button onClick={handleSwitchTheme} className="size-10 rounded-full overflow-hidden">
          <img src={theme.icon} alt="" className="size-full"/>
        </button>
      </nav>
    </div>
  );
}

export default Header;

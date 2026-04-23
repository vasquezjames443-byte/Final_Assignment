import { createContext, useEffect, useState, type ReactNode } from "react";
import DarkIcon from "../assets/icons8-dark-48.png";
import LightIcon from "../assets/icons8-sun-48.png";
import OceanIcon from "../assets/icons8-ocean-48.png";

export interface Theme {
  theme: string;
  icon: string;
  colors: {
    text_primary: string;
    text_secondary: string;
    bg: string;
    input_bg: string;
    border_primary: string;
    border_secondary: string;
  };
}
type ThemeContextType = {
  theme: Theme;
  handleSwitchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: {
    theme: "dark",
    icon: DarkIcon,
    colors: {
      text_primary: "text-red-500",
      text_secondary: "text-white",
      bg: "bg-black",
      input_bg: "bg-red-500/30",
      border_primary: "border-red-500",
      border_secondary: "border-red-500/30",
    },
  },
  handleSwitchTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const themes = [
    {
      theme: "dark",
      icon: DarkIcon,
      colors: {
        text_primary: "text-red-500",
        text_secondary: "text-white",
        bg: "bg-black",
        input_bg: "bg-red-500/30",
        border_primary: "border-red-500",
        border_secondary: "border-red-500/30",
      },
    },
    {
      theme: "light",
      icon: LightIcon,
      colors: {
        text_primary: "text-red-500",
        text_secondary: "text-black",
        bg: "bg-white",
        input_bg: "bg-red-500/10",
        border_primary: "border-red-500",
        border_secondary: "border-red-500/10",
      },
    },
    {
      theme: "ocean",
      icon: OceanIcon,
      colors: {
        text_primary: "text-emerald-400",
        text_secondary: "text-slate-300",
        bg: "bg-blue-950",
        input_bg: "bg-emerald-400/30",
        border_primary: "border-emerald-400",
        border_secondary: "border-emerald-400/30",
      },
    },
  ] as Theme[];

  const [theme, setTheme] = useState<Theme>(themes[0]);
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    setTheme(themes[themeIndex]);
  }, [themeIndex]);

  const handleSwitchTheme = () => {
    if (themeIndex < themes.length - 1) {
      const index = themeIndex + 1;
      setThemeIndex(index);
    } else {
      setThemeIndex(0);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

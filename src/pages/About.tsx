import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutImage from "../assets/about.jfif";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function About() {
  const {theme, handleSwitchTheme} = useContext(ThemeContext);

  return (
    <div className={`px-24 py-12 ${theme.colors.bg} ${theme.colors.text_secondary} h-screen space-y-12 overflow-y-auto min-h-screen font-display`}>
      <Header theme={theme} handleSwitchTheme={handleSwitchTheme} />
      <div className="flex gap-12">
        <div className="flex-1 rounded-xl overflow-hidden">
          <img src={AboutImage} className="size-full" />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className={`text-2xl ${theme.colors.text_primary}`}>
            "Developing Websites That Users Love"
          </h3>
          <p>
            I am reliable, versatile, and quietly ambitious. You are the
            "anchor" in a project—the person who has the technical skills to
            execute the plan and the creative vision to make it stand out. i
            value competence, respect the grind, and take pride in the quality.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

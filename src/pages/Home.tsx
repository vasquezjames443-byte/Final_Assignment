import Footer from "../components/Footer";
import Header from "../components/Header";

import JamesProfile from "../assets/james.jfif";
import AboutImage from "../assets/about.jfif";
import TextField from "../components/TextField";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme, handleSwitchTheme } = useContext(ThemeContext);

  const HeroBanner = () => {
    return (
      <div className="flex items-center gap-12">
        <div className="flex-1 rounded-xl overflow-hidden">
          <img src={JamesProfile} className="size-full" />
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-5xl font-bold">
            Hi, It's{" "}
            <span className={theme.colors.text_primary}>James Feliciano</span>
          </h1>
          <h3 className="text-3xl font-bold">
            I'm a{" "}
            <span className={theme.colors.text_primary}>Web Developer</span>
          </h3>
          <p className="text-lg">
            I am someone who embodies the definition of a "grind-and-grow"
            mindset.
          </p>
          <button
            className={`border rounded-full px-4 py-2 ${theme.colors.border_primary} ${theme.colors.text_primary} font-bold text-lg`}
          >
            Hire Me
          </button>
        </div>
      </div>
    );
  };

  const BioContent = () => {
    return (
      <div className="flex gap-12 items-center">
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
        <div className="flex-1 rounded-xl overflow-hidden">
          <img src={AboutImage} className="size-full" />
        </div>
      </div>
    );
  };

  const ContactInformation = () => {
    return (
      <div
        className={`space-y-4 border rounded-xl ${theme.colors.border_secondary} p-12`}
      >
        <h2 className={`font-bold text-2xl ${theme.colors.text_primary}`}>
          Contact Information
        </h2>
        <div className="flex gap-6">
          <div className="space-y-4">
            <div className={`p-4 ${theme.colors.input_bg} rounded-xl`}>
              <p className={theme.colors.text_primary}>Address:</p>
              <p>United, San Pedro</p>
            </div>
            <div className={`p-4 ${theme.colors.input_bg} rounded-xl`}>
              <p className={theme.colors.text_primary}>E-mail Address:</p>
              <p>vasquezjames443@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex gap-6">
              <TextField
                title="Name"
                className="flex-1 space-y-2"
                backgroundColor={theme.colors.input_bg}
              />
              <TextField
                title="E-mail Address"
                className="flex-1 space-y-2"
                backgroundColor={theme.colors.input_bg}
              />
            </div>
            <TextField
              title="Subject"
              className="space-y-2"
              backgroundColor={theme.colors.input_bg}
            />
            <TextField
              title="Message"
              className="space-y-2"
              isMultiline
              backgroundColor={theme.colors.input_bg}
            />
            <button
              className={`border rounded-full px-4 py-2 ${theme.colors.border_primary} ${theme.colors.text_primary} font-bold text-lg`}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`px-24 py-12 ${theme.colors.bg} ${theme.colors.text_secondary} space-y-12 overflow-y-auto min-h-screen font-display`}
    >
      <Header theme={theme} handleSwitchTheme={handleSwitchTheme} />
      {<HeroBanner />}
      {<BioContent />}
      {<ContactInformation />}
      <Footer />
    </div>
  );
}

export default Home;

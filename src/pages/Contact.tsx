import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextField from "../components/TextField";
import { ThemeContext } from "../context/ThemeContext";

function Contact() {
  const { theme, handleSwitchTheme } = useContext(ThemeContext);

  return (
    <div
      className={`px-24 py-12 ${theme.colors.bg} ${theme.colors.text_secondary} h-screen space-y-12 overflow-y-auto min-h-screen font-display`}
    >
      <Header theme={theme} handleSwitchTheme={handleSwitchTheme} />
      <div
        className={`space-y-4 border rounded-xl ${theme.colors.border_primary} p-12`}
      >
        <h2 className={`font-bold text-2xl ${theme.colors.text_primary}`}>
          Contact Information
        </h2>
        <div className="flex gap-6">
          <div className="space-y-4">
            <div className={`p-4 ${theme.colors.text_primary} rounded-xl`}>
              <p className={`${theme.colors.text_primary}`}>Address:</p>
              <p>United, San Pedro</p>
            </div>
            <div className={`p-4 ${theme.colors.text_primary} rounded-xl`}>
              <p className={`${theme.colors.text_primary}`}>E-mail Address:</p>
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
      <Footer />
    </div>
  );
}

export default Contact;

import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextField from "../components/TextField";
import { ThemeContext } from "../context/ThemeContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import AlertModal from "../components/AlertModal";

type ContactValues = {
  name: string;
  message: string;
};

function Contact() {
  const { theme, handleSwitchTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState({
    sendersName: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactValues> = (data) => {
    setModalVisible(true);
    setData({
      sendersName: data.name,
      message: data.message,
    });
  };

  return (
    <div
      className={`px-24 py-12 ${theme.colors.bg} ${theme.colors.text_secondary} h-screen space-y-12 overflow-y-auto min-h-screen font-display`}
    >
      {modalVisible && (
        <AlertModal
          theme={theme}
          sendersName={data.sendersName}
          message={data.message}
          handleModalClose={() => setModalVisible(false)}
        />
      )}
      <Header theme={theme} handleSwitchTheme={handleSwitchTheme} />
      <div
        className={`space-y-4 border rounded-xl ${theme.colors.border_primary} p-12`}
      >
        <h2 className={`font-bold text-2xl ${theme.colors.text_primary}`}>
          Contact Information
        </h2>
        <div className="flex gap-6">
          <div className="space-y-4">
            <div className={`p-4 ${theme.colors.input_bg} rounded-xl`}>
              <p className={`${theme.colors.text_primary}`}>Address:</p>
              <p>United, San Pedro</p>
            </div>
            <div className={`p-4 ${theme.colors.input_bg} rounded-xl`}>
              <p className={`${theme.colors.text_primary}`}>E-mail Address:</p>
              <p>vasquezjames443@gmail.com</p>
            </div>
          </div>
          <form className="space-y-4 flex-1" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              title="Sender Name"
              className="flex-1 space-y-2"
              backgroundColor={theme.colors.input_bg}
              {...register("name", { required: "Sender Name is required" })}
              error={errors.name?.message}
            />
            <TextField
              title="Message"
              className="space-y-2"
              isMultiline
              backgroundColor={theme.colors.input_bg}
              {...register("message", { required: "Message cannot be empty" })}
              error={errors.message?.message}
            />
            <button
              className={`border rounded-full px-4 py-2 ${theme.colors.border_primary} ${theme.colors.text_primary} font-bold text-lg`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

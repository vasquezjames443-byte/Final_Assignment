import type { Theme } from "../context/ThemeContext";

interface Props {
  theme: Theme;
  sendersName: string;
  message: string;
  handleModalClose: () => void;
}

const AlertModal = ({
  theme,
  sendersName,
  message,
  handleModalClose,
}: Props) => {
  return (
    <div className="fixed z-10 inset-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div
        className={`${theme.colors.bg} w-120 rounded-xl p-6 border ${theme.colors.border_secondary} flex flex-col items-center justify-center gap-4 text-center`}
      >
        <div>
          <h3 className={`text-lg ${theme.colors.text_primary}`}>
            Sender's Name
          </h3>
          <p>{sendersName}</p>
        </div>

        <div>
          <h3 className={`text-lg ${theme.colors.text_primary}`}>Message</h3>
          <p>{message}</p>
        </div>

        <button
          onClick={handleModalClose}
          className={`border ${theme.colors.border_primary} px-4 py-2 rounded-full ${theme.colors.text_primary}`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;

import Footer from "../components/Footer";
import Header from "../components/Header";
import TextField from "../components/TextField";

function Contact() {
  return (
    <div className="px-24 py-12 bg-black text-white h-screen space-y-12 overflow-y-auto min-h-screen font-display">
      <Header />
      <div className="space-y-4 border rounded-xl border-red-500/30 p-12">
        <h2 className="font-bold text-2xl text-red-500">Contact Information</h2>
        <div className="flex gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-red-500/30 rounded-xl">
              <p className="text-red-400">Address:</p>
              <p>United, San Pedro</p>
            </div>
            <div className="p-4 bg-red-500/30 rounded-xl">
              <p className="text-red-400">E-mail Address:</p>
              <p>vasquezjames443@gmail.com</p>
            </div>
          </div>
          <div className="space-y-4 flex-1">
            <div className="flex gap-6">
              <TextField title="Name" className="flex-1 space-y-2" />
              <TextField title="E-mail Address" className="flex-1 space-y-2" />
            </div>
            <TextField title="Subject" className="space-y-2" />
            <TextField title="Message" className="space-y-2" isMultiline />
            <button className="border rounded-full px-4 py-2 border-red-500 text-red-500 font-bold text-lg">
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

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaCopy,
  FaCheck,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";

function PortfolioContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ananthofficemail@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitted(false);

    // Get Web3Forms access key from Vite environment variable
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      import.meta.env.VITE_WEB3_FORMS ||
      "c6a2a0d2-80cd-4497-8526-7ebb4a1ac115";

    if (!accessKey) {
      setIsSubmitting(false);
      setErrorMessage(
        "Web3Forms Access Key is missing! Please paste your Access Key in the .env file as VITE_WEB3FORMS_ACCESS_KEY."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: "Portfolio Website Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden bg-grid-pattern py-12 md:py-16">
      {/* Radiant Background Blur Meshes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Real Email Contact System
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Send a message directly to my inbox at <strong className="text-indigo-400">ananthofficemail@gmail.com</strong> or fill out the form below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email Address</h3>
                <p className="text-slate-400 text-xs">Direct mail contact</p>
              </div>
            </div>

            <div>
              <p className="text-indigo-400 font-mono text-sm sm:text-base font-semibold break-all mb-4">
                ananthofficemail@gmail.com
              </p>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-md shadow-indigo-600/20"
              >
                {copiedEmail ? (
                  <>
                    <FaCheck className="text-emerald-400" /> Email Copied!
                  </>
                ) : (
                  <>
                    <FaCopy /> Copy Email Address
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl shrink-0">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Phone &amp; WhatsApp</h3>
                <p className="text-slate-400 text-xs">Call or WhatsApp</p>
              </div>
            </div>

            <div>
              <p className="text-emerald-400 font-mono text-base font-semibold mb-4">
                +91 9488260290
              </p>
              <a
                href="tel:+919488260290"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-2xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Location &amp; Mobility</h3>
                <p className="text-slate-400 text-xs">Preferred work locations</p>
              </div>
            </div>

            <div>
              <p className="text-purple-300 font-semibold text-base mb-1">
                Chennai / Bengaluru, India
              </p>
              <p className="text-slate-400 text-xs">Open to relocation &amp; remote positions</p>
            </div>
          </div>

          {/* Notice Period Status Card */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-2xl shrink-0">
                <FaClock />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Notice Period</h3>
                <p className="text-slate-400 text-xs">Onboarding timeline</p>
              </div>
            </div>

            <div>
              <p className="text-amber-300 font-semibold text-base mb-1">
                15 Days Notice Period
              </p>
              <p className="text-slate-400 text-xs">Ready for fast-track onboarding</p>
            </div>
          </div>
        </div>

        {/* Send Message Card Form & Social Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Web3Forms Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-slate-800 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <FaPaperPlane className="text-indigo-400 text-xl" />
                Send Me a Real Email
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                Messages submitted here are delivered instantly to <span className="text-indigo-400">ananthofficemail@gmail.com</span>.
              </p>
            </div>

            {submitted && (
              <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-center space-y-2">
                <FaCheck className="text-3xl text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs">Thank you! Your email has been delivered to ananthofficemail@gmail.com.</p>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-2xl bg-red-950/80 border border-red-500/50 text-red-300 text-xs flex items-start gap-3">
                <FaExclamationCircle className="text-red-400 text-lg shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Action Required:</p>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <FaUser className="text-indigo-400 text-xs" /> Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <FaEnvelope className="text-indigo-400 text-xs" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <FaCommentDots className="text-indigo-400 text-xs" /> Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Ananth, I would like to discuss a frontend role or project..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-lg" /> Sending to Inbox...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Email to Ananth
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Profiles */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
                <FaGlobe className="text-indigo-400 text-xl" />
                Social Profiles
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Connect with me on LinkedIn to view my recommendations or explore my public open-source code repositories on GitHub.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/ananth-reactdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin className="text-2xl text-indigo-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bold text-white text-sm">LinkedIn Profile</h3>
                    <p className="text-slate-400 text-xs">/in/ananth-reactdev</p>
                  </div>
                </div>
                <span className="text-xs text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              <a
                href="https://github.com/ananth-rj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FaGithub className="text-2xl text-slate-300 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bold text-white text-sm">GitHub Repositories</h3>
                    <p className="text-slate-400 text-xs">/ananth-rj</p>
                  </div>
                </div>
                <span className="text-xs text-slate-300 font-semibold group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/50 text-indigo-300 text-xs">
              <p className="font-semibold text-white mb-1">⚡ Direct Email Delivery</p>
              <p className="text-slate-400">Messages sent here land directly in my email inbox instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContact;

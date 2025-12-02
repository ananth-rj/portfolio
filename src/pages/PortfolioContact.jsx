import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

function PortfolioContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Get In Touch</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          I'm open to new opportunities and collaborations. Let's connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Card - Email */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaEnvelope className="text-3xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">Let's start a conversation</p>
              </div>
            </div>
            <a 
              href="mailto:ananthofficemail@gmail.com" 
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg break-all"
            >
              ananthofficemail@gmail.com
            </a>
          </div>

          {/* Contact Card - Phone */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <FaPhone className="text-3xl text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">Call or WhatsApp</p>
              </div>
            </div>
            <a 
              href="tel:+919488260290" 
              className="text-green-600 hover:text-green-800 font-semibold text-lg"
            >
              +91 9488260290
            </a>
          </div>

          {/* Contact Card - Location */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-3xl text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Location</h3>
                <p className="text-gray-600">Open to relocation</p>
              </div>
            </div>
            <p className="text-purple-600 font-semibold text-lg">
              Chennai / Bengaluru, India
            </p>
          </div>

          {/* Contact Card - Portfolio */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <FaGlobe className="text-3xl text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Portfolio</h3>
                <p className="text-gray-600">View my work</p>
              </div>
            </div>
            <a 
              href="https://anantharaj-portfolio.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 font-semibold text-lg break-all"
            >
              anantharaj-portfolio.netlify.app
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Connect With Me</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/ananth-reactdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition transform hover:scale-110 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a 
              href="https://github.com/ananth-rj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-4 rounded-full hover:bg-gray-900 transition transform hover:scale-110 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
          <p className="text-lg font-semibold mb-2">🚀 Open to New Opportunities</p>
          <p className="text-blue-100">
            Currently available for React Developer positions in Chennai, Bengaluru, or remote opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContact;


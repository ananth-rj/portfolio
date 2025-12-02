import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa";

function PortfolioHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            ANANTHARAJ V
          </h1>
          <h2 className="text-3xl md:text-4xl text-blue-600 font-semibold mb-6">
            React Developer
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Building scalable applications with React.js, Redux Toolkit, and modern web technologies.
            Passionate about creating efficient, user-friendly interfaces.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-700">
            <a href="tel:+919488260290" className="flex items-center gap-2 hover:text-blue-600 transition">
              <FaPhone /> <span>+91 9488260290</span>
            </a>
            <a href="mailto:ananthofficemail@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition">
              <FaEnvelope /> <span>ananthofficemail@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>Chennai / Bengaluru (Open to relocation), India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://linkedin.com/in/ananth-reactdev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/ananth-rj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-gray-800 hover:text-gray-900 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              View My Projects
            </Link>
            <Link 
              to="/about" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaCode className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1+ Year</h3>
            <p className="text-gray-600">Professional Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaLaptopCode className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">React Expert</h3>
            <p className="text-gray-600">Modern Frontend Development</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FaDatabase className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Stack</h3>
            <p className="text-gray-600">React + Node.js + MongoDB</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Tech Stack</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Git'].map((tech) => (
              <span 
                key={tech}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioHome;


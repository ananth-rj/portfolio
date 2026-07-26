import { FaExternalLinkAlt, FaGithub, FaShoppingCart, FaCode, FaRocket, FaDatabase, FaPalette, FaMobileAlt, FaGooglePlay, FaCalendarAlt, FaStar } from "react-icons/fa";

function PortfolioProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">My Projects</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Showcasing my work and technical expertise
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* React Native - Suba Naal App */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow flex flex-col">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-700 p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaMobileAlt className="text-4xl text-white shrink-0" />
                <h2 className="text-2xl font-bold text-white">சுப நாள் – திருமண பொருத்தம்</h2>
              </div>
              <p className="text-white mb-6 leading-relaxed">
                A React Native Android app for marriage compatibility (star matching), auspicious muhurtha dates,
                daily horoscope, Chandrashtama info, and Tamil calendar — published on Google Play.
              </p>

              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FaCode className="text-xl" />
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'JavaScript', 'Android', 'Google Play'].map((tech) => (
                    <span key={tech} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6 text-white text-sm">
                <div className="flex items-start gap-2">
                  <FaStar className="mt-1 shrink-0" />
                  <span>Bride &amp; groom star compatibility and suitable star matching</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaCalendarAlt className="mt-1 shrink-0" />
                  <span>Auspicious muhurtha days, daily/monthly calendar, and Chandrashtama</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaGooglePlay className="mt-1 shrink-0" />
                  <span>Published on Google Play Store</span>
                </div>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.ananth.subanaal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition flex items-center justify-center gap-2"
              >
                <FaGooglePlay /> View on Google Play
              </a>
            </div>
          </div>

          {/* E-commerce Project */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow flex flex-col">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FaShoppingCart className="text-4xl text-white shrink-0" />
                <h2 className="text-2xl font-bold text-white">React E-commerce App</h2>
              </div>
              <p className="text-white mb-6 leading-relaxed">
                A full-stack e-commerce application with user authentication, shopping cart functionality,
                and product management. Built with modern React patterns and deployed on Netlify and Render.
              </p>

              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FaCode className="text-xl" />
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'Redux Toolkit', 'Vite', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6 text-white text-sm">
                <div className="flex items-start gap-2">
                  <FaRocket className="mt-1 shrink-0" />
                  <span>User authentication and shopping cart functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaDatabase className="mt-1 shrink-0" />
                  <span>Managed API requests and state using Redux Toolkit</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaRocket className="mt-1 shrink-0" />
                  <span>Deployed frontend (Netlify) and backend (Render)</span>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href="https://shop-ananth.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> View Live
                </a>
                <a
                  href="https://github.com/ananth-rj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Project Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-4xl text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Portfolio Website</h2>
            </div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              A modern, responsive portfolio website showcasing my skills, experience, and projects.
              Built with React and Tailwind CSS, featuring smooth animations and a professional design.
            </p>

            <div className="mb-6">
              <h3 className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
                <FaPalette className="text-xl text-purple-600" />
                Features:
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'React Router', 'Responsive Design', 'Modern UI/UX'].map((feature) => (
                  <span key={feature} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaRocket className="text-blue-600" />
              <span className="font-semibold">Currently viewing this portfolio!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioProjects;

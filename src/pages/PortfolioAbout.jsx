import { FaBriefcase, FaGraduationCap, FaAward, FaCode, FaPalette, FaDatabase, FaRoute, FaCheckCircle, FaServer } from "react-icons/fa";

function PortfolioAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Professional Summary */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBriefcase className="text-blue-600" />
            Professional Summary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            React Developer with one year of hands-on experience building scalable applications using React.js, 
            Redux Toolkit, Tailwind CSS, and Node.js. Strong in creating reusable components, API integration, 
            and efficient state management. Skilled in collaborating with teams to deliver high-quality web applications.
          </p>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBriefcase className="text-blue-600" />
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {/* Current Job */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-gray-800">Software Engineer</h3>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Current</span>
              </div>
              <p className="text-lg text-gray-600 mb-3">Byclarity Tech, Chennai, India</p>
              <p className="text-gray-500 mb-4">Oct 2025 – Present</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Building Responsive UI from the figma using Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>API integration using Tanstack Query</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Bug fixing in the existing React projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Maintaining and implementing new features in existing React projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Building a React project from Scratch</span>
                </li>
              </ul>
            </div>

            {/* Previous Job */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">React Developer</h3>
              <p className="text-lg text-gray-600 mb-3">Focus Research Labs Pvt. Ltd., Chennai, India</p>
              <p className="text-gray-500 mb-4">Oct 2024 – Oct 2025</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Integrated RESTful APIs to fetch and send data in existing React projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Implemented React Router for easy navigation between components</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Regularly committed the code to GitHub repositories</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaCode className="text-blue-600" />
            Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaCode className="text-blue-600" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Styling */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaPalette className="text-purple-600" />
                Styling
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS', 'CSS Modules', 'Styled Components', 'Sass (SCSS)'].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* State Management & APIs */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaDatabase className="text-green-600" />
                State Management & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Redux', 'Redux Toolkit', 'Zustand', 'React Query', 'Context API', 'RESTful APIs'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Routing */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaRoute className="text-orange-600" />
                Routing
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React Router (v7+)', 'TanStack Router'].map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Form Handling */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Form Handling & Validation</h3>
              <div className="flex flex-wrap gap-2">
                {['React Hook Form', 'Zod'].map((skill) => (
                  <span key={skill} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaServer className="text-indigo-600" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB (Foundational)'].map((skill) => (
                  <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaTools className="text-gray-600" />
                Version Control & IDEs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'GitLab', 'Postman', 'Visual Studio Code'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing & OS */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Testing & Operating Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'Detox', 'macOS', 'Windows', 'Linux'].map((skill) => (
                  <span key={skill} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-blue-600" />
            Education
          </h2>
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">B.Tech in Computer Science</h3>
            <p className="text-lg text-gray-600">RVS College of Engineering and Technology, Karaikal</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaAward className="text-blue-600" />
            Certifications
          </h2>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5 & CSS3'].map((cert) => (
              <span key={cert} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-lg">
                {cert}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default PortfolioAbout;


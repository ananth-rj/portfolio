import { FaBriefcase, FaGraduationCap, FaAward, FaCode, FaDatabase, FaCheckCircle, FaServer, FaWrench, FaClock, FaMapMarkerAlt, FaVial } from "react-icons/fa";

function PortfolioAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">ANANTHARAJ V</h1>
              <p className="text-2xl text-blue-600 font-semibold mt-1">Frontend Developer</p>
            </div>
            <div className="text-right space-y-1">
              <p className="flex items-center justify-end gap-2 text-gray-700 font-semibold">
                <FaClock className="text-blue-600" />
                Notice Period: 15 Days
              </p>
              <p className="flex items-center justify-end gap-2 text-gray-600">
                <FaMapMarkerAlt className="text-blue-600" />
                Chennai, India
              </p>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBriefcase className="text-blue-600" />
            Professional Summary
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Frontend Developer with nearly 2 years of experience building responsive web and mobile applications
            using React.js, React Native, Angular, TypeScript, and JavaScript. Skilled in API integration,
            state management, reusable component development, and performance optimization.
          </p>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBriefcase className="text-blue-600" />
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* VMG Digital */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-gray-800">Junior Software Developer</h3>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Current</span>
              </div>
              <p className="text-lg text-gray-600 mb-1">VMG Digital, Chennai, India</p>
              <p className="text-gray-500 mb-4">Apr 2026 – Present</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Developed and maintained frontend features using React.js and Angular",
                  "Built responsive UI components from Figma designs using HTML, CSS, SCSS, and TypeScript",
                  "Integrated REST APIs and handled data rendering within web applications",
                  "Fixed bugs, implemented UI enhancements, and improved application performance",
                  "Collaborated with cross-functional teams to deliver new features and maintain existing applications",
                  "Worked on both React and Angular codebases based on project requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clarity Tech Labs */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Engineer</h3>
              <p className="text-lg text-gray-600 mb-1">Clarity Tech Labs, Chennai, India</p>
              <p className="text-gray-500 mb-4">14 Oct 2025 – Mar 2026</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Developed 25+ reusable UI components using React.js and Tailwind CSS based on Figma designs",
                  "Integrated REST APIs and implemented TanStack Query for optimized server state management",
                  "Reduced API calls by ~30% using TanStack Query caching and optimized state updates",
                  "Improved application performance using memoization, lazy loading, and optimized rendering techniques",
                  "Maintained and improved existing React applications by fixing bugs and refactoring legacy code",
                  "Built a React project from scratch with modular component architecture",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Research Labs - 2025 */}
            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Developer</h3>
              <p className="text-lg text-gray-600 mb-1">Focus Research Labs Pvt. Ltd., Chennai, India</p>
              <p className="text-gray-500 mb-4">Aug 2025 – 13 Oct 2025</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Integrated RESTful APIs to manage dynamic data in React applications",
                  "Implemented Redux Toolkit to centralize state management and eliminate prop drilling",
                  "Designed routing architecture using React Router for seamless navigation",
                  "Collaborated with backend team to improve API response structure and error handling",
                  "Developed interactive dashboard interfaces using React.js and Tailwind CSS for data visualization and user insights",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Independent Developer */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Independent Developer & Content Creator</h3>
              <p className="text-gray-500 mb-4">Apr 2020 – Jul 2025</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Built and scaled a WordPress blog and YouTube channel focused on web development",
                  "Published 250+ technical articles on JavaScript, React, and frontend development",
                  "Achieved 50K+ monthly website traffic through SEO and content strategy",
                  "Successfully obtained Google AdSense approval and monetized content",
                  "Improved website performance, SEO rankings, and user engagement",
                  "Managed end-to-end platform operations including content publishing, Analytics, and optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Research Labs - 2019 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Developer</h3>
              <p className="text-lg text-gray-600 mb-1">Focus Research Labs Pvt. Ltd., Chennai, India</p>
              <p className="text-gray-500 mb-4">Jul 2019 – Mar 2020</p>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Received training in React Native and mobile application development",
                  "Developed mobile application screens and UI components using React Native",
                  "Participated in the development of a retail mobile application prototype",
                  "Worked with JavaScript, React Native components, and mobile UI design principles",
                  "Collaborated with senior developers to implement and test application features",
                  "Gained experience in mobile application architecture and development workflows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaCheckCircle className="text-indigo-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
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
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaCode className="text-blue-600" />
                Core Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'React Native', 'Angular', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaDatabase className="text-green-600" />
                State Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Redux Toolkit', 'Context API', 'Zustand', 'TanStack Query'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaServer className="text-indigo-600" />
                Backend & APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'].map((skill) => (
                  <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaWrench className="text-gray-600" />
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Postman', 'VS Code'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaVial className="text-yellow-600" />
                Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'React Testing Library'].map((skill) => (
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

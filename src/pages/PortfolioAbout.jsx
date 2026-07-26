import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCode,
  FaDatabase,
  FaCheckCircle,
  FaServer,
  FaWrench,
  FaClock,
  FaMapMarkerAlt,
  FaVial,
  FaLayerGroup,
  FaArrowRight,
  FaUserCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function PortfolioAbout() {
  const experiences = [
    {
      company: "VMG Digital",
      role: "Junior Software Developer",
      period: "Apr 2026 – Present",
      location: "Chennai, India",
      status: "Current",
      color: "border-emerald-500",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      bullets: [
        "Developed and maintained frontend features using React.js and Angular",
        "Built responsive UI components from Figma designs using HTML, CSS, SCSS, and TypeScript",
        "Integrated REST APIs and handled dynamic data rendering within web applications",
        "Fixed bugs, implemented UI enhancements, and improved application performance",
        "Collaborated with cross-functional teams to deliver new features and maintain existing codebases",
        "Worked across both React and Angular codebases based on project requirements",
      ],
      tech: ["React.js", "Angular", "TypeScript", "SCSS", "REST APIs"],
    },
    {
      company: "Clarity Tech Labs",
      role: "Software Engineer",
      period: "14 Oct 2025 – Mar 2026",
      location: "Chennai, India",
      status: "Prior",
      color: "border-indigo-500",
      badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      bullets: [
        "Developed 25+ reusable UI components using React.js and Tailwind CSS based on Figma designs",
        "Integrated REST APIs and implemented TanStack Query for optimized server state management",
        "Reduced API calls by ~30% using TanStack Query caching and optimized state updates",
        "Improved application performance using memoization, lazy loading, and optimized rendering techniques",
        "Maintained and refactored legacy React codebases to resolve critical bug tickets",
        "Built a React project from scratch with modular component architecture",
      ],
      tech: ["React.js", "Tailwind CSS", "TanStack Query", "Figma", "REST APIs"],
    },
    {
      company: "Focus Research Labs Pvt. Ltd.",
      role: "Software Developer",
      period: "Aug 2025 – 13 Oct 2025",
      location: "Chennai, India",
      status: "Prior",
      color: "border-purple-500",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      bullets: [
        "Integrated RESTful APIs to manage dynamic data in React applications",
        "Implemented Redux Toolkit to centralize state management and eliminate prop drilling",
        "Designed routing architecture using React Router for seamless navigation",
        "Collaborated with backend team to improve API response structure and error handling",
        "Developed interactive dashboard interfaces using React.js and Tailwind CSS",
      ],
      tech: ["React.js", "Redux Toolkit", "React Router", "Tailwind CSS"],
    },
    {
      company: "Independent Developer & Content Creator",
      role: "Frontend Content Creator & Developer",
      period: "Apr 2020 – Jul 2025",
      location: "Self-Employed",
      status: "Prior",
      color: "border-amber-500",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      bullets: [
        "Built and scaled a WordPress blog and YouTube channel focused on web development",
        "Published 250+ technical articles on JavaScript, React, and frontend development",
        "Achieved 50K+ monthly website traffic through SEO and content strategy",
        "Successfully obtained Google AdSense approval and monetized technical content",
        "Managed end-to-end platform operations including content publishing and Analytics optimization",
      ],
      tech: ["JavaScript", "React", "SEO", "WordPress", "Technical Writing"],
    },
    {
      company: "Focus Research Labs Pvt. Ltd.",
      role: "Software Developer (Mobile)",
      period: "Jul 2019 – Mar 2020",
      location: "Chennai, India",
      status: "Prior",
      color: "border-cyan-500",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      bullets: [
        "Received training in React Native and mobile application development",
        "Developed mobile application screens and UI components using React Native",
        "Participated in the development of a retail mobile application prototype",
        "Worked with JavaScript, React Native components, and mobile UI design principles",
        "Collaborated with senior developers to implement and test mobile app features",
      ],
      tech: ["React Native", "JavaScript", "Mobile UI", "Android"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden bg-grid-pattern py-12 md:py-16">
      {/* Background Radial Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
        {/* Header Hero Banner */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <FaUserCheck /> Professional Profile
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">ANANTHARAJ V</h1>
              <p className="text-xl sm:text-2xl text-gradient font-bold mt-1">Frontend Developer</p>
            </div>

            <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-emerald-400 font-semibold">
                <FaClock />
                <span>Notice Period: 15 Days</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                <FaMapMarkerAlt className="text-pink-400" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <FaBriefcase className="text-indigo-400 text-2xl" />
            Professional Summary
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Frontend Developer with nearly <strong className="text-white font-semibold">2 years of professional experience</strong> building high-performance, responsive web and mobile applications using <span className="text-cyan-400 font-medium">React.js</span>, <span className="text-indigo-400 font-medium">React Native</span>, <span className="text-purple-400 font-medium">Angular</span>, <span className="text-pink-400 font-medium">TypeScript</span>, and <span className="text-amber-400 font-medium">JavaScript</span>. Highly skilled in API integration, state management (Redux Toolkit, TanStack Query), reusable component architecture, and performance optimization.
          </p>
        </section>

        {/* Work Experience Timeline */}
        <section className="glass-card p-8 rounded-3xl border border-slate-800 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <FaBriefcase className="text-indigo-400 text-2xl" />
              Work Experience Timeline
            </h2>
            <p className="text-slate-400 text-sm mt-1">Detailed journey across engineering roles and technical achievements.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:md:left-4 before:w-0.5 before:bg-slate-800">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 ${exp.color} flex items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                </div>

                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${exp.badgeBg}`}>
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-indigo-400 font-semibold text-sm mt-0.5">{exp.company} &bull; <span className="text-slate-400 font-normal">{exp.location}</span></p>
                    </div>

                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-slate-300 text-sm">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-indigo-400 mt-1 shrink-0 text-xs" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categorized Skills */}
        <section className="glass-card p-8 rounded-3xl border border-slate-800 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
              <FaCode className="text-indigo-400 text-2xl" />
              Technical Skillset
            </h2>
            <p className="text-slate-400 text-sm mt-1">Core technical domains and tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FaCode className="text-cyan-400" /> Core Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'React Native', 'Angular', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-3 py-1 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FaLayerGroup className="text-purple-400" /> State Management
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Redux Toolkit', 'Context API', 'Zustand', 'TanStack Query'].map((skill) => (
                  <span key={skill} className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FaServer className="text-indigo-400" /> Backend &amp; APIs
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'].map((skill) => (
                  <span key={skill} className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3 py-1 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FaWrench className="text-amber-400" /> Developer Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Postman', 'VS Code', 'Figma'].map((skill) => (
                  <span key={skill} className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3 py-1 rounded-lg text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
              <FaGraduationCap className="text-indigo-400 text-2xl" />
              Education
            </h2>
            <div className="border-l-2 border-indigo-500 pl-4 py-1">
              <h3 className="text-lg font-bold text-white">B.Tech in Computer Science</h3>
              <p className="text-slate-400 text-sm">RVS College of Engineering &amp; Technology, Karaikal</p>
            </div>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
              <FaAward className="text-amber-400 text-2xl" />
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2">
              {['React.js Architecture', 'Tailwind CSS Mastery', 'Advanced JavaScript ES6+', 'HTML5 & CSS3 Responsive Systems'].map((cert) => (
                <span key={cert} className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3 py-1 rounded-lg text-xs font-semibold">
                  {cert}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30"
          >
            <span>View Production Projects</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioAbout;

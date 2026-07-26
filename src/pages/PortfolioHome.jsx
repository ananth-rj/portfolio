import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaClock,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaTerminal,
  FaCopy,
  FaCheck,
  FaRocket,
  FaLayerGroup,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

function PortfolioHome() {
  const [activeCodeTab, setActiveCodeTab] = useState("profile");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTechCategory, setActiveTechCategory] = useState("all");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ananthofficemail@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const techCategories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend Core" },
    { id: "mobile", label: "Mobile Dev" },
    { id: "state", label: "State & API" },
    { id: "tools", label: "Backend & Tools" },
  ];

  const techStack = [
    { name: "React.js", category: "frontend", level: "Expert", highlight: true },
    { name: "React Native", category: "mobile", level: "Advanced", highlight: true },
    { name: "TypeScript", category: "frontend", level: "Proficient", highlight: true },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Expert", highlight: true },
    { name: "Angular", category: "frontend", level: "Intermediate", highlight: false },
    { name: "Next.js", category: "frontend", level: "Intermediate", highlight: false },
    { name: "Redux Toolkit", category: "state", level: "Advanced", highlight: true },
    { name: "TanStack Query", category: "state", level: "Advanced", highlight: false },
    { name: "Tailwind CSS", category: "frontend", level: "Expert", highlight: true },
    { name: "Node.js", category: "tools", level: "Intermediate", highlight: false },
    { name: "Express.js", category: "tools", level: "Intermediate", highlight: false },
    { name: "MongoDB", category: "tools", level: "Intermediate", highlight: false },
    { name: "Git & GitHub", category: "tools", level: "Advanced", highlight: true },
    { name: "REST APIs", category: "state", level: "Expert", highlight: true },
  ];

  const filteredTech =
    activeTechCategory === "all"
      ? techStack
      : techStack.filter((item) => item.category === activeTechCategory);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden bg-grid-pattern">
      {/* Radiant Background Blur Meshes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* ---------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot inline-block"></span>
              <FaClock className="text-emerald-400" />
              <span>Available for Hire &bull; Notice Period: 15 Days</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Crafting High-Performance <br className="hidden sm:inline" />
              <span className="text-gradient">Web &amp; Mobile Apps</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Hi, I&apos;m <strong className="text-white font-semibold">Anantharaj V</strong> — a Frontend Developer with nearly 
              <span className="text-indigo-400 font-semibold"> 2 years of experience</span>. I build responsive, highly scalable web &amp; mobile interfaces using <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-indigo-400 font-semibold">React Native</span>, <span className="text-purple-400 font-semibold">Angular</span>, and <span className="text-pink-400 font-semibold">TypeScript</span>.
            </p>

            {/* Contact Pills Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <a
                href="tel:+919488260290"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-all"
              >
                <FaPhone className="text-indigo-400" />
                <span>+91 9488260290</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-all cursor-pointer"
                title="Click to copy email address"
              >
                <FaEnvelope className="text-indigo-400" />
                <span>ananthofficemail@gmail.com</span>
                {copiedEmail ? (
                  <FaCheck className="text-emerald-400 text-xs ml-1" />
                ) : (
                  <FaCopy className="text-slate-500 hover:text-slate-300 text-xs ml-1" />
                )}
              </button>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <FaMapMarkerAlt className="text-pink-400" />
                <span>Chennai, India</span>
              </div>
            </div>

            {/* CTA Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/projects"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 py-3.5 rounded-xl font-bold text-base hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 glass-card text-slate-200 hover:text-white border border-slate-700/80 hover:border-indigo-500/50 px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:bg-slate-800/60"
              >
                <span>About Me</span>
              </Link>

              <div className="flex items-center gap-3 ml-0 sm:ml-2">
                <a
                  href="https://linkedin.com/in/ananth-reactdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/50 transition-all hover:scale-110"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/ananth-rj"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all hover:scale-110"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Code / Spec Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-2xl border border-slate-800/80">
              {/* Card Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                
                {/* Editor Tabs */}
                <div className="flex items-center space-x-1 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveCodeTab("profile")}
                    className={`px-3 py-1 rounded-md font-mono transition-colors ${
                      activeCodeTab === "profile"
                        ? "bg-indigo-600 text-white font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Developer.json
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("specs")}
                    className={`px-3 py-1 rounded-md font-mono transition-colors ${
                      activeCodeTab === "specs"
                        ? "bg-indigo-600 text-white font-semibold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    LiveSpecs.ts
                  </button>
                </div>
              </div>

              {/* Editor Content Body */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[340px]">
                {activeCodeTab === "profile" ? (
                  <div className="space-y-1.5 text-slate-300">
                    <p><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;name&quot;</span>: <span className="text-emerald-300">&quot;Anantharaj V&quot;</span>,</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;experience&quot;</span>: <span className="text-amber-300">&quot;~2 Years&quot;</span>,</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;primaryStack&quot;</span>: [</p>
                    <p className="pl-8"><span className="text-emerald-300">&quot;React.js&quot;</span>, <span className="text-emerald-300">&quot;React Native&quot;</span>,</p>
                    <p className="pl-8"><span className="text-emerald-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-300">&quot;Redux Toolkit&quot;</span></p>
                    <p className="pl-4">],</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;playStoreApp&quot;</span>: <span className="text-emerald-300">&quot;Suba Naal (Tamil Calendar)&quot;</span>,</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;location&quot;</span>: <span className="text-emerald-300">&quot;Chennai, TN, India&quot;</span>,</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;noticePeriod&quot;</span>: <span className="text-amber-300">&quot;15 Days&quot;</span>,</p>
                    <p className="pl-4"><span className="text-pink-400">&quot;openForOpportunities&quot;</span>: <span className="text-indigo-400">true</span></p>
                    <p>&#125;;</p>
                  </div>
                ) : (
                  <div className="space-y-4 font-sans text-slate-300">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="font-semibold text-white flex items-center gap-2">
                        <FaCode className="text-indigo-400" /> Web Engineering
                      </span>
                      <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full border border-indigo-500/30">
                        React &bull; Angular
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="font-semibold text-white flex items-center gap-2">
                        <FaMobileAlt className="text-cyan-400" /> Mobile Apps
                      </span>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/30">
                        React Native &bull; Play Store
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="font-semibold text-white flex items-center gap-2">
                        <FaLayerGroup className="text-purple-400" /> State &amp; APIs
                      </span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full border border-purple-500/30">
                        Redux &bull; TanStack Query
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-400 shrink-0 text-base" />
                      <span>Ready for high-impact frontend engineering roles immediately.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Badge */}
              <div className="bg-slate-900/60 px-4 py-2.5 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
                <span className="flex items-center gap-1.5">
                  <FaTerminal className="text-indigo-400" /> main.jsx
                </span>
                <span className="text-emerald-400 font-semibold">● Ready to deploy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* CAREER HIGHLIGHTS & STATS METRICS GRID */}
      {/* ---------------------------------------------------- */}
      <section className="py-12 border-y border-slate-800/60 bg-slate-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl mb-4">
                <FaBriefcase />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-1">~2 Years</h3>
              <p className="text-slate-400 text-sm font-medium">Professional Experience</p>
              <p className="text-slate-500 text-xs mt-2">Building responsive React &amp; Native apps</p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-2xl mb-4">
                <FaGooglePlay />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-1">Play Store</h3>
              <p className="text-slate-400 text-sm font-medium">Published Android App</p>
              <p className="text-slate-500 text-xs mt-2">Suba Naal Tamil Calendar App</p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-2xl mb-4">
                <FaLaptopCode />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-1">15+ Modules</h3>
              <p className="text-slate-400 text-sm font-medium">Web &amp; Mobile Features</p>
              <p className="text-slate-500 text-xs mt-2">APIs, state systems &amp; responsive UI</p>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl mb-4">
                <FaClock />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-1">15 Days</h3>
              <p className="text-slate-400 text-sm font-medium">Short Notice Period</p>
              <p className="text-slate-500 text-xs mt-2">Available for quick onboarding</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* FEATURED PROJECTS SHOWCASE */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-indigo-400">Featured Work</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
            Highlighting Key <span className="text-gradient">Projects</span>
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            A selection of production-ready applications built across mobile and web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Project 1: Suba Naal App */}
          <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col group">
            <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <FaMobileAlt /> Mobile App &bull; Google Play
                  </span>
                  <span className="text-xs font-mono text-slate-400">Published</span>
                </div>

                <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  சுப நாள் – Tamil Calendar &amp; Compatibility App
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  A full-featured React Native Android application for star compatibility matching, auspicious muhurtha dates, daily horoscope, and Chandrashtama details. Published live on the Google Play Store.
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>Bride &amp; groom star compatibility &amp; matching algorithms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-cyan-400 mt-0.5 shrink-0" />
                    <span>Auspicious dates calendar, daily horoscope &amp; Chandrashtama</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React Native", "JavaScript", "Android SDK", "Google Play Store"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.ananth.subanaal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:from-teal-500 hover:to-cyan-500 transition-all shadow-md shadow-cyan-600/20"
              >
                <FaGooglePlay /> View on Google Play Store
              </a>
            </div>
          </div>

          {/* Featured Project 2: E-Commerce Web App */}
          <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col group">
            <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <FaLaptopCode /> Full-Stack Web App
                  </span>
                  <span className="text-xs font-mono text-slate-400">Live Demo</span>
                </div>

                <h4 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                  React Modern E-Commerce Platform
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  A full-stack e-commerce web application featuring user authentication, shopping cart state management, payment gateway mockup, product catalog, and backend RESTful APIs.
                </p>

                <div className="space-y-2 mb-6 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-indigo-400 mt-0.5 shrink-0" />
                    <span>State management with Redux Toolkit &amp; persistent cart</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-indigo-400 mt-0.5 shrink-0" />
                    <span>Deployed frontend on Netlify &amp; Node.js backend on Render</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <a
                  href="https://shop-ananth.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/20"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
                <a
                  href="https://github.com/ananth-rj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 glass-card text-slate-200 border border-slate-700 hover:border-slate-500 px-4 py-3 rounded-xl font-semibold text-sm transition-all"
                >
                  <FaGithub /> Repository
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects Footer Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-base transition-colors group"
          >
            <span>Explore all projects &amp; technical achievements</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* TECH STACK INTERACTIVE MATRIX */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 border-t border-slate-800/60 bg-slate-900/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-xs uppercase tracking-widest font-bold text-indigo-400">Technical Expertise</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
              Tech <span className="text-gradient">Stack &amp; Skills</span>
            </h3>
            <p className="text-slate-400 text-base">
              Core frameworks, languages, and frontend engineering tools I work with daily.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {techCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTechCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTechCategory === cat.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Badges Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTech.map((tech) => (
              <div
                key={tech.name}
                className="glass-card p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:bg-cyan-400 transition-colors"></div>
                  <span className="font-semibold text-slate-200 text-sm group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* WHY WORK WITH ME / CORE STRENGTHS */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-indigo-400">Capabilities</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white">
            What I Bring to <span className="text-gradient">Your Team</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
              <FaCode />
            </div>
            <h4 className="text-lg font-bold text-white">Modular Architecture</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Developing clean, reusable component libraries in React &amp; Angular that reduce visual churn and increase code maintainability.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
              <FaMobileAlt />
            </div>
            <h4 className="text-lg font-bold text-white">Cross-Platform Apps</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building native Android and iOS mobile applications with React Native, from concept to Google Play Store deployment.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
              <FaLayerGroup />
            </div>
            <h4 className="text-lg font-bold text-white">API &amp; State Management</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Seamlessly integrating RESTful APIs and managing complex global state with Redux Toolkit and TanStack Query.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-pink-500/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-xl">
              <FaRocket />
            </div>
            <h4 className="text-lg font-bold text-white">Performance Optimization</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Optimizing page load speeds, memory utilization, component re-renders, and responsive layouts across all screen dimensions.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* HIGH-IMPACT CALL TO ACTION (CTA) BANNER */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-card rounded-3xl p-8 sm:p-14 border border-indigo-500/30 overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
          {/* Accent glow background inside banner */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 opacity-80 pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold text-xs border border-indigo-500/30 uppercase tracking-wider">
              Let&apos;s Connect
            </span>

            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Build Scalable <br className="hidden sm:inline" />
              <span className="text-gradient">Web &amp; Mobile Products?</span>
            </h3>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              I am actively looking for Frontend Developer roles with a 15-day notice period. Let&apos;s discuss how I can contribute to your team.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30 hover:scale-[1.02]"
              >
                <FaEnvelope /> Get In Touch
              </Link>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 glass-card text-slate-200 border border-slate-700 hover:border-indigo-500/50 px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:bg-slate-800/80 cursor-pointer"
              >
                <FaCopy /> {copiedEmail ? "Email Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioHome;

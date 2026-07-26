import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaShoppingCart,
  FaCode,
  FaRocket,
  FaDatabase,
  FaPalette,
  FaMobileAlt,
  FaGooglePlay,
  FaCalendarAlt,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function PortfolioProjects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "subanaal",
      type: "mobile",
      title: "சுப நாள் – திருமண பொருத்தம் (Suba Naal)",
      subtitle: "React Native Android App &bull; Live on Google Play Store",
      description:
        "A full-featured React Native Android application for marriage compatibility (star matching), auspicious muhurtha dates, daily horoscope, Chandrashtama info, and Tamil calendar — published on Google Play Store.",
      icon: FaMobileAlt,
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      accentBorder: "hover:border-cyan-500/50",
      badge: "Google Play App",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      tech: ["React Native", "JavaScript", "Android SDK", "Google Play Store", "Mobile UI"],
      highlights: [
        "Bride & groom star compatibility matching algorithms",
        "Auspicious muhurtha days, daily/monthly calendar, and Chandrashtama details",
        "Published and active on Google Play Store",
      ],
      primaryAction: {
        label: "View on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.ananth.subanaal",
        icon: FaGooglePlay,
        bg: "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white",
      },
    },
    {
      id: "ecommerce",
      type: "web",
      title: "React Modern E-Commerce Platform",
      subtitle: "Full-Stack Web App &bull; Deployed on Netlify & Render",
      description:
        "A full-stack e-commerce web application featuring user authentication, shopping cart functionality, product management, and RESTful API integrations built with modern React patterns.",
      icon: FaShoppingCart,
      iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      accentBorder: "hover:border-indigo-500/50",
      badge: "Full-Stack Web",
      badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "Vite", "Node.js", "Express.js", "MongoDB"],
      highlights: [
        "User authentication and persistent shopping cart state management",
        "Managed complex API request workflows using Redux Toolkit",
        "Frontend deployed on Netlify & backend APIs deployed on Render",
      ],
      primaryAction: {
        label: "View Live Demo",
        url: "https://shop-ananth.netlify.app/",
        icon: FaExternalLinkAlt,
        bg: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white",
      },
      secondaryAction: {
        label: "GitHub Repo",
        url: "https://github.com/ananth-rj",
        icon: FaGithub,
      },
    },
    {
      id: "portfolio",
      type: "web",
      title: "Developer Portfolio Website",
      subtitle: "React.js, Tailwind CSS v4 & Glassmorphism",
      description:
        "A modern, responsive developer portfolio featuring dark glassmorphic UI, custom animations, interactive code preview card, and filterable skill matrix.",
      icon: FaCode,
      iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      accentBorder: "hover:border-purple-500/50",
      badge: "Active Site",
      badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      tech: ["React.js", "Tailwind CSS v4", "React Router", "Vite", "Glassmorphism UI"],
      highlights: [
        "Built with React Router and Tailwind CSS v4 design tokens",
        "Dark glassmorphic aesthetic with custom CSS keyframe animations",
        "Currently viewing this portfolio application!",
      ],
      secondaryAction: {
        label: "GitHub Profile",
        url: "https://github.com/ananth-rj",
        icon: FaGithub,
      },
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden bg-grid-pattern py-12 md:py-16">
      {/* Radiant Background Blur Meshes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Production applications, mobile apps, and full-stack web platforms demonstrating engineering skills.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Projects" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "web", label: "Web Applications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            const PrimaryIcon = project.primaryAction?.icon;
            const SecondaryIcon = project.secondaryAction?.icon;

            return (
              <div
                key={project.id}
                className={`glass-card p-8 rounded-3xl border border-slate-800 ${project.accentBorder} transition-all space-y-6 group`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${project.iconBg} border flex items-center justify-center text-2xl shrink-0`}>
                      <Icon />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-slate-400 text-sm font-medium mt-0.5" dangerouslySetInnerHTML={{ __html: project.subtitle }}></p>
                    </div>
                  </div>

                  <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold border ${project.badgeBg} self-start md:self-auto`}>
                    {project.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 bg-slate-900/60 p-4 rounded-2xl border border-slate-800/60 text-xs sm:text-sm text-slate-300">
                  <h3 className="text-white font-semibold text-xs uppercase tracking-wider text-slate-400 mb-2">Key Highlights:</h3>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-indigo-400 mt-0.5 shrink-0 text-xs" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.primaryAction && (
                    <a
                      href={project.primaryAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${project.primaryAction.bg}`}
                    >
                      {PrimaryIcon && <PrimaryIcon />}
                      <span>{project.primaryAction.label}</span>
                    </a>
                  )}

                  {project.secondaryAction && (
                    <a
                      href={project.secondaryAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 glass-card text-slate-200 border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                    >
                      {SecondaryIcon && <SecondaryIcon />}
                      <span>{project.secondaryAction.label}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Contact Footer */}
        <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white">Have a Project or Opportunity in Mind?</h3>
          <p className="text-slate-400 text-sm">
            I am available for new roles and collaborative projects. Let&apos;s build something great together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-7 py-3 rounded-xl font-bold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/30"
          >
            <span>Get In Touch</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioProjects;

import React from "react";

/* -------------------- DATA -------------------- */

const workflowSteps = [
  {
    step: "01",
    title: "Understand & Scope",
    points: [
      "Understand product intent, real user flows, and expected behavior",
      "Study APIs, data movement, integrations, edge cases, and failure points",
    ],
  },
  {
    step: "02",
    title: "Test & Observe",
    points: [
      "Manual UI testing across real user and admin scenarios",
      "API testing and response validation for accuracy and consistency",
    ],
  },
  {
    step: "03",
    title: "Identify & Verify Issues",
    points: [
      "Identify defects, data mismatches, and logic gaps early",
      "Re-test fixes and perform focused regression checks",
    ],
  },
  {
    step: "04",
    title: "Stabilize & Strengthen",
    points: [
      "Reduce repeat issues through structured validation cycles",
      "Improve reliability, consistency, usability, and system confidence",
    ],
  },
];

const workExperience = [
  {
    role: "Software Tester (Manual + API)",
    company: "Outlier AI",
    period: "Jun 2025 – Present | Remote",
    points: [
      "Reviewed and validated large volumes of system-generated outputs for accuracy and consistency.",
      "Identified data errors, logical gaps, and workflow failures early in the review cycle.",
      "Worked closely with AI-based and API-driven systems in async remote environments.",
      "Improved output accuracy by ~30% and reduced repeat issues by ~25%.",
    ],
  },
];

const projects = [
  {
    title: "Remote Job Radar (Engine A)",
    description:
      "Multi-source remote job scanning engine that aggregates real hiring feeds and produces a filtered, high-signal job list.",
    tech: "Python, Pandas, APIs, Data Filtering, Automation",
    link: "https://github.com/Yakhob",
    previewImage: "/previews/remote-job-radar.png",
    bullets: [
      "Aggregates jobs from 8+ remote job boards and public APIs",
      "Filters by skill relevance, seniority, location, and recency",
      "Exports a daily Excel file with only actionable roles",
    ],
    featured: true,
  },
  {
    title: "Wagging Wonders – E-commerce Dog Shop Platform",
    description:
    "End-to-end testing of user and admin modules in a full-stack e-commerce platform.",
    tech: "Manual Testing, API Testing, UI Validation",
    link: "https://github.com/Yakhob/wagging-wonders",
    previewImage: "/previews/wagging-wonders.png",
  },
  {
    title: "Digital Library System – Django Web Application",
    description:
      "Tested authentication, search workflows, and role-based access in a Django-based platform.",
    tech: "Django, Manual Testing, Cross-Browser Testing",
    link: "https://github.com/Yakhob/Digital-Library-System",
    previewImage: "/previews/digital-library.png",

  },
];


const skillGroups = {
  Languages: [
    { name: "Python", icon: "python/python-original.svg" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  ],

  "Frameworks & Libraries": [
    { name: "Django", icon: "django/django-plain.svg" },
    { name: "Flask", icon: "flask/flask-original.svg" },
    { name: "Pandas", icon: "pandas/pandas-original.svg" },
    { name: "BeautifulSoup", icon: "python/python-original.svg" }, // Python lib
    { name: "React", icon: "react/react-original.svg" },
  ],

  "Testing Tools": [
    { name: "Selenium", icon: "selenium/selenium-original.svg" },
    { name: "Postman", icon: "postman/postman-original.svg" },
    { name: "JMeter", icon: "apache/apache-original.svg" }, 
    { name: "Jira", icon: "jira/jira-original.svg" },
    { name: "LambdaTest", icon: "/icons/lambdatest.svg" },
  ],

  "Automation & Workflows": [
    { name: "n8n", icon: "/icons/n8n.svg" },
  ],

  "Dev & System Tools": [
    { name: "Git", icon: "git/git-original.svg" },
    { name: "Docker", icon: "docker/docker-original.svg" },
    { name: "Linux", icon: "linux/linux-original.svg" },
  ],

};

/* -------------------- APP -------------------- */

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 bg-[#0b0f1a] relative overflow-hidden">
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        {/* HEADER */}
        <header className="max-w-6xl mx-auto px-6 py-4 mt-6 flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full sticky top-4 z-50">
          <div>
            <h1 className="text-sm font-semibold text-white">Jacob Kurian</h1>
            <p className="text-xs text-gray-400">Software Tester (Manual + API)</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10">
              Contact Me
            </a>
            <a href="https://www.linkedin.com/in/jacob-kurian-b78725243/" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/Yakhob" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">
              GitHub
            </a>
            <a href="/JacobKurian_Resume.pdf" download className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              Resume
            </a>
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6 space-y-24">
          {/* HERO */}
          <section className="text-center py-24">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              QA Engineer & Automation-Focused Builder
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
              I support teams working on web applications, automation workflows,
              and AI-driven systems by combining QA thinking with engineering support.
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section id="work">
            <h2 className="text-2xl font-semibold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </h2>

            {workExperience.map((job) => (
              <div key={job.role} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {job.company} • {job.period}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {job.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* HOW I WORK */}
          <section>
            <h2 className="text-2xl font-semibold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              How I Work
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-[2px] bg-indigo-500/30 hidden md:block" />

              <div className="space-y-24">
                {workflowSteps.map((w, i) => (
                  <div key={w.step}
                    className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.6)] hidden md:block" />

                    <div className="md:w-[45%] bg-white/5 border border-white/10 rounded-2xl p-6">
                      <span className="text-indigo-400 text-sm font-semibold">{w.step}</span>
                      <h4 className="text-xl font-semibold mb-3">{w.title}</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {w.points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2 className="text-2xl font-semibold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="space-y-12">
              {projects.map((p) => (
                <div key={p.title}
                  className={`grid md:grid-cols-2 gap-8 p-6 rounded-2xl border ${p.featured ? "border-indigo-400/40 bg-indigo-500/5" : "border-white/10 bg-white/5"}`}
                >
                  <div className="relative rounded-xl overflow-hidden bg-black/40 border border-white/10">
  {p.previewImage ? (
    <img
      src={p.previewImage}
      alt={`${p.title} preview`}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="flex items-center justify-center h-full text-gray-500">
      Preview coming soon
    </div>
  )}
</div>

                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-gray-300 mt-3">{p.description}</p>
                    <p className="text-sm text-gray-400 mt-2">{p.tech}</p>

                    {p.bullets && (
                      <ul className="list-disc list-inside text-gray-300 mt-3">
                        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}

                    <a href={p.link} target="_blank" rel="noreferrer"
                      className="inline-block mt-4 text-indigo-400 hover:underline">
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills">
            <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </h2>

            {Object.entries(skillGroups).map(([group, skills]) => (
              <div key={group} className="mb-8">
                <h4 className="uppercase text-gray-400 text-sm mb-4">{group}</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                  {skills.map((s) => (
                    <img key={s.name}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}`}
                      alt={s.name}
                      title={s.name}
                      className="w-10 h-10 mx-auto"
                    />
                  ))}
                </div>
              </div>
            ))}
          </section>
          {/* CONTACT */}
          <section id="contact" className="grid md:grid-cols-2 gap-12 bg-white/5 p-10 rounded-2xl">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Work With Me</h2>
              <ul className="space-y-3 text-gray-300">
                <li>✔ Clear async communication</li>
                <li>✔ Strong QA + automation mindset</li>
                <li>✔ Comfortable owning tasks end-to-end</li>
                <li>✔ Focus on long-term stability</li>
              </ul>
            </div>

            <form className="space-y-4">
              <input className="w-full px-4 py-3 bg-black/40 rounded-lg" placeholder="Your name" />
              <input className="w-full px-4 py-3 bg-black/40 rounded-lg" placeholder="Your email" />
              <textarea className="w-full px-4 py-3 bg-black/40 rounded-lg" rows="4" placeholder="Tell me what you're working on…" />
              <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                Send Message
              </button>
            </form>
          </section>

          <footer className="text-center text-gray-400 py-10">
            © {new Date().getFullYear()} Jacob Kurian
          </footer>
        </main>
      </div>
    </div>
  );
}

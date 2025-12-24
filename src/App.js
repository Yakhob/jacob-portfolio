import React from "react";

const workExperience = [
  {
    role: "Software Tester (Manual + API)",
    company: "Outlier AI",
    period: "Jun 2025 – Present | Remote",
    points: [
      "Developed and tested Python scripts supporting backend workflows and API automation.",
      "Performed manual validation of API responses, logging defects and verifying resolved issues.",
      "Collaborated with a fully remote development team to ensure accurate data flow and timely delivery.",
      "Applied testing principles to debug workflows, improving reliability and consistency.",
    ],
  },
];

const projects = [
  {
    title: "Wagging Wonders – E-commerce Dog Shop Platform",
    link: "https://github.com/Yakhob/wagging-wonders",
    points: [
      "Tested user and admin modules end-to-end, reducing functional defects by ~50% across releases.",
      "Verified bug fixes through regression testing, improving workflow stability.",
      "Conducted UI/UX and performance validation across devices, improving responsiveness and load performance by ~20%.",
      "Strengthened booking and notification flows, contributing to a more reliable user experience.",
    ],
  },
  {
    title: "Digital Library System – Django Web Application",
    link: "https://github.com/Yakhob/Digital-Library-System",
    points: [
      "Tested authentication, search workflows, and role-based access, ensuring secure user journeys.",
      "Performed cross-browser compatibility testing, improving consistency by ~35%.",
      "Reported, tracked, and validated UI issues, improving accessibility and navigation flow.",
      "Enhanced usability by identifying layout and interaction inconsistencies.",
    ],
  },
  {
    title: "Pokédex Web App – Website Testing & API Validation",
    link: "https://github.com/Yakhob/Pokedex",
    points: [
      "Conducted cross-device manual testing, improving mobile responsiveness by ~30%.",
      "Validated PokéAPI responses, fixing data rendering issues and improving accuracy by ~90%.",
      "Improved navigation and error handling, reducing user friction.",
      "Optimized component logic and state handling, resulting in ~15% faster page rendering.",
    ],
  },
];

const skillIcons = [
  { name: "Selenium", icon: "selenium/selenium-original.svg" },
  { name: "Postman", icon: "postman/postman-original.svg" },
  { name: "JMeter", icon: "apache/apache-original.svg" },
  { name: "Python", icon: "python/python-original.svg" },
  { name: "Django", icon: "django/django-plain.svg" },
  { name: "Flask", icon: "flask/flask-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "SQLite", icon: "sqlite/sqlite-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "Linux", icon: "linux/linux-original.svg" },
  { name: "Shell", icon: "bash/bash-original.svg" },
  { name: "Docker", icon: "docker/docker-original.svg" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900">
      {/* HEADER */}
      <header className="max-w-5xl mx-auto p-6 flex justify-between items-center bg-white/70 backdrop-blur rounded-b-2xl shadow-sm sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-semibold">Jacob Kurian</h1>
          <p className="text-sm text-gray-600">
            Software Tester (Manual + API)
          </p>
        </div>
        <nav className="flex gap-4 text-sm">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="/JacobKurian_Resume.pdf"
            download
            className="border px-3 py-1 rounded"
          >
            Download Resume
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-12">

        {/* PROFESSIONAL SUMMARY */}
        <section className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Website Tester with hands-on experience evaluating website
            functionality, usability, responsiveness, and performance. Skilled
            in manual testing, API testing, bug identification, defect reporting,
            and collaborating closely with developers to verify fixes. Strong
            understanding of web technologies (HTML, CSS, JavaScript) and
            responsive design principles, enabling accurate analysis of UI/UX
            behavior and user flows. Experienced working in fully remote
            environments, delivering clear documentation and actionable insights
            to improve user experience, accessibility, and overall website
            quality.
          </p>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work">
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          {workExperience.map((w) => (
            <div key={w.role} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="font-semibold">{w.role}</div>
              <div className="text-sm text-gray-600">
                {w.company} — {w.period}
              </div>
              <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                {w.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center p-4 border rounded-xl hover:shadow-md hover:scale-105 transition duration-300 bg-white">
                  <h4 className="font-semibold">{p.title}</h4>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 text-sm"
                  >
                    View on GitHub
                  </a>
                </div>
                <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* OPEN SOURCE */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Open-Source Contributions</h3>
          <p className="text-gray-700">
            Actively contributing to open-source projects through bug fixes,
            feature requests, and documentation improvements. Experienced
            reviewing issues, validating fixes, and collaborating with
            maintainers to improve code quality, usability, and stability in
            community-driven projects.
            <br />
            <a
              href="https://github.com/Yakhob"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-sm"
            >
              View GitHub Profile
            </a>
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {skillIcons.map((s) => (
              <div
                key={s.name}
                title={s.name}
                className="flex justify-center p-3 border rounded-lg hover:shadow transition"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}`}
                  alt={s.name}
                  className="w-10 h-10"
                />
              </div>
            ))}
          </div>
        </section>

        {/* BLOGS */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Blogs</h3>
          <p className="text-gray-600">
            Articles and technical write-ups are currently under construction.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 space-y-4">
            <div>
              <div className="font-semibold">Jacob Kurian</div>
              <div className="text-sm text-gray-600">Email: jacobkurian2004@gmail.com</div>
              <div className="text-sm text-gray-600">Phone: +91 9497506176</div>
              <div className="text-sm text-gray-600">Location: Bangalore, Karnataka, India</div>
            </div>

            {/* Buttons Row */}
            <div className="flex gap-3 items-center">
              <a
                href="/JacobKurian_Resume.pdf"
                download
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Download Resume
              </a>
              <a
                href="mailto:jacobkurian2004@gmail.com"
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
              >
                Email Me
              </a>

              {/* LinkedIn Tooltip Button */}
              <div className="relative">
                <a
                  href="https://www.linkedin.com/in/jacob-kurian"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="group flex justify-center items-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold hover:translate-y-[-3px] transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                    </svg>
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow">
                      LinkedIn
                    </span>
                  </button>
                </a>
              </div>

              {/* GitHub Tooltip Button */}
              <div className="relative">
                <a
                  href="https://github.com/Yakhob"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="group flex justify-center items-center p-2 rounded-md drop-shadow-xl bg-gray-900 text-white font-semibold hover:translate-y-[-3px] transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.335-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.118 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.628-5.475 5.924.431.372.815 1.102.815 2.222 0 1.606-.014 2.896-.014 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow">
                      GitHub
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-8">
          © {new Date().getFullYear()} Jacob Kurian
        </footer>
      </main>
    </div>
  );
}

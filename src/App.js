import React from "react";
import { 
  Layout, 
  Server, 
  ShieldCheck, 
  Database, 
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  Quote,
  Cloud
} from "lucide-react";

/* -------------------- DATA -------------------- */

const socialLinks = {
  github: "https://github.com/Yakhob",
  linkedin: "https://www.linkedin.com/in/jacob-kurian-b78725243/", 
};

const workExperience = [
  {
    role: "QA Engineer (Automation & API)",
    company: "Outlier AI",
    period: "Jun 2025 – Present | Remote",
    points: [
      "Performed functional and regression testing on API-driven SaaS workflows, validating 200+ outputs.",
      "Investigated frontend layout and responsiveness issues across multiple browser environments.",
      "Logged and tracked 40+ defects with detailed reproduction steps to improve resolution efficiency.",
      "Collaborated with developers to verify fixes and ensure stable feature releases.",
    ],
  },
  {
    role: "Web Application Tester (Manual)",
    company: "VectorShift AI",
    period: "Jan 2025 – Feb 2025 | Remote",
    points: [
      "Performed manual testing across 15+ web application pages and staging user workflows.",
      "Reported 20+ UI and functional defects, including layout misalignment and broken user flows.",
      "Verified fixes to ensure stable and consistent application behavior in a fast-paced environment.",
    ],
  },
];

const projects = [
  {
    title: "Remote Job Intelligence Engine",
    description: "An automation system built to aggregate and process hiring feeds into high-signal datasets.",
    tech: "Python, Requests, BeautifulSoup, Pandas",
    link: "https://github.com/Yakhob",
    bullets: [
      "Processed 1000+ job listings and integrated 3+ external job sources.",
      "Reduced manual job search time by 80% through automated extraction.",
      "Transformed raw data into structured Excel reports with 95% accuracy."
    ],
    featured: true,
  },
  {
    title: "User Journey Breakage Detector(Under Development)",
    description: "Flow analysis system capturing navigation events to detect workflow drop-offs.",
    tech: "Python, JavaScript, Session Logging",
    link: "https://github.com/Yakhob",
    bullets: [
      "Captures 100+ simulated user interactions to find friction points.",
      "Detects workflow breakpoints and rendering failures in real-time.",
      "Implements session logging for deep-dive defect reproduction."
    ],
    featured: true,
  },
  {
    title: "AI Job Outreach Engine(Under Development)",
    description: "A local LLM automation system designed to analyze job descriptions using n8n and Mistral.",
    tech: "n8n, Ollama, Mistral LLM, JSON Schema",
    link: "https://github.com/Yakhob",
    bullets: [
      "Extracts 10+ structured hiring attributes per job listing locally.",
      "Implements JSON schema validation for reliable automation output.",
      "Focuses on improving automation reliability through local LLM processing."
    ],
    featured: true,
  },
  {
    title: "Wagging Wonders Dog Shop",
    description: "Full-stack platform managing e-commerce purchase and grooming booking workflows.",
    tech: "PHP, MySQL, JavaScript, CRUD",
    link: "https://github.com/Yakhob/wagging-wonders",
    bullets: [
      "Developed 10+ CRUD features for product and admin management.",
      "Designed a relational database with 6+ tables, reducing load time by 30%.",
      "Built an availability tracking system for real-time service updates."
    ],
    featured: false,
  },
];

const testimonials = [
  {
    name: "Albert Ma",
    role: "Founder, VectorShift AI",
    feedback: "Jacob's attention to detail during our manual testing phase was exceptional. He identified critical UI flows that were broken across mobile browsers, helping us stabilize our staging environment before launch."
  },
  {
    name: "Thomas Jepsen",
    role: "CEO, ACT Cooperative Corporation AS",
    feedback: "A highly reliable engineer who understands both the 'how' of building and the 'why' of testing. His work on automated data pipelines showed a deep understanding of system architecture and data integrity."
  },
  {
    name: "Martina Q",
    role: "UX Designer, ACT Cooperative Corporation AS",
    feedback: "Jacob bridges the gap between design and functionality perfectly. He doesn't just find bugs; he understands the user journey and ensures that the final implementation stays true to the UX vision."
  }
];

const skillGroups = [
  {
    name: "Testing & QA",
    icon: <ShieldCheck className="w-4 h-4" />,
    skills: ["Selenium", "Playwright", "Postman", "API Testing", "UI Debugging", "Jira"]
  },
  {
    name: "Development",
    icon: <Layout className="w-4 h-4" />,
    skills: ["React", "JavaScript", "Python", "PHP", "Node.js", "Tailwind CSS"]
  },
  {
    name: "Data & DB",
    icon: <Database className="w-4 h-4" />,
    skills: ["PostgreSQL", "MySQL", "SQL", "Pandas", "n8n"]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud className="w-4 h-4" />,
    skills: ["Docker", "Vercel", "Git", "GitHub Actions", "CI/CD Concepts"]
  }
];

/* -------------------- MAIN APP -------------------- */

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 bg-[#0b0f1a] relative font-sans selection:bg-indigo-500/30">
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      <div className="relative z-10">
        <header className="max-w-6xl mx-auto px-6 py-4 mt-6 flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full sticky top-4 z-50">
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-white">Jacob Kurian</h1>
            <p className="text-[10px] text-gray-400">QA Engineer & Developer</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300 font-medium">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Feedback</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="/JacobKurian_Resume.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition-all">
              <Download className="w-3 h-3" /> Resume
            </a>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
          
          <section className="text-center py-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent leading-tight">
              QA Engineer & <br /> Automation-Focused Builder
            </h1>
            <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg font-medium leading-relaxed">
              I support teams working on web applications, automation workflows,
              and AI-driven systems by combining QA thinking with engineering support.
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section id="work" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {workExperience.map((job, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all group">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.role}</h3>
                    <span className="text-sm font-mono text-indigo-400">{job.period}</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((p, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="text-indigo-500 mr-3">•</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {projects.map((project, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-all">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-xs text-indigo-400 font-mono mb-4 uppercase tracking-wider">{project.tech}</p>
                    <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                    {project.bullets && (
                      <ul className="mb-6 space-y-1">
                         {project.bullets.map((bullet, idx) => (
                           <li key={idx} className="text-xs text-gray-500 flex items-start">
                             <span className="text-indigo-500 mr-2">/</span>{bullet}
                           </li>
                         ))}
                      </ul>
                    )}
                  </div>
                  <div className="shrink-0 pt-1">
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-white bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-indigo-600 hover:border-indigo-600 transition-all inline-flex items-center group">
                      View Source <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Collaborator Feedback
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col relative overflow-hidden group">
                  <Quote className="absolute -right-2 -top-2 w-16 h-16 text-white/5 group-hover:text-indigo-500/10 transition-colors" />
                  <p className="text-sm text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                    "{t.feedback}"
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-indigo-400 uppercase tracking-wider font-mono">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillGroups.map((group) => (
                <div key={group.name} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.07] transition-all">
                  <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                      {group.icon}
                    </div>
                    <h4 className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">{group.name}</h4>
                  </div>
                  <ul className="space-y-3">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-sm text-gray-400 hover:text-white transition-colors cursor-default flex items-center gap-2">
                        <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Let's Build Something Reliable</h2>
            <p className="text-white/80 mb-10 max-w-lg mx-auto font-medium">Seeking roles in QA Engineering and Full-Stack Development.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="mailto:jacobkurian2004@gmail.com" className="flex items-center gap-2 px-10 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:scale-105 transition-all">
                <Mail className="w-5 h-5" /> jacobkurian2004@gmail.com
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </section>

          <footer className="text-center py-10 border-t border-white/5">
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Jacob Kurian • {new Date().getFullYear()}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
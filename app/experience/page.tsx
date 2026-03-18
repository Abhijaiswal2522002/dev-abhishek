"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    position: ".NET Software Engineer Intern",
    company: "Jureli Tech",
    period: "JUL 2025 - PRESENT",
    description:
      "Contributing to the development and maintenance of web applications using ASP.NET MVC and C#. Working with MS SQL Server databases to manage and optimize data operations. Collaborating with team members to implement secure authentication and role-based access controls, ensuring smooth functionality and security across modules.",
    link: "https://www.jureli.com/",
  },
  {
    position: "QA Functional Testing Intern",
    company: "A1QA",
    period: "JUN 2025 - JUL 2025",
    description:
      "Participated in testing web and mobile applications through manual and automated approaches. Conducted functional, regression, and UI/UX testing while documenting issues for resolution. Coordinated with developers and team members to verify fixes and ensure application quality.",
    link: "https://www.a1qa.com/",
  },
  {
    position: "Web Developer Intern",
    company: "InternBix",
    period: "NOV 2024 - JUN 2025",
    description:
      "Built responsive user interfaces using React.js and implemented backend functionality with Express and MongoDB. Collaborated with clients to gather requirements, provide progress updates, and deliver solutions aligned with business goals. Applied secure coding practices and optimized workflows, improving delivery timelines and client satisfaction.",
    link: "https://internbix.com/",
  },
  {
    position: "Founder",
    company: "Dcoder",
    period: "AUG 2024 - PRESENT",
    description:
      "Founded Dcoder, a tech startup providing AI-driven solutions. Led product development, engaged with clients to align solutions with their needs, oversaw business strategy, and managed technical implementation across full-stack platforms.",
    link: "https://d-coder-s.netlify.app/home",
  },
  {
    position: "Software Engineer Intern",
    company: "Bluestock",
    period: "AUG 2024 - OCT 2024",
    description:
      "Developed and maintained web applications using React.js and Node.js. Implemented RESTful APIs and integrated third-party services.",
    link: "https://bluestock.in",
  },
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0C0C0C] text-[#CCCCCC] font-mono scanlines">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 space-y-2">
          <div className="flex items-center gap-2 text-secondary">
            <span>$</span>
            <h1 className="text-xl font-bold text-white uppercase tracking-[0.2em]">./experience --all</h1>
          </div>
          <div className="text-[#888888] text-sm">
            {`// Executing timeline query... Results found: ${experiences.length}`}
          </div>
        </header>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="group border border-[#333333] bg-[#111111] p-6 hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                    {exp.position}
                  </h2>
                  <div className="text-primary text-sm font-bold uppercase tracking-widest">{exp.company}</div>
                </div>
                <div className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 border border-secondary/20 whitespace-nowrap uppercase">
                  {exp.period}
                </div>
              </div>
              
              <p className="text-[#888888] text-sm leading-relaxed mb-4 pb-4 border-b border-[#222222]">
                {exp.description}
              </p>
              
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-primary hover:text-white transition-colors uppercase font-bold tracking-[0.2em]"
                >
                  {`[ Visit Official Site ]`}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

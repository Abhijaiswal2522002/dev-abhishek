"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Terminal, Code2, Database, Globe } from "lucide-react"

const projects = [
  {
    name: "SwasthRoute",
    description:
      "A medicine auction and delivery platform that connects buyers and sellers in real-time. Features include live bidding, user authentication, and secure payments.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Abhijaiswal2522002/MedR",
    demo: "https://med-r-c9vd.vercel.app/",
  },
  {
    name: "TalentEzee",
    description:
      "A comprehensive frontend onboarding module designed to manage influencer engagements with a clean, responsive interface.",
    techStack: ["Next.js", "Redux", "PostgreSQL", "Tailwind"],
    github: "https://github.com/Abhijaiswal2522002/TalentEzee",
    demo: "https://talent-ezee.vercel.app/",
  },
  {
    name: "SchoolOne",
    description:
      "A centralized school management web app providing notes, lectures, events, tutor booking, and real-time announcements.",
    techStack: [".NET", "Python", "SQL", "Docker"],
    demo: "https://www.schoolone.app/",
  },
  {
    name: "Aarohan Survey",
    description:
      "A dynamic survey platform allowing organizations to create, send, and track surveys with analytics and reporting features.",
    techStack: [".NET", "SQL", "Docker", "Bootstrap"],
    demo: "https://aarohanaconsulting.com/",
  },
  {
    name: "Jureli Tech Website",
    description:
      "Official website for Jureli Tech, showcasing their educational software, AI/ML products, and automation tools.",
    techStack: [".NET", "Bootstrap", "Python", "SQL"],
    demo: "https://www.jureli.com/",
  },
  {
    name: "TalentEzee Platform",
    description:
      "A comprehensive frontend onboarding module built for TalentEzee.com, designed to manage influencer engagements with a clean, responsive interface.",
    techStack: ["Next.js", "Redux", "Tailwind CSS", "PostgreSQL", "UI/UX"],
    github: "https://github.com/Abhijaiswal2522002/TalentEzee",
    demo: "https://talent-ezee.vercel.app/",
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0C0C0C] text-[#CCCCCC] font-mono scanlines">
      <div className="max-w-6xl mx-auto">

        <header className="mb-12 space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-secondary">
            <span>$</span>
            <h1 className="text-xl font-bold text-white uppercase tracking-[0.2em]">ls ./projects --all</h1>
          </div>
          <div className="text-[#888888] text-sm">
            {`// Listing all production-ready repositories and deployments`}
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}

function ProjectCard({ name, description, techStack, demo, github }: { name: string, description: string, techStack: string[], demo: string, github?: string }) {
  return (
    <div className="group bg-[#111111] border border-[#333333] p-6 hover:border-primary/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>

      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight">{name}</h2>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-white transition-colors">
              <Github size={18} />
            </a>
          )}
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-[#555555] hover:text-white transition-colors">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <p className="text-[#888888] text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222222]">
        {techStack.map(t => (
          <span key={t} className="text-[10px] text-primary/60 font-medium uppercase tracking-widest">
            {`#${t}`}
          </span>
        ))}
      </div>
    </div>
  )
}

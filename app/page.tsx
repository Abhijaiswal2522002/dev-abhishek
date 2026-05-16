"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ExternalLink, Terminal } from "lucide-react"
import Link from "next/link"

const techStack = ["Next.js", "Node.js", "MongoDB", "PostgreSQL", "Socket.io", "Docker"]

const featuredProjects = [
  {
    name: "SwasthRoute",
    description:
      "A medicine auction and delivery platform that connects buyers and sellers in real-time. Features include live bidding, user authentication, and secure payments.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Abhijaiswal2522002/MedR",
    demo: "https://swasth-route.vercel.app/",
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
]

const skillsData = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  backend: ["Node.js", "Express", "NestJS", "Socket.io"],
  database: ["MongoDB", "PostgreSQL", "Redis"],
  devops: ["Docker", "AWS", "CI/CD", "Nginx"]
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#CCCCCC] font-mono pt-20 scanlines">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-start min-h-[70vh] justify-center">
        <div className="w-full space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-secondary">$</span>
            <span className="text-white">whoami</span>
          </div>
          <div className="text-[#888888] animate-in fade-in duration-1000">
            Abhishek Jaiswal — Full Stack Developer
          </div>
        </div>

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            <Typewriter text="Building the " delay={0} />
            <span className="text-secondary"><Typewriter text="future" delay={1200} /></span>
            <Typewriter text=" of web." delay={1700} />
            <span className="inline-block w-3 h-10 md:h-14 bg-primary ml-2 animate-cursor align-middle"></span>
          </h1>
        </div>
        <br />
        <div className="space-y-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-primary text-lg md:text-xl"
          >
            {`// Pixel-perfect design · Scalable architecture`}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-[#888888] text-lg max-w-2xl leading-relaxed"
          >
            I build things for the web that look good and work even better. Specializing in high-performance applications and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="/resume.pdf"
              className="bg-secondary text-[#0C0C0C] px-6 py-3 font-bold hover:brightness-110 transition-all active:scale-95"
            >
              ./resume.pdf
            </a>
            <Link
              href="/contact"
              className="border border-primary text-primary px-6 py-3 font-bold hover:bg-primary/10 transition-all active:scale-95"
            >
              contact --me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-wrap gap-3 pt-8"
          >
            {techStack.map(tech => (
              <span key={tech} className="px-3 py-1 border border-primary/30 text-primary text-[10px] tracking-[0.2em] uppercase hover:bg-primary/5 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-[#333333]">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-secondary">$</span>
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase">ls ./projects --featured</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-[#333333]">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-secondary">$</span>
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase">cat skills.json</h2>
        </div>

        <div className="bg-[#1E1E1E] p-8 rounded-sm border border-[#333333] font-mono text-sm overflow-x-auto shadow-2xl relative">
          <div className="absolute top-2 right-4 text-[#333333] hidden md:block select-none">JSON</div>
          <pre className="text-white">
            <code>
              <span className="text-[#888888]">{"{"}</span><br />
              {Object.entries(skillsData).map(([category, skills], i, arr) => (
                <div key={category} className="pl-6 group/line hover:bg-white/5 transition-colors">
                  <span className="text-primary">"{category}"</span>: <span className="text-[#888888]">[</span><br />
                  <div className="pl-6">
                    {skills.map((skill, si) => (
                      <span key={skill} className="inline-block hover:text-white transition-colors">
                        <span className="text-secondary">"{skill}"</span>
                        {si < skills.length - 1 && <span className="text-[#888888]">, </span>}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#888888]">]</span>{i < arr.length - 1 && <span className="text-[#888888]">,</span>}<br />
                </div>
              ))}
              <span className="text-[#888888]">{"}"}</span>
            </code>
          </pre>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="max-w-7xl mx-auto px-4 py-24 border-t border-[#333333]">
        <div className="flex items-center gap-2 mb-12">
          <span className="text-secondary">$</span>
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase">./experience --latest</h2>
        </div>
        <div className="border border-[#333333] p-6 bg-[#111111]">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="text-primary font-bold">.NET Software Engineer </div>
              <div className="text-white text-xl">Jureli Tech</div>
            </div>
            <div className="text-secondary font-bold self-start bg-secondary/10 px-3 py-1 border border-secondary/20">
              JUL 2025 – PRESENT
            </div>
          </div>
          <p className="mt-4 text-[#888888] max-w-3xl">
            Developing robust ASP.NET MVC modules and managing SQL Server databases. Implementing secure JWT authentication and collaborating directly with clients.
          </p>
        </div>
      </section>

      {/* Social Links Placeholder (Minimal) */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex justify-center gap-8 text-[#888888] border-t border-[#333333]">
        <Link href="https://github.com/Abhijaiswal2522002" target="_blank" className="hover:text-primary transition-colors hover:scale-110 transition-transform">
          <Github size={20} />
        </Link>
        <Link href="https://linkedin.com/in/abhijaiswal2522002" target="_blank" className="hover:text-primary transition-colors hover:scale-110 transition-transform">
          <Linkedin size={20} />
        </Link>
        <Link href="mailto:jaiswalabhishek2522002@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transition-transform">
          <Mail size={20} />
        </Link>
        <Link href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors hover:scale-110 transition-transform">
          <Twitter size={20} />
        </Link>
      </section>
    </main>
  )
}

function Typewriter({ text, delay = 0 }: { text: string, delay?: number }) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const startTimeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1))
        i++
        if (i >= text.length) clearInterval(interval)
      }, 50)
      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, delay])

  return <>{displayText}</>
}

function ProjectCard({ name, description, techStack, demo, github }: { name: string, description: string, techStack: string[], demo: string, github?: string }) {
  return (
    <div className="group bg-[#1E1E1E] border-l-4 border-l-primary border-t border-r border-b border-[#333333] p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(78,201,176,0.15)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -rotate-45 translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-colors"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight">{name}</h3>
        <div className="flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors active:scale-90">
              <Github size={18} />
            </a>
          )}
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-white transition-colors active:scale-90">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <p className="text-[#888888] text-sm leading-relaxed mb-6 group-hover:text-[#AAAAAA] transition-colors">{description}</p>

      <div className="flex flex-wrap gap-2">
        {techStack.map(t => (
          <span key={t} className="text-[10px] text-primary/70 font-bold uppercase tracking-widest border border-primary/20 px-2 py-0.5 group-hover:border-primary/40 transition-colors">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

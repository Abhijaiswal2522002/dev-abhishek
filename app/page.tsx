"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Twitter, ExternalLink, Code2, Layers, Cpu, Globe, Server, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const featuredProjects = [
  {
    name: "SwasthRoute",
    description:
      "A medicine auction and delivery platform that connects buyers and sellers in real-time. Features include live bidding, user authentication, and secure payments.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Abhijaiswal2522002/swasth-route",
    demo: "https://swasth-route.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "TalentEzee",
    description:
      "A comprehensive frontend onboarding module designed to manage influencer engagements with a clean, responsive interface.",
    techStack: ["Next.js", "Redux", "PostgreSQL", "Tailwind"],
    github: "https://github.com/Abhijaiswal2522002/TalentEzee",
    demo: "https://talent-ezee.vercel.app/",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "SchoolOne",
    description:
      "A centralized school management web app providing notes, lectures, events, tutor booking, and real-time announcements.",
    techStack: [".NET", "Python", "SQL", "Docker"],
    demo: "https://www.schoolone.app/",
    color: "from-emerald-500/20 to-teal-500/20"
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-20 text-center">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] opacity-50 animate-blob" />
          <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px] opacity-50 animate-blob animation-delay-2000" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            Crafting <span className="text-primary">Digital</span> <br /> Experiences
          </motion.h1>

          <motion.p variants={item} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm <span className="text-foreground font-semibold">Abhishek Jaiswal</span>. A full-stack developer obsessed with pixel-perfect design and scalable architecture. I build things for the web that look good and work even better.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <a href="/Abhishek Resume.pdf" download>
              <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Resume
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full border-2 hover:bg-secondary/10 hover:text-secondary hover:border-secondary/50 transition-all">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-6 pt-8 text-muted-foreground">
            <Link href="https://github.com/Abhijaiswal2522002" target="_blank" className="hover:text-foreground transition-colors hover:scale-110 transform duration-200">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com/in/abhijaiswal2522002" target="_blank" className="hover:text-foreground transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:jaiswalabhishek2522002@gmail.com" className="hover:text-foreground transition-colors hover:scale-110 transform duration-200">
              <Mail size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-foreground transition-colors hover:scale-110 transform duration-200">
              <Twitter size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 px-4 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-md">Some of the projects that showcase my passion for different technologies.</p>
            </div>
            <Link href="/projects" className="group flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
              View all projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills / What I do */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">What I Bring to the Table</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <SkillCard
              icon={<Code2 size={32} className="text-primary" />}
              title="Frontend Excellence"
              desc="Creating beautiful, responsive interfaces with React, Next.js, and modern CSS frameworks like Tailwind."
            />
            <SkillCard
              icon={<Cpu size={32} className="text-secondary" />}
              title="Backend Robustness"
              desc="Building scalable APIs and server-side logic with Node.js, Express, and efficient database management."
            />
            <SkillCard
              icon={<Layers size={32} className="text-accent-foreground" />}
              title="Full-Stack Integration"
              desc="Seamlessly connecting client and server to deliver complete, production-ready web applications."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ name, description, techStack, color, demo, github }: { name: string, description: string, techStack: string[], color: string, demo: string, github?: string }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border bg-background hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex gap-2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
            )}
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((t) => (
            <span key={t} className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium border border-secondary/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-4 p-3 bg-secondary/10 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  )
}

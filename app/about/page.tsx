"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Briefcase, GraduationCap, Code2, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* Header Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center space-y-6"
        >
          <motion.div variants={item} className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-50 contrast-125 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
              <Image
                src="/pp.jpg"
                alt="Abhishek Jaiswal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            More Than Just Code
          </motion.h1>
          <motion.p variants={item} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I’m <span className="text-foreground font-semibold">Abhishek Jaiswal</span>. A full-stack engineer who bridges the gap between complex backends and beautiful frontends. I believe in software that solves real problems, securely and scalably.
          </motion.p>
        </motion.div>

        {/* Narrative / Bio */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center bg-secondary/5 rounded-3xl p-8 border border-secondary/10"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary font-medium mb-2">
              <Code2 size={24} />
              <span>The Developer</span>
            </div>
            <h3 className="text-2xl font-semibold">Building the Future, One Line at a Time</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey started with lines of C# and evolved into architecting full-scale applications. From building enterprise .NET systems to crafting dynamic Next.js interfaces, I love the entire stack.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I don't just write code; I care about <strong>security</strong>. My background in QA and cybersecurity (Burp Suite, Wireshark) means I build apps that aren't just pretty—they're bulletproof.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard number="3+" label="Years Coding" />
            <StatCard number="10+" label="Projects Built" />
            <StatCard number="100%" label="Client Satisfaction" />
            <StatCard number="∞" label="Caffeine Consumed" />
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="h-px bg-border flex-1 max-w-[100px]" />
            <h2 className="text-2xl font-bold flex items-center gap-2"><Briefcase className="text-primary" /> Professional Journey</h2>
            <div className="h-px bg-border flex-1 max-w-[100px]" />
          </div>

          <div className="relative border-l-2 border-primary/20 ml-6 md:ml-12 space-y-12 pb-4">
            <TimelineItem
              role=".NET Software Engineer Intern"
              company="Jureli Tech"
              date="Jul 2025 – Present"
              desc="Developing robust ASP.NET MVC modules and managing SQL Server databases. Implementing secure JWT authentication and collaborating directly with clients."
              current
            />
            <TimelineItem
              role="QA Functional Testing Intern"
              company="A1QA"
              date="Jun 2025 – Jul 2025"
              desc="Ensuring software quality through rigorous manual and automated testing. Documented critical defects and improved application stability."
            />
            <TimelineItem
              role="Full Stack Developer"
              company="InternBix"
              date="Nov 2024 – Jun 2025"
              desc="Built scalable full-stack features using React.js, Node.js, and MongoDB. Delivered secure solutions within tight deadlines."
            />
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold">B.Tech in Information Technology</h3>
              <p className="text-muted-foreground">Ajay Kumar Garg Engineering College</p>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="outline" className="text-base px-4 py-1">2021 - 2025</Badge>
          </div>
        </motion.section>

      </div>
    </main>
  )
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="p-6 bg-background border rounded-xl text-center hover:border-primary/50 transition-colors">
      <div className="text-3xl font-bold text-primary mb-1">{number}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function TimelineItem({ role, company, date, desc, current }: { role: string, company: string, date: string, desc: string, current?: boolean }) {
  return (
    <div className="relative pl-8 md:pl-12">
      <span className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 ${current ? 'bg-background border-primary ring-4 ring-primary/20' : 'bg-muted border-muted-foreground'}`} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h3 className="text-xl font-bold">{role}</h3>
        <span className="text-sm font-medium text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">{date}</span>
      </div>

      <div className="text-lg font-semibold text-primary mb-2">{company}</div>
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        {desc}
      </p>
    </div>
  )
}

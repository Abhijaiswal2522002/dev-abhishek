"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code2, Terminal, ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0C0C0C] text-[#CCCCCC] font-mono scanlines">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-secondary">
            <span>$</span>
            <span className="text-white">cat about.txt</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* ASCII Initials Block */}
            <div className="bg-[#1E1E1E] p-4 border border-[#333333] text-primary text-[10px] leading-tight select-none">
              <pre>
{`  ___  ______ 
 / _ \\ | ___ \\
/ /_\\ \\| |_/ /
|  _  || ___ \\
| | | || |_/ /
\\_| |_/\\____/ `}
              </pre>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter">
                Abhishek Jaiswal
              </h1>
              <div className="text-primary">
                {`> Full Stack Engineer // Security Enthusiast`}
              </div>
              <p className="text-[#888888] leading-relaxed max-w-xl">
                Bridging the gap between complex backends and high-performance frontends. 
                I build software that solves real problems, with a focus on scalability and security.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative / Bio */}
        <section className="border border-[#333333] bg-[#111111] p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-[#222222] uppercase text-[10px]">biography.md</div>
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
            <Code2 size={18} />
            <span>Development Philosophy</span>
          </div>
          <p className="text-[#888888] leading-relaxed">
            My journey started with lines of C# and evolved into architecting full-scale applications. 
            From building enterprise .NET systems to crafting dynamic Next.js interfaces, I love the entire stack.
          </p>
          <p className="text-[#888888] leading-relaxed">
            I don't just write code; I care about <strong className="text-white">security</strong>. My background in QA and cybersecurity 
            (Burp Suite, Wireshark) means I build apps that aren't just pretty—they're bulletproof.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#222222]">
            <StatCard label="YEARS_EXP" value="3+" />
            <StatCard label="PROJECTS" value="10+" />
            <StatCard label="SATISFACTION" value="100%" />
            <StatCard label="CAFFEINE" value="∞" />
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-secondary">
            <span>$</span>
            <span className="text-white">ls ./experience</span>
          </div>

          <div className="space-y-8 pl-4 border-l border-[#333333]">
            <TimelineItem
              role=".NET Software Engineer Intern"
              company="Jureli Tech"
              date="2025 – PRESENT"
              desc="Developing robust ASP.NET MVC modules and managing SQL Server databases. Implementing secure JWT authentication and collaborating directly with clients."
              current
            />
            <TimelineItem
              role="QA Functional Testing Intern"
              company="A1QA"
              date="2025 – 2025"
              desc="Ensuring software quality through rigorous manual and automated testing. Documented critical defects and improved application stability."
            />
            <TimelineItem
              role="Full Stack Developer"
              company="InternBix"
              date="2024 – 2025"
              desc="Built scalable full-stack features using React.js, Node.js, and MongoDB. Delivered secure solutions within tight deadlines."
            />
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
           <div className="flex items-center gap-2 text-secondary">
            <span>$</span>
            <span className="text-white">cat education.txt</span>
          </div>
          <div className="bg-[#1E1E1E] border border-[#333333] p-6 flex flex-col md:flex-row items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2 border border-primary/20 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-tight">B.Tech in Information Technology</h3>
                <p className="text-[#888888] text-sm italic">Ajay Kumar Garg Engineering College</p>
              </div>
            </div>
            <div className="text-secondary font-bold text-sm bg-secondary/5 px-3 py-1 border border-secondary/10">
              2021 - 2025
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-[10px] text-[#555555] font-bold uppercase tracking-widest">{label}</div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  )
}

function TimelineItem({ role, company, date, desc, current }: { role: string, company: string, date: string, desc: string, current?: boolean }) {
  return (
    <div className="relative pl-6 group">
      <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${current ? 'bg-primary' : 'bg-[#333333]'}`} />
      
      <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-white font-bold uppercase tracking-tight">{role}</span>
        <span className="text-secondary text-[10px] bg-secondary/10 px-2 py-0.5 border border-secondary/20">{date}</span>
      </div>
      
      <div className="text-primary text-sm font-bold mb-3 uppercase tracking-wider">{company}</div>
      <p className="text-[#888888] text-sm leading-relaxed max-w-2xl border-l border-[#222222] pl-4 py-1">
        {desc}
      </p>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { Code2, Terminal, ChevronRight } from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "C++", "TypeScript", "C", "C#"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Redux"],
  },
  {
    name: "Backend",
    skills: [".NET Core", "ASP.NET MVC", "Node.js", "Express.js", "Django"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    name: "Security_QA",
    skills: ["Manual Testing", "OWASP ZAP", "Burp Suite", "Wireshark", "Jira"],
  },
  {
    name: "Cloud_DevOps",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Linux CLI"],
  },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0C0C0C] text-[#CCCCCC] font-mono scanlines">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 space-y-2">
          <div className="flex items-center gap-2 text-secondary">
            <span>$</span>
            <h1 className="text-xl font-bold text-white uppercase tracking-[0.2em]">cat skills.json --verbose</h1>
          </div>
          <div className="text-[#888888] text-sm">
            {`// Loading technology stack matrix... Architecture: x86_64`}
          </div>
        </header>

        <section className="bg-[#111111] border border-[#333333] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 text-[#222222] text-[10px] select-none font-bold">READ_ONLY</div>
          
          <div className="space-y-1 text-sm md:text-base">
            <div className="text-[#888888]">{ "{" }</div>
            
            {skillCategories.map((category, idx) => (
              <div key={category.name} className="pl-6 group/item hover:bg-white/5 transition-colors py-1">
                <span className="text-primary font-bold">"{category.name}"</span>: <span className="text-[#888888] underline decoration-dotted">[</span>
                <div className="pl-6 flex flex-wrap gap-x-4 gap-y-1">
                  {category.skills.map((skill, si) => (
                    <span key={skill} className="group/skill">
                      <span className="text-secondary font-medium hover:text-white transition-colors cursor-crosshair">
                        "{skill}"
                      </span>
                      {si < category.skills.length - 1 && <span className="text-[#888888]">,</span>}
                    </span>
                  ))}
                </div>
                <span className="text-[#888888] pl-0">]</span>
                {idx < skillCategories.length - 1 && <span className="text-[#888888]">,</span>}
              </div>
            ))}

            <div className="text-[#888888]">{ "}" }</div>
          </div>
        </section>

        <footer className="mt-12 p-6 border-t border-[#222222] grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillStat label="CORE_ENGINE" value="C# / .NET" />
          <SkillStat label="UI_RUNTIME" value="Next.js / React" />
          <SkillStat label="DB_LAYER" value="SQL / NoSQL" />
        </footer>
      </div>
    </main>
  )
}

function SkillStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1 text-center md:text-left">
      <div className="text-[10px] text-[#555555] font-bold uppercase tracking-widest">{label}</div>
      <div className="text-white text-sm font-bold">{value}</div>
    </div>
  )
}

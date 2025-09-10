"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiC,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiApollographql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
  SiJsonwebtokens,
  SiRedux,
  SiStripe,
  SiOpenai,
  SiNodemon,
  SiPuppeteer,
} from "react-icons/si"
import {
  Code,
  Layout,
  Server,
  Wrench,
  Brain
} from "lucide-react"

const skillCategories = [
  {
    name: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
      { name: "C#", icon: SiCsharp },
    ],
  },
  {
    name: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Styled Components", icon: SiStyledcomponents },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: ".NET Core", icon: SiDotnet },
      { name: "ASP.NET MVC", icon: SiDotnet },
      { name: "C# APIs", icon: SiCsharp },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MS SQL Server", icon: SiMicrosoftsqlserver },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    name: "QA & Cybersecurity",
    icon: Brain,
    skills: [
      { name: "Manual Testing", icon: Wrench },
      { name: "Functional Testing", icon: Wrench },
      { name: "Regression Testing", icon: Wrench },
      { name: "Jira", icon: Wrench },
      { name: "Burp Suite", icon: SiBurpsuite },
      { name: "Wireshark", icon: SiWireshark },
      { name: "OWASP ZAP", icon: Brain },
      { name: "Linux CLI", icon: Brain },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Nodemon", icon: SiNodemon },
      { name: "Vercel", icon: SiVercel },
    ],
  },
]

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="mb-6 p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-md border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-primary" size={20} />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(({ name, icon: Icon }) => (
                  <Badge
                    key={name}
                    variant="secondary"
                    className="text-sm py-1 px-3 flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="text-primary" size={16} />
                    {name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

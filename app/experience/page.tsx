"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    position: "Software Engineer Intern",
    company: "Bluestock",
    period: "Aug 2024 - Oct 2024",
    description:
      "Developed and maintained web applications using React.js and Node.js. Implemented RESTful APIs and integrated third-party services.",
    link: "https://bluestock.in",
  },{
    position: "Founder",
    company: "Dcoder",
    period: "Aug 2024 - Present",
    description:
      "Founded Dcoder, a tech startup providing AI-driven solutions. Led product development, engaged with clients to align solutions with their needs, oversaw business strategy, and managed technical implementation across full-stack platforms.",
    link: "https://d-coder-s.netlify.app/home",
  },
  {
    position: "Web Developer Intern",
    company: "InternBix",
    period: "Nov 2024 - Jun 2025",
    description:
      "Built responsive user interfaces using React.js and implemented backend functionality with Express and MongoDB. Collaborated with clients to gather requirements, provide progress updates, and deliver solutions aligned with business goals. Applied secure coding practices and optimized workflows, improving delivery timelines and client satisfaction.",
    link: "https://internbix.com/",
  },
  {
  position: "QA Functional Testing Intern",
  company: "A1QA",
  period: "Jun 2025 - Jul 2025",
  description:
    "Participated in testing web and mobile applications through manual and automated approaches. Conducted functional, regression, and UI/UX testing while documenting issues for resolution. Coordinated with developers and team members to verify fixes and ensure application quality.",
  link: "https://www.a1qa.com/",
},
 {
  position: ".NET Software Engineer Intern",
  company: "Jureli Tech",
  period: "Jul 2025 - Present",
  description:
    "Contributing to the development and maintenance of web applications using ASP.NET MVC and C#. Working with MS SQL Server databases to manage and optimize data operations. Collaborating with team members to implement secure authentication and role-based access controls, ensuring smooth functionality and security across modules.",
  link: "https://www.jureli.com/",
},
  
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-tl from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h1>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Card className="border border-primary/10 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <CardTitle className="text-xl">
                      {exp.position} @ {exp.company}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{exp.description}</p>
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-primary hover:underline transition"
                    >
                      Visit Website →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

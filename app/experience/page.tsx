"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences =
[
  {
    position: "Software Engineer Intern",
    company: "Bluestock",
    period: "Aug 2024 - Oct 2024",
    description:
      "Developed and maintained web applications using React.js and Node.js. Implemented RESTful APIs and integrated third-party services.",
    link: "https://bluestock.in", // Replace if a different link
  },
  {
    position: "Web Developer Intern",
    company: "Internbix",
    period: "Dec 2024 - Present",
    description:
      "Built responsive user interfaces using React.js and implemented backend functionality with Express and MongoDB.",
    link: "https://internbix.com/", // Replace with correct link if different
  },
  {
    position: "Founder",
    company: "Dcoder",
    period: "Dec 2024 - Present",
    description:
      "Founded Dcoder, a tech startup providing AI-driven solutions. Led product development, oversaw business strategy, and managed technical implementation across full-stack platforms.",
    link: "https://d-coder-s.netlify.app/home", // ✅ Your actual live site
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

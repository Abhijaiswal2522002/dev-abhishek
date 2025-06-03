"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
   {
  name: "MedRoute",
  description:
    "A medicine auction and delivery platform that connects buyers and sellers in real-time. Features include live bidding, user authentication, order tracking, and secure payments. Built for better accessibility to essential medicines.",
  techStack: "Next.js, Node.js, Express, MongoDB, Tailwind CSS, Socket.io, Stripe",
  github: "https://github.com/Abhijaiswal2522002/MedR",
  demo: "https://med-r-c9vd.vercel.app/",
  image: "/medroute.png",
}, {
      name: "Fitnessx",
      description:
        "A personalized fitness tracking web app designed to help users achieve their fitness goals on a budget. Includes workout planning, diet recommendations, BMI tracking, and progress visualization.",
      techStack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
      github: "https://github.com/Abhijaiswal2522002/fitnessx",
      demo: "https://fitfusion-demo.vercel.app",
      image: "/Fittrack.png", // Put your image in /public/images/
    },
    {
      name: "Dcoder",
      description:
        "An AI-driven tech startup focused on building innovative web solutions. Dcoder offers smart, scalable tools and platforms that simplify user decision-making using modern web technologies and AI.",
      techStack: "Next.js, Node.js, Express.js, MongoDB, OpenAI API, Tailwind CSS",
      github: "https://github.com/d-coder-s/Portfolio",
      demo: "https://d-coder-s.netlify.app/home",
      image: "/dcoder.png",
    },
    {
      name: "AI Summarizer",
      description:
        "A web app that uses OpenAI's language models to summarize long articles into short, clear summaries. Clean UI for reading and copying results easily.",
      techStack: "Next.js, Redux, Tailwind CSS, OpenAI API",
      github: "https://github.com/Abhijaiswal2522002/Ai-summarizer",
      demo: "https://67249488cf9357fe0e030a78--ai-summmarizzer.netlify.app/",
      image: "/ai.png",
    }

  ]
  


export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-tl from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border border-primary/10 hover:border-primary/30 transition-colors">
  {/* Gradient border */}
  <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
  
  {/* Project Image */}
  <img
    src={project.image}
    alt={`${project.name} screenshot`}
    className="w-full h-48 object-cover"
  />

  <CardHeader>
    <CardTitle>{project.name}</CardTitle>
    <CardDescription>{project.techStack}</CardDescription>
  </CardHeader>
  
  <CardContent className="flex-grow">
    <p>{project.description}</p>
  </CardContent>
  
  <CardFooter className="flex gap-2">
    <Button variant="outline" size="sm" asChild>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
        <Github size={16} />
        GitHub
      </a>
    </Button>
    <Button
      size="sm"
      asChild
      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
    >
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
        <ExternalLink size={16} />
        Live Demo
      </a>
    </Button>
  </CardFooter>
</Card>

            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

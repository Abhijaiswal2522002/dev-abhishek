"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Globe, Database, Code2, Server } from "lucide-react"

const projects = [
  {
    name: "SwasthRoute",
    description:
      "A medicine auction and delivery platform that connects buyers and sellers in real-time. Features include live bidding, user authentication, order tracking, and secure payments.",
    techStack: "Next.js, Node.js, Express, MongoDB, Tailwind CSS, Socket.io, Stripe",
    github: "https://github.com/Abhijaiswal2522002/swasth-route",
    demo: "https://swasth-route.vercel.app/",
    image: "/SwasthRoute.png",
    icons: [Code2, Server, Database],
  },
  {
    name: "Naaulo",
    description:
      "A sophisticated omni-channel customer support and real-time communication platform. It centralizes messages from Facebook, WhatsApp, TikTok, and a custom web chat widget into a unified agent dashboard. Key features include real-time message streaming, AI-powered voice chat via WebRTC, and a comprehensive management system for restaurant operations and digital assets.",
    techStack: "ASP.NET Core, C#, SignalR, Kafka, Redis, SQL Server, WebRTC, Socket.io, Bootstrap",
    demo: "https://naaulo.com/", 
    image: "/naaulo.png",
    icons: [Globe, Database, Code2],
},
  {
    name: "SchoolOne",
    description:
      "A centralized school management web app providing notes, lectures, events, tutor booking, peer mentoring, and real-time announcements for students.",
    techStack: ".NET, Bootstrap, Python, SQL, Docker, AWS",
    demo: "https://www.schoolone.app/",
    image: "/schoolone.png",
    icons: [Globe, Database, Code2],
  },
  {
    name: "Aarohan Survey",
    description:
      "A dynamic survey platform allowing organizations to create, send, and track surveys with analytics and reporting features.",
    techStack: ".NET, Bootstrap, Python, SQL, Docker, AWS",
    demo: "https://aarohanaconsulting.com/",
    image: "/aarohansurvey.png",
    icons: [Code2, Database, Server],
  },
  {
    name: "Jureli Tech Website",
    description:
      "Official website for Jureli Tech, showcasing their educational software, AI/ML products, and automation tools with a modern responsive design.",
    techStack: ".NET, Bootstrap, Python, SQL, Docker, AWS",
    demo: "https://www.jureli.com/",
    image: "/jurelitech.png",
    icons: [Globe, Code2, Server],
  },
   {
    name: "TalentEzee - Influencer Engagement Platform",
    description:
      "A comprehensive frontend onboarding module built for TalentEzee.com, designed to manage influencer engagements with a clean, responsive interface.",
    techStack: "Next.js, Redux, Tailwind CSS, PostgreSQL, UI/UX",
    github: "https://github.com/Abhijaiswal2522002/TalentEzee",
    demo: "https://talent-ezee.vercel.app/",
    image: "/TalentEzee.png",
    icons: [Code2, Database, Globe],
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
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />

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
                  <div className="flex gap-2 mt-2">
                    {project.icons.map((Icon, i) => (
                      <Icon key={i} size={16} className="text-primary" />
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
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

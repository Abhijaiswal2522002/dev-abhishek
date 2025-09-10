"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full" />
              <Image
                src="/pp.jpg"
                alt="Abhishek Jaiswal"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* About Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              I am a <strong>full-stack web developer</strong> and <strong>.NET software engineer</strong> with experience in
              <strong> C#, ASP.NET MVC, .NET Core, MS SQL Server</strong> and modern JavaScript frameworks.
              I build applications using <strong>React.js, Next.js, Node.js, Express.js</strong>, and work with databases like
              <strong> MongoDB</strong> and <strong>SQL Server</strong>.  
              I also have experience in QA and cybersecurity, working with tools such as <strong>Burp Suite</strong> and <strong>Wireshark</strong>.  
              My focus is on developing secure, scalable, and user-friendly solutions.
            </p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>B.Tech in Information Technology – Ajay Kumar Garg Engineering College</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Experience Highlights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Jureli Tech</strong> (.NET Software Engineer Intern, Jul 2025 – Present): Developing ASP.NET MVC modules, managing SQL Server databases, and implementing secure JWT authentication while collaborating with clients.
                </li>
                <li>
                  <strong>A1QA</strong> (QA Functional Testing Intern, Jun 2025 – Jul 2025): Conducted manual and automated testing, documented defects, and collaborated with developers to maintain application quality.
                </li>
                <li>
                  <strong>InternBix</strong> (Nov 2024 – Jun 2025): Built full-stack features with React.js, Node.js, and MongoDB, ensuring secure and timely solutions while interacting with clients for requirements.
                </li>
                <li>
                  <strong>Dcoder</strong>: Founded a tech startup delivering AI-driven solutions focused on performance, scalability, and innovation.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Favorite Technologies</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>C#, ASP.NET MVC, .NET Core & MS SQL Server – enterprise backend systems</li>
                <li>React.js & Next.js – dynamic frontends</li>
                <li>Node.js & Express.js – API development</li>
                <li>MongoDB & PostgreSQL – databases</li>
                <li>Burp Suite, Wireshark, Jira – QA and cybersecurity tools</li>
                <li>Tailwind CSS & Styled Components – modern, responsive UI</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

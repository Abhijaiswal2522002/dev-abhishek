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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              I’m a <strong>full-stack web developer</strong> and <strong>.NET software engineer</strong> with experience in
              <strong> C#, ASP.NET MVC, .NET Core, MS SQL Server</strong>, and modern JavaScript frameworks.
              My expertise spans <strong>React.js, Next.js, Node.js, Express.js</strong>, and database technologies like
              <strong> MongoDB</strong> and <strong>SQL Server</strong>.  
              I’ve worked on projects involving <strong>manual testing, functional testing, regression testing</strong>,
              and cybersecurity tools like <strong>Burp Suite</strong> and <strong>Wireshark</strong>.
              I thrive on building secure, scalable, and client-focused solutions that solve real-world problems.
            </p>

            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="mb-4">B.Tech in Information Technology – Ajay Kumar Garg Engineering College</p>

            <h3 className="text-xl font-semibold mb-2">Experience Highlights</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Currently at <strong>Jureli Tech</strong> (Jul 2025 – Present) developing enterprise-grade ASP.NET MVC modules, optimizing SQL queries, and implementing secure JWT authentication with client collaboration.</li>
              <li>Worked at <strong>A1QA</strong> (Jun 2025 – Jul 2025) executing manual & automated test cases, defect tracking in Jira, and ensuring quality through SDLC/STLC processes.</li>
              <li>At <strong>InternBix</strong> (Nov 2024 – Jun 2025), developed full-stack features in React.js, Node.js, and MongoDB, while working closely with clients to gather requirements and deliver secure, timely solutions.</li>
              <li>Founded <strong>Dcoder</strong>, a tech startup delivering AI-driven solutions with a focus on performance, scalability, and innovation.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Favorite Technologies</h3>
            <p className="mb-4">
              I enjoy working with a mix of web, backend, and testing tools that ensure both functionality and security:
            </p>
            <ul className="list-disc list-inside">
              <li>C#, ASP.NET MVC, .NET Core & MS SQL Server – for secure, scalable enterprise backend systems</li>
              <li>React.js & Next.js – for dynamic, user-focused frontends</li>
              <li>Node.js & Express.js – for fast, reliable API development</li>
              <li>MongoDB & PostgreSQL – for flexible, high-performance database solutions</li>
              <li>Burp Suite, Wireshark, and Jira – for cybersecurity testing and QA process management</li>
              <li>Tailwind CSS & Styled Components – for responsive, modern UI design</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

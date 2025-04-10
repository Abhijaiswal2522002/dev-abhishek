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
            I'm a full-stack web developer with 2+ years of experience building scalable, responsive, and user-centric web applications. I specialize in modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and Django. As the founder of <strong>Dcoder</strong>, a tech startup focused on AI-driven solutions, I enjoy turning ideas into impactful products. I'm also passionate about Data Structures and Algorithms (DSA), constantly sharpening my problem-solving skills. From real-time chat apps and AI-powered bots to e-commerce platforms and healthcare systems, I strive to build technology that solves real-world problems and drives innovation.
            </p>

            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="mb-4">Ajay Kumar Garg Engineering College</p>

            <h3 className="text-xl font-semibold mb-2">Experience Highlights</h3>
<ul className="list-disc list-inside mb-4">
  <li>Internships at Bluestock, Internbix, and Oasis Infobyte</li>
  <li>Led development of a full-stack chat application with real-time messaging</li>
  <li>Developed an e-commerce website and a healthcare booking platform</li>
  <li>Founded <strong>Dcoder</strong> — a tech startup focused on AI-driven solutions</li>
  <li>Contributed to several full-stack projects using React, Next.js, and MongoDB</li>
  <li>Actively practice Data Structures & Algorithms to enhance problem-solving skills</li>
</ul>


<h3 className="text-xl font-semibold mb-2">Favorite Technologies</h3>
<p className="mb-4">
  I enjoy working with modern web technologies that help build fast, scalable, and user-friendly applications. Some of my go-to tools and frameworks include:
</p>
<ul className="list-disc list-inside">
  <li>React.js & Next.js – for building dynamic, interactive frontends</li>
  <li>Node.js & Express.js – for creating efficient and scalable backend services</li>
  <li>Django – for building secure and robust web applications with Python</li>
  <li>MongoDB – for flexible NoSQL database solutions</li>
  <li>Tailwind CSS & Styled Components – for responsive and component-based UI styling</li>
</ul>

          </motion.div>
        </div>
      </div>
    </main>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 z-0" />

      {/* Animated gradient circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-70 animate-blob" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Abhishek Jaiswal
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hey, I’m Abhishek Jaiswal — full-stack developer and founder of Dcoder. I build smart, scalable web solutions that bring big ideas to life.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="/Abhishek Resume.pdf" download>
  <Button
    size="lg"
    className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
  >
    <FileText size={20} />
    Resume
  </Button>
</a>

          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 hover:border-primary transition-colors"
            >
              <Mail size={18} />
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}

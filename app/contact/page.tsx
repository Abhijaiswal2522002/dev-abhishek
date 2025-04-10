"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Phone } from "lucide-react"

export default function ContactPage() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_6di7bpo", // Your EmailJS service ID
        "template_kyi8kea", // Your EmailJS template ID
        formRef.current!,
        "YMb_OxT5eeuxQMUqx" // Your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!")
          formRef.current?.reset()
          setLoading(false)
        },
        (error) => {
          console.error("Email sending error:", error)
          alert("Failed to send message. Please try again.")
          setLoading(false)
        }
      )
  }

  return (
    <main className="min-h-screen py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border border-primary/10 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <Input name="from_name" placeholder="Your Name" required />
                  <Input name="from_email" type="email" placeholder="Your Email" required />
                  <Input name="subject" placeholder="Subject" required />
                  <Textarea name="message" placeholder="Your Message" className="min-h-[120px]" required />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <ContactInfo icon={<Mail className="h-6 w-6 text-primary" />} title="Email" value="abhijaiswal2503@gmail.com" />
              <ContactInfo icon={<Linkedin className="h-6 w-6 text-primary" />} title="LinkedIn" value="Abhishek Jaiswal" link="https://www.linkedin.com/in/abhishek-jaiswal-278890246/" />
              <ContactInfo icon={<Github className="h-6 w-6 text-primary" />} title="GitHub" value="@Abhijaiswal2522002" link="https://github.com/Abhijaiswal2522002" />
              <ContactInfo icon={<Phone className="h-6 w-6 text-primary" />} title="Phone" value="+91 8690896522" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

function ContactInfo({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {value}
          </a>
        ) : (
          <p className="text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  )
}

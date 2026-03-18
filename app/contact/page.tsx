"use client"

import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone, Globe, Code2, Terminal, ChevronRight } from "lucide-react"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! 
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
    <main className="min-h-screen pt-24 pb-16 px-4 bg-[#0C0C0C] text-[#CCCCCC] font-mono scanlines">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12 space-y-2">
          <div className="flex items-center gap-2 text-secondary">
            <span>$</span>
            <h1 className="text-xl font-bold text-white uppercase tracking-[0.2em]">send --message</h1>
          </div>
          <div className="text-[#888888] text-sm">
            {`// Establish communication link with Abhishek Jaiswal`}
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Side */}
          <section className="space-y-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <TerminalInput 
                name="from_name" 
                label="sender_name" 
                placeholder="Enter your name..." 
                required 
              />
              <TerminalInput 
                name="from_email" 
                type="email" 
                label="sender_email" 
                placeholder="Enter your email..." 
                required 
              />
              <TerminalInput 
                name="subject" 
                label="message_subject" 
                placeholder="What is this about?" 
                required 
              />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <span>{">"}</span>
                  <span>message_body</span>
                </div>
                <textarea 
                  name="message" 
                  placeholder="Type your message here..." 
                  className="w-full bg-[#111111] border border-[#333333] p-4 text-[#CCCCCC] focus:border-primary focus:outline-none min-h-[150px] transition-colors resize-none"
                  required 
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-secondary text-[#0C0C0C] px-8 py-3 font-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "./sending..." : "./send.sh"}
              </button>
            </form>Section
          </section>

          {/* Info Side */}
          <section className="space-y-10">
            <div className="border border-[#333333] bg-[#111111] p-8 space-y-8">
              <div className="text-[#555555] text-xs uppercase tracking-[0.3em] border-b border-[#222222] pb-4 mb-4">
                Directory: /contactsystems
              </div>
              
              <ContactLink icon={<Mail size={18} />} title="EMAIL" value="abhijaiswal2503@gmail.com" />
              <ContactLink icon={<Linkedin size={18} />} title="LINKEDIN" value="Abhishek Jaiswal" link="https://www.linkedin.com/in/abhishek-jaiswal-278890246/" />
              <ContactLink icon={<Github size={18} />} title="GITHUB" value="@Abhijaiswal2522002" link="https://github.com/Abhijaiswal2522002" />
              <ContactLink icon={<Phone size={18} />} title="PHONE" value="+91 8690896522" />
              <ContactLink icon={<Globe size={18} />} title="KAGGLE" value="Abhishek Jaiswal" link="https://www.kaggle.com/abj252002" />
              <ContactLink icon={<Code2 size={18} />} title="LEETCODE" value="AbhishekJaiswal" link="https://leetcode.com/u/Abhishek252002/" />
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 text-primary text-xs flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>SYSTEM_STATUS: ONLINE_AND_READY_FOR_GIGS</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

function TerminalInput({ name, label, placeholder, type = "text", required = false }: { name: string, label: string, placeholder: string, type?: string, required?: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
        <span>{">"}</span>
        <span>{label}</span>
      </div>
      <input 
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-[#333333] py-2 text-[#CCCCCC] focus:border-primary focus:outline-none transition-colors"
      />
    </div>
  )
}

function ContactLink({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: string; link?: string }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="text-[#555555] group-hover:text-primary transition-colors mt-1">{icon}</div>
      <div className="space-y-1">
        <h3 className="text-[10px] text-[#555555] font-bold uppercase tracking-widest">{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-white">{value}</p>
        )}
      </div>
    </div>
  )
}

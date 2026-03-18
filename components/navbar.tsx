"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] border-b border-[#333333] h-12 flex items-center px-4 font-mono text-sm">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* macOS Traffic Lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>

        {/* Center Breadcrumb */}
        <div className="hidden md:block text-[#888888]">
          <span className="text-secondary">abhishek@dev</span>
          <span>:</span>
          <span className="text-primary">~</span>
          <span>/portfolio$</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors uppercase tracking-wider ${isActive(item.href) ? "text-primary font-bold" : "text-[#888888] hover:text-[#CCCCCC]"
                }`}
            >
              {`[${item.name}]`}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#888888]">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-[#000000] border-b border-[#333333] p-4 md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-widest ${isActive(item.href) ? "text-primary" : "text-[#888888]"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {`> ${item.name}`}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

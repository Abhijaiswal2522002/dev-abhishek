
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary w-fit">
              Abhishek Jaiswal
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Building digital products, brands, and experiences. Open to new opportunities and collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Socials</h4>
            <div className="flex gap-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="mailto:example@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abhishek Jaiswal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-secondary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      {icon}
    </a>
  )
}

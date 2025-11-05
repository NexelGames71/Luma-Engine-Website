import Link from 'next/link'
import { Github, Youtube, MessageSquare, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/NexelGames71', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: MessageSquare, href: 'https://discord.gg/qbsjpEmv', label: 'Discord' },
  { icon: Mail, href: 'mailto:contact@nexelgames.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-midnight-black border-t-2 border-electric-violet/20 relative">
      {/* Orange accent stripe at footer top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-luma-orange to-transparent opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold gradient-text mb-4">LUMA ENGINE</h3>
            <p className="text-gray-400 text-sm">
              Next-generation game creation powered by performance, light, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/download" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/ecosystem" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Package Registry
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-luminite-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Nexel Games. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-luminite-blue transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}


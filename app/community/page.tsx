'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Github, Youtube, Mail, Rss, BookOpen, Video } from 'lucide-react'
import Button from '@/components/Button'

const communityLinks = [
  {
    name: 'Discord',
    description: 'Join our Discord server for real-time discussions, help, and community support',
    icon: <MessageSquare size={32} />,
    href: 'https://discord.gg/qbsjpEmv',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'GitHub',
    description: 'Contribute to Luma Engine, report issues, and collaborate on projects',
    icon: <Github size={32} />,
    href: 'https://github.com/NexelGames71',
    color: 'from-gray-600 to-gray-800',
  },
  {
    name: 'YouTube',
    description: 'Watch tutorials, devlogs, and community showcases',
    icon: <Youtube size={32} />,
    href: '#',
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'Forums',
    description: 'Join discussions, ask questions, and share your projects',
    icon: <MessageSquare size={32} />,
    href: '#',
    color: 'from-blue-500 to-cyan-500',
  },
]

const blogPosts = [
  {
    title: 'Luma Engine 1.0 Released',
    description: 'Announcing the stable release of Luma Engine with all major features',
    date: '2024-01-15',
    category: 'Engine Updates',
    icon: <Rss size={24} />,
  },
  {
    title: 'Getting Started with E-Script',
    description: 'A comprehensive guide to the E-Script language for new developers',
    date: '2024-01-10',
    category: 'Tutorial',
    icon: <BookOpen size={24} />,
  },
  {
    title: 'Luminite Lighting System Deep Dive',
    description: 'Learn how the Luminite lighting system works and how to use it effectively',
    date: '2024-01-05',
    category: 'Tutorial',
    icon: <Video size={24} />,
  },
  {
    title: 'Community Showcase: January 2024',
    description: 'Highlighting amazing games created with Luma Engine by the community',
    date: '2024-01-01',
    category: 'Community',
    icon: <Rss size={24} />,
  },
]

const creatorHighlights = [
  {
    name: 'Project Alpha',
    creator: 'DevStudio',
    description: 'An epic adventure game showcasing Luminite lighting',
    image: '/placeholder-creator1.jpg',
  },
  {
    name: 'Neon Runner',
    creator: 'IndieDev',
    description: 'High-speed action platformer with stunning visuals',
    image: '/placeholder-creator2.jpg',
  },
  {
    name: 'Cosmic Explorer',
    creator: 'GameStudio',
    description: 'Space exploration RPG built with Luma Engine',
    image: '/placeholder-creator3.jpg',
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-midnight-black via-electric-violet/10 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Community</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Join the tribe. Connect with creators, share your work, and get help from the Luma Engine community.
          </motion.p>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Join the Community</span>
            </h2>
            <p className="text-gray-400">Connect with us on your preferred platform</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 gradient-text">{link.name}</h3>
                <p className="text-gray-400 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Highlights */}
      <section className="py-16 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Creator Highlights</span>
            </h2>
            <p className="text-gray-400">Amazing games and projects created with Luma Engine</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creatorHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-electric-violet/20 to-luminite-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-display font-bold mb-2">{highlight.name}</h3>
                    <p className="text-gray-400 text-sm">{highlight.creator}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">View Project →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Latest News</span>
            </h2>
            <p className="text-gray-400">Devlogs, tutorials, and engine updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2 text-luminite-blue">
                    {post.icon}
                    <span className="text-xs font-semibold">{post.category}</span>
                  </div>
                  <time className="text-xs text-gray-500">{post.date}</time>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 gradient-text group-hover:text-luminite-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm">{post.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center p-8 rounded-xl bg-gradient-to-br from-electric-violet/10 to-luminite-blue/10 border border-electric-violet/20"
          >
            <Mail size={48} className="text-luminite-blue mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Stay Updated</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, tutorials, and community highlights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-midnight-black border border-electric-violet/20 text-white placeholder-gray-500 focus:outline-none focus:border-luminite-blue transition-colors"
                required
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


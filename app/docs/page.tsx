'use client'

import { motion } from 'framer-motion'
import { Book, Code, Wrench, Lightbulb, FileText, Layers, Search } from 'lucide-react'
import Button from '@/components/Button'
import { useState, useMemo } from 'react'

const docSections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics and set up your first project',
    icon: <Book size={32} />,
    color: 'from-luminite-blue to-electric-violet',
    topics: ['Installation', 'First Project', 'Editor Basics', 'Quick Start Guide'],
  },
  {
    title: 'Editor',
    description: 'Master the Luma Editor interface and tools',
    icon: <Wrench size={32} />,
    color: 'from-electric-violet to-luminite-blue',
    topics: ['Interface Overview', 'Scene Management', 'Asset Browser', 'Property Editor'],
  },
  {
    title: 'Scripting',
    description: 'Learn E-Script and game programming',
    icon: <Code size={32} />,
    color: 'from-luminite-blue to-electric-violet',
    topics: ['E-Script Basics', 'API Reference', 'Game Logic', 'Event System'],
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: <FileText size={32} />,
    color: 'from-electric-violet to-luminite-blue',
    topics: ['Core Classes', 'Modules', 'Utilities', 'Plugins'],
  },
  {
    title: 'Modules',
    description: 'Extend Luma Engine with modules',
    icon: <Layers size={32} />,
    color: 'from-luminite-blue to-electric-violet',
    topics: ['Module System', 'Creating Modules', 'Module Registry', 'Best Practices'],
  },
  {
    title: 'Examples',
    description: 'Learn from sample projects and tutorials',
    icon: <Lightbulb size={32} />,
    color: 'from-electric-violet to-luminite-blue',
    topics: ['Sample Games', 'Tutorial Projects', 'Code Examples', 'Video Guides'],
  },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSections = useMemo(() => {
    if (!searchQuery) return docSections
    const query = searchQuery.toLowerCase()
    return docSections.filter(
      (section) =>
        section.title.toLowerCase().includes(query) ||
        section.description.toLowerCase().includes(query) ||
        section.topics.some((topic) => topic.toLowerCase().includes(query))
    )
  }, [searchQuery])

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
            <span className="gradient-text">Documentation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Your complete guide to Luma Engine. Learn, build, and create amazing games.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="https://docs.lumaengine.dev" variant="primary" size="lg">
              Open Documentation Portal
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-midnight-black border-b border-electric-violet/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-electric-violet/20 text-white placeholder-gray-500 focus:outline-none focus:border-luminite-blue transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No documentation found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 cursor-pointer"
                >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${section.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-2 gradient-text">{section.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.topics.map((topic) => (
                    <li key={topic} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-luminite-blue rounded-full mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
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
              <span className="gradient-text">Quick Links</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <motion.a
              href="https://docs.lumaengine.dev/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 text-center"
            >
              <h3 className="text-lg font-display font-bold mb-2 gradient-text">Getting Started</h3>
              <p className="text-gray-400 text-sm">Start here</p>
            </motion.a>

            <motion.a
              href="https://docs.lumaengine.dev/api"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 text-center"
            >
              <h3 className="text-lg font-display font-bold mb-2 gradient-text">API Reference</h3>
              <p className="text-gray-400 text-sm">Complete API docs</p>
            </motion.a>

            <motion.a
              href="https://docs.lumaengine.dev/examples"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 text-center"
            >
              <h3 className="text-lg font-display font-bold mb-2 gradient-text">Examples</h3>
              <p className="text-gray-400 text-sm">Sample projects</p>
            </motion.a>

            <motion.a
              href="/community"
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 text-center"
            >
              <h3 className="text-lg font-display font-bold mb-2 gradient-text">Community</h3>
              <p className="text-gray-400 text-sm">Get help</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-electric-violet/10 to-luminite-blue/10 border border-electric-violet/20"
          >
            <p className="text-gray-300 mb-4">
              Documentation is continuously being updated. For the latest information, visit our documentation portal or join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://docs.lumaengine.dev" variant="primary" size="md">
                Documentation Portal
              </Button>
              <Button href="/community" variant="outline" size="md">
                Join Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


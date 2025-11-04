'use client'

import { motion } from 'framer-motion'
import { Package, Bot, ShoppingBag, Github, Search, Filter } from 'lucide-react'
import Button from '@/components/Button'
import { useState, useMemo } from 'react'

const packages = [
  {
    name: 'Luma Physics',
    description: 'Advanced physics simulation system',
    version: '1.2.0',
    downloads: '12.5k',
    author: 'Nexel Games',
    category: 'Core',
  },
  {
    name: 'UI Framework',
    description: 'Modern UI components and layouts',
    version: '2.0.0',
    downloads: '8.3k',
    author: 'Community',
    category: 'UI',
  },
  {
    name: 'Audio System',
    description: '3D audio and sound management',
    version: '1.5.0',
    downloads: '6.1k',
    author: 'Nexel Games',
    category: 'Audio',
  },
  {
    name: 'Networking',
    description: 'Multiplayer networking solution',
    version: '1.0.0',
    downloads: '4.2k',
    author: 'Community',
    category: 'Networking',
  },
  {
    name: 'AI Agents',
    description: 'AI agent integration framework',
    version: '0.9.0',
    downloads: '3.8k',
    author: 'Nexel Games',
    category: 'AI',
  },
  {
    name: 'Procedural Generation',
    description: 'Tools for procedural content creation',
    version: '1.1.0',
    downloads: '5.7k',
    author: 'Community',
    category: 'Tools',
  },
]

const ecosystemFeatures = [
  {
    title: 'Luma Package Registry',
    description: 'Discover and install packages from our growing ecosystem. Browse hundreds of packages created by the community and Nexel Games.',
    icon: <Package size={48} />,
    color: 'from-luminite-blue to-electric-violet',
  },
  {
    title: 'AI Agents Integration',
    description: 'Integrate AI agents to enhance your workflow. Use AI for code generation, asset creation, and intelligent game design.',
    icon: <Bot size={48} />,
    color: 'from-electric-violet to-luminite-blue',
  },
  {
    title: 'Community Tools',
    description: 'Access tools created by the community. From asset converters to debugging utilities, find everything you need.',
    icon: <Github size={48} />,
    color: 'from-luminite-blue to-electric-violet',
  },
  {
    title: 'Luma Marketplace',
    description: 'Coming soon: A marketplace for assets, templates, and premium tools. Buy and sell with the Luma Engine community.',
    icon: <ShoppingBag size={48} />,
    color: 'from-electric-violet to-luminite-blue',
  },
]

export default function EcosystemPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(packages.map((p) => p.category)))]

  const filteredPackages = useMemo(() => {
    let filtered = packages

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(query) ||
          pkg.description.toLowerCase().includes(query) ||
          pkg.author.toLowerCase().includes(query)
      )
    }

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter((pkg) => pkg.category === selectedCategory)
    }

    return filtered
  }, [searchQuery, selectedCategory])

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
            <span className="gradient-text">Ecosystem</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Connect everything. Packages, tools, AI agents, and more. Extend Luma Engine with the power of the community.
          </motion.p>
        </div>
      </section>

      {/* Ecosystem Features */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {ecosystemFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Registry */}
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
              <span className="gradient-text">Popular Packages</span>
            </h2>
            <p className="text-gray-400">Browse the most popular packages in the Luma Package Registry</p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-electric-violet/20 text-white placeholder-gray-500 focus:outline-none focus:border-luminite-blue transition-colors"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (category === 'All' && !selectedCategory) || selectedCategory === category
                      ? 'bg-gradient-to-r from-electric-violet to-luminite-blue text-white'
                      : 'bg-gray-900 border border-electric-violet/20 text-gray-300 hover:border-luminite-blue/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredPackages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No packages found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1 gradient-text">{pkg.name}</h3>
                    <span className="inline-block px-2 py-1 bg-electric-violet/20 text-electric-violet text-xs font-semibold rounded">
                      {pkg.category}
                    </span>
                  </div>
                  <Package className="text-luminite-blue group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>v{pkg.version}</span>
                  <span>{pkg.downloads} downloads</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-400">By {pkg.author}</p>
                </div>
              </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button href="https://github.com/NexelGames71/Luma-Packages" variant="primary" size="lg">
              Browse All Packages
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Create Your Own Package</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Share your tools and modules with the Luma Engine community. Publishing is easy and free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/docs" variant="primary" size="lg">
                Learn How to Publish
              </Button>
              <Button href="/community" variant="outline" size="lg">
                Join Developer Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


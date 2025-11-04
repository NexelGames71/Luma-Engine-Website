'use client'

import { motion } from 'framer-motion'
import { Download, Check, Github, Package, ChevronDown } from 'lucide-react'
import Button from '@/components/Button'
import { useState } from 'react'

const versions = [
  {
    name: 'Stable',
    version: '1.0.0',
    description: 'Production-ready release for commercial projects',
    features: ['Full feature set', 'Production tested', 'Long-term support', 'Documentation'],
    downloadLink: 'https://github.com/NexelGames71/Luma-Engine/releases/latest',
    recommended: true,
  },
  {
    name: 'Beta',
    version: '1.1.0-beta',
    description: 'Latest features and improvements for early adopters',
    features: ['Latest features', 'Early access', 'Community support', 'Active development'],
    downloadLink: 'https://github.com/NexelGames71/Luma-Engine/releases',
    recommended: false,
  },
  {
    name: 'Source',
    version: 'Git',
    description: 'Build from source for maximum control and customization',
    features: ['Full source access', 'Custom builds', 'Contributions welcome', 'Developer tools'],
    downloadLink: 'https://github.com/NexelGames71/Luma-Engine',
    recommended: false,
  },
]

const systemRequirements = {
  minimum: [
    'Windows 10 (64-bit) / macOS 10.15 / Linux (Ubuntu 20.04+)',
    'Intel Core i5-4590 / AMD FX-8350 or equivalent',
    '8 GB RAM',
    'NVIDIA GeForce GTX 960 / AMD Radeon R9 280 or equivalent',
    'DirectX 11 / OpenGL 4.3 support',
    '5 GB available disk space',
  ],
  recommended: [
    'Windows 11 / macOS 12+ / Linux (Ubuntu 22.04+)',
    'Intel Core i7-8700K / AMD Ryzen 5 3600 or equivalent',
    '16 GB RAM',
    'NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 or better',
    'DirectX 12 / Vulkan support',
    '10 GB available disk space (SSD recommended)',
  ],
}

export default function DownloadPage() {
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
            <span className="gradient-text">Get Luma Engine</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose your version and start creating amazing games today.
          </motion.p>
        </div>
      </section>

      {/* Version Selection */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {versions.map((version, index) => (
              <motion.div
                key={version.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border-2 ${
                  version.recommended
                    ? 'border-luminite-blue neon-glow'
                    : 'border-electric-violet/20 hover:border-electric-violet/50'
                } transition-all duration-300`}
              >
                {version.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-electric-violet to-luminite-blue text-white text-sm font-semibold rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold mb-2 gradient-text">
                    {version.name}
                  </h3>
                  <p className="text-luminite-blue font-medium mb-4">{version.version}</p>
                  <p className="text-gray-400 text-sm">{version.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {version.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check size={20} className="text-luminite-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={version.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    version.recommended
                      ? 'bg-gradient-to-r from-electric-violet to-luminite-blue text-white neon-glow-hover'
                      : 'bg-midnight-black border-2 border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white'
                  }`}
                >
                  <Download className="inline-block mr-2" size={20} />
                  Download {version.name}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Downloads */}
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
              <span className="gradient-text">Alternative Downloads</span>
            </h2>
            <p className="text-gray-400">Download from other sources or package managers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="https://github.com/NexelGames71/Luma-Engine"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
            >
              <Github size={32} className="text-luminite-blue mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">GitHub Releases</h3>
              <p className="text-gray-400 text-sm">Download installers and archives directly from GitHub</p>
            </motion.a>

            <motion.a
              href="/ecosystem"
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
            >
              <Package size={32} className="text-luminite-blue mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">Package Registry</h3>
              <p className="text-gray-400 text-sm">Install via Luma Package Manager or npm</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* System Requirements */}
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
              <span className="gradient-text">System Requirements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20">
              <h3 className="text-xl font-display font-bold mb-4 text-luminite-blue">Minimum Requirements</h3>
              <ul className="space-y-2">
                {systemRequirements.minimum.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-luminite-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-luminite-blue/20">
              <h3 className="text-xl font-display font-bold mb-4 text-luminite-blue">Recommended Specifications</h3>
              <ul className="space-y-2">
                {systemRequirements.recommended.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-luminite-blue mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="Is Luma Engine free to use?"
              answer="Yes! Luma Engine is completely free and open-source. You can use it for both personal and commercial projects without any restrictions."
            />
            <FAQItem
              question="What platforms does Luma Engine support?"
              answer="Luma Engine supports Windows, macOS, Linux, iOS, Android, and major gaming consoles. You can build your game once and deploy it across all platforms."
            />
            <FAQItem
              question="Do I need to know programming to use Luma Engine?"
              answer="While basic programming knowledge is helpful, Luma Engine's E-Script language is designed to be intuitive and beginner-friendly. We also provide extensive documentation and tutorials to help you get started."
            />
            <FAQItem
              question="Can I use Luma Engine for commercial projects?"
              answer="Absolutely! Luma Engine is free for both personal and commercial use. There are no royalties or licensing fees."
            />
            <FAQItem
              question="How do I get help if I'm stuck?"
              answer="You can join our Discord community, browse the documentation, or check out our GitHub discussions. Our community is very active and helpful!"
            />
            <FAQItem
              question="What's the difference between Stable and Beta versions?"
              answer="The Stable version is production-ready and thoroughly tested. The Beta version includes the latest features and improvements but may have some bugs. For commercial projects, we recommend the Stable version."
            />
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Need Help Getting Started?</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Check out our comprehensive documentation and tutorials to get up and running quickly.
            </p>
            <Button href="/docs" variant="primary" size="lg">
              View Documentation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-electric-violet/5 transition-colors"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDown
          className={`text-luminite-blue transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-4 text-gray-300 leading-relaxed">{answer}</div>
        </motion.div>
      )}
    </motion.div>
  )
}


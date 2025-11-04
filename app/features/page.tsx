'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Zap, Package, Bot, Globe } from 'lucide-react'

const features = [
  {
    id: 'luminite',
    title: 'Luminite Lighting System',
    subtitle: 'Unreal-grade global illumination',
    description: 'Experience next-generation lighting with real-time global illumination, dynamic reflections, and physically-based rendering. The Luminite system delivers stunning visuals that rival AAA engines.',
    icon: <Sparkles size={48} />,
    color: 'from-luminite-blue to-electric-violet',
  },
  {
    id: 'editor',
    title: 'Luma Editor',
    subtitle: 'Powerful, modular, familiar',
    description: 'A professional-grade editor with a familiar layout that adapts to your workflow. Modular panels, powerful tools, and an intuitive interface designed for creators of all skill levels.',
    icon: <Code size={48} />,
    color: 'from-electric-violet to-luminite-blue',
  },
  {
    id: 'terrain',
    title: 'Terrain System',
    subtitle: 'Sculpt and paint landscapes',
    description: 'Create vast worlds with ease. Our terrain system lets you sculpt mountains, paint textures, and generate landscapes with powerful procedural tools and real-time preview.',
    icon: <Zap size={48} />,
    color: 'from-luminite-blue to-electric-violet',
  },
  {
    id: 'scripting',
    title: 'E-Script Language',
    subtitle: 'Code with simplicity and power',
    description: 'A modern scripting language built for game development. E-Script combines the simplicity of scripting with the power of compiled languages, making game logic intuitive and performant.',
    icon: <Package size={48} />,
    color: 'from-electric-violet to-luminite-blue',
  },
  {
    id: 'ai',
    title: 'AI Agent Integration',
    subtitle: 'Build smart tools and assistants',
    description: 'Leverage AI to enhance your workflow. Integrate AI agents for code generation, asset creation, and intelligent game design assistance. The future of game development is here.',
    icon: <Bot size={48} />,
    color: 'from-luminite-blue to-electric-violet',
  },
  {
    id: 'cross-platform',
    title: 'Cross-Platform Build',
    subtitle: 'PC, console, mobile ready',
    description: 'Deploy your games anywhere. Luma Engine supports Windows, macOS, Linux, iOS, Android, and major consoles. One codebase, unlimited platforms.',
    icon: <Globe size={48} />,
    color: 'from-electric-violet to-luminite-blue',
  },
]

export default function FeaturesPage() {
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
            <span className="gradient-text">Powerful Features</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover the tools and technologies that make Luma Engine the next-generation choice for game creators.
          </motion.p>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          className={`relative py-32 overflow-hidden ${
            index % 2 === 0 ? 'bg-midnight-black' : 'bg-gradient-to-b from-gray-900 to-midnight-black'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-to-br ${feature.color} mb-6 text-white`}>
                  {feature.icon}
                </div>
                <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                  <span className="gradient-text">{feature.title}</span>
                </h2>
                <p className="text-xl text-luminite-blue mb-4">{feature.subtitle}</p>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>

              {/* Visual/Demo Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${feature.color} p-1 neon-glow`}>
                  <div className="w-full h-full rounded-lg bg-midnight-black flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Demo / Screenshot Placeholder</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-midnight-black to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Ready to Get Started?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Download Luma Engine and start creating your next game today.
            </p>
            <motion.a
              href="/download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-electric-violet to-luminite-blue text-white font-semibold rounded-lg neon-glow-hover"
            >
              Download Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


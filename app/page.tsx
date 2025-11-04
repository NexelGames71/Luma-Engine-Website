'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Package, Zap } from 'lucide-react'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  const features = [
    {
      title: 'Luminite Lighting System',
      description: 'Unreal-grade global illumination and reflections powered by next-generation lighting technology.',
      icon: <Sparkles size={32} />,
    },
    {
      title: 'E-Script Language',
      description: 'Code with simplicity and power. A modern scripting language designed for game developers.',
      icon: <Code size={32} />,
    },
    {
      title: 'Nanite-Level Mesh Streaming',
      description: 'Handle massive worlds with seamless mesh streaming and LOD management.',
      icon: <Zap size={32} />,
    },
    {
      title: 'Luma Package Registry',
      description: 'Access a growing ecosystem of packages, tools, and community contributions.',
      icon: <Package size={32} />,
    },
  ]

  const showcaseGames = [
    { title: 'Project Alpha', description: 'An epic adventure game', image: '/placeholder-game1.jpg' },
    { title: 'Neon Runner', description: 'High-speed action platformer', image: '/placeholder-game2.jpg' },
    { title: 'Cosmic Explorer', description: 'Space exploration RPG', image: '/placeholder-game3.jpg' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-black via-electric-violet/20 to-midnight-black">
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-radial from-luminite-blue/20 via-transparent to-transparent"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Create Without Limits</span>
            <br />
            <span className="text-white">Luma Engine</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Next-generation game creation powered by performance, light, and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/download" variant="primary" size="lg">
              Download Beta
            </Button>
            <Button href="/docs" variant="outline" size="lg">
              Explore Docs
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-luminite-blue rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-luminite-blue rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Made with Luma Showcase */}
      <section className="py-24 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Made with Luma</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See what creators are building with Luma Engine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseGames.map((game, index) => (
              <motion.div
                key={game.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-electric-violet/20 to-luminite-blue/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-display font-bold mb-2">{game.title}</h3>
                    <p className="text-gray-400 text-sm">{game.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">View Project →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-24 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Join the Community</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Connect with creators, share your work, and get help from the Luma Engine community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://discord.gg/qbsjpEmv" variant="primary" size="lg">
                Join Discord
              </Button>
              <Button href="https://github.com/NexelGames71" variant="secondary" size="lg">
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


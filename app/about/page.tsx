'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Rocket, Mail } from 'lucide-react'
import Button from '@/components/Button'

const values = [
  {
    title: 'Simplicity',
    description: 'We believe game development should be accessible to everyone. Luma Engine is designed to be intuitive and easy to learn.',
    icon: <Heart size={32} />,
  },
  {
    title: 'Performance',
    description: 'Built for speed and efficiency. Luma Engine delivers next-generation performance without compromising on quality.',
    icon: <Rocket size={32} />,
  },
  {
    title: 'Community',
    description: 'We empower creators through open collaboration. The community is at the heart of everything we do.',
    icon: <Users size={32} />,
  },
]

export default function AboutPage() {
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
            <span className="gradient-text">About Luma Engine</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Empowering creators through simplicity, performance, and imagination.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">The Story of Luma Engine</span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Luma Engine was born from a simple vision: to create a game engine that combines the polish of AAA engines with the openness and accessibility that indie developers deserve.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  At Nexel Games, we believe that game development should be about creativity, not wrestling with complex tools. That's why we built Luma Engine from the ground up with developers in mind.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Our mission is to empower creators of all skill levels to bring their visions to life. Whether you're a solo developer working on your first game or a studio building the next indie hit, Luma Engine is designed to grow with you.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With next-generation features like the Luminite lighting system, the E-Script language, and AI agent integration, Luma Engine represents the future of game development—powerful, accessible, and community-driven.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering creators through simplicity, performance, and imagination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-electric-violet to-luminite-blue mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 gradient-text">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Nexel Games</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Luma Engine is developed by Nexel Games, a passionate team of game developers, engineers, and creators dedicated to pushing the boundaries of game development tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-br from-electric-violet/10 to-luminite-blue/10 border border-electric-violet/20 mb-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We're a small but dedicated team working on Luma Engine full-time. Our goal is to create the best possible tools for game developers while maintaining an open, community-driven approach.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Interested in joining our team? We're always looking for talented developers, designers, and community managers. Check out our GitHub or contact us for opportunities.
            </p>
          </motion.div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center text-2xl font-display font-bold text-white">
                JD
              </div>
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">John Doe</h3>
              <p className="text-luminite-blue text-sm mb-2">Lead Engineer</p>
              <p className="text-gray-400 text-sm">Core engine development and architecture</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-luminite-blue to-electric-violet flex items-center justify-center text-2xl font-display font-bold text-white">
                JS
              </div>
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">Jane Smith</h3>
              <p className="text-luminite-blue text-sm mb-2">Graphics Programmer</p>
              <p className="text-gray-400 text-sm">Luminite lighting system and rendering</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center text-2xl font-display font-bold text-white">
                AW
              </div>
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">Alex Wilson</h3>
              <p className="text-luminite-blue text-sm mb-2">Community Manager</p>
              <p className="text-gray-400 text-sm">Community engagement and documentation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <span className="gradient-text">Get in Touch</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Have questions, feedback, or press inquiries? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:contact@nexelgames.com" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/community" variant="outline" size="lg">
                Join Community
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              For press inquiries, please email press@nexelgames.com
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


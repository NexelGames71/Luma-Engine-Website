'use client'

import { motion } from 'framer-motion'
import { Download, Check, Play, Monitor, Smartphone, Gamepad2, Package, Star, ArrowRight } from 'lucide-react'
import Button from '@/components/Button'
import { useState } from 'react'

const hubFeatures = [
  'Easy engine installation and updates',
  'Multiple engine versions management',
  'Built-in project templates',
  'Asset store integration',
  'Community projects showcase',
  'Automatic dependency management',
  'Cross-platform compatibility',
  'Developer tools integration'
]

const systemRequirements = {
  minimum: [
    'Windows 10 (64-bit) / macOS 10.15 / Linux (Ubuntu 20.04+)',
    'Intel Core i5-4590 / AMD FX-8350 or equivalent',
    '8 GB RAM',
    'NVIDIA GeForce GTX 960 / AMD Radeon R9 280 or equivalent',
    'DirectX 11 / OpenGL 4.3 support',
    '2 GB available disk space (for Luma Hub)',
  ],
  recommended: [
    'Windows 11 / macOS 12+ / Linux (Ubuntu 22.04+)',
    'Intel Core i7-8700K / AMD Ryzen 5 3600 or equivalent',
    '16 GB RAM',
    'NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 or better',
    'DirectX 12 / Vulkan support',
    '5 GB available disk space (SSD recommended)',
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
            <span className="gradient-text">Install Luma Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The official Luma Engine desktop application for managing engines, projects, and assets.
          </motion.p>
        </div>
      </section>

      {/* Luma Hub CTA */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-12 rounded-2xl bg-gradient-to-br from-electric-violet/20 to-luminite-blue/20 border-2 border-luminite-blue neon-glow"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-6 py-2 bg-gradient-to-r from-electric-violet to-luminite-blue text-white text-lg font-bold rounded-full">
                  Recommended Installation Method
                </span>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-electric-violet to-luminite-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Package size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4 gradient-text">
                  Luma Hub Desktop Application
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Download and install Luma Hub to access all Luma Engine versions, manage projects, and join the community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Button 
                  href="#download-options" 
                  variant="primary" 
                  size="lg"
                  className="w-full"
                >
                  <Download className="inline-block mr-2" size={20} />
                  Download Luma Hub
                </Button>
                <Button 
                  href="/docs" 
                  variant="outline" 
                  size="lg"
                  className="w-full"
                >
                  View Installation Guide
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section id="download-options" className="py-16 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Download Luma Hub</span>
            </h2>
            <p className="text-gray-400">Choose your platform and start creating with Luma Engine</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-electric-violet/50 transition-all duration-300"
            >
              <Monitor size={48} className="text-luminite-blue mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">Windows</h3>
              <p className="text-gray-400 text-sm mb-4">Windows 10 (64-bit) and later</p>
              <Button href="#" variant="primary" size="sm" className="w-full">
                <Download className="inline-block mr-2" size={16} />
                Download for Windows
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-electric-violet/50 transition-all duration-300"
            >
              <Package size={48} className="text-luminite-blue mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">macOS</h3>
              <p className="text-gray-400 text-sm mb-4">macOS 10.15 and later</p>
              <Button href="#" variant="primary" size="sm" className="w-full">
                <Download className="inline-block mr-2" size={16} />
                Download for macOS
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-electric-violet/50 transition-all duration-300"
            >
              <Play size={48} className="text-luminite-blue mb-4" />
              <h3 className="text-xl font-display font-bold mb-2 gradient-text">Linux</h3>
              <p className="text-gray-400 text-sm mb-4">Ubuntu 20.04 and later</p>
              <Button href="#" variant="primary" size="sm" className="w-full">
                <Download className="inline-block mr-2" size={16} />
                Download for Linux
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <span className="gradient-text">Why Use Luma Hub?</span>
            </h2>
            <p className="text-gray-400">Everything you need to develop with Luma Engine in one application</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hubFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gray-900/50 border border-electric-violet/20"
              >
                <Check size={20} className="text-luminite-blue flex-shrink-0 mt-1" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
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
              <span className="gradient-text">What You Get with Luma Hub</span>
            </h2>
            <p className="text-gray-400">Complete development ecosystem at your fingertips</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20"
            >
              <Gamepad2 size={48} className="text-luminite-blue mb-4" />
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">Engine Management</h3>
              <p className="text-gray-300 mb-4">
                Download and manage multiple Luma Engine versions. Switch between stable, beta, and development builds with ease.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Check size={16} className="text-luminite-blue mr-2" />
                  One-click engine installation
                </li>
                <li className="flex items-center text-gray-400">
                  <Check size={16} className="text-luminite-blue mr-2" />
                  Automatic updates
                </li>
                <li className="flex items-center text-gray-400">
                  <Check size={16} className="text-luminite-blue mr-2" />
                  Version switching
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20"
            >
              <Star size={48} className="text-luminite-blue mb-4" />
              <h3 className="text-2xl font-display font-bold mb-4 gradient-text">Project Tools</h3>
              <p className="text-gray-300 mb-4">
                Create, manage, and build your Luma Engine projects. Access templates, assets, and community resources.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Check size={16} className="text-luminite-blue mr-2" />
                  Project templates
                </li>
                <li className="flex items-center text-gray-400">
                  <Check size={16} className="text-luminite-blue mr-2" />
                  Asset management
                </li>
                <li className="flex items-center text-gray-400">
                  <Check size={16} className="text-luminite-blue mr-2" />
                  Build automation
                </li>
              </ul>
            </motion.div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-midnight-black to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Ready to Start Creating?</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Download Luma Hub and join thousands of developers creating amazing games with Luma Engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#download-options" variant="primary" size="lg">
                <Download className="inline-block mr-2" size={20} />
                Download Luma Hub
              </Button>
              <Button href="/docs" variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


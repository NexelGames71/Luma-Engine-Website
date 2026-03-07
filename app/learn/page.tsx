'use client'

import { motion } from 'framer-motion'
import { BookOpen, PlayCircle, Code, Zap, Users, Award, Clock, Target } from 'lucide-react'
import Button from '@/components/Button'

export default function Learn() {
  const learningPaths = [
    {
      title: 'Absolute Beginner',
      description: 'Perfect for those new to game development. Start with the basics and build your first game.',
      icon: <BookOpen size={32} />,
      level: 'Beginner',
      duration: '2-3 weeks',
      color: 'from-green-500 to-emerald-600',
      modules: ['Getting Started', 'Basic Concepts', 'Your First Game', 'Publishing'],
    },
    {
      title: 'Game Development Fundamentals',
      description: 'Learn core game development principles and Luma Engine features.',
      icon: <Code size={32} />,
      level: 'Intermediate',
      duration: '4-6 weeks',
      color: 'from-blue-500 to-cyan-600',
      modules: ['E-Script Language', 'Entity System', 'Physics & Collision', 'Input Systems'],
    },
    {
      title: 'Advanced Techniques',
      description: 'Master advanced features and create professional-quality games.',
      icon: <Zap size={32} />,
      level: 'Advanced',
      duration: '6-8 weeks',
      color: 'from-purple-500 to-pink-600',
      modules: ['Shaders & Effects', 'Performance Optimization', 'Multiplayer', 'Advanced AI'],
    },
  ]

  const tutorials = [
    {
      title: 'Creating Your First Scene',
      description: 'Learn how to set up a basic scene and add objects.',
      duration: '15 min',
      difficulty: 'Beginner',
      type: 'Video Tutorial',
    },
    {
      title: 'Introduction to E-Script',
      description: 'Get started with Luma Engine\'s scripting language.',
      duration: '25 min',
      difficulty: 'Beginner',
      type: 'Interactive Tutorial',
    },
    {
      title: 'Lighting and Materials',
      description: 'Master the Luminite Lighting System.',
      duration: '45 min',
      difficulty: 'Intermediate',
      type: 'Video Tutorial',
    },
    {
      title: 'Building a Platformer',
      description: 'Create a complete platformer game from scratch.',
      duration: '2 hours',
      difficulty: 'Intermediate',
      type: 'Project Tutorial',
    },
  ]

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive API reference and guides',
      icon: <BookOpen size={24} />,
      href: '/docs',
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <PlayCircle size={24} />,
      href: '#',
    },
    {
      title: 'Community Forum',
      description: 'Get help from other developers',
      icon: <Users size={24} />,
      href: '/community',
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code snippets',
      icon: <Code size={24} />,
      href: '#',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        {/* Orange accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-luma-orange to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6">
              <span className="gradient-text">Learn Luma Engine</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Master game development with our comprehensive learning resources and tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#learning-paths" variant="primary" size="lg">
                Start Learning
              </Button>
              <Button href="/docs" variant="outline" size="lg">
                Browse Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="learning-paths" className="py-24 bg-midnight-black relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-luma-orange to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Learning Paths</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose your learning journey based on your experience level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${path.color} text-white`}>
                      {path.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-electric-violet/20 text-electric-violet border border-electric-violet/30">
                      {path.level}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 text-white">
                    {path.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {path.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target size={16} />
                      <span>{path.modules.length} modules</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {path.modules.map((module, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-luminite-blue" />
                        {module}
                      </div>
                    ))}
                  </div>
                  
                  <Button href="#" variant="outline" className="w-full">
                    Start Path
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-24 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-luma-orange to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Popular Tutorials</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Quick tutorials to get you started with specific topics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-white">
                    {tutorial.title}
                  </h3>
                  <span className="px-2 py-1 rounded text-xs font-medium bg-luminite-blue/20 text-luminite-blue border border-luminite-blue/30">
                    {tutorial.type}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{tutorial.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      tutorial.difficulty === 'Beginner' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  
                  <Button href="#" variant="outline" size="sm">
                    Start
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-midnight-black relative">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-luma-orange to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Additional Resources</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need to succeed with Luma Engine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-electric-violet to-luminite-blue text-white group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-display font-bold mb-2 text-white">
                  {resource.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                
                <Button href={resource.href} variant="outline" size="sm" className="w-full">
                  Explore
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-electric-violet to-luminite-blue text-white">
                <Award size={48} />
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Ready to Build Something Amazing?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join thousands of developers creating incredible games with Luma Engine. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/download" variant="primary" size="lg">
                Download Luma Engine
              </Button>
              <Button href="https://discord.gg/cDYB7nddVh" variant="outline" size="lg">
                Join Learning Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

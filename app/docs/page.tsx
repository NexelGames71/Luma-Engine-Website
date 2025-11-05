'use client'

import { motion } from 'framer-motion'
import { Book, Code, Wrench, Lightbulb, FileText, Layers, Search, ChevronRight, Play, Download, Settings, Zap, Palette, Globe, Database, Shield } from 'lucide-react'
import Button from '@/components/Button'
import { useState, useMemo } from 'react'

const docCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Start your journey with Luma Engine',
    icon: <Book size={24} />,
    color: 'from-luminite-blue to-electric-violet',
    guides: [
      {
        title: 'Installation Guide',
        description: 'Learn how to install Luma Engine on your system',
        time: '5 min read',
        difficulty: 'Beginner',
        topics: ['System Requirements', 'Download Options', 'Installation Steps', 'First Launch'],
      },
      {
        title: 'Creating Your First Project',
        description: 'Build your first game project from scratch',
        time: '15 min read',
        difficulty: 'Beginner',
        topics: ['Project Setup', 'Scene Creation', 'Basic Scripting', 'Running Your Game'],
      },
      {
        title: 'Quick Start Tutorial',
        description: 'A 10-minute tutorial to get you started',
        time: '10 min read',
        difficulty: 'Beginner',
        topics: ['Editor Overview', 'Basic Controls', 'First Script', 'Export Game'],
      },
      {
        title: 'Understanding the Editor',
        description: 'Master the Luma Editor interface',
        time: '20 min read',
        difficulty: 'Beginner',
        topics: ['Interface Layout', 'Viewport Navigation', 'Tool Panels', 'Workspace Customization'],
      },
    ],
  },
  {
    id: 'editor',
    title: 'Editor',
    description: 'Master the Luma Editor tools and workflow',
    icon: <Wrench size={24} />,
    color: 'from-electric-violet to-luminite-blue',
    guides: [
      {
        title: 'Editor Interface Overview',
        description: 'Complete guide to the editor layout and panels',
        time: '15 min read',
        difficulty: 'Beginner',
        topics: ['Main Viewport', 'Scene Hierarchy', 'Property Inspector', 'Asset Browser'],
      },
      {
        title: 'Scene Management',
        description: 'Create and organize scenes in your project',
        time: '20 min read',
        difficulty: 'Intermediate',
        topics: ['Creating Scenes', 'Scene Hierarchy', 'Scene Transitions', 'Scene Templates'],
      },
      {
        title: 'Asset Browser Guide',
        description: 'Import, organize, and manage your game assets',
        time: '25 min read',
        difficulty: 'Intermediate',
        topics: ['Importing Assets', 'Asset Organization', 'Asset Types', 'Asset Pipeline'],
      },
      {
        title: 'Property Editor',
        description: 'Customize object properties and components',
        time: '15 min read',
        difficulty: 'Beginner',
        topics: ['Component System', 'Property Types', 'Custom Properties', 'Property Groups'],
      },
      {
        title: 'Terrain System',
        description: 'Sculpt and paint beautiful landscapes',
        time: '30 min read',
        difficulty: 'Intermediate',
        topics: ['Terrain Creation', 'Sculpting Tools', 'Texture Painting', 'Terrain Materials'],
      },
    ],
  },
  {
    id: 'scripting',
    title: 'Scripting',
    description: 'Learn E-Script and game programming',
    icon: <Code size={24} />,
    color: 'from-luminite-blue to-electric-violet',
    guides: [
      {
        title: 'E-Script Language Basics',
        description: 'Introduction to the E-Script programming language',
        time: '30 min read',
        difficulty: 'Beginner',
        topics: ['Syntax Overview', 'Variables & Types', 'Functions', 'Control Flow'],
      },
      {
        title: 'Game Logic Programming',
        description: 'Build game mechanics with E-Script',
        time: '45 min read',
        difficulty: 'Intermediate',
        topics: ['Game Objects', 'Components', 'Events', 'Game Loops'],
      },
      {
        title: 'Event System',
        description: 'Handle events and callbacks in your game',
        time: '25 min read',
        difficulty: 'Intermediate',
        topics: ['Event Types', 'Event Handlers', 'Custom Events', 'Event Broadcasting'],
      },
      {
        title: 'Scripting Best Practices',
        description: 'Learn best practices for writing efficient code',
        time: '20 min read',
        difficulty: 'Advanced',
        topics: ['Code Organization', 'Performance Tips', 'Debugging', 'Code Style'],
      },
    ],
  },
  {
    id: 'api',
    title: 'API Reference',
    description: 'Complete API documentation',
    icon: <FileText size={24} />,
    color: 'from-electric-violet to-luminite-blue',
    guides: [
      {
        title: 'Core Classes',
        description: 'Essential classes and their methods',
        time: 'Reference',
        difficulty: 'All Levels',
        topics: ['GameObject', 'Component', 'Scene', 'Transform', 'Renderer'],
      },
      {
        title: 'Math Library',
        description: 'Vector, matrix, and math utilities',
        time: 'Reference',
        difficulty: 'Intermediate',
        topics: ['Vector2', 'Vector3', 'Matrix4', 'Quaternion', 'Math Utils'],
      },
      {
        title: 'Input System',
        description: 'Handle keyboard, mouse, and gamepad input',
        time: 'Reference',
        difficulty: 'Intermediate',
        topics: ['Input Manager', 'Keyboard Input', 'Mouse Input', 'Gamepad Input'],
      },
      {
        title: 'Rendering API',
        description: 'Graphics and rendering functions',
        time: 'Reference',
        difficulty: 'Advanced',
        topics: ['Material System', 'Shader API', 'Lighting', 'Post-Processing'],
      },
    ],
  },
  {
    id: 'modules',
    title: 'Modules',
    description: 'Extend Luma Engine with modules',
    icon: <Layers size={24} />,
    color: 'from-luminite-blue to-electric-violet',
    guides: [
      {
        title: 'Module System Overview',
        description: 'Understanding the module architecture',
        time: '20 min read',
        difficulty: 'Intermediate',
        topics: ['Module Structure', 'Module Types', 'Loading Modules', 'Module Dependencies'],
      },
      {
        title: 'Creating Custom Modules',
        description: 'Build your own modules for Luma Engine',
        time: '45 min read',
        difficulty: 'Advanced',
        topics: ['Module Setup', 'Exporting Functions', 'Module Configuration', 'Publishing Modules'],
      },
      {
        title: 'Module Registry',
        description: 'Discover and install community modules',
        time: '15 min read',
        difficulty: 'Beginner',
        topics: ['Browsing Modules', 'Installing Modules', 'Module Management', 'Module Updates'],
      },
    ],
  },
  {
    id: 'features',
    title: 'Features',
    description: 'Learn about Luma Engine features',
    icon: <Zap size={24} />,
    color: 'from-electric-violet to-luminite-blue',
    guides: [
      {
        title: 'Luminite Lighting System',
        description: 'Master next-generation lighting',
        time: '40 min read',
        difficulty: 'Intermediate',
        topics: ['Global Illumination', 'Reflections', 'Light Types', 'Lighting Settings'],
      },
      {
        title: 'Physics System',
        description: 'Add physics and collisions to your game',
        time: '35 min read',
        difficulty: 'Intermediate',
        topics: ['Physics Bodies', 'Colliders', 'Joints', 'Physics Materials'],
      },
      {
        title: 'Audio System',
        description: 'Implement 3D audio and sound effects',
        time: '30 min read',
        difficulty: 'Intermediate',
        topics: ['Audio Sources', '3D Audio', 'Audio Mixing', 'Sound Effects'],
      },
      {
        title: 'Animation System',
        description: 'Create smooth animations for your game',
        time: '35 min read',
        difficulty: 'Intermediate',
        topics: ['Animation Clips', 'Animator Controller', 'Animation Events', 'Blend Trees'],
      },
    ],
  },
  {
    id: 'examples',
    title: 'Examples & Tutorials',
    description: 'Learn from sample projects and tutorials',
    icon: <Lightbulb size={24} />,
    color: 'from-luminite-blue to-electric-violet',
    guides: [
      {
        title: '2D Platformer Tutorial',
        description: 'Build a complete 2D platformer game',
        time: '2 hours',
        difficulty: 'Intermediate',
        topics: ['Character Controller', 'Platform Mechanics', 'Enemy AI', 'Level Design'],
      },
      {
        title: '3D First Person Shooter',
        description: 'Create a 3D FPS game from scratch',
        time: '3 hours',
        difficulty: 'Advanced',
        topics: ['Camera Controls', 'Weapon System', 'Enemy AI', 'UI System'],
      },
      {
        title: 'Code Examples Library',
        description: 'Browse ready-to-use code snippets',
        time: 'Various',
        difficulty: 'All Levels',
        topics: ['Common Patterns', 'Utility Functions', 'Game Systems', 'Best Practices'],
      },
      {
        title: 'Video Tutorial Series',
        description: 'Watch step-by-step video guides',
        time: 'Various',
        difficulty: 'All Levels',
        topics: ['Getting Started', 'Advanced Techniques', 'Project Walkthroughs', 'Tips & Tricks'],
      },
    ],
  },
]

const popularGuides = [
  { title: 'Installation Guide', category: 'Getting Started', views: '12.5k' },
  { title: 'Creating Your First Project', category: 'Getting Started', views: '8.9k' },
  { title: 'E-Script Language Basics', category: 'Scripting', views: '7.2k' },
  { title: 'Editor Interface Overview', category: 'Editor', views: '6.8k' },
  { title: 'Luminite Lighting System', category: 'Features', views: '5.4k' },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategory, setExpandedCategory] = useState<string | null>('getting-started')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const filteredCategories = useMemo(() => {
    let filtered = docCategories

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.map((category) => ({
        ...category,
        guides: category.guides.filter(
          (guide) =>
            guide.title.toLowerCase().includes(query) ||
            guide.description.toLowerCase().includes(query) ||
            guide.topics.some((topic) => topic.toLowerCase().includes(query))
        ),
      })).filter((category) => category.guides.length > 0)
    }

    if (selectedDifficulty) {
      filtered = filtered.map((category) => ({
        ...category,
        guides: category.guides.filter((guide) => guide.difficulty === selectedDifficulty),
      })).filter((category) => category.guides.length > 0)
    }

    return filtered
  }, [searchQuery, selectedDifficulty])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-midnight-black via-electric-violet/10 to-midnight-black">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-luma-orange to-transparent opacity-50" />
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
            Your complete guide to Luma Engine. Learn, build, and create amazing games with comprehensive documentation, tutorials, and examples.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/download" variant="primary" size="lg">
              <Download className="mr-2" size={20} />
              Download Luma Engine
            </Button>
            <Button href="/community" variant="outline" size="lg">
              <Play className="mr-2" size={20} />
              Watch Tutorials
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-midnight-black border-b border-electric-violet/20 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-electric-violet/20 text-white placeholder-gray-500 focus:outline-none focus:border-luminite-blue transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-400 self-center">Filter by difficulty:</span>
              {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty === 'All Levels' ? null : difficulty)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (selectedDifficulty === difficulty) || (selectedDifficulty === null && difficulty === 'All Levels')
                      ? 'bg-gradient-to-r from-electric-violet to-luminite-blue text-white'
                      : 'bg-gray-900 border border-electric-violet/20 text-gray-300 hover:border-luminite-blue/50'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Popular Guides</span>
            </h2>
            <p className="text-gray-400">Most viewed documentation guides</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {popularGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold text-white group-hover:text-luminite-blue transition-colors flex-1">
                    {guide.title}
                  </h3>
                  <ChevronRight className="text-gray-500 group-hover:text-luminite-blue transition-colors" size={16} />
                </div>
                <p className="text-xs text-gray-500 mb-2">{guide.category}</p>
                <p className="text-xs text-luma-orange">{guide.views} views</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Documentation Categories</span>
            </h2>
            <p className="text-gray-400">Browse comprehensive guides organized by topic</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No documentation found matching your search.</p>
              </div>
            ) : (
              filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-electric-violet/5 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-display font-bold gradient-text">{category.title}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`text-gray-400 transition-transform ${expandedCategory === category.id ? 'rotate-90' : ''}`}
                      size={20}
                    />
                  </button>

                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-electric-violet/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {category.guides.map((guide, guideIndex) => (
                            <motion.div
                              key={guide.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: guideIndex * 0.05 }}
                              whileHover={{ x: 5, scale: 1.02 }}
                              className="p-4 rounded-lg bg-midnight-black border border-electric-violet/10 hover:border-luminite-blue/50 transition-all duration-300 cursor-pointer group"
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-base font-semibold text-white group-hover:text-luminite-blue transition-colors">
                                  {guide.title}
                                </h4>
                                <ChevronRight className="text-gray-500 group-hover:text-luminite-blue transition-colors flex-shrink-0 ml-2" size={16} />
                              </div>
                              <p className="text-sm text-gray-400 mb-3">{guide.description}</p>
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-xs px-2 py-1 rounded bg-electric-violet/20 text-electric-violet">
                                  {guide.time}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  guide.difficulty === 'Beginner' ? 'bg-luminite-blue/20 text-luminite-blue' :
                                  guide.difficulty === 'Intermediate' ? 'bg-luma-orange/20 text-luma-orange' :
                                  'bg-electric-violet/20 text-electric-violet'
                                }`}>
                                  {guide.difficulty}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {guide.topics.slice(0, 3).map((topic) => (
                                  <span key={topic} className="text-xs text-gray-500">
                                    {topic}
                                    {guide.topics.indexOf(topic) < 2 && guide.topics.indexOf(topic) < guide.topics.length - 1 && ','}
                                  </span>
                                ))}
                                {guide.topics.length > 3 && (
                                  <span className="text-xs text-gray-500">+{guide.topics.length - 3} more</span>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Quick Start Path */}
      <section className="py-16 bg-gradient-to-b from-midnight-black via-gray-900 to-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-center">
              <span className="gradient-text">Quick Start Learning Path</span>
            </h2>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Install Luma Engine', description: 'Download and install the engine on your system', icon: <Download size={20} /> },
                { step: 2, title: 'Create Your First Project', description: 'Set up a new project and explore the editor', icon: <Settings size={20} /> },
                { step: 3, title: 'Learn E-Script Basics', description: 'Master the fundamentals of E-Script programming', icon: <Code size={20} /> },
                { step: 4, title: 'Build Your First Game', description: 'Create a simple game using what you\'ve learned', icon: <Play size={20} /> },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-br from-gray-900 to-midnight-black border border-electric-violet/20 hover:border-luminite-blue/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                  <div className="text-luminite-blue">
                    {step.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-midnight-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl bg-gradient-to-br from-electric-violet/10 to-luminite-blue/10 border border-electric-violet/20"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              <span className="gradient-text">Need More Help?</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Join our community and get help from experienced developers, or check out our interactive documentation portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://discord.gg/qbsjpEmv" variant="primary" size="lg">
                Join Discord Community
              </Button>
              <Button href="https://docs.lumaengine.dev" variant="outline" size="lg">
                Full Documentation Portal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, BookOpen, Download, Settings, LogOut, Award, Clock } from 'lucide-react'
import { auth, onAuthStateChanged, signOut } from '../../src/firebase';
import { useRouter } from 'next/navigation'

interface UserStats {
  coursesCompleted: number
  enginesDownloaded: number
  hoursLearned: number
  achievements: number
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState<UserStats>({
    coursesCompleted: 12,
    enginesDownloaded: 3,
    hoursLearned: 47,
    achievements: 8
  })
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  const handleSignOut = async () => {
    await auth.signOut()
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <LogOut size={48} className="text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Please Sign In</h2>
          <p className="text-gray-400">You need to be signed in to view your dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Header */}
      <header className="bg-darker-surface border-b border-electric-violet/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Dashboard</h1>
                <p className="text-sm text-gray-400">Welcome back, {user.displayName || 'Developer'}</p>
              </div>
            </div>
            
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-darker-surface border border-electric-violet/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="text-luminite-blue" size={24} />
              <span className="text-2xl font-bold text-white">{stats.coursesCompleted}</span>
            </div>
            <p className="text-gray-400 text-sm">Courses Completed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
            className="bg-darker-surface border border-electric-violet/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Download className="text-luma-orange" size={24} />
              <span className="text-2xl font-bold text-white">{stats.enginesDownloaded}</span>
            </div>
            <p className="text-gray-400 text-sm">Engines Downloaded</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
            className="bg-darker-surface border border-electric-violet/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="text-green-400" size={24} />
              <span className="text-2xl font-bold text-white">{stats.hoursLearned}</span>
            </div>
            <p className="text-gray-400 text-sm">Hours Learning</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ delay: 0.3 }}
            className="bg-darker-surface border border-electric-violet/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <Award className="text-luma-orange" size={24} />
              <span className="text-2xl font-bold text-white">{stats.achievements}</span>
            </div>
            <p className="text-gray-400 text-sm">Achievements</p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-electric-violet/20 to-luminite-blue/20 border border-electric-violet/30 rounded-xl p-8"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Download size={24} />
              <span>Quick Actions</span>
            </h2>
            <div className="space-y-4">
              <button className="w-full text-left bg-darker-surface border border-electric-violet/20 rounded-lg p-4 hover:border-luminite-blue/40 transition-all">
                <h3 className="font-semibold text-white mb-2">Download Luma Hub</h3>
                <p className="text-gray-400 text-sm">Get the desktop application for offline access</p>
              </button>
              <button className="w-full text-left bg-darker-surface border border-electric-violet/20 rounded-lg p-4 hover:border-luminite-blue/40 transition-all">
                <h3 className="font-semibold text-white mb-2">Browse Documentation</h3>
                <p className="text-gray-400 text-sm">Access comprehensive guides and API reference</p>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-luma-orange/20 to-luma-amber/20 border border-luma-orange/30 rounded-xl p-8"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Award size={24} />
              <span>Recent Activity</span>
            </h2>
            <div className="space-y-3">
              <div className="bg-darker-surface border border-electric-violet/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Completed "Getting Started" Course</h4>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="w-full bg-electric-violet/20 rounded-full h-2">
                  <div className="bg-luminite-blue h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="bg-darker-surface border border-electric-violet/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">Downloaded Luma Engine 2.0</h4>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <div className="w-full bg-luma-orange/20 rounded-full h-2">
                  <div className="bg-luma-orange h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

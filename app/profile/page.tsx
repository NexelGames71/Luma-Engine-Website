'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Shield, Edit, Lock, Smartphone, ChevronRight } from 'lucide-react'
import { getFirebaseAuth } from '../../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation'

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        router.push('/');
      }
    });
    return unsubscribe;
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-violet mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  const joinYear = new Date(user.metadata?.creationTime || Date.now()).getFullYear();

  return (
    <div className="min-h-screen bg-midnight-black">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-electric-violet/20 to-luminite-blue/20 border-b border-electric-violet/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="w-24 h-24 bg-gradient-to-r from-electric-violet to-luminite-blue rounded-full flex items-center justify-center">
              {user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User size={48} className="text-white" />
              )}
            </div>
            
            {/* User Identity */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {user.displayName || 'User Profile'}
              </h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <span className="bg-electric-violet/20 px-3 py-1 rounded-full text-sm">
                  Developer Account
                </span>
                <span>Joined: {joinYear}</span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <Edit size={20} />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Account Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-darker-surface border border-electric-violet/20 rounded-xl p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center">
                <User size={20} className="text-electric-violet" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">📄 Account Information</h2>
                <p className="text-gray-400 text-sm">Basic information about user.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Account Information</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Username:</span>
                    <span className="text-white font-medium">{user.displayName || 'Not set'}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white font-medium">
                      {user.email ? `${user.email.substring(0, 3)}***${user.email.split('@')[1]}` : 'Not set'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Account Type:</span>
                    <span className="text-electric-violet font-medium">Developer</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <Edit size={18} />
                Edit Profile
              </button>
            </div>
          </motion.div>

          {/* Security Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-darker-surface border border-electric-violet/20 rounded-xl p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center">
                <Shield size={20} className="text-electric-violet" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">🔐 Security</h2>
                <p className="text-gray-400 text-sm">Basic security settings.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Change Password</span>
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Enable Two-Factor Authentication</span>
                    <Smartphone size={18} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gray-800/50 hover:bg-gray-700/50 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Lock size={18} />
                  Change Password
                </button>
                
                <button className="w-full bg-electric-violet/20 hover:bg-electric-violet/30 text-electric-violet px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Smartphone size={18} />
                  Setup 2FA
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

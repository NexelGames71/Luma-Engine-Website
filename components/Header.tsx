'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, User, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getFirebaseAuth } from '../src/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Download', href: '/download' },
  { name: 'Docs', href: '/docs' },
  { name: 'Learn', href: '/learn' },
  { name: 'Ecosystem', href: '/ecosystem' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [])

  const handleSignOut = async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    setProfileMenuOpen(false);
  }

  return (
    <header className="fixed top-1 left-0 right-0 z-50 bg-midnight-black/80 backdrop-blur-md border-b-2 border-electric-violet/20 border-t border-luma-orange/30">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold gradient-text"
            >
              LUMA
            </motion.div>
            <span className="text-luminite-blue font-display font-medium">ENGINE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-luminite-blue'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-violet to-luminite-blue"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {user ? (
                  <>
                    <div className="w-8 h-8 bg-gradient-to-r from-electric-violet to-luminite-blue rounded-full flex items-center justify-center">
                      <User size={16} className="text-white" />
                    </div>
                    <span className="hidden lg:block">
                      {user.displayName || user.email?.split('@')[0] || 'User'}
                    </span>
                  </>
                ) : (
                  <>
                    <User size={20} />
                    <span className="hidden lg:block">Sign In</span>
                  </>
                )}
              </button>
              
              {profileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-midnight-black border border-electric-violet/20 rounded-lg shadow-xl z-50"
                >
                  {user ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="text-sm font-medium text-white">{user.displayName || user.email}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                      <Link
                        href="/dashboard"
                        onClick={() => setProfileMenuOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/profile"
                        onClick={() => setProfileMenuOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-gray-800/50 transition-colors flex items-center gap-2"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/signup"
                        onClick={() => setProfileMenuOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        Create Account
                      </Link>
                      <Link
                        href="/"
                        onClick={() => setProfileMenuOpen(false)}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        Sign In
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-luminite-blue bg-electric-violet/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}


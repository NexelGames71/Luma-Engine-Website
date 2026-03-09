import React from 'react';
import { motion } from 'framer-motion';
import { 
  Library, 
  BookOpen, 
  Code, 
  Users, 
  Settings,
  Zap,
  Gamepad2,
  LogOut,
  User
} from 'lucide-react';
import { Section } from '../App';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  user?: any;
  onSignOut?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, user, onSignOut }) => {
  const navigationItems = [
    { id: 'library' as Section, label: 'Library', icon: <Library size={20} /> },
    { id: 'learn' as Section, label: 'Learn', icon: <BookOpen size={20} /> },
    { id: 'samples' as Section, label: 'Samples', icon: <Code size={20} /> },
    { id: 'community' as Section, label: 'Community', icon: <Users size={20} /> },
    { id: 'settings' as Section, label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 bg-dark-surface border-r border-electric-violet/20 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-electric-violet/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center">
            <Gamepad2 size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold gradient-text">LUMA</h1>
            <p className="text-xs text-gray-400 font-medium">HUB</p>
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      {user && (
        <div className="p-4 border-b border-electric-violet/10">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{user.displayName || 'Developer'}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onSignOut}
            className="w-full flex items-center justify-center space-x-2 text-gray-400 hover:text-white transition-colors py-2"
          >
            <LogOut size={16} />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-electric-violet/20 to-luminite-blue/20 border border-electric-violet/30 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`transition-colors duration-200 ${
                activeSection === item.id ? 'text-luminite-blue' : ''
              }`}>
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
              
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="w-2 h-2 rounded-full bg-luminite-blue ml-auto"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-electric-violet/10">
        <div className="bg-gradient-to-r from-luma-orange/20 to-luma-amber/20 rounded-lg p-4 border border-luma-orange/30">
          <div className="flex items-center space-x-2 mb-2">
            <Zap size={16} className="text-luma-orange" />
            <span className="text-sm font-semibold text-luma-orange">Pro Tip</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            Keep your engines updated for the latest features and improvements!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MessageCircle } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  comments?: number;
}

interface CommunityProps {
  user?: any;
}

const Community: React.FC<CommunityProps> = ({ user }) => {
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Luma Engine 2.0 Preview Now Available!',
      date: '2024-02-01',
      excerpt: 'Experience the next generation of game development with our biggest update yet. Featuring revolutionary lighting systems and performance improvements.',
      comments: 42
    },
    {
      id: '2',
      title: 'New Sample Project: Open World Environment',
      date: '2024-01-28',
      excerpt: 'Explore our latest sample project showcasing advanced terrain generation, dynamic weather systems, and seamless world streaming.',
      comments: 28
    },
    {
      id: '3',
      title: 'Community Game Jam Winners Announced',
      date: '2024-01-25',
      excerpt: 'Congratulations to all participants! See the winning entries and learn from their innovative approaches to game design.',
      comments: 156
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Community</h1>
          <p className="text-gray-400">Stay updated with the latest Luma Engine news</p>
        </div>
        <button className="bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <ExternalLink size={20} />
          <span>Visit Community</span>
        </button>
      </div>

      {/* Community News */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <MessageCircle size={20} className="text-luminite-blue" />
          <span>Community News</span>
        </h2>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }}
              className="bg-darker-surface border border-electric-violet/20 rounded-lg p-4 hover:border-luminite-blue/40 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-white hover:text-luminite-blue transition-colors">
                  {item.title}
                </h3>
                {item.comments && (
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <MessageCircle size={14} />
                    <span>{item.comments}</span>
                  </div>
                )}
              </div>
              
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <button className="text-luminite-blue hover:text-white transition-colors text-sm">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-6 w-full bg-darker-surface border border-electric-violet/20 rounded-lg p-3 text-center text-luminite-blue hover:text-white hover:border-luminite-blue/40 transition-all duration-200">
          View More Articles
        </button>
      </div>
    </div>
  );
};

export default Community;

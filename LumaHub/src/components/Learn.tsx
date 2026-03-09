import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Clock, Star } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  rating?: number;
}

interface LearnProps {
  user?: any;
}

const Learn: React.FC<LearnProps> = ({ user }) => {
  const featuredCourses: Course[] = [
    {
      id: '1',
      title: 'Getting Started with Luma',
      description: 'Learn the basics of Luma Engine and create your first game',
      duration: '2h 30m',
      level: 'Beginner',
      image: '/course1.jpg',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Advanced Materials & Shading',
      description: 'Master advanced material systems and custom shaders',
      duration: '4h 15m',
      level: 'Advanced',
      image: '/course2.jpg',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Mastering Luma Motion',
      description: 'Create smooth animations and physics-based interactions',
      duration: '3h 45m',
      level: 'Intermediate',
      image: '/course3.jpg',
      rating: 4.7
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Learning Center</h1>
          <p className="text-gray-400">Master Luma Engine with our comprehensive courses</p>
        </div>
        <button className="bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <BookOpen size={20} />
          <span>Browse All Courses</span>
        </button>
      </div>

      {/* Featured Courses */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <Star size={20} className="text-luma-orange" />
          <span>Featured Courses</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-darker-surface border border-electric-violet/20 rounded-lg overflow-hidden hover:border-luminite-blue/40 transition-all duration-200"
            >
              {/* Course Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-electric-violet/20 to-luminite-blue/20 flex items-center justify-center">
                <BookOpen size={48} className="text-gray-500" />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <span className="px-2 py-1 bg-electric-violet/20 text-electric-violet rounded text-xs">
                      {course.level}
                    </span>
                  </div>
                  {course.rating && (
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-luma-orange fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  )}
                </div>
                
                <button className="w-full bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity">
                  <Play size={16} />
                  <span>Start Learning</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;

import React from 'react';
import { Code, Play, Download } from 'lucide-react';

interface SamplesProps {
  user?: any;
}

const Samples: React.FC<SamplesProps> = ({ user }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Sample Projects</h1>
          <p className="text-gray-400">Explore example projects and templates</p>
        </div>
        <button className="bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <Download size={20} />
          <span>Browse Samples</span>
        </button>
      </div>
      
      <div className="text-center py-12">
        <Code size={64} className="text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400">Sample projects coming soon...</p>
      </div>
    </div>
  );
};

export default Samples;

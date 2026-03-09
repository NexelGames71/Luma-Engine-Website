import React from 'react';
import { Folder, ExternalLink } from 'lucide-react';

const StatusBar: React.FC = () => {
  return (
    <div className="bg-darker-surface border-t border-electric-violet/20 px-6 py-3">
      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <Folder size={16} />
          <span>Install Path: C:\Luma\Engines</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-luminite-blue transition-colors">
            <ExternalLink size={14} />
            <span>Support</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-luminite-blue transition-colors">
            <ExternalLink size={14} />
            <span>Release Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

import React from 'react';
import { Settings, Folder, ExternalLink } from 'lucide-react';

interface SettingsProps {
  user?: any;
}

const SettingsComponent: React.FC<SettingsProps> = ({ user }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Settings</h1>
          <p className="text-gray-400">Configure your Luma Hub preferences</p>
        </div>
      </div>
      
      <div className="text-center py-12">
        <Settings size={64} className="text-gray-500 mx-auto mb-4" />
        <p className="text-gray-400">Settings panel coming soon...</p>
      </div>
    </div>
  );
};

export default SettingsComponent;

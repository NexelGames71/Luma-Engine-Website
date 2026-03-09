import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Trash2, 
  Play, 
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';

interface EngineVersion {
  id: string;
  version: string;
  status: 'stable' | 'beta' | 'preview';
  isInstalled: boolean;
  isDefault?: boolean;
  releaseDate?: string;
  size?: string;
  newRelease?: boolean;
}

interface LibraryProps {
  user?: any;
}

const Library: React.FC<LibraryProps> = ({ user }) => {
  const [installedVersions] = useState<EngineVersion[]>([
    {
      id: '1',
      version: '1.2.0',
      status: 'stable',
      isInstalled: true,
      isDefault: true,
      releaseDate: '2024-01-15',
      size: '2.3 GB'
    },
    {
      id: '2',
      version: '1.1.0',
      status: 'beta',
      isInstalled: true,
      releaseDate: '2023-12-20',
      size: '2.1 GB'
    },
    {
      id: '3',
      version: '1.0.3',
      status: 'stable',
      isInstalled: true,
      releaseDate: '2023-11-10',
      size: '1.9 GB'
    }
  ]);

  const [availableVersions] = useState<EngineVersion[]>([
    {
      id: '4',
      version: '2.0',
      status: 'preview',
      isInstalled: false,
      newRelease: true,
      releaseDate: '2024-02-01',
      size: '3.1 GB'
    },
    {
      id: '5',
      version: '1.3.0',
      status: 'stable',
      isInstalled: false,
      releaseDate: '2024-01-30',
      size: '2.5 GB'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'beta':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'preview':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'stable':
        return <CheckCircle size={16} />;
      case 'beta':
        return <AlertCircle size={16} />;
      case 'preview':
        return <Zap size={16} />;
      default:
        return null;
    }
  };

  const VersionCard: React.FC<{ version: EngineVersion; isInstalled: boolean }> = ({ 
    version, 
    isInstalled 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-darker-surface border border-electric-violet/20 rounded-lg p-4 hover:border-luminite-blue/40 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-semibold text-white">Luma {version.version}</h3>
            {version.isDefault && (
              <span className="px-2 py-1 text-xs rounded-full bg-luminite-blue/20 text-luminite-blue border border-luminite-blue/30">
                Default
              </span>
            )}
            {version.newRelease && (
              <span className="px-2 py-1 text-xs rounded-full bg-luma-orange/20 text-luma-orange border border-luma-orange/30 animate-pulse">
                New Release
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <div className={`flex items-center space-x-1 px-2 py-1 rounded border ${getStatusColor(version.status)}`}>
              {getStatusIcon(version.status)}
              <span className="capitalize">{version.status}</span>
            </div>
            {version.releaseDate && (
              <div className="flex items-center space-x-1">
                <Clock size={12} />
                <span>{new Date(version.releaseDate).toLocaleDateString()}</span>
              </div>
            )}
            {version.size && (
              <span>{version.size}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-2">
        {isInstalled ? (
          <>
            <button className="flex-1 bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity">
              <Play size={16} />
              <span>Launch</span>
            </button>
            <button className="px-3 py-2 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors">
              <Trash2 size={16} />
            </button>
          </>
        ) : (
          <button className="flex-1 bg-gradient-to-r from-luma-orange to-luma-amber text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity">
            <Download size={16} />
            <span>Install</span>
          </button>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Engine Library</h1>
          <p className="text-gray-400">Manage your Luma Engine installations</p>
        </div>
        <button className="bg-gradient-to-r from-luma-orange to-luma-amber text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <Download size={20} />
          <span>Browse All Versions</span>
        </button>
      </div>

      {/* Installed Versions */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <CheckCircle size={20} className="text-green-400" />
          <span>Installed Versions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {installedVersions.map((version) => (
            <VersionCard key={version.id} version={version} isInstalled={true} />
          ))}
        </div>
      </div>

      {/* Available Versions */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <Download size={20} className="text-luminite-blue" />
          <span>Available Versions</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableVersions.map((version) => (
            <VersionCard key={version.id} version={version} isInstalled={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;

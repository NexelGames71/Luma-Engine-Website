import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Library from './components/Library';
import Learn from './components/Learn';
import Samples from './components/Samples';
import Community from './components/Community';
import Settings from './components/Settings';
import StatusBar from './components/StatusBar';
import AuthModal from './components/AuthModal';
import { auth, onAuthStateChanged, signOut } from './firebase';
import { Gamepad2 } from 'lucide-react';

export type Section = 'library' | 'learn' | 'samples' | 'community' | 'settings';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('library');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'library':
        return <Library user={user} />;
      case 'learn':
        return <Learn user={user} />;
      case 'samples':
        return <Samples user={user} />;
      case 'community':
        return <Community user={user} />;
      case 'settings':
        return <Settings user={user} />;
      default:
        return <Library user={user} />;
    }
  };

  return (
    <div className="flex h-screen bg-midnight-black overflow-hidden">
      {/* Show authentication screen if user is not signed in */}
      {!user ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Authentication Modal or Welcome Screen */}
          <div className="text-center max-w-md mx-auto p-8">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-violet to-luminite-blue flex items-center justify-center mx-auto mb-6">
                <Gamepad2 size={40} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-2">LUMA HUB</h1>
              <p className="text-gray-400 text-lg">Your complete game development toolkit</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-full bg-gradient-to-r from-electric-violet to-luminite-blue text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
              
              <div className="text-center text-gray-500">
                <p>Sign in to access your engine library, courses, and community</p>
              </div>
            </div>
          </div>

          {/* Authentication Modal */}
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            mode={authMode}
          />
        </div>
      ) : (
        <>
          {/* Main Hub Interface - only show when authenticated */}
          <Sidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection}
            user={user}
            onSignOut={handleSignOut}
          />
          
          <div className="flex-1 flex flex-col">
            <main className="flex-1 overflow-auto">
              {renderContent()}
            </main>
            
            <StatusBar />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

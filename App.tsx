
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ViewType, Idea } from './types';
import { DEFAULT_IDEAS } from './constants';
import IdeaBubble from './components/IdeaBubble';
import IdeaDetail from './components/IdeaDetail';
import ListView from './components/ListView';
import SubmitModal from './components/SubmitModal';
import FullEntry from './components/FullEntry';
import Level3Entry from './components/Level3Entry';
import AuthPage from './components/AuthPage';
import { expandIdea, getRandomIdeaTitle } from './services/geminiService';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('canvas');
  const [ideas, setIdeas] = useState<Idea[]>(DEFAULT_IDEAS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Handle Search Filtering
  const filteredIdeas = useMemo(() => {
    if (!searchQuery) return ideas;
    return ideas.map(idea => ({
      ...idea,
      opacity: idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ? 1 : 0.2
    }));
  }, [ideas, searchQuery]);

  const handleIdeaClick = (idea: Idea) => {
    setSelectedIdea(idea);
  };

  const handlePickRandom = async () => {
    setIsExpanding(true);
    const title = await getRandomIdeaTitle();
    const expanded = await expandIdea(title);
    
    const newIdea: Idea = {
      id: Math.random().toString(36).substr(2, 9),
      idNumber: '#' + Math.floor(Math.random() * 9000 + 1000),
      title: title,
      category: expanded.category || 'General',
      description: expanded.description || '',
      fullContent: expanded.fullContent || '',
      quote: expanded.quote,
      origin: expanded.origin,
      complexity: expanded.complexity,
      tags: expanded.tags,
      x: Math.random() * 70 + 10,
      y: Math.random() * 70 + 10,
      size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)] as any,
    };

    setIdeas(prev => [...prev, newIdea]);
    setSelectedIdea(newIdea);
    setIsExpanding(false);
  };

  const handleSubmitNewIdea = async (title: string) => {
    setIsExpanding(true);
    const expanded = await expandIdea(title);
    
    const newIdea: Idea = {
      id: Math.random().toString(36).substr(2, 9),
      idNumber: '#' + Math.floor(Math.random() * 9000 + 1000),
      title: title,
      category: expanded.category || 'General',
      description: expanded.description || '',
      fullContent: expanded.fullContent || '',
      quote: expanded.quote,
      origin: expanded.origin,
      complexity: expanded.complexity,
      tags: expanded.tags,
      x: Math.random() * 70 + 10,
      y: Math.random() * 70 + 10,
      size: 'md',
    };

    setIdeas(prev => [...prev, newIdea]);
    setSelectedIdea(newIdea);
    setIsExpanding(false);
    setIsSubmitModalOpen(false);
  };

  const handlePrevIdea = () => {
    if (!selectedIdea) return;
    const currentIndex = ideas.findIndex(i => i.id === selectedIdea.id);
    const nextIndex = (currentIndex - 1 + ideas.length) % ideas.length;
    setSelectedIdea(ideas[nextIndex]);
  };

  const handleNextIdea = () => {
    if (!selectedIdea) return;
    const currentIndex = ideas.findIndex(i => i.id === selectedIdea.id);
    const nextIndex = (currentIndex + 1) % ideas.length;
    setSelectedIdea(ideas[nextIndex]);
  };

  const handleAuthSuccess = (name: string) => {
    setUser({ name });
    setView('canvas');
  };

  const handleLogout = () => {
    setUser(null);
    setView('canvas');
  };

  return (
    <div className={`relative w-full h-screen flex flex-col ${view === 'level-3' || view === 'auth' ? 'overflow-auto' : 'overflow-hidden'} bg-background-dark text-white font-display transition-colors duration-500`}>
      {/* Top Navigation - Show only if not in Level 3 deep dive */}
      {view !== 'level-3' && view !== 'auth' && (
        <header className="z-50 flex items-center justify-between px-6 py-4 lg:px-10 border-b border-white/5 bg-[#111418]/90 backdrop-blur-md shrink-0">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => { setView('canvas'); setSelectedIdea(null); }}
          >
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">local_library</span>
            </div>
            <h2 className="text-white text-lg font-bold tracking-tight">Floating Ideas</h2>
          </div>

          <div className="flex-1 flex justify-center max-w-xl mx-8">
             <div className="relative w-full hidden sm:block">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#9dabb9] text-[20px]">search</span>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search ideas..."
                  className="w-full h-10 bg-[#1c2127] border border-[#283039] rounded-xl pl-12 pr-4 text-white placeholder-[#9dabb9] focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all text-sm"
                />
             </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => { setView('canvas'); setSelectedIdea(null); }}
                className={`text-sm font-medium transition-all ${view === 'canvas' ? 'text-primary' : 'text-white/70 hover:text-white'}`}
              >
                Canvas
              </button>
              <button 
                onClick={() => { setView('list'); setSelectedIdea(null); }}
                className={`text-sm font-medium transition-all ${view === 'list' ? 'text-primary' : 'text-white/70 hover:text-white'}`}
              >
                Index
              </button>
            </div>
            
            <div className="h-6 w-px bg-white/10 hidden md:block"></div>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white/50 hidden lg:block uppercase tracking-wider">{user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  title="Logout"
                >
                  <span className="material-symbols-outlined text-[20px] text-white/70">logout</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setView('auth')}
                className="flex items-center justify-center gap-2 rounded-full h-10 px-5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all border border-white/10"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span className="hidden lg:inline">Login / Register</span>
                <span className="lg:hidden">Join</span>
              </button>
            )}

            <button 
              onClick={() => setIsSubmitModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-full h-10 px-5 bg-primary text-[#111418] text-sm font-bold hover:bg-blue-400 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span className="hidden sm:inline">Submit</span>
            </button>
          </div>
        </header>
      )}

      {/* Main Area */}
      <main className="relative flex-1 w-full overflow-hidden flex flex-col">
        {/* Background Atmosphere */}
        {(view === 'canvas' || view === 'list' || view === 'auth') && (
          <div className="absolute inset-0 bg-[#0a0f14] -z-10 animate-[fadeIn_1s_ease-out]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          </div>
        )}

        {view === 'canvas' ? (
          <div className="relative w-full h-full">
            {filteredIdeas.map(idea => (
              <IdeaBubble 
                key={idea.id} 
                idea={idea} 
                onClick={handleIdeaClick} 
                isSelected={selectedIdea?.id === idea.id}
              />
            ))}

            <div className="absolute inset-0 flex flex-col items-center pt-24 justify-start pointer-events-none z-40 px-4">
              <div className="flex flex-col items-center gap-6 max-w-2xl w-full pointer-events-auto">
                <div className="text-center space-y-2">
                  <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter">
                    Floating Ideas
                  </h1>
                  <p className="text-lg text-white/50 font-light">
                    The Infinite Encyclopedia of Thought.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    disabled={isExpanding}
                    onClick={handlePickRandom}
                    className="flex items-center justify-center h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-bold transition-all transform hover:-translate-y-0.5 shadow-xl shadow-primary/5"
                  >
                    {isExpanding ? 'Curating...' : 'Explore Random Idea'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : view === 'list' ? (
          <ListView 
            ideas={ideas} 
            onSelect={(idea) => setSelectedIdea(idea)} 
            searchQuery={searchQuery}
          />
        ) : view === 'full-entry' ? (
          selectedIdea && (
            <FullEntry 
              idea={selectedIdea} 
              onBack={() => { setView('canvas'); setSelectedIdea(null); }} 
              onPrev={handlePrevIdea}
              onNext={handleNextIdea}
              onUnlockLevel3={() => setView('level-3')}
            />
          )
        ) : view === 'level-3' ? (
          selectedIdea && (
            <Level3Entry 
              idea={selectedIdea} 
              onBack={() => setView('full-entry')}
            />
          )
        ) : (
          <AuthPage 
            onBack={() => setView('canvas')}
            onSuccess={handleAuthSuccess}
          />
        )}

        {/* Selected Idea Detail Sheet (Drawer) */}
        {selectedIdea && (view === 'canvas' || view === 'list') && (
          <IdeaDetail 
            idea={selectedIdea} 
            onClose={() => setSelectedIdea(null)} 
            onReadFull={() => setView('full-entry')}
          />
        )}
      </main>

      {/* Submit Modal */}
      {isSubmitModalOpen && (
        <SubmitModal 
          loading={isExpanding}
          onClose={() => setIsSubmitModalOpen(false)}
          onSubmit={handleSubmitNewIdea}
        />
      )}
    </div>
  );
};

export default App;

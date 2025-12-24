
import React, { useState, useEffect } from 'react';
import { Idea } from '../types';

interface Level3EntryProps {
  idea: Idea;
  onBack: () => void;
}

const Level3Entry: React.FC<Level3EntryProps> = ({ idea, onBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-y-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-gray-200 dark:bg-[#283039]">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Sub-Header / Breadcrumbs & Back */}
      <div className="sticky top-0 z-40 border-b border-gray-200 dark:border-[#283039] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <button onClick={onBack} className="text-gray-500 dark:text-[#9dabb9] hover:text-primary transition-colors">Home</button>
            <span className="text-gray-400 dark:text-[#55606c] material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-gray-500 dark:text-[#9dabb9]">{idea.category}</span>
            <span className="text-gray-400 dark:text-[#55606c] material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="font-medium text-slate-900 dark:text-white">{idea.title}</span>
          </div>
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#283039] hover:bg-gray-100 dark:hover:bg-[#3b4754] text-slate-900 dark:text-white text-sm font-bold rounded-full transition-colors border border-gray-200 dark:border-transparent w-fit shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span>Back to Level 2</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full bg-[#111418] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url("${idea.heroImage || 'https://images.unsplash.com/photo-1462331940025-496df9758a8a?auto=format&fit=crop&q=80'}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#101922]/0 via-[#101922]/50 to-[#101922]"></div>
        <div className="relative max-w-[960px] mx-auto px-6 py-20 md:py-32 flex flex-col items-center text-center gap-6 z-10">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20">
            {idea.category} • Level 3 Deep Dive
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
            {idea.title}
          </h1>
          {idea.quote && (
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
              {idea.quote}
            </p>
          )}
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>{idea.year || 'Unknown'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">person</span>
              <span>{idea.author || 'Collective'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              <span>{idea.readTime || '15 min read'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Sidebar: Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28 flex flex-col gap-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#9dabb9]">Contents</h3>
              <ul className="flex flex-col gap-1 border-l border-gray-200 dark:border-[#283039] pl-4">
                {(idea.sections || []).map((section, idx) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`} 
                      className={`block py-2 text-sm transition-colors ${idx === 0 ? 'text-primary font-medium border-l-2 border-primary -ml-[17px] pl-4' : 'text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'}`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Mini Actions */}
              <div className="flex gap-2 mt-4">
                <button className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#283039] text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">bookmark_border</span>
                </button>
                <button className="size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-[#283039] text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">ios_share</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Center Column: Reading Content */}
          <main className="flex-1 max-w-[720px] mx-auto lg:mx-0">
            {(idea.sections || []).map((section, idx) => (
              <section id={section.id} key={section.id} className="mb-16 scroll-mt-32">
                {idx === 0 ? (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl md:text-2xl font-light leading-relaxed text-slate-700 dark:text-gray-300 mb-8">
                      {section.content}
                    </p>
                  </div>
                ) : (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 leading-8 mb-6">
                      {section.content}
                    </p>
                  </div>
                )}
                
                {/* Visual breaks for certain sections */}
                {idx === 0 && (
                   <div className="my-12 p-8 rounded-2xl bg-gray-100 dark:bg-[#1a1d23] border-l-4 border-primary shadow-sm">
                      <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
                      <p className="text-xl italic font-medium text-slate-800 dark:text-white mb-4">
                        {idea.quote?.replace(/"/g, '') || "Truth is the only anchor in a shifting sea of ideas."}
                      </p>
                      <p className="text-sm font-bold text-gray-500 dark:text-[#9dabb9] uppercase tracking-wide">
                        — {idea.author || "The Archive"}
                      </p>
                   </div>
                )}

                {section.id === 'spacetime' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-white dark:bg-[#1a1d23] p-6 rounded-2xl border border-gray-100 dark:border-[#283039] shadow-sm">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                        <span className="material-symbols-outlined">public</span>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Key Application</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Concepts that redefine our understanding of orbits, paths, and the behavior of mass in extreme gravity.
                      </p>
                    </div>
                    <div className="bg-white dark:bg-[#1a1d23] p-6 rounded-2xl border border-gray-100 dark:border-[#283039] shadow-sm">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                        <span className="material-symbols-outlined">flare</span>
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Observation</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        Light itself is not immune; massive objects act as lenses, warping the very sight of the distant universe.
                      </p>
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Default content if no sections provided */}
            {(!idea.sections || idea.sections.length === 0) && (
              <div className="py-20 text-center opacity-50 italic">
                Deep dive analysis is still being curated for this concept.
              </div>
            )}

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-[#283039]">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                    <span className="material-symbols-outlined">check</span>
                    Mark as Read
                  </button>
                  <button className="size-12 flex items-center justify-center rounded-full border border-gray-200 dark:border-[#3b4754] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#283039] transition-colors shadow-sm">
                    <span className="material-symbols-outlined">bookmark_add</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Last curated: March 2024
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar: Connected Ideas */}
          <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#9dabb9] mb-4">Connected Ideas</h3>
              <div className="flex flex-col gap-4">
                {(idea.connectedIdeas || []).map(connected => (
                  <button key={connected.id} className="group flex gap-3 items-start p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1a1d23] transition-colors text-left w-full">
                    <div className="w-16 h-16 shrink-0 rounded-lg bg-gray-200 dark:bg-[#283039] overflow-hidden shadow-sm">
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url("${connected.imageUrl || 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80'}")` }}
                      ></div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
                        {connected.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{connected.category} • Level {connected.level}</span>
                    </div>
                  </button>
                ))}
                {(!idea.connectedIdeas || idea.connectedIdeas.length === 0) && (
                   <div className="text-xs text-gray-500 italic opacity-50">Searching for connections...</div>
                )}
              </div>
            </div>

            {/* Exploration Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1d23] to-[#111418] border border-[#283039] shadow-xl">
              <h3 className="text-sm font-bold text-white mb-3">Explore Further</h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Discover how this concept interacts with modern technology, societal structures, and future possibilities.
              </p>
              <button className="w-full py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/5">
                Browse Collection
              </button>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#9dabb9] mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {(idea.tags || []).map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-gray-200 dark:bg-[#283039] text-xs font-medium text-slate-700 dark:text-gray-300 hover:bg-primary hover:text-white cursor-pointer transition-colors shadow-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Level3Entry;

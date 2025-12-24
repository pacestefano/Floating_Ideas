
import React from 'react';
import { Idea } from '../types';

interface FullEntryProps {
  idea: Idea;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  onUnlockLevel3?: () => void;
}

const FullEntry: React.FC<FullEntryProps> = ({ idea, onBack, onPrev, onNext, onUnlockLevel3 }) => {
  return (
    <div className="absolute inset-0 overflow-y-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center animate-[fadeIn_0.5s_ease-out]">
      {/* Breadcrumbs & Nav Controls Wrapper */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 shrink-0">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap gap-2 items-center text-sm">
          <button onClick={onBack} className="text-[#9dabb9] hover:text-white transition-colors font-medium">Home</button>
          <span className="text-[#9dabb9] font-medium">/</span>
          <span className="text-[#9dabb9] font-medium">{idea.category.split('&')[0].trim()}</span>
          <span className="text-[#9dabb9] font-medium">/</span>
          <span className="text-white font-medium bg-[#283039] px-2 py-0.5 rounded text-xs tracking-wide">LEVEL 2</span>
        </nav>
        
        {/* Navigation Controls */}
        <div className="flex gap-3">
          <button 
            onClick={onPrev}
            className="flex items-center justify-center h-10 px-4 rounded-full bg-[#283039] text-white hover:bg-[#3b4754] transition-colors gap-2 text-sm font-bold"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            <span className="hidden sm:inline">Previous</span>
          </button>
          <button 
            onClick={onNext}
            className="flex items-center justify-center h-10 px-4 rounded-full bg-[#283039] text-white hover:bg-[#3b4754] transition-colors gap-2 text-sm font-bold"
          >
            <span className="hidden sm:inline">Next</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Central Detail Card */}
      <article className="w-full max-w-5xl bg-[#1c2127] border border-[#283039] rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-10 min-h-[600px] shrink-0 mb-12">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        {/* Left Content: Text & Info */}
        <div className="flex-1 flex flex-col gap-8 z-10">
          {/* Header Group */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">{idea.idNumber || '#'+idea.id}</span>
              <div className="h-px w-8 bg-[#283039]"></div>
              <span className="text-[#9dabb9] text-sm">{idea.category}</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              {idea.title}
            </h1>
            {idea.quote && (
              <p className="text-primary text-xl sm:text-2xl font-light italic leading-relaxed opacity-90">
                {idea.quote}
              </p>
            )}
          </div>

          {/* Body Text */}
          <div className="flex flex-col gap-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-[65ch]">
            <p>{idea.description}</p>
            {idea.fullContent && <p>{idea.fullContent}</p>}
          </div>

          {/* Tags / Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(idea.tags || ['General']).map(tag => (
              <div key={tag} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-[#283039] bg-[#111418] px-4 hover:border-primary/50 transition-colors cursor-default">
                <span className="text-[#9dabb9] text-xs font-medium uppercase tracking-wider">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Stats & Action */}
        <div className="w-full md:w-72 lg:w-80 flex flex-col gap-4 z-10 md:border-l md:border-[#283039] md:pl-10">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {/* Origin Card */}
            <div className="flex flex-col gap-2 rounded-2xl bg-[#111418] p-4 border border-[#283039]">
              <div className="text-primary mb-1">
                <span className="material-symbols-outlined">history</span>
              </div>
              <div>
                <h2 className="text-white text-sm font-bold leading-tight">Origin</h2>
                <p className="text-[#9dabb9] text-xs mt-1">{idea.origin || 'Unknown'}</p>
              </div>
            </div>
            
            {/* Category Card */}
            <div className="flex flex-col gap-2 rounded-2xl bg-[#111418] p-4 border border-[#283039]">
              <div className="text-primary mb-1">
                <span className="material-symbols-outlined">category</span>
              </div>
              <div>
                <h2 className="text-white text-sm font-bold leading-tight">Category</h2>
                <p className="text-[#9dabb9] text-xs mt-1">{idea.category.split('&')[0]}</p>
              </div>
            </div>

            {/* Complexity Card */}
            <div className="flex flex-col gap-2 rounded-2xl bg-[#111418] p-4 border border-[#283039] col-span-2 md:col-span-1">
              <div className="text-primary mb-1">
                <span className="material-symbols-outlined">signal_cellular_alt</span>
              </div>
              <div>
                <h2 className="text-white text-sm font-bold leading-tight">Complexity</h2>
                <div className="flex gap-1 mt-2">
                  <div className={`h-1.5 w-6 rounded-full ${idea.complexity && idea.complexity >= 1 ? 'bg-primary' : 'bg-[#283039]'}`}></div>
                  <div className={`h-1.5 w-6 rounded-full ${idea.complexity && idea.complexity >= 2 ? 'bg-primary' : 'bg-[#283039]'}`}></div>
                  <div className={`h-1.5 w-6 rounded-full ${idea.complexity && idea.complexity >= 3 ? 'bg-primary' : 'bg-[#283039]'}`}></div>
                </div>
                <p className="text-[#9dabb9] text-xs mt-2">
                  {idea.complexity === 3 ? 'Advanced' : idea.complexity === 2 ? 'Intermediate' : 'Basic'}
                </p>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="mt-auto pt-8">
            <button 
              onClick={onUnlockLevel3}
              className="group relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-full h-14 pl-6 pr-2 bg-primary text-[#111418] hover:bg-[#6ab0f3] transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <span className="font-bold text-base tracking-wide z-10">Unlock Level 3 Analysis</span>
              <div className="size-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors z-10">
                <span className="material-symbols-outlined text-[20px]">lock_open</span>
              </div>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <p className="text-center text-xs text-[#9dabb9] mt-3">Includes mathematical proofs & case studies</p>
          </div>
        </div>
      </article>

      {/* Keyboard shortcut hint */}
      <div className="hidden lg:flex gap-8 mt-auto text-[#9dabb9] text-xs opacity-50 pb-12 shrink-0">
        <span className="flex items-center gap-1"><kbd className="font-sans border border-[#283039] rounded px-1.5 py-0.5 text-[10px]">←</kbd> Previous</span>
        <span className="flex items-center gap-1"><kbd className="font-sans border border-[#283039] rounded px-1.5 py-0.5 text-[10px]">→</kbd> Next</span>
      </div>
    </div>
  );
};

export default FullEntry;

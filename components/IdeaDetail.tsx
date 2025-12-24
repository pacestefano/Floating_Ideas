
import React from 'react';
import { Idea } from '../types';

interface IdeaDetailProps {
  idea: Idea;
  onClose: () => void;
  onReadFull: () => void;
}

const IdeaDetail: React.FC<IdeaDetailProps> = ({ idea, onClose, onReadFull }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4 z-50 animate-[slideUp_0.4s_ease-out]">
      <div className="bg-[#1a232e]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex items-start gap-6 pointer-events-auto transform translate-y-0 opacity-100 transition-all">
        {/* Icon/Visual */}
        <div className="hidden sm:flex shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5 items-center justify-center text-primary">
          <span className="material-symbols-outlined text-4xl">lightbulb</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{idea.title}</h3>
              <p className="text-primary text-sm font-medium mb-2">{idea.category}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
            {idea.description}
          </p>

          <div className="flex gap-3">
            <button 
              onClick={onReadFull}
              className="text-sm font-bold text-background-dark bg-white hover:bg-gray-200 px-5 py-2 rounded-full transition-colors"
            >
              Read Full Entry
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(`Check out ${idea.title} on Floating Ideas!`);
                alert('Shared link copied to clipboard!');
              }}
              className="text-sm font-bold text-white hover:bg-white/10 px-5 py-2 rounded-full border border-white/20 transition-colors"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;


import React from 'react';
import { Idea } from '../types';

interface ListViewProps {
  ideas: Idea[];
  onSelect: (idea: Idea) => void;
  searchQuery: string;
}

const ListView: React.FC<ListViewProps> = ({ ideas, onSelect, searchQuery }) => {
  const filtered = ideas.filter(idea => 
    idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    idea.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold mb-8">Encyclopedia Index</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-40">
        {filtered.map(idea => (
          <div 
            key={idea.id}
            onClick={() => onSelect(idea)}
            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all cursor-pointer hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{idea.category}</span>
              <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">arrow_outward</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
            <p className="text-white/60 text-sm line-clamp-2">{idea.description}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full py-20 text-center text-white/40">
            No ideas found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;

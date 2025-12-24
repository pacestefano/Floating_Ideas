
import React, { useState } from 'react';

interface SubmitModalProps {
  onClose: () => void;
  onSubmit: (title: string) => void;
  loading: boolean;
}

const SubmitModal: React.FC<SubmitModalProps> = ({ onClose, onSubmit, loading }) => {
  const [title, setTitle] = useState('');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-[#1a232e] border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Submit New Idea</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <p className="text-white/60 text-sm mb-6">
          Enter a concept, movement, or theory. Our AI will automatically categorize and expand it for the encyclopedia.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-white/40 uppercase mb-2">Idea Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Absurdism"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white"
            />
          </div>

          <button 
            disabled={loading || !title}
            onClick={() => onSubmit(title)}
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-background-dark font-bold disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl">auto_awesome</span>
                <span>Generate with AI</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;

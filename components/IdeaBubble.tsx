
import React, { useMemo } from 'react';
import { Idea } from '../types';

interface IdeaBubbleProps {
  idea: Idea;
  onClick: (idea: Idea) => void;
  isSelected: boolean;
}

const sizeClasses = {
  sm: 'w-24 h-24 text-xs',
  md: 'w-32 h-32 text-sm',
  lg: 'w-48 h-48 text-xl',
  xl: 'w-56 h-56 text-2xl font-semibold',
};

const IdeaBubble: React.FC<IdeaBubbleProps> = ({ idea, onClick, isSelected }) => {
  // Use useMemo to prevent re-randomizing on every render
  const animStyles = useMemo(() => {
    const duration = 8 + Math.random() * 12; // Between 8 and 20 seconds
    const delay = Math.random() * -20; // Start at a random point in the animation
    return {
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    };
  }, []);

  const style: React.CSSProperties = {
    left: `${idea.x}%`,
    top: `${idea.y}%`,
    opacity: idea.opacity ?? 1,
    ...animStyles,
  };

  return (
    <div 
      className="absolute z-10 group cursor-pointer transition-transform duration-500 ease-out animate-float"
      style={style}
      onClick={() => onClick(idea)}
    >
      <div className={`${sizeClasses[idea.size]} rounded-full border border-white/10 bubble-gradient flex items-center justify-center backdrop-blur-[2px] 
        group-hover:scale-105 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(66,153,240,0.3)] 
        ${isSelected ? 'border-primary shadow-[0_0_40px_rgba(66,153,240,0.5)] scale-110' : ''}
        transition-all duration-500 ease-out`}
      >
        <span className={`text-white text-center px-4 tracking-wide ${idea.opacity && idea.opacity < 0.6 ? 'text-white/50' : ''}`}>
          {idea.title}
        </span>
      </div>
    </div>
  );
};

export default IdeaBubble;

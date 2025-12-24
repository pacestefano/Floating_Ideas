
export type ViewType = 'canvas' | 'list' | 'full-entry' | 'level-3' | 'auth';

export interface ConnectedIdea {
  id: string;
  title: string;
  category: string;
  level: number;
  imageUrl?: string;
}

export interface IdeaSection {
  id: string;
  title: string;
  content: string;
}

export interface Idea {
  id: string;
  idNumber?: string;
  title: string;
  category: string;
  description: string;
  fullContent?: string;
  quote?: string;
  origin?: string;
  complexity?: number; // 1-3
  tags?: string[];
  x: number; // Percent 0-100
  y: number; // Percent 0-100
  size: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  
  // Level 3 specific fields
  year?: string;
  author?: string;
  readTime?: string;
  heroImage?: string;
  sections?: IdeaSection[];
  connectedIdeas?: ConnectedIdea[];
}

export interface IdeaInput {
  title: string;
  category: string;
}

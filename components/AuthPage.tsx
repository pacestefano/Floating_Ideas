
import React, { useState } from 'react';

interface AuthPageProps {
  onBack: () => void;
  onSuccess: (username: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onBack, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(username || email.split('@')[0]);
    }, 1500);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 animate-[fadeIn_0.5s_ease-out]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[#0a0f14] -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="w-full max-w-md bg-[#1a232e]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
        {/* Glow effect inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <button 
            onClick={onBack}
            className="absolute -top-2 -left-2 size-10 flex items-center justify-center rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center size-16 rounded-3xl bg-primary/20 text-primary mb-6">
              <span className="material-symbols-outlined text-4xl">local_library</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Join the Collective'}
            </h1>
            <p className="text-white/50 text-sm">
              {isLogin ? 'Access your curated library of ideas.' : 'Start contributing to the infinite encyclopedia.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Display Name</label>
                <input 
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Explorer101"
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-1">Email Address</label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Password</label>
                {isLogin && <button type="button" className="text-[10px] text-primary hover:underline">Forgot?</button>}
              </div>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary hover:bg-blue-400 text-background-dark font-bold rounded-2xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
            >
              {isLoading ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1a232e] px-4 text-white/30 tracking-widest">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="size-5" alt="Google" />
              <span className="text-sm font-medium text-white/70">Google</span>
            </button>
            <button className="h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
              <img src="https://www.svgrepo.com/show/475654/github-color.svg" className="size-5" alt="GitHub" />
              <span className="text-sm font-medium text-white/70">GitHub</span>
            </button>
          </div>

          <p className="text-center text-sm text-white/40 mt-8">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-primary font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

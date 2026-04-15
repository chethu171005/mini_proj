// src/components/RepoInput.jsx
import React from 'react';
import { Search, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';

const RepoInput = ({ url, setUrl, onAnalyze, isAnalyzing, error }) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-12 mb-4 animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-100">
          Analyze Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Repository Instantly</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto hidden sm:block leading-relaxed">
          Paste a GitHub URL to get deep AI-driven insights into the project architecture, dependencies, and code quality.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-cyan-500/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative flex items-center bg-slate-900 border border-slate-700/80 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
          <div className="flex-1 flex items-center px-4">
            <Search className={`w-5 h-5 mr-3 hidden sm:block transition-colors ${error ? 'text-red-400' : 'text-indigo-400'}`} />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !isAnalyzing && onAnalyze()}
              placeholder="https://github.com/facebook/react"
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-lg outline-none py-3"
              disabled={isAnalyzing}
            />
          </div>
          <button
            onClick={onAnalyze}
            disabled={isAnalyzing}
            className={`flex items-center justify-center min-w-[140px] gap-2 px-6 py-3 rounded-xl font-medium transition-all transform active:-translate-y-0.5 active:scale-95 ${
              isAnalyzing 
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700'
                : 'bg-gradient-to-r from-indigo-500 hover:from-indigo-600 to-purple-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/20 hover:scale-[1.02]'
            }`}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <span>Analyze</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Error Message */}
      <div className={`mt-4 flex items-center justify-center gap-2 text-sm text-red-500 font-medium transition-all duration-300 ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-2 text-sm text-slate-400 font-medium">
        <span className="flex items-center gap-2 hover:text-slate-300 transition-colors"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span> Smart insights</span>
        <span className="flex items-center gap-2 hover:text-slate-300 transition-colors"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span> Architecture review</span>
        <span className="flex items-center gap-2 hover:text-slate-300 transition-colors"><span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span> Tech stack</span>
      </div>
    </div>
  );
};

export default RepoInput;

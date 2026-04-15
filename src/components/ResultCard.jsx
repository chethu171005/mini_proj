// src/components/ResultCard.jsx
import React from 'react';
import { Sparkles, Terminal, FileText, Layers, Code, Lightbulb, Loader2 } from 'lucide-react';

const ResultCard = ({ isAnalyzing, result }) => {
  if (!isAnalyzing && !result) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl border-dashed hover:border-slate-700/80 transition-colors duration-500">
          <div className="p-12 flex flex-col items-center justify-center min-h-[350px] text-center opacity-70">
            <div className="w-20 h-20 bg-slate-800/80 rounded-full flex items-center justify-center mb-6 shadow-inner relative group border border-slate-700/50">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/40 transition-all duration-500"></div>
              <Sparkles className="w-10 h-10 text-indigo-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <p className="text-2xl text-slate-200 font-semibold mb-2">Ready to Analyze</p>
            <p className="text-slate-400 max-w-md text-base leading-relaxed">
              Enter a valid GitHub repository URL above to generate an AI-powered breakdown of its components.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-4 animate-fade-in-up">
        <div className="bg-slate-900/80 backdrop-blur-md border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl relative shadow-indigo-500/10">
          <div className="absolute top-0 inset-x-0 h-1 overflow-hidden">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-shimmer"></div>
          </div>
          <div className="p-16 flex flex-col items-center justify-center min-h-[400px] text-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full"></div>
              <Loader2 className="w-16 h-16 text-indigo-400 animate-spin relative z-10" />
            </div>
            <div className="space-y-3">
              <p className="text-xl text-slate-200 font-medium tracking-wide">AI is analyzing codebase...</p>
              <p className="text-slate-400 text-sm">Cloning repository and inspecting architecture patterns</p>
            </div>
            
            <div className="w-72 space-y-3 mt-4 opacity-70">
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-2/3 rounded-full animate-pulse blur-[1px]"></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-mono tracking-wider">
                <span className="uppercase">fetching</span>
                <span className="uppercase text-indigo-400">analyzing</span>
                <span className="uppercase">parsing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="bg-indigo-500/10 p-2.5 rounded-xl border border-indigo-500/20 shadow-inner">
          <Terminal className="w-7 h-7 text-indigo-400" />
        </div>
        <div>
          <h3 className="font-bold text-3xl text-slate-100 tracking-tight">Analysis Results</h3>
          <p className="text-sm text-slate-400 mt-1">AI-generated breakdown of the repository</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Summary Card */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/60 hover:border-indigo-500/40 rounded-2xl p-7 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors border border-indigo-500/10">
              <FileText className="w-6 h-6 text-indigo-400" />
            </div>
            <h4 className="text-xl font-semibold text-slate-200">Repository Summary</h4>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg ml-[3.25rem]">
            {result.summary}
          </p>
        </div>

        {/* Architecture Card */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/60 hover:border-purple-500/40 rounded-2xl p-7 shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col h-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-purple-500/10">
              <Layers className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-xl font-semibold text-slate-200">System Architecture</h4>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg ml-[3.25rem] flex-1">
            {result.architecture}
          </p>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/60 hover:border-cyan-500/40 rounded-2xl p-7 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/10">
              <Code className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-xl font-semibold text-slate-200">Tech Stack</h4>
          </div>
          <div className="flex flex-wrap gap-2.5 ml-[3.25rem]">
            {result.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-slate-800/80 border border-slate-600/60 rounded-lg text-sm font-semibold tracking-wide text-slate-100 hover:bg-slate-700 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Insights Card */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/60 hover:border-emerald-500/40 rounded-2xl p-7 shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/10">
              <Lightbulb className="w-6 h-6 text-emerald-400" />
            </div>
            <h4 className="text-xl font-semibold text-slate-200">Key AI Insights</h4>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-[3.25rem]">
            {result.insights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-slate-800/40 hover:bg-slate-800/80 p-4 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                </span>
                <span className="text-slate-300 font-medium leading-relaxed">
                  {insight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

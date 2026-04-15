import React from 'react';
import { Code2 } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500/20 p-2 rounded-lg">
            <Code2 className="w-5 h-5 text-indigo-400" />
          </div>
          <h1 className="font-semibold text-lg text-slate-100 tracking-tight">
            Repo AI Analyzer
          </h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors">Dashboard</a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-medium text-slate-100 transition-colors">
            <Github className="w-4 h-4" />
            <span>Connect</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

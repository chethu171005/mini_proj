// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import RepoInput from './components/RepoInput';
import ResultCard from './components/ResultCard';

const MOCK_DATA = {
  summary: "This project is an AI-powered GitHub repository analyzer that explains codebases.",
  architecture: "Frontend built with React, backend handles GitHub API and AI processing.",
  techStack: ["React", "Java", "Spring Boot", "OpenAI API"],
  insights: [
    "Well-structured project",
    "Uses modern technologies",
    "Scalable architecture"
  ]
};

function App() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    setError('');
    setResult(null);

    if (!url.trim()) {
      setError('Please enter a valid GitHub URL.');
      return;
    }

    if (!url.includes('github.com')) {
      setError('URL must be a valid github.com repository link.');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call for now
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(MOCK_DATA);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] flex flex-col font-sans selection:bg-indigo-500/30 overflow-x-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay fixed z-0"></div>
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 pb-24 flex flex-col gap-12 mt-4">
          <RepoInput 
            url={url} 
            setUrl={setUrl} 
            onAnalyze={handleAnalyze} 
            isAnalyzing={isAnalyzing}
            error={error}
          />
          <ResultCard isAnalyzing={isAnalyzing} result={result} />
        </main>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  BookOpen, Search, Sparkles, Shield, Bookmark, 
  Menu, X, Sun, CheckCircle, GraduationCap
} from 'lucide-react';
import { ExamMode, DepthMode } from '../../types';

export const Navbar: React.FC<{ onToggleMobileSidebar: () => void; isMobileSidebarOpen: boolean }> = ({
  onToggleMobileSidebar,
  isMobileSidebarOpen
}) => {
  const { 
    examMode, 
    setExamMode, 
    depthMode, 
    setDepthMode, 
    setIsSearchModalOpen,
    userState,
    setActiveTab
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileSidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div 
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-amber-600 to-orange-500 flex items-center justify-center font-bold text-white shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Shield size={22} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-amber-400 via-orange-300 to-white bg-clip-text text-transparent">
                    GS-III MASTER
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 hidden sm:inline-block">
                    UPSC & UPPSC
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                  Economy • Agriculture • Science & Tech • Environment • Disaster • Security
                </p>
              </div>
            </div>
          </div>

          {/* Center Quick Global Search */}
          <div className="flex-1 max-w-md mx-4 hidden md:block">
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-400 text-xs border border-slate-700/60 shadow-inner group transition-all"
            >
              <div className="flex items-center gap-2">
                <Search size={15} className="group-hover:text-amber-400 transition-colors" />
                <span>Smart Search across concepts, indicators, PYQs...</span>
              </div>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-700 rounded border border-slate-600 text-slate-300 font-mono">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right Mode Selectors */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchModalOpen(true)}
              className="md:hidden p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Exam Mode Toggle */}
            <div className="hidden sm:flex items-center bg-slate-800/90 rounded-lg p-0.5 border border-slate-700/80 text-xs font-medium">
              {(['common', 'upsc', 'uppsc'] as ExamMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setExamMode(mode)}
                  className={`px-2.5 py-1 rounded-md capitalize transition-all ${
                    examMode === mode 
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {mode === 'common' ? 'All GS-3' : mode.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Depth Mode: Explain Like I'm New */}
            <div className="flex items-center bg-slate-800/90 rounded-lg p-0.5 border border-slate-700/80 text-xs">
              <span className="hidden xl:inline-block px-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Depth:
              </span>
              {(['beginner', 'standard', 'advanced'] as DepthMode[]).map((depth) => (
                <button
                  key={depth}
                  onClick={() => setDepthMode(depth)}
                  title={`${depth.toUpperCase()} Mode: ${depth === 'beginner' ? 'Simple concepts' : depth === 'standard' ? 'Exam syllabus' : 'Mains analytical'}`}
                  className={`px-2 py-1 rounded-md text-[11px] capitalize transition-all ${
                    depthMode === depth
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {depth === 'beginner' ? 'Beginner' : depth === 'standard' ? 'Standard' : 'Advanced'}
                </button>
              ))}
            </div>

            {/* Quick Stats Pill */}
            <button
              onClick={() => setActiveTab('revision')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold"
              title="Topics completed & Bookmarks"
            >
              <CheckCircle size={14} className="text-emerald-400" />
              <span>{userState.completedTopics.length}</span>
              <Bookmark size={13} className="text-amber-400 ml-1" />
              <span>{userState.bookmarks.length}</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};

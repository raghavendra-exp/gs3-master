import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { currentAffairsData } from '../../data/currentAffairsData';
import { CurrentAffairItem } from '../../types';
import { 
  Radio, Calendar, ExternalLink, ArrowRight, 
  HelpCircle, Edit3, Bookmark, CheckCircle2, 
  Layers, Sparkles, Filter 
} from 'lucide-react';

export const CurrentAffairsView: React.FC = () => {
  const { userState, toggleBookmark, setActiveTab } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItemId, setSelectedItemId] = useState<string>(currentAffairsData[0].id);

  const categories = ['All', 'Economy', 'Agriculture', 'Science & Tech', 'Environment', 'Border security', 'Internal Security'];

  const filteredItems = selectedCategory === 'All'
    ? currentAffairsData
    : currentAffairsData.filter(i => i.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const currentItem = currentAffairsData.find(i => i.id === selectedItemId) || currentAffairsData[0];

  const getSourceBadgeStyle = (type: string) => {
    switch (type) {
      case 'FACT': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'DATA': return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'GOVT_CLAIM': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'RESEARCH_FINDING': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-red-950/30 to-slate-900 border border-red-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
              GS-III LIVE • Current Affairs Engine
            </span>
            <span className="text-xs text-slate-400">PIB • The Hindu • Down to Earth • PRS • RBI</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Current Affairs & Static Linker
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Never study current events in isolation. The Static Linker maps every recent development straight into its foundational concept, constitutional basis, PYQ history, and model answers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: News Items Feed */}
        <div className="lg:col-span-1 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
            Verified Developments ({filteredItems.length})
          </span>

          <div className="space-y-2">
            {filteredItems.map((item) => {
              const isSelected = item.id === currentItem.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemId(item.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-red-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-red-400 uppercase">
                      {item.category}
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border uppercase font-bold ${getSourceBadgeStyle(item.sourceType)}`}>
                      {item.sourceType}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-1.5 border-t border-slate-800/60">
                    <span>{item.source}</span>
                    <span className="font-mono">{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Full Item + Signature Static Linker Flow */}
        <div className="lg:col-span-2 space-y-5">
          
          {/* Main Story Header */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                  {currentItem.category}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${getSourceBadgeStyle(currentItem.sourceType)}`}>
                  Type: {currentItem.sourceType}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Calendar size={13} />
                <span>{currentItem.date}</span>
                <span>(Verified: {currentItem.lastVerified})</span>
              </div>
            </div>

            <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
              {currentItem.title}
            </h2>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentItem.summary}
            </p>

            {/* Key Data Points */}
            <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-1 text-xs">
              <strong className="text-amber-400 font-bold block mb-1">Key Data & Technological Parameters:</strong>
              <ul className="space-y-1 text-slate-300">
                {currentItem.keyDataPoints.map((dp, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">⚡</span>
                    <span>{dp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              <span>Authoritative Source: <strong className="text-slate-300">{currentItem.source}</strong></span>
              <button
                onClick={() => toggleBookmark(currentItem.id)}
                className="text-xs font-semibold text-amber-400 hover:underline"
              >
                {userState.bookmarks.includes(currentItem.id) ? '★ Bookmarked' : '☆ Bookmark Item'}
              </button>
            </div>
          </div>

          {/* SIGNATURE STATIC LINKER FLOWCHART */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-red-500/40 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles size={18} className="text-red-400" />
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  Current Affairs → Static Linker Engine
                </h3>
                <span className="text-[11px] text-slate-400">Connecting news directly to syllabus, constitution, PYQs and answer writing</span>
              </div>
            </div>

            {/* Linker Steps */}
            <div className="space-y-3 text-xs">
              
              {/* Step 1: Core Concept */}
              <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-0.5">
                  1. Foundational Concept
                </span>
                <span className="text-white font-medium">{currentItem.staticLinker.coreConcept}</span>
              </div>

              {/* Step 2: GS-III Syllabus Mapping */}
              <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-0.5">
                  2. Official GS-III Syllabus Line
                </span>
                <span className="text-slate-300">{currentItem.staticLinker.gsSyllabusTopic}</span>
              </div>

              {/* Step 3: Constitutional / Legal Foundation */}
              <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block mb-0.5">
                  3. Constitutional / Statutory Legal Foundation
                </span>
                <span className="text-slate-300">{currentItem.staticLinker.constitutionalOrLegalBasis}</span>
              </div>

              {/* Step 4: Past Year Question Linkage */}
              <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                  4. Past Year Question (PYQ) Precedent
                </span>
                <span className="text-amber-200/90 font-mono text-[11px]">{currentItem.staticLinker.pyqRef}</span>
              </div>

              {/* Step 5: Prelims Question Prompt */}
              <div className="p-3 rounded-lg bg-slate-800/90 border border-slate-700">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                  5. Prelims MCQ Formulation
                </span>
                <p className="text-slate-300 italic">{currentItem.staticLinker.prelimsPracticePrompt}</p>
              </div>

              {/* Step 6: Mains Answer Writing Prompt */}
              <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-800/40">
                <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block mb-0.5">
                  6. 15-Mark Mains Question Prompt
                </span>
                <p className="text-white font-medium mb-2">{currentItem.staticLinker.mainsQuestionPrompt}</p>
                <div className="text-[11px] text-slate-300 pt-2 border-t border-red-800/30">
                  <strong className="text-amber-400">Diagram to Draw: </strong>
                  {currentItem.staticLinker.diagramSuggestion}
                </div>
              </div>

            </div>

            {/* Jump to Mains Lab Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveTab('mains')}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Write Answer in Mains Lab</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

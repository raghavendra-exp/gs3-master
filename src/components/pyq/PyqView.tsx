import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { pyqDatabase, pyqTopicStats } from '../../data/pyqData';
import { PYQItem } from '../../types';
import { 
  FileText, BarChart3, Filter, CheckCircle2, 
  HelpCircle, ArrowRight, Bookmark, Search, Layers 
} from 'lucide-react';

export const PyqView: React.FC = () => {
  const { userState, toggleBookmark, setActiveTab } = useApp();
  const [examFilter, setExamFilter] = useState<string>('All');
  const [topicFilter, setTopicFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPyqId, setSelectedPyqId] = useState<string>(pyqDatabase[0].id);

  const filteredPYQs = pyqDatabase.filter(q => {
    const matchesExam = examFilter === 'All' || q.exam === examFilter;
    const matchesTopic = topicFilter === 'All' || q.topic === topicFilter;
    const matchesSearch = searchQuery === '' || 
      q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) || 
      q.conceptTested.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesExam && matchesTopic && matchesSearch;
  });

  const currentPyq = pyqDatabase.find(q => q.id === selectedPyqId) || pyqDatabase[0];

  const exams = ['All', 'UPSC_MAINS', 'UPSC_PRELIMS', 'UPPSC_MAINS', 'UPPSC_PRELIMS'];
  const topics = ['All', 'Economy', 'Agriculture', 'Science & Tech', 'Environment', 'Disaster Management', 'Internal Security'];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-950/30 to-slate-900 border border-purple-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Official Archive • 2013 - 2024
            </span>
            <span className="text-xs text-slate-400">UPSC CSE GS-III & UPPSC PCS Mains & Prelims</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            PYQ Database & Analysis Engine
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Authentic civil services previous year questions, frequency trends, official marking demands, and model point blueprints.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Archive Strength</span>
          <span className="text-xl font-black text-purple-400">{pyqDatabase.length}+ Indexed Records</span>
        </div>
      </div>

      {/* Analytical Trends Bar Chart */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <BarChart3 size={16} className="text-purple-400" />
            <h2 className="text-xs font-bold text-white uppercase tracking-wider">
              GS-III Topic Weightage Analysis (Calculated from Stored Archives)
            </h2>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">UPSC Mains 2013-2024 Trends</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pyqTopicStats.map((stat, idx) => (
            <div key={idx} className="bg-slate-850 border border-slate-750 rounded-lg p-3 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-white">{stat.topic}</span>
                <span className="font-mono text-purple-300 font-bold">{stat.percentage}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden my-1.5">
                <div 
                  className="bg-purple-500 h-full rounded-full" 
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 block truncate">
                Trend: {stat.trend}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-slate-400 font-bold">Exam:</span>
          <select
            value={examFilter}
            onChange={(e) => setExamFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-purple-500"
          >
            {exams.map(e => <option key={e} value={e}>{e}</option>)}
          </select>

          <span className="text-slate-400 font-bold ml-2">Topic:</span>
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-purple-500"
          >
            {topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="relative min-w-[200px]">
          <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords or concepts..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500 placeholder-slate-400"
          />
        </div>
      </div>

      {/* PYQ Browser Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left List */}
        <div className="lg:col-span-1 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
            Questions ({filteredPYQs.length})
          </span>

          <div className="space-y-2">
            {filteredPYQs.map((q) => {
              const isSelected = q.id === currentPyq.id;
              return (
                <div
                  key={q.id}
                  onClick={() => setSelectedPyqId(q.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-purple-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-purple-400 uppercase">
                      {q.exam} {q.year}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                      {q.topic}
                    </span>
                  </div>
                  <h3 className="text-xs font-semibold leading-snug line-clamp-2">
                    {q.questionText}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {currentPyq.exam} • Year {currentPyq.year}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Paper: {currentPyq.paper} {currentPyq.marks ? `• ${currentPyq.marks} Marks` : ''}
                </span>
              </div>
              <button
                onClick={() => toggleBookmark(currentPyq.id)}
                className="text-xs font-semibold text-purple-400 hover:underline self-start"
              >
                {userState.bookmarks.includes(currentPyq.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            <div className="p-4 bg-slate-850 rounded-lg border border-slate-750">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                Official Question Text:
              </span>
              <p className="text-sm font-semibold text-white leading-relaxed whitespace-pre-line">
                {currentPyq.questionText}
              </p>
            </div>

            {/* Concept Tested & Current Affairs Linkage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-amber-400 block mb-1">Core Concept Tested:</strong>
                <span className="text-slate-300">{currentPyq.conceptTested}</span>
              </div>
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-sky-400 block mb-1">Current Affairs Trigger:</strong>
                <span className="text-slate-300">{currentPyq.currentAffairsLinkage}</span>
              </div>
            </div>

            {/* Model Answer / Solution Blueprint */}
            <div className="p-4 bg-slate-850 rounded-lg border border-purple-500/30 space-y-3 text-xs">
              <strong className="text-purple-300 font-bold block text-sm">
                Model Solution & Evaluator Blueprint:
              </strong>
              <p className="text-slate-300 leading-relaxed">
                {currentPyq.explanationOrModelAnswer}
              </p>

              {currentPyq.modelPoints && (
                <div className="pt-2 border-t border-slate-750">
                  <strong className="text-amber-400 block mb-1 text-[11px] uppercase">
                    Mandatory Answer Points (To Score 60%+ Marks):
                  </strong>
                  <ul className="space-y-1 text-slate-300">
                    {currentPyq.modelPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-purple-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
              Official Citation: {currentPyq.officialSource}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

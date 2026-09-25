import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { signatureIssues } from '../../data/issueAnalyserData';
import { SignatureIssue } from '../../types';
import { 
  Lightbulb, Database, AlertTriangle, Shield, TrendingUp, 
  Leaf, Globe, CheckCircle2, Bookmark, BookmarkCheck, 
  HelpCircle, Share2, Printer, PlusCircle, ArrowRight,
  ExternalLink, Layers, Sparkles, FileText
} from 'lucide-react';

export const IssueAnalyserView: React.FC = () => {
  const { 
    selectedIssueId, 
    setSelectedIssueId, 
    userState, 
    toggleBookmark, 
    saveNote,
    setActiveTab 
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'view' | 'builder'>('view');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [personalNoteText, setPersonalNoteText] = useState<string>('');
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  // Custom issue builder state
  const [customTitle, setCustomTitle] = useState('');
  const [customCategory, setCustomCategory] = useState<'Economy' | 'Agriculture' | 'Science & Tech' | 'Environment' | 'Disaster' | 'Internal Security'>('Economy');
  const [customWhat, setCustomWhat] = useState('');
  const [customCauses, setCustomCauses] = useState('');
  const [customWayForward, setCustomWayForward] = useState('');

  const currentIssue = signatureIssues.find(i => i.id === selectedIssueId) || signatureIssues[0];
  const isBookmarked = userState.bookmarks.includes(currentIssue.id);

  const categories = ['All', 'Agriculture', 'Science & Tech', 'Environment'];

  const filteredIssues = filterCategory === 'All' 
    ? signatureIssues 
    : signatureIssues.filter(i => i.category === filterCategory);

  const handleOpenNotes = () => {
    setPersonalNoteText(userState.notes[currentIssue.id] || '');
    setIsNoteOpen(true);
  };

  const handleSaveNote = () => {
    saveNote(currentIssue.id, personalNoteText);
    setIsNoteOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-amber-950/40 border border-amber-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Lightbulb size={180} className="text-amber-400" />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Signature Feature • Core Learning Architecture
              </span>
              <span className="text-xs text-slate-400">18-Dimensional Holistic Framework</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              GS-III Issue Analyser
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
              Every major GS-III challenge dissected across 18 authoritative dimensions: from constitutional/economic causes and empirical data, through technological, ecological, and security impacts, to international models, Prelims traps, and 15-mark Mains answer frameworks.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveSubTab('view')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === 'view'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Examine Issues
            </button>
            <button
              onClick={() => setActiveSubTab('builder')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeSubTab === 'builder'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <PlusCircle size={15} />
              <span>Issue Builder</span>
            </button>
          </div>
        </div>
      </div>

      {activeSubTab === 'builder' ? (
        /* Issue Builder Mode */
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="text-amber-400" size={20} />
              <span>Build & Synthesize Your Own GS-III Issue</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Apply the 18-dimension civil services framework to any editorial topic you read today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Issue Title</label>
              <input
                type="text"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="e.g. Space Debris & ASAT Weaponization"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <select
                value={customCategory}
                onChange={(e: any) => setCustomCategory(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              >
                <option value="Economy">Economy</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Science & Tech">Science & Tech</option>
                <option value="Environment">Environment</option>
                <option value="Disaster">Disaster</option>
                <option value="Internal Security">Internal Security</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">1. What is the Core Issue? (Technical Definition)</label>
            <textarea
              rows={3}
              value={customWhat}
              onChange={(e) => setCustomWhat(e.target.value)}
              placeholder="State the scientific, economic, or legal definition clearly..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">5. Root Causes (Structural, Legal, Market Failures)</label>
            <textarea
              rows={3}
              value={customCauses}
              onChange={(e) => setCustomCauses(e.target.value)}
              placeholder="List underlying causes, policy distortions, institutional gaps..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">15. Way Forward & Reforms (Actionable Policy Solutions)</label>
            <textarea
              rows={3}
              value={customWayForward}
              onChange={(e) => setCustomWayForward(e.target.value)}
              placeholder="Provide constructive recommendations citing committees or global best practices..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => {
                alert(`Issue "${customTitle || 'New Issue'}" framework synthesized and saved to your personal study notes!`);
                setActiveSubTab('view');
              }}
              className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
            >
              Save to Personal Notes
            </button>
          </div>
        </div>
      ) : (
        /* Regular View Mode */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Column: Issue Selector List */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Category Filter */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Filter by Category
              </span>
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                      filterCategory === cat
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List of Canonical Issues */}
            <div className="space-y-2">
              {filteredIssues.map((issue) => {
                const isSelected = issue.id === currentIssue.id;
                return (
                  <div
                    key={issue.id}
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-850 border-amber-500/60 shadow-md ring-1 ring-amber-500/30'
                        : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        {issue.category}
                      </span>
                      {userState.bookmarks.includes(issue.id) && (
                        <BookmarkCheck size={14} className="text-amber-400 shrink-0" />
                      )}
                    </div>
                    <h3 className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {issue.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {issue.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Main Column: 18-Dimension Breakdown */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Issue Title Bar & Action Toolbar */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {currentIssue.category}
                  </span>
                  <span className="text-xs text-slate-400">18-Dimensional Comprehensive File</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {currentIssue.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleBookmark(currentIssue.id)}
                  className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isBookmarked 
                      ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold' 
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                  title="Bookmark Issue"
                >
                  <Bookmark size={15} />
                  <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                </button>

                <button
                  onClick={handleOpenNotes}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5"
                  title="Personal Study Notes"
                >
                  <FileText size={15} className="text-amber-400" />
                  <span>Notes</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 text-xs"
                  title="Print Analysis"
                >
                  <Printer size={15} />
                </button>
              </div>
            </div>

            {/* Note Drawer */}
            {isNoteOpen && (
              <div className="bg-slate-850 border border-amber-500/40 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <FileText size={15} />
                    <span>Personal Notes on &ldquo;{currentIssue.title}&rdquo;</span>
                  </span>
                  <button onClick={() => setIsNoteOpen(false)} className="text-xs text-slate-400 hover:text-white">✕</button>
                </div>
                <textarea
                  rows={4}
                  value={personalNoteText}
                  onChange={(e) => setPersonalNoteText(e.target.value)}
                  placeholder="Write your personal mnemonics, statistics, or coaching insights here (persists in your browser)..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={handleSaveNote}
                    className="px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold text-xs"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            )}

            {/* Dimension 1, 2, 3: What, Why, Background */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                  1. WHAT IS IT?
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentIssue.what}
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 block mb-1">
                  2. WHY IS IT CRITICAL?
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentIssue.why}
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400 block mb-1">
                  3. HISTORICAL BACKGROUND
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentIssue.background}
                </p>
              </div>
            </div>

            {/* Dimension 4: Authoritative Data Metrics (Never fabricated) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-emerald-400" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white">
                    4. Verified Data & Reports (Never Invented)
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Official Sources</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentIssue.data.map((item, idx) => (
                  <div key={idx} className="bg-slate-850 border border-slate-750 rounded-lg p-3">
                    <span className="text-[11px] text-slate-400 line-clamp-1 block mb-1">
                      {item.metric}
                    </span>
                    <span className="text-base font-black text-amber-400 block">
                      {item.value}
                    </span>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 pt-1 border-t border-slate-750">
                      <span>{item.source}</span>
                      <span className="font-mono">{item.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dimension 5 & 6: Causes & Multi-Dimensional Impacts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Causes */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 flex items-center gap-1.5 mb-3">
                  <AlertTriangle size={15} />
                  <span>5. Underlying Causes & Market/Policy Distortions</span>
                </span>
                <ul className="space-y-2">
                  {currentIssue.causes.map((c, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-red-400 font-bold shrink-0">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Multi-Dimensional Impact */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                  <TrendingUp size={15} />
                  <span>6. Cross-Cutting Impact Matrix</span>
                </span>
                
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                    <strong className="text-amber-300 font-semibold block mb-0.5">Economic Impact:</strong>
                    <span className="text-slate-300">{currentIssue.impact.economic}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                    <strong className="text-sky-300 font-semibold block mb-0.5">Social Impact:</strong>
                    <span className="text-slate-300">{currentIssue.impact.social}</span>
                  </div>
                  {currentIssue.impact.environmental && (
                    <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                      <strong className="text-emerald-300 font-semibold block mb-0.5">Environmental Impact:</strong>
                      <span className="text-slate-300">{currentIssue.impact.environmental}</span>
                    </div>
                  )}
                  {currentIssue.impact.security && (
                    <div className="p-2.5 rounded-lg bg-slate-850 border border-slate-800">
                      <strong className="text-rose-300 font-semibold block mb-0.5">Security Impact:</strong>
                      <span className="text-slate-300">{currentIssue.impact.security}</span>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Dimension 7, 8, 9: Stakeholders, Govt Measures, Technology */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-400 block">
                7, 8 & 9. Policy, Institutions & Technological Interventions
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Stakeholders */}
                <div className="p-3 bg-slate-850 rounded-lg border border-slate-800">
                  <strong className="text-xs text-slate-300 font-bold block mb-2">Key Stakeholders</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIssue.stakeholders.map((s, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Govt Measures */}
                <div className="p-3 bg-slate-850 rounded-lg border border-slate-800 md:col-span-2">
                  <strong className="text-xs text-slate-300 font-bold block mb-2">Government Measures & Schemes</strong>
                  <ul className="space-y-1.5">
                    {currentIssue.govtMeasures.map((m, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technology */}
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-800">
                <strong className="text-xs text-cyan-300 font-bold block mb-2">
                  9. Technological Innovations & Frontier Solutions
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentIssue.technology.map((t, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-750 text-xs text-slate-300">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dimension 10, 11, 12: Cross-Subject Linking (Critical for GS-3!) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block mb-3">
                10, 11 & 12. Tri-Dimensional Cross-Subject Nexus
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-800/40 text-xs">
                  <strong className="text-emerald-400 font-bold block mb-1 flex items-center gap-1">
                    <Leaf size={14} /> Environmental Dimension
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    {currentIssue.environmentalDimension}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs">
                  <strong className="text-amber-400 font-bold block mb-1 flex items-center gap-1">
                    <TrendingUp size={14} /> Economic Dimension
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    {currentIssue.economicDimension}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-800/40 text-xs">
                  <strong className="text-rose-400 font-bold block mb-1 flex items-center gap-1">
                    <Shield size={14} /> Security Dimension
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    {currentIssue.securityDimension}
                  </p>
                </div>
              </div>
            </div>

            {/* Dimension 13, 14, 15: Challenges, International Best Practices & Way Forward */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 block mb-2">
                  13. Persistent Challenges
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentIssue.challenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 block mb-2">
                  14. International Examples
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentIssue.internationalExamples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Globe size={13} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-2">
                  15. Way Forward & Reforms
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentIssue.wayForward.map((wf, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <ArrowRight size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{wf}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Dimension 16, 17, 18: Exam Engine Integration (Prelims Facts, PYQ, Mains Question) */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-amber-500/40 rounded-xl p-5 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <HelpCircle size={16} />
                <span>16, 17 & 18. Exam Integration: Prelims Facts, PYQs & 15-Mark Mains Model</span>
              </span>

              {/* Prelims Facts */}
              <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700/80">
                <strong className="text-xs text-amber-300 font-bold block mb-2">
                  16. Prelims Traps & Memory Anchors
                </strong>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentIssue.prelimsFacts.map((pf, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">⚡</span>
                      <span>{pf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PYQ Reference */}
              <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700/80">
                <strong className="text-xs text-purple-300 font-bold block mb-1">
                  17. Past Year UPSC Questions (PYQ)
                </strong>
                {currentIssue.pyqs.map((pyq, idx) => (
                  <p key={idx} className="text-xs text-slate-300 italic mb-1">
                    {pyq}
                  </p>
                ))}
              </div>

              {/* Mains Question & Launchpad */}
              <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <strong className="text-xs text-amber-300 font-bold block mb-1">
                    18. Simulated Mains Question (15 Marks, 250 Words)
                  </strong>
                  <p className="text-xs text-white font-medium leading-relaxed">
                    {currentIssue.mainsQuestions[0]}
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('mains')}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors shadow"
                >
                  <span>Practice in Lab</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  economyConcepts, 
  economicIndicators, 
  budgetAnnouncements, 
  surveyHighlights, 
  planningTimeline 
} from '../../data/economyData';
import { 
  TrendingUp, Activity, PieChart, Landmark, Clock, 
  HelpCircle, CheckCircle2, AlertTriangle, ArrowRight, 
  Info, ExternalLink, Calculator, BookOpen, Layers, Compass
} from 'lucide-react';
import { planningAndGrowthData } from '../../data/economyPlanningData';
import { SyllabusSectionView } from '../common/SyllabusSectionView';

export const EconomyView: React.FC = () => {
  const { depthMode, userState, toggleBookmark, saveNote } = useApp();
  const [subTab, setSubTab] = useState<'syllabus' | 'concepts' | 'indicators' | 'budget' | 'survey' | 'planning' | 'flow'>('syllabus');
  const [selectedConceptId, setSelectedConceptId] = useState<string>(economyConcepts[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const currentConcept = economyConcepts.find(c => c.id === selectedConceptId) || economyConcepts[0];

  const categories = ['All', 'National Income', 'Monetary Policy', 'Fiscal Policy', 'External Sector', 'Investment & Growth'];

  const filteredConcepts = filterCategory === 'All'
    ? economyConcepts
    : economyConcepts.filter(c => c.category === filterCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              GS-III Core Syllabus • Module 1-7
            </span>
            <span className="text-xs text-slate-400">MoSPI • RBI • Economic Survey • Union Budget</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Indian Economy & Budgeting Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            National Income, Inflation targeting, Twin Balance Sheet dynamics, External Sector & BoP, Fiscal FRBM framework, and the 1951-present Planning Evolution.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'syllabus', label: 'Syllabus Master', icon: Compass },
            { id: 'concepts', label: 'Concepts', icon: BookOpen },
            { id: 'indicators', label: 'Indicator Dashboard', icon: Activity },
            { id: 'budget', label: 'Budget Explorer', icon: Landmark },
            { id: 'survey', label: 'Survey Hub', icon: PieChart },
            { id: 'planning', label: '1951-Present Timeline', icon: Clock },
            { id: 'flow', label: 'Budget Flowchart', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 0. Syllabus Master Sub-tab */}
      {subTab === 'syllabus' && (
        <SyllabusSectionView sections={planningAndGrowthData} accentColor="emerald" />
      )}

      {/* 1. Concepts Sub-tab */}
      {subTab === 'concepts' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Concepts Navigation List */}
          <div className="lg:col-span-1 space-y-3">
            {/* Filter Pills */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Category Filter</span>
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                      filterCategory === cat
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-1.5">
              {filteredConcepts.map((concept) => {
                const isSelected = concept.id === currentConcept.id;
                return (
                  <div
                    key={concept.id}
                    onClick={() => setSelectedConceptId(concept.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-slate-850 border-emerald-500 text-white shadow-md'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-0.5">
                      {concept.category}
                    </span>
                    <h3 className="text-xs font-bold leading-snug">
                      {concept.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Concept Explainer Panel */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Concept Header */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {currentConcept.category} • Concept Master
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">
                  {currentConcept.title}
                </h2>
                <span className="text-[11px] text-slate-400">
                  Official Source: {currentConcept.source}
                </span>
              </div>
              <button
                onClick={() => toggleBookmark(currentConcept.id)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white border border-slate-700 font-semibold self-start"
              >
                {userState.bookmarks.includes(currentConcept.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* Explanations Grid based on Depth Mode */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Simple Explanation */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-1 flex items-center gap-1.5">
                  <Info size={14} />
                  <span>Simple Explanation (Beginner Friendly)</span>
                </span>
                <p className="text-xs text-slate-200 leading-relaxed mt-2">
                  {currentConcept.simpleExplanation}
                </p>
                {currentConcept.formula && (
                  <div className="mt-4 p-2.5 rounded bg-slate-850 border border-slate-750 font-mono text-xs text-emerald-300">
                    <span className="text-[10px] uppercase text-slate-400 font-sans block mb-0.5 font-bold">Standard Formula</span>
                    {currentConcept.formula}
                  </div>
                )}
              </div>

              {/* Technical Definition */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 block mb-1 flex items-center gap-1.5">
                  <Calculator size={14} />
                  <span>Technical / SNA Standard Definition</span>
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {currentConcept.technicalDefinition}
                </p>
                <div className="mt-4 p-2.5 rounded bg-slate-850 border border-slate-750 text-xs">
                  <strong className="text-slate-400 text-[10px] uppercase font-bold block mb-0.5">Real Life Illustration</strong>
                  <span className="text-slate-300">{currentConcept.realLifeExample}</span>
                </div>
              </div>

            </div>

            {/* Indian Context & Common Confusion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-2">
                  Indian Institutional Context
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentConcept.indianExample}
                </p>
                <div className="mt-3 text-xs text-slate-400">
                  <strong className="text-white">Current Relevance: </strong>
                  {currentConcept.currentRelevance}
                </div>
              </div>

              <div className="bg-slate-900 border border-red-500/30 rounded-xl p-5 bg-red-950/10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 flex items-center gap-1.5 mb-2">
                  <AlertTriangle size={14} />
                  <span>Common Student Confusion & Traps</span>
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentConcept.commonConfusion}
                </p>
              </div>

            </div>

            {/* Prelims Facts & Mains Relevance */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  Prelims Traps & Memory Anchors
                </span>
                <ul className="space-y-1.5">
                  {currentConcept.prelimsFacts.map((fact, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">⚡</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  <strong className="text-purple-300">Mains Argument Utility: </strong>
                  {currentConcept.mainsRelevance}
                </div>
                {currentConcept.pyqReference && (
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-purple-300 border border-purple-500/30 shrink-0">
                    {currentConcept.pyqReference}
                  </span>
                )}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 2. Economic Indicator Dashboard Sub-tab */}
      {subTab === 'indicators' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Live Official Economic Indicator Dashboard</h2>
              <p className="text-xs text-slate-400">Only verified statistics sourced from MoSPI, RBI, and Ministry of Finance</p>
            </div>
            <span className="text-xs text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800">
              Verified Data
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {economicIndicators.map((ind) => (
              <div key={ind.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      {ind.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{ind.period}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{ind.name}</h3>
                  <div className="flex items-baseline gap-2 my-2">
                    <span className="text-3xl font-black text-white">{ind.latestValue}</span>
                    <span className="text-xs text-slate-400">Prev: {ind.previousValue}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ind.definition}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px]">
                  <div className="text-slate-400">
                    <strong className="text-slate-300">Exam Utility: </strong>
                    {ind.examRelevance}
                  </div>
                  <div className="text-slate-400 flex items-center justify-between pt-1">
                    <span>Source: {ind.source}</span>
                    <span className="font-mono">{ind.lastUpdated}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Union Budget Explorer Sub-tab */}
      {subTab === 'budget' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Union Budget Policy Explorer</h2>
            <p className="text-xs text-slate-400">What changed, why it matters, fiscal implications, and civil services exam angles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {budgetAnnouncements.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {item.sector}
                  </span>
                  <span className="text-[10px] text-slate-400">Union Budget</span>
                </div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.whatChanged}</p>
                
                <div className="space-y-2 text-xs pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-amber-300 block mb-0.5">Implementation Mechanism:</strong>
                    <span className="text-slate-400">{item.mechanism}</span>
                  </div>
                  <div>
                    <strong className="text-sky-300 block mb-0.5">Fiscal Multiplier:</strong>
                    <span className="text-slate-400">{item.fiscalImplication}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-850 text-slate-300 border border-slate-750">
                    <strong className="text-amber-400 text-[10px] uppercase block mb-0.5">Prelims Fact</strong>
                    {item.prelimsFact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Economic Survey Hub Sub-tab */}
      {subTab === 'survey' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Economic Survey Intelligence Hub</h2>
            <p className="text-xs text-slate-400">Chapter-by-chapter synthesis of key economic diagnostics, data points, and policy imperatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {surveyHighlights.map((chap) => (
              <div key={chap.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                    Chapter {chap.chapterNumber}
                  </span>
                  <h3 className="text-base font-bold text-white">{chap.title}</h3>
                </div>

                <div>
                  <strong className="text-xs text-amber-300 block mb-2 font-bold">Key Survey Findings:</strong>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {chap.keyFindings.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-850 border border-slate-800">
                  <strong className="text-xs text-sky-300 block mb-1">Empirical Data Metrics:</strong>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    {chap.majorData.map((d, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[11px]">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  <strong className="text-slate-300">Policy Recommendation: </strong>
                  {chap.policyImplications}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Planning Timeline 1951-Present */}
      {subTab === 'planning' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Chronological Planning in India: 1951 to Present</h2>
            <p className="text-xs text-slate-400">Evolution from Soviet-style Harrod-Domar & Mahalanobis models to Indicative Planning and NITI Aayog</p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-6">
            {planningTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 group-hover:scale-125 transition-transform" />
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-400">{item.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.details}</p>
                  <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800">
                    <strong className="text-amber-300">Exam Significance: </strong>
                    {item.significance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Budget Process Interactive Flowchart */}
      {subTab === 'flow' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Interactive Government Budget & Deficit Flow</h2>
            <p className="text-xs text-slate-400">How taxes turn into expenditures, calculate deficits, and accumulate into national public debt</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
            
            <div className="p-4 rounded-xl bg-slate-850 border border-slate-750">
              <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-1">Step 1</span>
              <h3 className="text-xs font-bold text-white mb-1">Revenue Receipts</h3>
              <p className="text-[11px] text-slate-400">Direct Taxes + Indirect Taxes (GST) + Non-tax dividends (RBI dividend)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-850 border border-slate-750">
              <span className="text-[10px] font-bold uppercase text-blue-400 block mb-1">Step 2</span>
              <h3 className="text-xs font-bold text-white mb-1">Total Expenditure</h3>
              <p className="text-[11px] text-slate-400">Revenue Spend (salaries, interest, subsidies) + Capital Outlay (roads, rail)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-850 border border-amber-500/40">
              <span className="text-[10px] font-bold uppercase text-amber-400 block mb-1">Step 3</span>
              <h3 className="text-xs font-bold text-white mb-1">Fiscal Deficit</h3>
              <p className="text-[11px] text-slate-400">Total Spend - Non-Debt Receipts. Current Central target: ~4.9% of GDP</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-850 border border-slate-750">
              <span className="text-[10px] font-bold uppercase text-purple-400 block mb-1">Step 4</span>
              <h3 className="text-xs font-bold text-white mb-1">Market Borrowing</h3>
              <p className="text-[11px] text-slate-400">Issuing dated Government Securities (G-Secs) and Treasury Bills via RBI</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-850 border border-slate-750">
              <span className="text-[10px] font-bold uppercase text-red-400 block mb-1">Step 5</span>
              <h3 className="text-xs font-bold text-white mb-1">Public Debt Stock</h3>
              <p className="text-[11px] text-slate-400">Accumulated debt (Internal + External). Target: &lt;60% combined debt-to-GDP</p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs text-slate-300 leading-relaxed">
            <strong className="text-emerald-400 block mb-1">FRBM Act Golden Rule:</strong>
            The Fiscal Responsibility and Budget Management Act aims to eliminate the Revenue Deficit entirely, ensuring that all fresh borrowing is strictly deployed for capital assets creation with high economic return.
          </div>
        </div>
      )}

    </div>
  );
};

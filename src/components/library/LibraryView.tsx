import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  dataBankItems, 
  reportItems, 
  committeeItems, 
  caseStudyLibrary, 
  internationalComparisons 
} from '../../data/libraryData';
import { 
  Database, FileText, Users, Award, 
  Globe, ExternalLink, Bookmark, Search, CheckCircle2 
} from 'lucide-react';

export const LibraryView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'databank' | 'reports' | 'committees' | 'cases' | 'international'>('databank');
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/30 to-slate-900 border border-teal-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Mains Enrichment Hub • Module 76-80
            </span>
            <span className="text-xs text-slate-400">Official Data Bank • Landmark Reports • Committees • Global Models</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Data Bank, Reports & Case Studies
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Authoritative empirical statistics with last-verified dates, key findings of landmark official commissions, and high-impact grassroots case studies.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'databank', label: 'Data Bank', icon: Database },
            { id: 'reports', label: 'Reports', icon: FileText },
            { id: 'committees', label: 'Committees', icon: Users },
            { id: 'cases', label: 'Case Studies', icon: Award },
            { id: 'international', label: 'International', icon: Globe }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 shadow-md'
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

      {/* 1. Official Data Bank Sub-tab */}
      {subTab === 'databank' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">GS-III Official Data Bank</h2>
              <p className="text-xs text-slate-400">Strictly verified, dated figures ready to enrich Mains answers</p>
            </div>
            <span className="text-xs text-emerald-400 font-mono px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-800">
              Verified & Dated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataBankItems.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{item.year}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white leading-snug">{item.metric}</h3>
                  <div className="text-2xl font-black text-amber-400 my-2 font-mono">
                    {item.value}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.definition}</p>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-1 text-xs">
                  <div className="text-slate-300">
                    <strong className="text-teal-300">Exam Utility: </strong>
                    {item.examRelevance}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                    <span>Source: {item.source}</span>
                    <span>Verified: {item.lastVerified}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Official Reports Database Sub-tab */}
      {subTab === 'reports' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Landmark Official Reports Database</h2>
            <p className="text-xs text-slate-400">Synthesized findings, empirical metrics, and core Mains arguments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportItems.map((rep) => (
              <div key={rep.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-teal-400">{rep.publisher}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    Year: {rep.year}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{rep.reportName}</h3>

                <div>
                  <strong className="text-amber-300 block mb-1">Major Findings:</strong>
                  <ul className="space-y-1 text-slate-300">
                    {rep.majorFindings.map((f, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <CheckCircle2 size={13} className="text-teal-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-1">
                  <strong className="text-sky-300 block text-[11px] uppercase">Mains Argumentative Angles:</strong>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    {rep.mainsArguments.map((arg, i) => (
                      <li key={i}>• {arg}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Landmark Committees Sub-tab */}
      {subTab === 'committees' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Landmark Government Committees & Commissions</h2>
            <p className="text-xs text-slate-400">Key recommendations, implementation status, and associated past year exam questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {committeeItems.map((comm) => (
              <div key={comm.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-teal-400">Year {comm.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Chair: {comm.chairperson.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{comm.name}</h3>
                  <span className="text-slate-400 block mt-0.5">{comm.subject}</span>

                  <div className="mt-3 space-y-1.5">
                    <strong className="text-amber-300 block">Key Recommendations:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {comm.keyRecommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-teal-400 font-bold">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-1 text-[11px]">
                  <div>
                    <strong className="text-emerald-400">Implementation: </strong>
                    <span className="text-slate-400">{comm.implementationStatus}</span>
                  </div>
                  <div className="text-slate-500">
                    Source: {comm.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Case Studies Sub-tab */}
      {subTab === 'cases' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">GS-III Grassroots Case Studies Compendium</h2>
            <p className="text-xs text-slate-400">Problem, intervention, technology deployed, and replicable governance lessons</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudyLibrary.map((cs) => (
              <div key={cs.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase text-teal-400">{cs.category}</span>
                    <span className="text-[10px] text-slate-400">{cs.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{cs.title}</h3>

                  <div className="mt-3 space-y-2 text-slate-300">
                    <div>
                      <strong className="text-red-400 block mb-0.5">Problem Faced:</strong>
                      <p>{cs.problem}</p>
                    </div>
                    <div>
                      <strong className="text-teal-300 block mb-0.5">Intervention & Technology:</strong>
                      <p>{cs.intervention} ({cs.technology})</p>
                    </div>
                    <div>
                      <strong className="text-emerald-400 block mb-0.5">Measurable Outcome:</strong>
                      <p>{cs.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                  <strong className="text-amber-400 block mb-0.5">Replicable Lesson:</strong>
                  {cs.lesson}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. International Comparisons Sub-tab */}
      {subTab === 'international' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">International Benchmarks & Global Comparative Models</h2>
            <p className="text-xs text-slate-400">Comparing Indian policy approaches with Japan, Israel, and Taiwan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {internationalComparisons.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-teal-400 block mb-1">
                    {item.domain}
                  </span>
                  <h3 className="text-sm font-bold text-white">India vs {item.country}</h3>

                  <div className="mt-3 space-y-2 text-slate-300">
                    <div>
                      <strong className="text-amber-300 block mb-0.5">Indian Paradigm:</strong>
                      <p>{item.india}</p>
                    </div>
                    <div>
                      <strong className="text-sky-300 block mb-0.5">{item.country} Model:</strong>
                      <p>{item.contrast}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-200">
                  <strong className="text-emerald-400 block mb-0.5">Lesson for India\'s GS-III Answers:</strong>
                  {item.lessonForIndia}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

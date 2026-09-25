import React, { useState } from 'react';
import { SyllabusSection } from '../../data/economyPlanningData';
import { 
  BookOpen, HelpCircle, CheckCircle2, AlertCircle, 
  Lightbulb, Layers, ShieldCheck, ArrowRight, Table,
  TrendingUp, FileText, Bookmark, Share2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SyllabusSectionViewProps {
  sections: SyllabusSection[];
  accentColor?: string; // 'emerald' | 'green' | 'indigo' | 'sky' | 'rose'
}

export const SyllabusSectionView: React.FC<SyllabusSectionViewProps> = ({
  sections,
  accentColor = 'emerald'
}) => {
  const { toggleBookmark, userState } = useApp();
  const [selectedSectionId, setSelectedSectionId] = useState<string>(sections[0]?.id || '');

  const currentSection = sections.find(s => s.id === selectedSectionId) || sections[0];

  if (!currentSection) return null;

  const isBookmarked = userState.bookmarks.includes(currentSection.id);

  // Dynamic color mappings
  const colorStyles: Record<string, {
    pill: string;
    border: string;
    bgAccent: string;
    btnActive: string;
    textAccent: string;
  }> = {
    emerald: {
      pill: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      border: 'border-emerald-500',
      bgAccent: 'bg-emerald-950/20',
      btnActive: 'bg-emerald-500 text-slate-950',
      textAccent: 'text-emerald-400'
    },
    green: {
      pill: 'bg-green-500/20 text-green-300 border-green-500/30',
      border: 'border-green-500',
      bgAccent: 'bg-green-950/20',
      btnActive: 'bg-green-500 text-slate-950',
      textAccent: 'text-green-400'
    },
    indigo: {
      pill: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      border: 'border-indigo-500',
      bgAccent: 'bg-indigo-950/20',
      btnActive: 'bg-indigo-500 text-white',
      textAccent: 'text-indigo-400'
    },
    sky: {
      pill: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
      border: 'border-sky-500',
      bgAccent: 'bg-sky-950/20',
      btnActive: 'bg-sky-500 text-slate-950',
      textAccent: 'text-sky-400'
    },
    rose: {
      pill: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      border: 'border-rose-500',
      bgAccent: 'bg-rose-950/20',
      btnActive: 'bg-rose-500 text-white',
      textAccent: 'text-rose-400'
    }
  };

  const style = colorStyles[accentColor] || colorStyles.emerald;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      
      {/* Left Navigation Topics */}
      <div className="lg:col-span-1 space-y-2">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 mb-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Syllabus Navigation
          </span>
          <span className="text-xs text-slate-300 font-medium">
            {sections.length} Comprehensive Sub-Modules
          </span>
        </div>

        <div className="space-y-1.5">
          {sections.map((section) => {
            const isSelected = section.id === currentSection.id;
            return (
              <button
                key={section.id}
                onClick={() => setSelectedSectionId(section.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all ${
                  isSelected
                    ? `bg-slate-850 ${style.border} text-white shadow-md`
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                }`}
              >
                <span className={`text-[10px] font-extrabold uppercase tracking-wider block mb-0.5 ${style.textAccent}`}>
                  {section.category}
                </span>
                <span className="text-xs font-bold block line-clamp-1 text-slate-200">
                  {section.title}
                </span>
                <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {section.subTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-3 space-y-6">
        
        {/* Header Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${style.pill}`}>
              {currentSection.category}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(currentSection.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                  isBookmarked
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                }`}
              >
                <Bookmark size={13} className={isBookmarked ? 'fill-amber-400' : ''} />
                <span>{isBookmarked ? 'Saved' : 'Bookmark Topic'}</span>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {currentSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {currentSection.subTitle}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-850 p-3.5 rounded-xl border border-slate-800/80">
            {currentSection.description}
          </p>
        </div>

        {/* Core Concepts */}
        <div className="space-y-4">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <BookOpen size={16} className={style.textAccent} />
            <span>Authoritative Conceptual Breakdown</span>
          </h3>

          <div className="space-y-4">
            {currentSection.coreConcepts.map((concept, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                      Concept #{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">
                      {concept.title}
                    </h4>
                  </div>
                  {concept.officialSource && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {concept.officialSource}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {concept.description}
                </p>

                {/* Key Points */}
                <div className="space-y-1.5 pt-1">
                  {concept.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${style.textAccent} bg-current`} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Prelims & Mains Hooks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {concept.prelimsHook && (
                    <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-3 space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-bold">
                        <Lightbulb size={13} />
                        <span>Prelims Memory Hook / Trap</span>
                      </div>
                      <p className="text-[11px] text-amber-200/90 leading-relaxed">
                        {concept.prelimsHook}
                      </p>
                    </div>
                  )}

                  {concept.mainsHook && (
                    <div className="bg-blue-950/20 border border-blue-500/30 rounded-xl p-3 space-y-1">
                      <div className="flex items-center gap-1.5 text-blue-400 text-[11px] font-bold">
                        <FileText size={13} />
                        <span>Mains Answer-Writing Hook</span>
                      </div>
                      <p className="text-[11px] text-blue-200/90 leading-relaxed italic">
                        {concept.mainsHook}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparative Table (if available) */}
        {currentSection.comparativeTable && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Table size={16} className={style.textAccent} />
              <span>Comparative Synthesis Matrix</span>
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-850 text-slate-200 font-bold border-b border-slate-800">
                  <tr>
                    {currentSection.comparativeTable.headers.map((header, hIdx) => (
                      <th key={hIdx} className="p-3 whitespace-nowrap">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {currentSection.comparativeTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-850/50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'font-semibold text-white' : 'text-slate-300'}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Key Statistics Grid (if available) */}
        {currentSection.keyStatistics && currentSection.keyStatistics.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <TrendingUp size={16} className={style.textAccent} />
              <span>Official Data Bank & Macro Metrics</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentSection.keyStatistics.map((stat, sIdx) => (
                <div key={sIdx} className="bg-slate-850 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 font-medium block">
                    {stat.label}
                  </span>
                  <div className={`text-lg font-black ${style.textAccent}`}>
                    {stat.value}
                  </div>
                  <span className="text-[10px] text-slate-400 block line-clamp-1">
                    {stat.context}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Schemes and Policies (if available) */}
        {currentSection.schemesAndPolicies && currentSection.schemesAndPolicies.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <ShieldCheck size={16} className={style.textAccent} />
              <span>Flagship Schemes & Statutory Interventions</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentSection.schemesAndPolicies.map((scheme, scIdx) => (
                <div key={scIdx} className="bg-slate-850 p-3.5 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-white">
                    {scheme.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {scheme.objective}
                  </p>
                  <div className="space-y-1 pt-1">
                    {scheme.salientFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 size={12} className={style.textAccent} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

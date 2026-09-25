import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { disasterHazards, disasterCaseStudies, disasterCyclePhases } from '../../data/disasterData';
import { 
  CloudRain, Shield, AlertTriangle, Activity, 
  MapPin, CheckCircle2, Bookmark, Layers
} from 'lucide-react';

export const DisasterView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'hazards' | 'cycle' | 'institutions' | 'cases' | 'map'>('hazards');
  const [selectedHazardId, setSelectedHazardId] = useState<string>(disasterHazards[0].id);

  const currentHazard = disasterHazards.find(h => h.id === selectedHazardId) || disasterHazards[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-900 border border-sky-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
              GS-III Core Syllabus • Module 36, 43-47
            </span>
            <span className="text-xs text-slate-400">DM Act 2005 • NDMA • NDRF • Sendai Framework • GLOF</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Disaster Management Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Hazard micro-zonation, 4-phase Disaster Management Cycle, Sendai Framework 2015-2030 priorities, and zero-casualty institutional response architectures.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'hazards', label: 'Hazards Lab', icon: AlertTriangle },
            { id: 'cycle', label: 'Disaster Cycle Flow', icon: Layers },
            { id: 'institutions', label: 'NDMA Architecture', icon: Shield },
            { id: 'cases', label: 'Case Studies', icon: Activity }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-md'
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

      {/* 1. Hazards Lab Sub-tab */}
      {subTab === 'hazards' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Hazards List */}
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select Hazard</span>
            {disasterHazards.map((haz) => {
              const isSelected = haz.id === currentHazard.id;
              return (
                <div
                  key={haz.id}
                  onClick={() => setSelectedHazardId(haz.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-sky-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 block mb-0.5">
                    {haz.type}
                  </span>
                  <h3 className="text-xs font-bold">{haz.hazard}</h3>
                </div>
              );
            })}
          </div>

          {/* Hazard Details Panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {currentHazard.type} Hazard Analysis
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">{currentHazard.hazard}</h2>
              </div>
              <button
                onClick={() => toggleBookmark(currentHazard.id)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white border border-slate-700 font-semibold self-start"
              >
                {userState.bookmarks.includes(currentHazard.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* Prone Areas & Causes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-amber-400 text-xs block">Geographic Prone Zones in India</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentHazard.proneAreasInIndia.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-sky-400 text-xs block">Underlying Causes & Trigger Mechanisms</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentHazard.causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mitigation & Early Warning */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-emerald-400 text-xs block">Mitigation Measures (Structural & Policy)</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentHazard.mitigationMeasures.map((meas, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{meas}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-yellow-400 text-xs block">Early Warning System & Forecast Protocol</strong>
                <p className="text-slate-300 leading-relaxed">{currentHazard.earlyWarningSystem}</p>
                <div className="pt-2 border-t border-slate-800 text-slate-400">
                  <strong className="text-white">Institutional Lead: </strong>
                  {currentHazard.institutionalMechanism}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 2. Disaster Cycle Flow Sub-tab */}
      {subTab === 'cycle' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">The Disaster Management Cycle & Sendai Framework</h2>
            <p className="text-xs text-slate-400">Shifting paradigm from reactive post-disaster relief to proactive pre-disaster risk reduction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disasterCyclePhases.map((phase, idx) => (
              <div key={idx} className="p-5 bg-slate-850 rounded-xl border border-slate-750 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-sky-400">{phase.phase}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Phase {idx + 1}
                  </span>
                </div>
                <p className="text-slate-300 font-medium">{phase.focus}</p>

                <ul className="space-y-1.5 text-slate-300">
                  {phase.actions.map((act, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-slate-750 text-[11px] text-slate-400">
                  <strong className="text-amber-300">Statutory Funding: </strong>
                  {phase.fundingSource}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. NDMA Architecture Sub-tab */}
      {subTab === 'institutions' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 text-xs">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Three-Tier Institutional Architecture under DM Act, 2005</h2>
            <p className="text-xs text-slate-400">Command, coordination, and specialized operational response arms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <span className="text-[10px] font-bold uppercase text-amber-400">Apex National Level</span>
              <h3 className="text-sm font-bold text-white">NDMA (National Authority)</h3>
              <p className="text-slate-300">
                Chaired ex-officio by the <strong>Prime Minister of India</strong>. Lays down national policies, guidelines, and plans for disaster management.
              </p>
              <div className="pt-2 text-slate-400">
                <strong>Executive Arm:</strong> National Executive Committee (NEC) chaired by Union Home Secretary.
              </div>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <span className="text-[10px] font-bold uppercase text-sky-400">State Level</span>
              <h3 className="text-sm font-bold text-white">SDMA (State Authority)</h3>
              <p className="text-slate-300">
                Chaired ex-officio by the <strong>Chief Minister</strong> of the respective state. Coordinates state-level disaster mitigation plans and SDRF funds.
              </p>
              <div className="pt-2 text-slate-400">
                <strong>Executive Arm:</strong> State Executive Committee chaired by Chief Secretary.
              </div>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <span className="text-[10px] font-bold uppercase text-emerald-400">District Operational Hub</span>
              <h3 className="text-sm font-bold text-white">DDMA (District Authority)</h3>
              <p className="text-slate-300">
                Co-chaired by the <strong>District Magistrate / Collector</strong> and the elected Chairperson of Zilla Parishad.
              </p>
              <div className="pt-2 text-slate-400">
                <strong>Crucial Role:</strong> Acts as the frontline operational command post enforcing building codes and deploying rescue teams.
              </div>
            </div>
          </div>

          <div className="p-4 bg-sky-950/20 border border-sky-800/40 rounded-xl text-slate-300 space-y-2">
            <strong className="text-sky-300 text-sm block">National Disaster Response Force (NDRF)</strong>
            <p>
              Raised under Section 44 of the DM Act 2005. A specialized, multi-disciplinary, multi-skilled force of 16 battalions requisitioned from BSF, CRPF, CISF, ITBP, SSB, and Assam Rifles. Headed by a Director General (DG NDRF), equipped with chemical, biological, radiological, and nuclear (CBRN) search and rescue equipment.
            </p>
          </div>
        </div>
      )}

      {/* 4. Case Studies Sub-tab */}
      {subTab === 'cases' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Landmark Disaster Management Case Studies</h2>
            <p className="text-xs text-slate-400">Odisha cyclone paradigm shift and high-altitude Himalayan flash floods</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disasterCaseStudies.map((cs) => (
              <div key={cs.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">
                    {cs.location} • {cs.year}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {cs.hazardType}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{cs.disaster}</h3>
                <p className="text-slate-300 leading-relaxed">{cs.impact}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-emerald-400 block mb-1">Response Highlights:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {cs.responseHighlights.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-amber-300 block mb-1">Lessons & Best Practices:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {cs.lessonsAndBestPractices.map((l, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 pt-1">
                  Source: {cs.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

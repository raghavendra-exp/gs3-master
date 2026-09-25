import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { speciesDatabase, environmentalConventions, eiaLifecycleSteps } from '../../data/environmentData';
import { 
  Leaf, Globe, ShieldCheck, AlertTriangle, 
  Layers, CheckCircle2, Bookmark, Info, Compass
} from 'lucide-react';
import { environmentComprehensiveData } from '../../data/environmentComprehensiveData';
import { SyllabusSectionView } from '../common/SyllabusSectionView';

export const EnvironmentView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'syllabus' | 'species' | 'conventions' | 'climate' | 'eia'>('syllabus');
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>(speciesDatabase[0].id);

  const currentSpecies = speciesDatabase.find(s => s.id === selectedSpeciesId) || speciesDatabase[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              GS-III Core Syllabus • Module 30-36, 41-42
            </span>
            <span className="text-xs text-slate-400">Biodiversity • Wildlife Act 2022 • Conventions • EIA • Climate</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Environment, Biodiversity & Climate Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Authoritative species database (IUCN, WPA 2022 Schedules, CITES), Multilateral Environmental Agreements (UNFCCC, CBD, Ramsar), and EIA lifecycle audit.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'syllabus', label: 'Syllabus Master', icon: Compass },
            { id: 'species', label: 'Species Database', icon: Leaf },
            { id: 'conventions', label: 'Conventions', icon: Globe },
            { id: 'climate', label: 'Climate & Net-Zero', icon: ShieldCheck },
            { id: 'eia', label: 'EIA 6-Step Flow', icon: Layers }
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
        <SyllabusSectionView sections={environmentComprehensiveData} accentColor="emerald" />
      )}

      {/* 1. Species Database Sub-tab */}
      {subTab === 'species' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Species List */}
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select Species</span>
            {speciesDatabase.map((spec) => {
              const isSelected = spec.id === currentSpecies.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => setSelectedSpeciesId(spec.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded ${
                      spec.iucnStatus === 'Critically Endangered' ? 'bg-red-500/20 text-red-300' :
                      spec.iucnStatus === 'Endangered' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-amber-500/20 text-amber-300'
                    }`}>
                      {spec.iucnStatus}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono">{spec.wpaSchedule}</span>
                  </div>
                  <h3 className="text-xs font-bold">{spec.commonName}</h3>
                  <span className="text-[10px] text-slate-400 italic block">{spec.scientificName}</span>
                </div>
              );
            })}
          </div>

          {/* Species Details Panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                    IUCN: {currentSpecies.iucnStatus}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                    {currentSpecies.wpaSchedule}
                  </span>
                  <span className="text-xs text-slate-400">
                    CITES: {currentSpecies.citesAppendix}
                  </span>
                </div>
                <h2 className="text-xl font-black text-white">{currentSpecies.commonName}</h2>
                <span className="text-xs text-slate-400 italic font-serif">{currentSpecies.scientificName} ({currentSpecies.taxonomy})</span>
              </div>
              <button
                onClick={() => toggleBookmark(currentSpecies.id)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white border border-slate-700 font-semibold self-start"
              >
                {userState.bookmarks.includes(currentSpecies.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* Habitat and Distribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-emerald-400 uppercase text-[10px] block">Natural Habitat & Ecological Niche</strong>
                <p className="text-slate-300 leading-relaxed">{currentSpecies.habitat}</p>
                <div className="pt-2">
                  <strong className="text-white block mb-1">Distribution in India:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSpecies.distributionInIndia.map((d, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px]">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-red-500/20 rounded-xl p-4 bg-red-950/10 space-y-2">
                <strong className="text-red-400 uppercase text-[10px] block flex items-center gap-1">
                  <AlertTriangle size={13} /> Major Threats & Vulnerabilities
                </strong>
                <ul className="space-y-1 text-slate-300">
                  {currentSpecies.threats.map((threat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Supreme Court / Landmark Developments */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <strong className="text-xs font-bold text-amber-300 block">Recent Scientific & Legal Developments:</strong>
              <p className="text-slate-300 leading-relaxed">{currentSpecies.recentDevelopments}</p>
              <div className="pt-2 border-t border-slate-800 text-slate-400">
                <strong className="text-white">Conservation Project: </strong>
                {currentSpecies.conservationProjects}
              </div>
            </div>

            {/* Prelims Traps */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <span className="font-bold text-amber-400 uppercase text-[10px] block">
                Prelims Memory Traps
              </span>
              <ul className="space-y-1.5 text-slate-300">
                {currentSpecies.prelimsFacts.map((pf, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">⚡</span>
                    <span>{pf}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* 2. Conventions Sub-tab */}
      {subTab === 'conventions' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Multilateral Environmental Agreements (MEAs) & India</h2>
            <p className="text-xs text-slate-400">UNFCCC, Paris Agreement Article 6, CBD Kunming-Montreal 30x30, and Ramsar Convention</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {environmentalConventions.map((conv) => (
              <div key={conv.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-400">Adopted: {conv.yearAdopted}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase font-semibold">
                      Global Treaty
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{conv.name}</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{conv.purpose}</p>

                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <strong className="text-amber-300 block mb-1">Key Provisions & Targets:</strong>
                      <ul className="space-y-1 text-slate-400">
                        {conv.keyProvisions.map((kp, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{kp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-1">
                  <div>
                    <strong className="text-emerald-400">India\'s Statutory Role: </strong>
                    <span className="text-slate-400">{conv.indiasRole}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 pt-1">
                    Source: {conv.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Climate & Net-Zero Sub-tab */}
      {subTab === 'climate' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">India\'s Climate Commitments: Panchamrit & Updated NDC</h2>
            <p className="text-xs text-slate-400">COP26 Glasgow Pledges, Long-Term Low-Carbon Development Strategy (LT-LEDS), and Carbon Market</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-3">
              <strong className="text-emerald-400 text-sm block">India\'s 5 "Panchamrit" Targets (COP26)</strong>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>500 GW:</strong> Reach 500 GW non-fossil energy capacity by 2030 (~195 GW achieved).</li>
                <li>• <strong>50% Energy:</strong> Meet 50% of energy requirements from renewable energy by 2030.</li>
                <li>• <strong>1 Billion Tonnes:</strong> Reduce total projected carbon emissions by 1 billion tonnes by 2030.</li>
                <li>• <strong>45% Intensity:</strong> Reduce carbon intensity of economy by 45% by 2030 (over 2005 levels).</li>
                <li>• <strong>Net-Zero 2070:</strong> Achieve Net-Zero greenhouse gas emissions by the year 2070.</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-3">
              <strong className="text-sky-400 text-sm block">Carbon Credit Trading Scheme (CCTS) Mechanism</strong>
              <p className="text-slate-300 leading-relaxed">
                Empowered under the Energy Conservation (Amendment) Act 2022. Establishes a domestic cap-and-trade market where energy-intensive obligated industries receive Greenhouse Gas Emission Intensity targets.
              </p>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                <span className="text-[11px] text-amber-300 font-bold block">Key Institutional Actors:</span>
                <span className="text-slate-400 block">• Bureau of Energy Efficiency (BEE): Administrator</span>
                <span className="text-slate-400 block">• Grid Controller of India (Grid-India): Registry</span>
                <span className="text-slate-400 block">• Central Electricity Regulatory Commission (CERC): Trading Regulator</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. EIA 6-Step Flow Sub-tab */}
      {subTab === 'eia' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Environmental Impact Assessment (EIA) 6-Stage Process</h2>
            <p className="text-xs text-slate-400">Statutory mechanism under Environment (Protection) Act, 1986 and EIA Notification 2006</p>
          </div>

          <div className="space-y-3">
            {eiaLifecycleSteps.map((step, idx) => (
              <div key={idx} className="p-4 bg-slate-850 rounded-xl border border-slate-750 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
                    {step.step}
                  </span>
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  {step.subcategories && (
                    <span className="text-[11px] text-slate-400 mt-1 block italic">
                      Details: {step.subcategories}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

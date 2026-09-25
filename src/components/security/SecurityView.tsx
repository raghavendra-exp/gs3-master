import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { securityThreats, securityAgencies, borderManagementData } from '../../data/securityData';
import { 
  ShieldAlert, Shield, Globe, Lock, AlertTriangle, 
  MapPin, CheckCircle2, Bookmark, ExternalLink 
} from 'lucide-react';

export const SecurityView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'threats' | 'borders' | 'forces' | 'cyber'>('threats');
  const [selectedThreatId, setSelectedThreatId] = useState<string>(securityThreats[0].id);
  const [selectedAgencyId, setSelectedAgencyId] = useState<string>(securityAgencies[0].id);

  const currentThreat = securityThreats.find(t => t.id === selectedThreatId) || securityThreats[0];
  const currentAgency = securityAgencies.find(a => a.id === selectedAgencyId) || securityAgencies[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950/30 to-slate-900 border border-rose-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
              GS-III Core Syllabus • Module 48-58
            </span>
            <span className="text-xs text-slate-400">MHA • CAPFs • Borders • Cyber Warfare • Money Laundering</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Internal Security Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Left Wing Extremism & development deficits, border management architectures (CIBMS, Vibrant Villages), security forces profiles, and transnational money laundering countermeasures.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'threats', label: 'Threat Matrix', icon: ShieldAlert },
            { id: 'borders', label: 'Border Management', icon: MapPin },
            { id: 'forces', label: 'Security Forces', icon: Shield },
            { id: 'cyber', label: 'Cyber & Illicit Finance', icon: Lock }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-md'
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

      {/* 1. Threat Matrix Sub-tab */}
      {subTab === 'threats' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Threats List */}
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select Domain</span>
            {securityThreats.map((threat) => {
              const isSelected = threat.id === currentThreat.id;
              return (
                <div
                  key={threat.id}
                  onClick={() => setSelectedThreatId(threat.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-rose-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <h3 className="text-xs font-bold">{threat.domain}</h3>
                </div>
              );
            })}
          </div>

          {/* Threat Details Panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  Internal Security Assessment
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">{currentThreat.domain}</h2>
              </div>
              <button
                onClick={() => toggleBookmark(currentThreat.id)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white border border-slate-700 font-semibold self-start"
              >
                {userState.bookmarks.includes(currentThreat.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* Nature of Threat & Root Causes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-rose-400 uppercase text-[10px] block">Strategic Nature of Threat</strong>
                <p className="text-slate-300 leading-relaxed">{currentThreat.nature}</p>
                <div className="pt-2">
                  <strong className="text-amber-300 block mb-1">Geographic Footprint:</strong>
                  <ul className="space-y-1 text-slate-400">
                    {currentThreat.geographicalSpread.map((geo, idx) => (
                      <li key={idx}>• {geo}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-orange-400 uppercase text-[10px] block">Root Causes & Grievance Drivers</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentThreat.rootCauses.map((rc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>{rc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Govt Policy & Technological Countermeasures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-emerald-400 uppercase text-[10px] block">Government Response & Policy Framework</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentThreat.govtResponseAndFramework.map((gr, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{gr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-cyan-400 uppercase text-[10px] block">Technology & Tactical Countermeasures</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentThreat.technologyCountermeasures.map((tc, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">⚡</span>
                      <span>{tc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Way Forward */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <strong className="text-xs font-bold text-amber-300 block">Way Forward & Institutional Reforms:</strong>
              <ul className="space-y-1.5 text-slate-300">
                {currentThreat.wayForward.map((wf, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">→</span>
                    <span>{wf}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* 2. Border Management Sub-tab */}
      {subTab === 'borders' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Border Management & Frontier Security</h2>
            <p className="text-xs text-slate-400">Guarding 15,106 km of land borders across diverse geographical terrains and hostile neighbors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {borderManagementData.map((b, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-rose-400">
                    {b.lengthKm} km Frontier
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">
                    Guarded by: {b.guardingForce}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{b.frontier}</h3>
                <span className="text-slate-400 block">Border States: {b.states.join(', ')}</span>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-red-400 block mb-1">Key Security Challenges:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {b.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-red-400 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-cyan-400 block mb-1">Technology & Smart Fencing Initiatives:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {b.techSolutions.map((t, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Security Forces Database Sub-tab */}
      {subTab === 'forces' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select Agency</span>
            {securityAgencies.map((agency) => {
              const isSelected = agency.id === currentAgency.id;
              return (
                <div
                  key={agency.id}
                  onClick={() => setSelectedAgencyId(agency.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-rose-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold block">{agency.shortName}</span>
                  <span className="text-[10px] text-slate-400 block truncate">{agency.name}</span>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  {currentAgency.ministry}
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">
                  {currentAgency.name} ({currentAgency.shortName})
                </h2>
                <span className="text-xs text-amber-300 italic block mt-0.5">Motto: &ldquo;{currentAgency.motto}&rdquo;</span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 self-start">
                {currentAgency.legalBasis}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-sky-400 uppercase text-[10px] block">Statutory Mandate & Domain</strong>
                <p className="text-slate-300 leading-relaxed">{currentAgency.mandate}</p>
                <div className="pt-2 text-slate-400">
                  <strong className="text-white">Jurisdiction: </strong>
                  {currentAgency.jurisdictionAndBorders}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <strong className="text-emerald-400 uppercase text-[10px] block">Special Role & Commando Wings</strong>
                <p className="text-slate-300 leading-relaxed">{currentAgency.specialRole}</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <strong className="text-amber-400 uppercase text-[10px] block">Key Facts for Civil Services Prelims</strong>
              <ul className="space-y-1.5 text-slate-300">
                {currentAgency.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">⚡</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. Cyber & Illicit Finance Sub-tab */}
      {subTab === 'cyber' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 text-xs">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Cybersecurity & Anti-Money Laundering Frameworks</h2>
            <p className="text-xs text-slate-400">Section 70A NCIIPC, CERT-In directions, and PMLA / FATF 3-Stage Laundering Cycle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-xs font-mono font-bold text-rose-400 block mb-1">Stage 1: Placement</span>
              <p className="text-slate-300">
                Depositing illegal cash from crimes into bank accounts, smurfing into small accounts below ₹10 lakh reporting threshold, or purchasing casino chips.
              </p>
            </div>
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-xs font-mono font-bold text-amber-400 block mb-1">Stage 2: Layering</span>
              <p className="text-slate-300">
                Executing complex series of electronic wire transfers, shell company round-tripping, trade-based invoice fraud, and cryptocurrency mixers.
              </p>
            </div>
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">Stage 3: Integration</span>
              <p className="text-slate-300">
                Re-entering laundered funds into legitimate mainstream economy to purchase prime real estate, luxury yachts, equity shares, or corporate bonds.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
            <strong className="text-cyan-400 text-sm block">India\'s National Cybersecurity Architecture</strong>
            <p className="text-slate-300 leading-relaxed">
              Coordinated under the National Cyber Security Coordinator (NCSC). Critical Information Infrastructure is shielded by NCIIPC (Section 70A IT Act), incident reporting managed by CERT-In with mandatory 6-hour disclosure rules, citizen cybercrime helpline operated via 1930 and I4C (Indian Cybercrime Coordination Centre), and tri-service Defence Cyber Agency (DCyA) safeguarding military command links.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

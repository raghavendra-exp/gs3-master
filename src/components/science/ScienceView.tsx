import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { techPillars, spaceMissions } from '../../data/scienceData';
import { 
  Cpu, Rocket, Dna, ShieldCheck, Binary, 
  CheckCircle2, AlertTriangle, ExternalLink, Bookmark
} from 'lucide-react';

export const ScienceView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'pillars' | 'space' | 'quantum' | 'ipr'>('pillars');
  const [selectedTechId, setSelectedTechId] = useState<string>(techPillars[0].id);

  const currentTech = techPillars.find(t => t.id === selectedTechId) || techPillars[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              GS-III Core Syllabus • Module 22-29
            </span>
            <span className="text-xs text-slate-400">ISRO • MeitY • DBT • DST • IndiaAI • Quantum Mission</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Science & Technology Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Space exploration milestones, Artificial Intelligence and Digital Public Infrastructure, CRISPR-Cas9 genome editing, Semiconductor Fabs, and IPR jurisprudence.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'pillars', label: 'Tech Pillars', icon: Cpu },
            { id: 'space', label: 'ISRO Space Missions', icon: Rocket },
            { id: 'quantum', label: 'Quantum & Fabs', icon: Binary },
            { id: 'ipr', label: 'IPR & Patents', icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-indigo-500 text-white shadow-md'
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

      {/* 1. Tech Pillars Sub-tab */}
      {subTab === 'pillars' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Tech List */}
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select Domain</span>
            {techPillars.map((tech) => {
              const isSelected = tech.id === currentTech.id;
              return (
                <div
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 block mb-1">
                    {tech.category}
                  </span>
                  <h3 className="text-xs font-bold leading-snug">{tech.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Tech Details Panel */}
          <div className="lg:col-span-3 space-y-4">
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {currentTech.category} • Frontier Science
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">
                  {currentTech.title}
                </h2>
                <span className="text-xs text-slate-400">Source: {currentTech.source}</span>
              </div>
              <button
                onClick={() => toggleBookmark(currentTech.id)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white border border-slate-700 font-semibold self-start"
              >
                {userState.bookmarks.includes(currentTech.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* What is it & How it works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 block mb-2">
                  What is it & Scientific Principles
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentTech.whatIsIt}
                </p>
                <div className="mt-3 p-2.5 rounded bg-slate-850 border border-slate-750 text-xs text-slate-300">
                  <strong className="text-indigo-300 block mb-0.5">Core Working Mechanism:</strong>
                  {currentTech.howItWorks}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-1">
                  Applications in India
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentTech.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-slate-800">
                  <strong className="text-xs text-amber-300 block mb-1">Indian Missions & Legal Acts:</strong>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {currentTech.indianDevelopments.map((dev, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{dev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Risks, Ethics & Exam Utility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-red-500/20 rounded-xl p-5 bg-red-950/10 space-y-2">
                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <AlertTriangle size={15} />
                  <span>Risks & Ethical Dilemmas</span>
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentTech.ethicalConcerns}
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2">
                <span className="text-xs font-bold text-amber-400 block">
                  Prelims Traps & Mains Dimension
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {currentTech.prelimsFacts.map((pf, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">⚡</span>
                      <span>{pf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 2. Space Missions Sub-tab */}
      {subTab === 'space' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">ISRO Space Missions & Launch Vehicles Timeline</h2>
            <p className="text-xs text-slate-400">Lunar exploration, solar astrophysics, synthetic aperture radar, and human spaceflight</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spaceMissions.map((mission) => (
              <div key={mission.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    {mission.launchVehicle} • {mission.launchYear}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                    mission.status === 'Operational' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    mission.status === 'Completed' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}>
                    {mission.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{mission.name}</h3>
                <span className="text-xs text-slate-400 block font-mono">Orbit: {mission.orbit}</span>
                <p className="text-xs text-slate-300 leading-relaxed">{mission.objective}</p>

                <div className="p-3 bg-slate-850 rounded-lg border border-slate-800 text-xs">
                  <strong className="text-amber-300 block mb-1">Civil Services Significance:</strong>
                  <span className="text-slate-300">{mission.significance}</span>
                </div>

                <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                  Official Source: {mission.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Quantum & Fabs Sub-tab */}
      {subTab === 'quantum' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">National Quantum Mission (NQM) & Semiconductor Ecosystem</h2>
            <p className="text-xs text-slate-400">Superposition, Entanglement, QKD, and the ₹76,000 Crore India Semiconductor Mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-indigo-400 text-sm block">National Quantum Mission (NQM): 4 Thematic Hubs</strong>
              <ul className="space-y-1.5 text-slate-300">
                <li>• <strong>Quantum Computing:</strong> Developing 50-1000 physical qubits using superconducting circuits and trapped ions.</li>
                <li>• <strong>Quantum Communication:</strong> Ground-to-satellite secure QKD across 2,000 km range.</li>
                <li>• <strong>Quantum Sensing & Metrology:</strong> Atomic clocks and high-sensitivity magnetometers for seismic prediction.</li>
                <li>• <strong>Quantum Materials:</strong> Topological insulators and 2D materials for low-power electronics.</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-amber-400 text-sm block">India Semiconductor Mission (ISM) Commercial Fabs</strong>
              <ul className="space-y-1.5 text-slate-300">
                <li>• <strong>Dholera Fab (Gujarat):</strong> Tata Electronics partnered with Powerchip (PSMC) Taiwan; ₹91,000 cr outlay (28nm to 90nm chips).</li>
                <li>• <strong>Sanand ATMP (Gujarat):</strong> Micron Technology assembly, testing, and packaging facility for DRAM and NAND flash.</li>
                <li>• <strong>Morigaon (Assam):</strong> Tata Electronics ₹27,000 cr indigenous chip packaging facility.</li>
                <li>• <strong>Sanand OSAT:</strong> CG Power partnered with Renesas Electronics (Japan) and Stars Microelectronics.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. IPR & Patents Sub-tab */}
      {subTab === 'ipr' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Intellectual Property Rights: Public Health vs Monopoly</h2>
            <p className="text-xs text-slate-400">Section 3(d), Compulsory Licensing under Section 84, and TRIPS flexibilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-emerald-400 text-sm block">Section 3(d) Anti-Evergreening</strong>
              <p className="text-slate-300">
                Bars patenting of a new form of a known substance unless it proves significantly enhanced therapeutic efficacy. Upheld by Supreme Court in Novartis Glivec (2013).
              </p>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-amber-400 text-sm block">Section 84 Compulsory Licensing</strong>
              <p className="text-slate-300">
                Controller can grant license after 3 years if public requirements are unsatisfied or price is unaffordable. Granted to Natco for Bayer’s Nexavar (slashed price by 97%).
              </p>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-cyan-400 text-sm block">Traditional Knowledge Digital Library</strong>
              <p className="text-slate-300">
                Pioneered by CSIR; translates Ayurveda, Unani, and Siddha texts into 5 global languages to defeat biopiracy patent claims in USPTO and EPO.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

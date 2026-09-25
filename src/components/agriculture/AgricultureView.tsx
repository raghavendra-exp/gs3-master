import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  majorCropsData, 
  stateAgriProfiles, 
  irrigationModels, 
  mspCropList, 
  foodProcessingFlow 
} from '../../data/agricultureData';
import { 
  Sprout, MapPin, Droplets, DollarSign, Truck, 
  CheckCircle2, AlertTriangle, ArrowRight, Layers, 
  HelpCircle, Info
} from 'lucide-react';

export const AgricultureView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'crops' | 'states' | 'irrigation' | 'msp' | 'pds' | 'processing'>('crops');
  const [selectedCropId, setSelectedCropId] = useState<string>(majorCropsData[0].id);
  const [selectedStateId, setSelectedStateId] = useState<string>(stateAgriProfiles[0].id);

  const currentCrop = majorCropsData.find(c => c.id === selectedCropId) || majorCropsData[0];
  const currentState = stateAgriProfiles.find(s => s.id === selectedStateId) || stateAgriProfiles[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-green-950/30 to-slate-900 border border-green-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
              GS-III Core Syllabus • Module 8-17
            </span>
            <span className="text-xs text-slate-400">Cropping Patterns • Irrigation • MSP • PDS • Food Processing</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Agriculture & Food Security Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Major crops, state agro-climatic profiles, irrigation efficiency matrix, verified MSP explorer, and farm-to-fork value chain models.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'crops', label: 'Crop Master', icon: Sprout },
            { id: 'states', label: 'State Agri Explorer', icon: MapPin },
            { id: 'irrigation', label: 'Irrigation Matrix', icon: Droplets },
            { id: 'msp', label: 'MSP Explorer', icon: DollarSign },
            { id: 'pds', label: 'PDS Supply Chain', icon: Truck },
            { id: 'processing', label: 'Food Processing', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-green-500 text-slate-950 shadow-md'
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

      {/* 1. Crop Master Sub-tab */}
      {subTab === 'crops' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Crop List */}
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select Crop</span>
            {majorCropsData.map((crop) => {
              const isSelected = crop.id === currentCrop.id;
              return (
                <div
                  key={crop.id}
                  onClick={() => setSelectedCropId(crop.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-green-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-green-400">
                      {crop.season} • {crop.category}
                    </span>
                    {crop.currentMsp && (
                      <span className="text-[9px] font-mono text-amber-300 bg-amber-950/60 px-1 rounded">
                        MSP
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-bold">{crop.name}</h3>
                </div>
              );
            })}
          </div>

          {/* Crop Details Panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                  {currentCrop.category} • {currentCrop.season} Season
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">
                  {currentCrop.name}
                </h2>
                {currentCrop.currentMsp && (
                  <span className="text-xs font-mono text-amber-400 block mt-1">
                    Current MSP: {currentCrop.currentMsp} ({currentCrop.cacpFormula})
                  </span>
                )}
              </div>
              <button
                onClick={() => toggleBookmark(currentCrop.id)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-200 hover:text-white border border-slate-700 font-semibold self-start"
              >
                {userState.bookmarks.includes(currentCrop.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* Agro-climatic Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs">
                <strong className="text-amber-400 uppercase text-[10px] block mb-1">Soil Requirements</strong>
                <span className="text-slate-300">{currentCrop.soilRequirements}</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs">
                <strong className="text-sky-400 uppercase text-[10px] block mb-1">Temperature Range</strong>
                <span className="text-slate-300">{currentCrop.temperatureRange}</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs">
                <strong className="text-blue-400 uppercase text-[10px] block mb-1">Rainfall Requirement</strong>
                <span className="text-slate-300">{currentCrop.rainfallRequirement}</span>
              </div>
            </div>

            {/* Top Producing States */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <strong className="text-xs font-bold text-white block mb-2">Leading Producer States in India:</strong>
              <div className="flex flex-wrap gap-2">
                {currentCrop.topProducingStates.map((st, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 font-medium">
                    #{idx + 1} {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Agrarian Issues & Exam Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-red-500/20 rounded-xl p-4 bg-red-950/10">
                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5 mb-2">
                  <AlertTriangle size={14} />
                  <span>Key Ecological & Production Issues</span>
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentCrop.issues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs">
                <strong className="text-xs font-bold text-green-400 block mb-2">UPSC / UPPSC Exam Angle:</strong>
                <p className="text-slate-300 leading-relaxed">
                  {currentCrop.examSignificance}
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 2. State Agri Explorer Sub-tab */}
      {subTab === 'states' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* State List */}
          <div className="lg:col-span-1 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">Select State</span>
            {stateAgriProfiles.map((st) => {
              const isSelected = st.id === currentState.id;
              return (
                <div
                  key={st.id}
                  onClick={() => setSelectedStateId(st.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-green-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <h3 className="text-xs font-bold">{st.name}</h3>
                  <span className="text-[10px] text-slate-400">
                    Irrigation: {st.irrigationCoveragePercent}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* State Profile Details */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">State Agro-Climatic Profile</span>
                <h2 className="text-xl font-black text-white">{currentState.name}</h2>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Soil Type: {currentState.soilType} | Net Irrigation Coverage: {currentState.irrigationCoveragePercent}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <strong className="text-amber-400 text-xs block mb-1">Cropping Pattern</strong>
                <p className="text-slate-300 leading-relaxed">{currentState.croppingPattern}</p>
                <div className="mt-3">
                  <strong className="text-white block mb-1">Major Crops:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {currentState.majorCrops.map((c, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <strong className="text-red-400 text-xs block mb-1">Agrarian Bottlenecks</strong>
                <ul className="space-y-1.5 text-slate-300">
                  {currentState.majorIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <strong className="text-xs font-bold text-cyan-300 block">Flagship Schemes & State Exports:</strong>
              <div className="flex flex-wrap gap-1.5">
                {currentState.flagshipSchemes.map((sch, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-slate-850 text-cyan-200 border border-cyan-800/40 text-[11px]">
                    {sch}
                  </span>
                ))}
              </div>
              <div className="pt-2 text-slate-300">
                <strong className="text-white">PYQ Exam Focus: </strong>
                {currentState.pyqFocus}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. Irrigation Comparison Matrix Sub-tab */}
      {subTab === 'irrigation' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Irrigation Systems: Efficiency, Cost & Crop Suitability</h2>
            <p className="text-xs text-slate-400">Comparing Micro-irrigation (Drip, Sprinkler) against conventional Flood/Canal systems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {irrigationModels.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-green-400">
                      Cost: {item.costIntensity}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {item.waterUseEfficiencyPercent}% Efficiency
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{item.name}</h3>

                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <strong className="text-emerald-400 block mb-1">Key Advantages:</strong>
                      <ul className="space-y-1 text-slate-300">
                        {item.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <strong className="text-orange-400 block mb-1">Limitations:</strong>
                      <ul className="space-y-1 text-slate-300">
                        {item.limitations.map((lim, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-orange-400 font-bold">✕</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">Government Support: </strong>
                  {item.govtScheme}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. MSP Explorer Sub-tab */}
      {subTab === 'msp' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Minimum Support Price (MSP) Intelligence Explorer</h2>
            <p className="text-xs text-slate-400">Verified official prices, CACP cost calculation formula (A2+FL vs C2), and regional procurement distortions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mspCropList.map((m, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-green-500/20 text-green-300 border border-green-500/30">
                    {m.category} Crop
                  </span>
                  <span className="text-sm font-black text-amber-400 font-mono">
                    {m.currentMsp}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{m.crop}</h3>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div>
                    <strong className="text-slate-400">Cost Concept: </strong>
                    <span className="font-mono text-emerald-400">{m.costConceptUsed}</span>
                  </div>
                  <div>
                    <strong className="text-slate-400">Procurement Reality: </strong>
                    <span>{m.procurementReality}</span>
                  </div>
                  <div>
                    <strong className="text-orange-400">Regional Distortions: </strong>
                    <span>{m.regionalIssues}</span>
                  </div>
                  <div>
                    <strong className="text-purple-300">Mains Dimension: </strong>
                    <span>{m.mainsDimension}</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                  Source: {m.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. PDS Supply Chain Interactive Flowchart */}
      {subTab === 'pds' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Targeted PDS & National Food Security Act (NFSA) Supply Chain</h2>
            <p className="text-xs text-slate-400">From Mandi procurement by FCI to Fair Price Shops (FPS) and One Nation One Ration Card (ONORC)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-[10px] font-bold text-green-400 block mb-1">1. Farm Gate</span>
              <strong className="text-white block mb-1">Harvesting</strong>
              <p className="text-[11px] text-slate-400">Farmers bring paddy/wheat to registered APMC mandis</p>
            </div>

            <div className="p-3 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-[10px] font-bold text-green-400 block mb-1">2. Procurement</span>
              <strong className="text-white block mb-1">FCI & State Agencies</strong>
              <p className="text-[11px] text-slate-400">Moisture check & payment directly into farmer accounts via DBT</p>
            </div>

            <div className="p-3 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-[10px] font-bold text-green-400 block mb-1">3. Storage</span>
              <strong className="text-white block mb-1">CWC & FCI Silos</strong>
              <p className="text-[11px] text-slate-400">Buffer stocks maintenance against strategic emergencies</p>
            </div>

            <div className="p-3 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-[10px] font-bold text-green-400 block mb-1">4. Rail Transit</span>
              <strong className="text-white block mb-1">Indian Railways</strong>
              <p className="text-[11px] text-slate-400">Bulk grain movement from surplus states to deficit states</p>
            </div>

            <div className="p-3 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-[10px] font-bold text-green-400 block mb-1">5. Fair Price Shop</span>
              <strong className="text-white block mb-1">ePoS Devices</strong>
              <p className="text-[11px] text-slate-400">Aadhaar biometric authentication at 5.4 lakh ration shops</p>
            </div>

            <div className="p-3 bg-slate-850 rounded-xl border border-slate-750">
              <span className="text-[10px] font-bold text-green-400 block mb-1">6. Beneficiary</span>
              <strong className="text-white block mb-1">81 Crore Citizens</strong>
              <p className="text-[11px] text-slate-400">Free foodgrains under PMGKAY with ONORC nationwide portability</p>
            </div>
          </div>
        </div>
      )}

      {/* 6. Food Processing Farm-to-Fork Model */}
      {subTab === 'processing' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Food Processing: Farm-to-Fork Value Chain Model</h2>
            <p className="text-xs text-slate-400">Post-harvest loss mitigation, value-addition capture, and export standards</p>
          </div>

          <div className="space-y-4">
            {foodProcessingFlow.map((stage, idx) => (
              <div key={idx} className="bg-slate-850 border border-slate-750 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">{stage.stage}</span>
                    <span className="text-[11px] text-slate-400">({stage.actor})</span>
                  </div>
                  <p className="text-xs text-slate-200">{stage.action}</p>
                </div>

                <div className="p-3 rounded-lg bg-red-950/20 border border-red-800/40 text-xs text-red-300 shrink-0 md:max-w-md">
                  <strong className="block text-[10px] uppercase font-bold text-red-400 mb-0.5">Critical Bottleneck / Loss Point:</strong>
                  {stage.lossPoint}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  uppscGS3Data, 
  UPPSCModuleItem, 
  roAroAgriRankingsData, 
  icarInstitutesUPData, 
  roAroExpresswaysSpecsData, 
  roAroSchemesData, 
  roAroProtectedAreasData, 
  comparativeEvaluationMatrix 
} from '../../data/uppscData';
import { pyqDatabase } from '../../data/pyqData';
import { 
  MapPin, Shield, Sprout, Building2, Leaf, 
  AlertTriangle, CheckCircle2, Bookmark, BarChart3, 
  Table, Award, BookOpen, Layers, HelpCircle, 
  ChevronRight, ExternalLink, Zap, Compass, Check
} from 'lucide-react';

export const UppscView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [activeMainTab, setActiveMainTab] = useState<'uppsc_mains' | 'ro_aro_factual' | 'comparative_matrix' | 'pyq_archive'>('uppsc_mains');
  
  // Tab 1: UPPSC Mains state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItemId, setSelectedItemId] = useState<string>(uppscGS3Data[0].id);

  // Tab 2: RO/ARO Sub-tab
  const [roSubTab, setRoSubTab] = useState<'rankings' | 'institutes' | 'expressways' | 'schemes' | 'protected_areas'>('rankings');

  // Interactive Match Practice State in Tab 2
  const [userMatches, setUserMatches] = useState<{ [id: string]: string }>({});
  const [showMatchResults, setShowMatchResults] = useState(false);

  const categories = [
    'All',
    'Economic & Fiscal Systems',
    'Agriculture & Irrigation',
    'ODOP & MSME Clusters',
    'Expressways & Logistics',
    'Defence Corridor & Industry',
    'Energy Matrix & Solar',
    'Ecology & Pollution',
    'Disaster Vulnerability',
    'Law, Order & Borders'
  ];

  const filteredItems = selectedCategory === 'All'
    ? uppscGS3Data
    : uppscGS3Data.filter(i => i.category === selectedCategory);

  const currentItem = uppscGS3Data.find(i => i.id === selectedItemId) || uppscGS3Data[0];

  // Filter UPPSC & RO/ARO PYQs for Tab 4
  const statePyqs = pyqDatabase.filter(q => q.exam === 'UPPSC_MAINS' || q.exam === 'UPPSC_PRELIMS' || q.exam === 'UP_RO_ARO');

  const handleMatchSelect = (sanctuaryId: string, district: string) => {
    setUserMatches(prev => ({
      ...prev,
      [sanctuaryId]: district
    }));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-yellow-950/40 to-slate-900 border border-yellow-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
              State PSC Engine • Section 2 & 3
            </span>
            <span className="text-xs text-slate-400">UPPSC PCS (GS-III 200 Marks) & UP RO/ARO Speed Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Uttar Pradesh GS-III & RO/ARO Master Engine
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            $1-Trillion Economy roadmap, 9 Agro-climatic zones, 6-node Defence Corridor, Expressways network (Ganga/Purvanchal), and high-yield RO/ARO factual ranking matrices.
          </p>
        </div>

        {/* Main Section Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'uppsc_mains', label: 'UPPSC GS-3 (200M)', icon: BookOpen },
            { id: 'ro_aro_factual', label: 'RO/ARO Factual Matrix', icon: Zap },
            { id: 'comparative_matrix', label: 'Evaluation Matrix', icon: Table },
            { id: 'pyq_archive', label: 'State PYQs', icon: Award }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeMainTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMainTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-yellow-500 text-slate-950 shadow-md'
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

      {/* ==================================================================== */}
      {/* TAB 1: UPPSC PCS GS-III (200 MARKS DESCRIPTIVE ENGINE) */}
      {/* ==================================================================== */}
      {activeMainTab === 'uppsc_mains' && (
        <div className="space-y-6">
          {/* Top Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 border border-slate-800 p-2 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-yellow-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Module Navigation */}
            <div className="lg:col-span-1 space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Mains Modules ({filteredItems.length})
                </span>
                <span className="text-[10px] text-yellow-400 font-mono">
                  8M (125W) / 12M (200W)
                </span>
              </div>

              <div className="space-y-2">
                {filteredItems.map((item) => {
                  const isSelected = item.id === currentItem.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItemId(item.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-slate-850 border-yellow-500 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                          {item.sectionCode}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold leading-snug">{item.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Detailed Panel */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                        {currentItem.category}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-950/60 text-yellow-300 border border-yellow-800/50">
                        {currentItem.marksPattern}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-white mt-0.5">{currentItem.title}</h2>
                  </div>
                  <button
                    onClick={() => toggleBookmark(currentItem.id)}
                    className="text-xs font-semibold text-yellow-400 hover:underline self-start flex items-center gap-1"
                  >
                    <Bookmark size={14} />
                    <span>{userState.bookmarks.includes(currentItem.id) ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>
                </div>

                {/* Mandatory UP Statistical Facts & Baseline Data */}
                <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2 text-xs">
                  <strong className="text-amber-300 uppercase text-[10px] block font-bold tracking-wider">
                    ⚡ Mandatory UP Statistical Facts & Baseline Data
                  </strong>
                  <ul className="space-y-1.5 text-slate-300">
                    {currentItem.keyFacts.map((fact, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-yellow-400 font-bold">•</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Analytical Dimensions & Flagship Initiatives */}
                <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2 text-xs">
                  <strong className="text-cyan-300 uppercase text-[10px] block font-bold tracking-wider">
                    🔍 Analytical Dimensions & Flagship Initiatives
                  </strong>
                  <ul className="space-y-1.5 text-slate-300">
                    {currentItem.analyticalPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Model Diagram / Conceptual Framework */}
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-1">
                  <strong className="text-indigo-400 text-[11px] uppercase block font-mono">
                    📐 Answer Enrichment Blueprint / Diagram Prompt:
                  </strong>
                  <p className="text-slate-300 font-mono text-[11px] bg-slate-900 p-2 rounded border border-slate-800">
                    {currentItem.diagramOrFramework}
                  </p>
                </div>

                {/* Mains Relevance */}
                <div className="p-3.5 bg-yellow-950/20 border border-yellow-800/40 rounded-lg text-xs text-slate-300">
                  <strong className="text-yellow-300 block mb-1">UPPSC Mains Answer Formulation:</strong>
                  <p className="leading-relaxed">{currentItem.mainsRelevance}</p>
                </div>

                <div className="text-[10px] text-slate-500 pt-1 flex items-center justify-between">
                  <span>Official Reference: {currentItem.source}</span>
                  <span className="text-slate-400 font-mono">State Code: UPPSC-GS3-2024</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 2: UP RO/ARO SPEED & FACTUAL MATRIX ENGINE */}
      {/* ==================================================================== */}
      {activeMainTab === 'ro_aro_factual' && (
        <div className="space-y-6">
          
          {/* Sub-tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-xl">
            {[
              { id: 'rankings', label: '1. Agri & Livestock Rankings' },
              { id: 'institutes', label: '2. ICAR Research Institutes' },
              { id: 'expressways', label: '3. Expressways Exact Specs' },
              { id: 'schemes', label: '4. Scheme Mechanics & Funding Splits' },
              { id: 'protected_areas', label: '5. Match: Protected Areas & Districts' }
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => setRoSubTab(sub.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  roSubTab === sub.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Sub-tab 1: Production Rankings */}
          {roSubTab === 'rankings' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <h3 className="text-base font-bold text-white">All-India Agricultural & Livestock Production Rankings of UP</h3>
                <p className="text-xs text-slate-400">High-yield speed memory sheet for direct factual queries in UP RO/ARO & UPPSC Prelims.</p>
              </div>

              <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-850 text-slate-400 uppercase text-[10px] font-mono border-b border-slate-800">
                    <tr>
                      <th className="p-3">Commodity</th>
                      <th className="p-3 text-amber-400">National Rank (UP)</th>
                      <th className="p-3">Share in India</th>
                      <th className="p-3">Lead Districts in UP</th>
                      <th className="p-3">Key Exam Distinction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {roAroAgriRankingsData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-850/60 transition-colors">
                        <td className="p-3 font-bold text-white">{row.commodity}</td>
                        <td className="p-3 font-extrabold text-amber-300">
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                            {row.nationalRankUP}
                          </span>
                        </td>
                        <td className="p-3 font-mono text-cyan-300">{row.shareInIndia}</td>
                        <td className="p-3">{row.leadDistrictsInUP}</td>
                        <td className="p-3 text-slate-400">{row.keyExamFact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* NPK Distortion Note */}
              <div className="p-4 bg-yellow-950/20 border border-yellow-800/40 rounded-xl text-xs space-y-1">
                <strong className="text-yellow-300 font-bold block">Fertilizer Consumption Distortion Metric (NPK Ratio):</strong>
                <p className="text-slate-300 leading-relaxed">
                  While the agronomically ideal NPK ratio is <strong>4 : 2 : 1</strong>, heavy statutory subsidies on Urea have distorted India\'s national average to <strong>8.2 : 3.2 : 1</strong>. In the intensive sugarcane belt of Western UP, the ratio is severely skewed up to <strong>14 : 4 : 1</strong>, causing soil micronutrient exhaustion (Zinc, Boron, Sulfur deficits).
                </p>
              </div>
            </div>
          )}

          {/* Sub-tab 2: ICAR Institutes */}
          {roSubTab === 'institutes' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <h3 className="text-base font-bold text-white">ICAR & National Research Institutes Located in Uttar Pradesh</h3>
                <p className="text-xs text-slate-400">Frequently asked in &ldquo;Match List-I (Institute) with List-II (Headquarters)&rdquo; format in RO/ARO papers.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {icarInstitutesUPData.map((inst, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 hover:border-yellow-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-yellow-300 border border-slate-700">
                        {inst.prelimsMatchPair}
                      </span>
                      <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
                        <MapPin size={12} />
                        {inst.locationDistrict}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{inst.instituteName}</h4>
                    <p className="text-xs text-slate-300">{inst.specializationField}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 3: Expressways Specs */}
          {roSubTab === 'expressways' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <h3 className="text-base font-bold text-white">Expressways of Uttar Pradesh: Exact Numerical Specifications</h3>
                <p className="text-xs text-slate-400">Exact lengths, starting villages, terminal nodes, and districts traversed for Secretariat file review & objective questions.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roAroExpresswaysSpecsData.map((exp, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h4 className="text-sm font-black text-white">{exp.name}</h4>
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                        {exp.exactLengthKm}
                      </span>
                    </div>
                    
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div>
                        <strong className="text-slate-400 text-[10px] uppercase block">Starting Point:</strong>
                        <span>{exp.startingPoint}</span>
                      </div>
                      <div>
                        <strong className="text-slate-400 text-[10px] uppercase block">Ending Point:</strong>
                        <span>{exp.endingPoint}</span>
                      </div>
                      <div>
                        <strong className="text-slate-400 text-[10px] uppercase block">Districts Traversed ({exp.districtsTraversed.length}):</strong>
                        <p className="text-cyan-300 text-[11px] leading-relaxed">
                          {exp.districtsTraversed.join(', ')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[11px] text-yellow-300/90">
                      <strong>Exam Highlight:</strong> {exp.specialFeature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 4: Schemes */}
          {roSubTab === 'schemes' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <h3 className="text-base font-bold text-white">Flagship Welfare Schemes: Launch Years & Funding Splits</h3>
                <p className="text-xs text-slate-400">Centre-State funding splits (60:40, 50:50, or 100% Central Sector) and target parameters.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roAroSchemesData.map((sch, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                        Launch: {sch.launchYear}
                      </span>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        {sch.fundingPattern}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{sch.schemeName}</h4>
                    <div className="space-y-1 text-slate-300">
                      <div>
                        <strong className="text-slate-400 text-[10px] block uppercase">Nodal Ministry:</strong>
                        <span>{sch.nodalMinistryOrDept}</span>
                      </div>
                      <div>
                        <strong className="text-slate-400 text-[10px] block uppercase">Financial Quantum / Entitlement:</strong>
                        <span className="text-emerald-300 font-medium">{sch.financialQuantum}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub-tab 5: Protected Areas Matcher */}
          {roSubTab === 'protected_areas' && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-white">UP Protected Areas & Wildlife Sanctuaries: List-I vs List-II</h3>
                  <p className="text-xs text-slate-400">Master every National Park, Wildlife Sanctuary, and Ramsar Wetland in Uttar Pradesh.</p>
                </div>
                <button
                  onClick={() => setShowMatchResults(!showMatchResults)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-yellow-500 text-slate-950 hover:bg-yellow-400 transition-colors self-start"
                >
                  {showMatchResults ? 'Hide Answers' : 'Reveal Official Matches'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roAroProtectedAreasData.map((pa) => (
                  <div key={pa.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {pa.type}
                      </span>
                      {showMatchResults ? (
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <Check size={14} />
                          {pa.districtLocation}
                        </span>
                      ) : (
                        <span className="text-xs text-yellow-400 font-mono">
                          District: [Click Reveal]
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white">{pa.sanctuaryOrPark}</h4>
                    <p className="text-xs text-slate-300">
                      <strong className="text-slate-400">Faunal Highlight:</strong> {pa.faunalHighlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 3: COMPARATIVE EVALUATION MATRIX (UPSC vs UPPSC vs RO/ARO) */}
      {/* ==================================================================== */}
      {activeMainTab === 'comparative_matrix' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="text-lg font-black text-white">Comparative Evaluation Matrix: GS-3 Applied Dimensions</h2>
            <p className="text-xs text-slate-300 mt-1">
              Cross-examination blueprint explaining how the identical syllabus domain is tested with distinct pedagogical expectations across UPSC CSE, UPPSC PCS, and UP RO/ARO.
            </p>
          </div>

          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl shadow-lg">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-850 text-slate-400 uppercase text-[10px] font-mono border-b border-slate-800">
                <tr>
                  <th className="p-4 w-1/5">Dimension / Parameter</th>
                  <th className="p-4 w-4/15 text-indigo-400">UPSC CSE (GS-3)</th>
                  <th className="p-4 w-4/15 text-yellow-400">UPPSC PCS (GS-3)</th>
                  <th className="p-4 w-4/15 text-emerald-400">UP RO/ARO (Allied GS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparativeEvaluationMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="p-4 font-bold text-white align-top">
                      {row.parameter}
                    </td>
                    <td className="p-4 leading-relaxed text-slate-300 align-top bg-indigo-950/10">
                      {row.upscCseGS3}
                    </td>
                    <td className="p-4 leading-relaxed text-slate-300 align-top bg-yellow-950/10">
                      {row.uppscPcsGS3}
                    </td>
                    <td className="p-4 leading-relaxed text-slate-300 align-top bg-emerald-950/10">
                      {row.upRoAro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 4: UPPSC & RO/ARO SOLVED PYQ ARCHIVE */}
      {/* ==================================================================== */}
      {activeMainTab === 'pyq_archive' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Authentic UPPSC & RO/ARO Questions Archive</h3>
              <p className="text-xs text-slate-400">Official questions with model answers, concept tested, and source citations.</p>
            </div>
            <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded border border-yellow-500/20">
              {statePyqs.length} Solved Questions
            </span>
          </div>

          <div className="space-y-4">
            {statePyqs.map(q => (
              <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                      {q.exam} {q.year}
                    </span>
                    <span className="text-slate-400">{q.topic} • {q.subtopic}</span>
                  </div>
                  {q.marks && (
                    <span className="font-bold text-slate-400 font-mono">{q.marks} Marks</span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-white whitespace-pre-line leading-relaxed">
                  {q.questionText}
                </h4>

                <div className="p-3 bg-slate-850 rounded-lg text-xs space-y-1">
                  <strong className="text-cyan-400 uppercase text-[10px] block">Concept Tested:</strong>
                  <p className="text-slate-300">{q.conceptTested}</p>
                </div>

                <div className="p-3.5 bg-yellow-950/15 border border-yellow-800/30 rounded-lg text-xs space-y-2">
                  <strong className="text-yellow-300 uppercase text-[10px] block">Official Model Answer Framework:</strong>
                  <p className="text-slate-300 leading-relaxed">{q.explanationOrModelAnswer}</p>
                  
                  {q.modelPoints && q.modelPoints.length > 0 && (
                    <div className="pt-2 border-t border-slate-800/80 space-y-1">
                      <strong className="text-slate-400 text-[10px] uppercase block">Key Model Points:</strong>
                      <ul className="space-y-1 text-slate-300">
                        {q.modelPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-yellow-400">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-500 pt-1">
                  Official Source: {q.officialSource}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

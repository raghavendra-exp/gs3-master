import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { uppscGS3Data, UPPSCModuleItem } from '../../data/uppscData';
import { 
  MapPin, Shield, Sprout, Building2, Leaf, 
  AlertTriangle, CheckCircle2, Bookmark 
} from 'lucide-react';

export const UppscView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItemId, setSelectedItemId] = useState<string>(uppscGS3Data[0].id);

  const categories = ['All', 'Agriculture & Irrigation', 'Industry & Corridors', 'Infrastructure', 'Environment & Forests', 'Internal Security'];

  const filteredItems = selectedCategory === 'All'
    ? uppscGS3Data
    : uppscGS3Data.filter(i => i.category === selectedCategory);

  const currentItem = uppscGS3Data.find(i => i.id === selectedItemId) || uppscGS3Data[0];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-yellow-950/30 to-slate-900 border border-yellow-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
              State PSC Special • Module 108-109
            </span>
            <span className="text-xs text-slate-400">UPPSC PCS GS-III, GS-V & GS-VI Exclusive Modules</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Uttar Pradesh GS-III Specialized Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            UP agrarian economy, Bundelkhand & Purvanchal expressways, UP Defence Industrial Corridor, Terai biodiversity, and the 551 km Indo-Nepal border management.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-yellow-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left List */}
        <div className="lg:col-span-1 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
            UP Modules ({filteredItems.length})
          </span>

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
                  <span className="text-[10px] font-bold text-yellow-400 uppercase block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xs font-bold leading-snug">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                  {currentItem.category}
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">{currentItem.title}</h2>
              </div>
              <button
                onClick={() => toggleBookmark(currentItem.id)}
                className="text-xs font-semibold text-yellow-400 hover:underline self-start"
              >
                {userState.bookmarks.includes(currentItem.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>

            {/* Key Facts & Statistics */}
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2 text-xs">
              <strong className="text-amber-300 uppercase text-[10px] block font-bold">
                Mandatory UP Statistical Facts & Baseline Data
              </strong>
              <ul className="space-y-1.5 text-slate-300">
                {currentItem.keyFacts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-yellow-400 font-bold">⚡</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytical Insights & Policy Initiatives */}
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2 text-xs">
              <strong className="text-cyan-300 uppercase text-[10px] block font-bold">
                Analytical Dimensions & Flagship Initiatives
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

            {/* Mains Relevance */}
            <div className="p-3 bg-yellow-950/20 border border-yellow-800/40 rounded-lg text-xs text-slate-300">
              <strong className="text-yellow-300 block mb-0.5">UPPSC Mains Answer Formulation:</strong>
              <p>{currentItem.mainsRelevance}</p>
            </div>

            <div className="text-[10px] text-slate-500 pt-1">
              Official Reference: {currentItem.source}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

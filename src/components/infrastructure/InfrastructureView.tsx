import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Building2, Train, Anchor, Zap, Shield, 
  ArrowRight, CheckCircle2, Layers, DollarSign 
} from 'lucide-react';

export const InfrastructureView: React.FC = () => {
  const [subTab, setSubTab] = useState<'sectors' | 'models' | 'nip'>('sectors');

  const pppModels = [
    {
      name: 'EPC (Engineering, Procurement & Construction)',
      funding: '100% Government Funded',
      trafficRisk: 'Government bears entire revenue and traffic risk.',
      suitability: 'High-risk projects where private players will not take traffic risk, or strategic border roads.',
      mechanism: 'Government invites tenders; private contractor designs and constructs; government pays directly per milestone.'
    },
    {
      name: 'BOT - Toll (Build, Operate, Transfer)',
      funding: '100% Private Concessionaire Funded',
      trafficRisk: 'Private concessionaire bears entire commercial traffic risk.',
      suitability: 'High-density commercial highway corridors with guaranteed traffic and toll revenue.',
      mechanism: 'Concessionaire finances, builds, and collects tolls for 20-30 years concession period before handing back to NHAI.'
    },
    {
      name: 'HAM (Hybrid Annuity Model)',
      funding: '40% Government + 60% Private Concessionaire',
      trafficRisk: 'Government bears traffic risk; pays fixed annuity payments to developer.',
      suitability: 'Moderate-traffic highways where private sector is unwilling to bear pure toll demand risk.',
      mechanism: 'NHAI provides 40% capital grant during construction in 5 equal milestones; remaining 60% arranged by developer and paid back via semi-annual annuities.'
    },
    {
      name: 'InvITs (Infrastructure Investment Trusts)',
      funding: 'Capital Markets / Retail & Institutional Investors',
      trafficRisk: 'Investors receive regular dividends from cash-generating operational assets.',
      suitability: 'Monetizing completed operational highway and power transmission assets to free up capital.',
      mechanism: 'Regulated by SEBI; acts like a mutual fund pooling money to own operational toll roads (e.g. NHAI InvIT).'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              GS-III Core Syllabus • Module 20-21
            </span>
            <span className="text-xs text-slate-400">Roads • Rail • Ports • Energy • PPP • HAM • BOT • InvITs</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Infrastructure & Investment Models
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            National Infrastructure Pipeline (₹111 lakh cr), PM Gati Shakti, Dedicated Freight Corridors, Sagarmala, and comprehensive PPP concession models.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'sectors', label: 'Infra Pillars', icon: Building2 },
            { id: 'models', label: 'PPP & Investment Models', icon: DollarSign },
            { id: 'nip', label: 'NIP & Gati Shakti', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
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

      {/* 1. Infra Pillars Sub-tab */}
      {subTab === 'sectors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          
          {/* Roads */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Building2 size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Roads: Bharatmala Pariyojana</h3>
                <span className="text-[10px] text-slate-400">MoRTH & NHAI</span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Targeting 34,800 km of economic corridors, feeder roads, border roads, coastal highways, and greenfield expressways (e.g. Delhi-Mumbai Expressway).
            </p>
            <div className="pt-2 border-t border-slate-800 text-slate-400">
              <strong className="text-cyan-300">Exam Highlight: </strong>
              Electronic Toll Collection via FASTag (RFID) collects ~₹50,000+ crore annually with near zero toll plaza wait times.
            </div>
          </div>

          {/* Railways */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Train size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Railways: DFCs & Kavach</h3>
                <span className="text-[10px] text-slate-400">Indian Railways & DFCCIL</span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Eastern DFC (Ludhiana to Dankuni) and Western DFC (Dadri to JNPT) separating freight from passenger traffic, doubling goods train speeds from 25 km/h to 60-70 km/h.
            </p>
            <div className="pt-2 border-t border-slate-800 text-slate-400">
              <strong className="text-blue-300">Safety Tech: </strong>
              Kavach: Indigenous Automatic Train Protection (ATP) system preventing signal passing at danger (SPAD) and head-on collisions.
            </div>
          </div>

          {/* Ports */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
                <Anchor size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Ports: Sagarmala & Transshipment</h3>
                <span className="text-[10px] text-slate-400">Ministry of Ports, Shipping & Waterways</span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Port modernization, port-linked industrialization, and coastal community development. Commissioning of Vizhinjam International Seaport (Kerala) as India’s first mega deepwater transshipment hub.
            </p>
            <div className="pt-2 border-t border-slate-800 text-slate-400">
              <strong className="text-teal-300">Inland Waterways: </strong>
              NW-1 (Ganga: Prayagraj to Haldia 1,620 km) developed under Jal Marg Vikas Project with multi-modal terminals at Varanasi and Sahibganj.
            </div>
          </div>

        </div>
      )}

      {/* 2. PPP & Investment Models Sub-tab */}
      {subTab === 'models' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Public-Private Partnership (PPP) Investment Models Comparison</h2>
            <p className="text-xs text-slate-400">Risk allocation between Government and Private Concessionaire across BOT, HAM, EPC, and InvITs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pppModels.map((m, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-cyan-400">{m.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Model #{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <div>
                    <strong className="text-amber-300">Capital Funding: </strong>
                    <span>{m.funding}</span>
                  </div>
                  <div>
                    <strong className="text-rose-300">Traffic / Commercial Risk: </strong>
                    <span>{m.trafficRisk}</span>
                  </div>
                  <div>
                    <strong className="text-emerald-300">Mechanism: </strong>
                    <span>{m.mechanism}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">When Suitable: </strong>
                  {m.suitability}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. NIP & Gati Shakti Sub-tab */}
      {subTab === 'nip' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 text-xs">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">National Infrastructure Pipeline (NIP) & PM Gati Shakti</h2>
            <p className="text-xs text-slate-400">Breaking inter-ministerial silos via spatial GIS planning and National Monetisation Pipeline (NMP)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-cyan-400 text-sm block">PM Gati Shakti National Master Plan</strong>
              <p className="text-slate-300 leading-relaxed">
                A digital platform developed by BISAG-N (Bhaskaracharya National Institute for Space Applications and Geo-informatics) integrating over 200+ GIS layers of existing and planned infrastructure from 16 central ministries. Prevents uncoordinated road dig-ups for fiber cables or gas pipelines after highway completion.
              </p>
            </div>

            <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
              <strong className="text-amber-400 text-sm block">National Monetisation Pipeline (NMP)</strong>
              <p className="text-slate-300 leading-relaxed">
                Targeting ₹6 lakh crore asset monetization over 4 years without selling core ownership. Involves leasing de-risked brownfield public infrastructure assets (highways, railway stations, power transmission grids, gas pipelines) to private concessionaires, recycling capital into greenfield NIP construction.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

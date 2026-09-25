import React from 'react';
import { useApp } from '../../context/AppContext';
import { NavTab } from '../../types';
import { 
  LayoutDashboard, Lightbulb, TrendingUp, Sprout, 
  Cpu, Leaf, CloudRain, ShieldAlert, Radio, 
  FileText, CheckSquare, Edit3, Database, Repeat, 
  MapPin, Settings
} from 'lucide-react';

interface SidebarItem {
  id: NavTab;
  label: string;
  badge?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

export const Sidebar: React.FC<{ isOpen: boolean; onCloseMobile: () => void }> = ({
  isOpen,
  onCloseMobile
}) => {
  const { activeTab, setActiveTab, examMode } = useApp();

  const primaryNavItems: SidebarItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-400' },
    { id: 'issueAnalyser', label: 'Issue Analyser', badge: 'Signature', icon: Lightbulb, color: 'text-amber-400' },
  ];

  const syllabusNavItems: SidebarItem[] = [
    { id: 'economy', label: 'Indian Economy & Budget', icon: TrendingUp, color: 'text-emerald-400' },
    { id: 'agriculture', label: 'Agriculture & Food', icon: Sprout, color: 'text-green-500' },
    { id: 'infrastructure', label: 'Infrastructure & PPP', icon: Database, color: 'text-cyan-400' },
    { id: 'science', label: 'Science & Technology', icon: Cpu, color: 'text-indigo-400' },
    { id: 'environment', label: 'Environment & Ecology', icon: Leaf, color: 'text-emerald-500' },
    { id: 'disaster', label: 'Disaster Management', icon: CloudRain, color: 'text-sky-400' },
    { id: 'security', label: 'Internal Security', icon: ShieldAlert, color: 'text-rose-400' },
  ];

  const practiceAndLabItems: SidebarItem[] = [
    { id: 'currentAffairs', label: 'GS-III LIVE (Current)', badge: 'Linker', icon: Radio, color: 'text-red-400' },
    { id: 'pyq', label: 'PYQ Engine (UPSC/UPPSC)', icon: FileText, color: 'text-purple-400' },
    { id: 'prelims', label: 'Prelims Practice Engine', badge: 'Quiz', icon: CheckSquare, color: 'text-amber-400' },
    { id: 'mains', label: 'Mains Answer Lab', badge: 'Timer', icon: Edit3, color: 'text-orange-400' },
  ];

  const resourceAndToolsItems: SidebarItem[] = [
    { id: 'library', label: 'Data Bank & Reports', icon: Database, color: 'text-teal-400' },
    { id: 'revision', label: 'Revision & Flashcards', badge: 'Spaced', icon: Repeat, color: 'text-fuchsia-400' },
    { id: 'uppsc', label: 'UP-Specific GS-III', badge: 'UPPSC', icon: MapPin, color: 'text-yellow-400' },
    { id: 'updateCentre', label: 'Update Centre & Importer', icon: Settings, color: 'text-slate-400' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setActiveTab(tab);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-16 bottom-0 left-0 z-30 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          
          {/* Main Hub */}
          <div>
            <div className="px-3 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Core Platform
            </div>
            <nav className="space-y-0.5">
              {primaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm shadow-amber-500/20' 
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={17} className={isActive ? 'text-slate-950' : item.color} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider ${
                        isActive ? 'bg-slate-950 text-amber-300' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* GS-III Syllabus Modules */}
          <div>
            <div className="px-3 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              GS-III Syllabus Labs
            </div>
            <nav className="space-y-0.5">
              {syllabusNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-slate-800 text-amber-400 border border-amber-500/30 font-semibold' 
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={17} className={item.color} />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Practice & Current Affairs */}
          <div>
            <div className="px-3 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Exam Practice & Live
            </div>
            <nav className="space-y-0.5">
              {practiceAndLabItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-slate-800 text-amber-400 border border-amber-500/30 font-semibold' 
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={17} className={item.color} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Resources & Regional */}
          <div>
            <div className="px-3 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Library & Regional
            </div>
            <nav className="space-y-0.5">
              {resourceAndToolsItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive 
                        ? 'bg-slate-800 text-amber-400 border border-amber-500/30 font-semibold' 
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon size={17} className={item.color} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-300 border border-yellow-500/30">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

        </div>

        {/* Footer info in sidebar */}
        <div className="p-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Active Mode: <strong className="text-amber-400 uppercase">{examMode}</strong></span>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            Offline Ready
          </span>
        </div>
      </aside>
    </>
  );
};

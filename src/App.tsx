import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { SearchModal } from './components/layout/SearchModal';
import { DashboardView } from './components/dashboard/DashboardView';
import { IssueAnalyserView } from './components/issueAnalyser/IssueAnalyserView';
import { EconomyView } from './components/economy/EconomyView';
import { AgricultureView } from './components/agriculture/AgricultureView';
import { InfrastructureView } from './components/infrastructure/InfrastructureView';
import { ScienceView } from './components/science/ScienceView';
import { EnvironmentView } from './components/environment/EnvironmentView';
import { DisasterView } from './components/disaster/DisasterView';
import { SecurityView } from './components/security/SecurityView';
import { CurrentAffairsView } from './components/currentAffairs/CurrentAffairsView';
import { PyqView } from './components/pyq/PyqView';
import { PrelimsView } from './components/prelims/PrelimsView';
import { MainsView } from './components/mains/MainsView';
import { LibraryView } from './components/library/LibraryView';
import { RevisionView } from './components/revision/RevisionView';
import { UppscView } from './components/uppsc/UppscView';
import { UpdateCentreView } from './components/updateCentre/UpdateCentreView';
import { Shield, BookOpen, ExternalLink, Heart } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'issueAnalyser':
        return <IssueAnalyserView />;
      case 'economy':
        return <EconomyView />;
      case 'agriculture':
        return <AgricultureView />;
      case 'infrastructure':
        return <InfrastructureView />;
      case 'science':
        return <ScienceView />;
      case 'environment':
        return <EnvironmentView />;
      case 'disaster':
        return <DisasterView />;
      case 'security':
        return <SecurityView />;
      case 'currentAffairs':
        return <CurrentAffairsView />;
      case 'pyq':
        return <PyqView />;
      case 'prelims':
        return <PrelimsView />;
      case 'mains':
        return <MainsView />;
      case 'library':
        return <LibraryView />;
      case 'revision':
        return <RevisionView />;
      case 'uppsc':
        return <UppscView />;
      case 'updateCentre':
        return <UpdateCentreView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Sticky Navbar */}
      <Navbar 
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} 
        isMobileSidebarOpen={isMobileSidebarOpen}
      />

      {/* Global Search Dialog Modal */}
      <SearchModal />

      {/* Main Container Layout */}
      <div className="flex-1 flex max-w-full">
        
        {/* Left Sidebar Navigation */}
        <Sidebar 
          isOpen={isMobileSidebarOpen} 
          onCloseMobile={() => setIsMobileSidebarOpen(false)} 
        />

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-64 p-4 sm:p-6 lg:p-8 overflow-x-hidden min-h-[calc(100vh-4rem)]">
          {renderActiveTabContent()}
        </main>
      </div>

      {/* Academic & Authoritative Footer */}
      <footer className="lg:pl-64 border-t border-slate-850 bg-slate-900/90 text-slate-400 text-xs py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
              🏛
            </div>
            <div>
              <p className="font-bold text-slate-200">GS-III MASTER • Civil Services Academic Repository</p>
              <p className="text-[11px] text-slate-500">
                Technology • Economic Development • Agriculture • Environment • Biodiversity • Disaster Management • Internal Security
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button onClick={() => setActiveTab('issueAnalyser')} className="hover:text-amber-400 transition-colors">
              Issue Analyser
            </button>
            <button onClick={() => setActiveTab('library')} className="hover:text-amber-400 transition-colors">
              Data Bank
            </button>
            <button onClick={() => setActiveTab('uppsc')} className="hover:text-amber-400 transition-colors">
              UP-Specific Hub
            </button>
            <button onClick={() => setActiveTab('updateCentre')} className="hover:text-amber-400 transition-colors">
              Update Centre
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-mono">100% Client-Side • GitHub Pages Ready</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-slate-800/60 text-[10px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Authoritative Sources: Government of India Ministries, PIB, Economic Survey, Union Budget, RBI, NITI Aayog, MoEFCC, ISRO, NDMA, and UN bodies.
          </p>
          <p className="shrink-0 font-medium">
            Designed for UPSC CSE & State PSC Aspirants
          </p>
        </div>
      </footer>

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;

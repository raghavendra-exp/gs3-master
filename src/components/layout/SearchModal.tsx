import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, ArrowRight, Lightbulb, TrendingUp, Sprout, Cpu, Leaf, ShieldAlert, FileText, CheckSquare } from 'lucide-react';
import { signatureIssues } from '../../data/issueAnalyserData';
import { economyConcepts, economicIndicators } from '../../data/economyData';
import { majorCropsData } from '../../data/agricultureData';
import { techPillars, spaceMissions } from '../../data/scienceData';
import { speciesDatabase, environmentalConventions } from '../../data/environmentData';
import { disasterHazards } from '../../data/disasterData';
import { securityThreats, securityAgencies } from '../../data/securityData';
import { currentAffairsData } from '../../data/currentAffairsData';
import { pyqDatabase } from '../../data/pyqData';
import { prelimsQuestionsBank } from '../../data/prelimsQuestionsData';
import { planningAndGrowthData } from '../../data/economyPlanningData';
import { agricultureComprehensiveData } from '../../data/agriComprehensiveData';
import { scienceComprehensiveData } from '../../data/scienceComprehensiveData';
import { environmentComprehensiveData } from '../../data/environmentComprehensiveData';
import { securityComprehensiveData } from '../../data/securityComprehensiveData';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  snippet: string;
  targetTab: any;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const SearchModal: React.FC = () => {
  const { isSearchModalOpen, setIsSearchModalOpen, setActiveTab, setSelectedIssueId } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchTerm('');
      setResults([]);
    }
  }, [isSearchModalOpen]);

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(!isSearchModalOpen);
      }
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen, setIsSearchModalOpen]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    const q = searchTerm.toLowerCase();
    const res: SearchResult[] = [];

    // Search Signature Issues
    signatureIssues.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.what.toLowerCase().includes(q) || item.tags.some(t => t.toLowerCase().includes(q))) {
        res.push({
          id: item.id,
          title: item.title,
          category: `Issue Analyser • ${item.category}`,
          snippet: item.what.slice(0, 140) + '...',
          targetTab: 'issueAnalyser',
          icon: Lightbulb
        });
      }
    });

    // Search Economy Concepts
    economyConcepts.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.simpleExplanation.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: item.title,
          category: `Economy • ${item.category}`,
          snippet: item.simpleExplanation.slice(0, 140) + '...',
          targetTab: 'economy',
          icon: TrendingUp
        });
      }
    });

    // Search Indicators
    economicIndicators.forEach(item => {
      if (item.name.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `${item.name}: ${item.latestValue}`,
          category: 'Economic Indicator',
          snippet: item.definition.slice(0, 140) + '...',
          targetTab: 'economy',
          icon: TrendingUp
        });
      }
    });

    // Search Agriculture Crops
    majorCropsData.forEach(item => {
      if (item.name.toLowerCase().includes(q) || item.soilRequirements.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `${item.name} (${item.season} Crop)`,
          category: `Agriculture • ${item.category}`,
          snippet: `Top States: ${item.topProducingStates.join(', ')}. MSP: ${item.currentMsp || 'N/A'}`,
          targetTab: 'agriculture',
          icon: Sprout
        });
      }
    });

    // Search Science Tech & Space
    techPillars.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.whatIsIt.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: item.title,
          category: `Science & Tech • ${item.category}`,
          snippet: item.whatIsIt.slice(0, 140) + '...',
          targetTab: 'science',
          icon: Cpu
        });
      }
    });
    spaceMissions.forEach(item => {
      if (item.name.toLowerCase().includes(q) || item.objective.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `${item.name} (${item.launchVehicle})`,
          category: 'Space Mission',
          snippet: item.objective.slice(0, 140) + '...',
          targetTab: 'science',
          icon: Cpu
        });
      }
    });

    // Search Environment Species & Conventions
    speciesDatabase.forEach(item => {
      if (item.commonName.toLowerCase().includes(q) || item.scientificName.toLowerCase().includes(q) || item.habitat.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `${item.commonName} (${item.scientificName})`,
          category: `Species • IUCN: ${item.iucnStatus}`,
          snippet: `WPA: ${item.wpaSchedule} | CITES: ${item.citesAppendix} | Habitat: ${item.habitat}`,
          targetTab: 'environment',
          icon: Leaf
        });
      }
    });
    environmentalConventions.forEach(item => {
      if (item.name.toLowerCase().includes(q) || item.purpose.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: item.name,
          category: 'Environmental Convention',
          snippet: item.purpose.slice(0, 140) + '...',
          targetTab: 'environment',
          icon: Leaf
        });
      }
    });

    // Search Security Threats & Agencies
    securityThreats.forEach(item => {
      if (item.domain.toLowerCase().includes(q) || item.nature.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: item.domain,
          category: 'Internal Security Threat',
          snippet: item.nature.slice(0, 140) + '...',
          targetTab: 'security',
          icon: ShieldAlert
        });
      }
    });
    securityAgencies.forEach(item => {
      if (item.name.toLowerCase().includes(q) || item.shortName.toLowerCase().includes(q) || item.mandate.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `${item.shortName} - ${item.name}`,
          category: 'Security Force',
          snippet: item.mandate.slice(0, 140) + '...',
          targetTab: 'security',
          icon: ShieldAlert
        });
      }
    });

    // Search Current Affairs
    currentAffairsData.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: item.title,
          category: `Current Affairs • ${item.category}`,
          snippet: item.summary.slice(0, 140) + '...',
          targetTab: 'currentAffairs',
          icon: FileText
        });
      }
    });

    // Search PYQs
    pyqDatabase.forEach(item => {
      if (item.questionText.toLowerCase().includes(q) || item.topic.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `${item.exam} ${item.year}: ${item.topic}`,
          category: 'Previous Year Question',
          snippet: item.questionText.slice(0, 140) + '...',
          targetTab: 'pyq',
          icon: FileText
        });
      }
    });

    // Search MCQs
    prelimsQuestionsBank.forEach(item => {
      if (item.questionText.toLowerCase().includes(q) || item.concept.toLowerCase().includes(q)) {
        res.push({
          id: item.id,
          title: `Prelims MCQ: ${item.subtopic}`,
          category: `Prelims Question • ${item.topic}`,
          snippet: item.questionText.slice(0, 140) + '...',
          targetTab: 'prelims',
          icon: CheckSquare
        });
      }
    });

    // Search Comprehensive Syllabus Modules (Economy, Agri, Science, Environment, Security)
    planningAndGrowthData.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.subTitle.toLowerCase().includes(q) || item.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.points.some(p => p.toLowerCase().includes(q)))) {
        res.push({
          id: item.id,
          title: `${item.title} (${item.category})`,
          category: 'Economy Syllabus Master',
          snippet: item.description.slice(0, 140) + '...',
          targetTab: 'economy',
          icon: TrendingUp
        });
      }
    });

    agricultureComprehensiveData.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.subTitle.toLowerCase().includes(q) || item.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.points.some(p => p.toLowerCase().includes(q)))) {
        res.push({
          id: item.id,
          title: `${item.title} (${item.category})`,
          category: 'Agriculture Syllabus Master',
          snippet: item.description.slice(0, 140) + '...',
          targetTab: 'agriculture',
          icon: Sprout
        });
      }
    });

    scienceComprehensiveData.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.subTitle.toLowerCase().includes(q) || item.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.points.some(p => p.toLowerCase().includes(q)))) {
        res.push({
          id: item.id,
          title: `${item.title} (${item.category})`,
          category: 'Science & Tech Syllabus Master',
          snippet: item.description.slice(0, 140) + '...',
          targetTab: 'science',
          icon: Cpu
        });
      }
    });

    environmentComprehensiveData.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.subTitle.toLowerCase().includes(q) || item.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.points.some(p => p.toLowerCase().includes(q)))) {
        res.push({
          id: item.id,
          title: `${item.title} (${item.category})`,
          category: 'Environment Syllabus Master',
          snippet: item.description.slice(0, 140) + '...',
          targetTab: 'environment',
          icon: Leaf
        });
      }
    });

    securityComprehensiveData.forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.subTitle.toLowerCase().includes(q) || item.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.points.some(p => p.toLowerCase().includes(q)))) {
        res.push({
          id: item.id,
          title: `${item.title} (${item.category})`,
          category: 'Security Syllabus Master',
          snippet: item.description.slice(0, 140) + '...',
          targetTab: 'security',
          icon: ShieldAlert
        });
      }
    });

    setResults(res.slice(0, 15)); // top 15 results
  }, [searchTerm]);

  const handleSelect = (result: SearchResult) => {
    if (result.targetTab === 'issueAnalyser') {
      setSelectedIssueId(result.id);
    }
    setActiveTab(result.targetTab);
    setIsSearchModalOpen(false);
  };

  if (!isSearchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-850">
          <Search size={20} className="text-amber-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type any GS-III term: MSP, NISAR, GIB, FRBM, PMLA, DSR, AI..."
            className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-slate-400"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-slate-400 hover:text-white mr-2"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 hover:text-white border border-slate-700 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-slate-800/60">
          {searchTerm && results.length === 0 && (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm font-medium">No results found for &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-xs text-slate-500 mt-1">Try keywords like &ldquo;Groundwater&rdquo;, &ldquo;Repo Rate&rdquo;, &ldquo;Tiger&rdquo;, or &ldquo;BSF&rdquo;</p>
            </div>
          )}

          {!searchTerm && (
            <div className="p-4 text-xs text-slate-400 space-y-2">
              <span className="font-semibold text-slate-300 block mb-1">Quick Suggestions:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Groundwater', 'Direct Seeding', 'Artificial Intelligence', 'Panchamrit', 'Sendai Framework', 'PMLA', 'MSP', 'ISRO NISAR', 'GIB', 'FRBM'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700/60 text-xs transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.targetTab}-${item.id}`}
                onClick={() => handleSelect(item)}
                className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer group transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-amber-400 shrink-0" />
                    <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.snippet}
                </p>
                <div className="flex items-center gap-1 text-[11px] text-amber-400/80 font-medium mt-2">
                  <span>Open in {item.targetTab}</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>{results.length} verified records found</span>
          <span className="hidden sm:inline">Use ↑ ↓ to navigate, ↵ to select</span>
        </div>
      </div>
    </div>
  );
};

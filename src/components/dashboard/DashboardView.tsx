import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  TrendingUp, Sprout, Cpu, Leaf, CloudRain, ShieldAlert, 
  Lightbulb, CheckSquare, Edit3, ArrowRight, Award, 
  Clock, Calendar, BookOpen, AlertCircle, Bookmark, CheckCircle2
} from 'lucide-react';
import { economicIndicators } from '../../data/economyData';

export const DashboardView: React.FC = () => {
  const { 
    setActiveTab, 
    userState, 
    examMode, 
    setExamMode,
    setSelectedIssueId 
  } = useApp();

  const [activePlanTime, setActivePlanTime] = useState<number>(120); // 2 hours
  const [plannerChecked, setPlannerChecked] = useState<Record<string, boolean>>({
    'p1': false, 'p2': false, 'p3': false, 'p4': false
  });

  // Calculate Days Remaining for UPSC and UPPSC
  const calculateDaysLeft = (targetDateStr: string) => {
    const diff = new Date(targetDateStr).getTime() - new Date().getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const daysToUPSC = calculateDaysLeft(userState.examDateUPSC);
  const daysToUPPSC = calculateDaysLeft(userState.examDateUPPSC);

  // Syllabus completion metrics
  const totalCoreTopics = 54;
  const completedCount = userState.completedTopics.length;
  const completionPercentage = Math.min(100, Math.round((completedCount / totalCoreTopics) * 100));

  const planRoutines: Record<number, { title: string; tasks: { id: string; text: string; tab: any }[] }> = {
    30: {
      title: '30-Minute Sprint (High-Yield Quick Revision)',
      tasks: [
        { id: 'p1', text: 'Revise 1 Signature Issue on Issue Analyser', tab: 'issueAnalyser' },
        { id: 'p2', text: 'Attempt 5 rapid Prelims MCQs with traps analysis', tab: 'prelims' },
        { id: 'p3', text: 'Review due flashcards in Spaced Repetition engine', tab: 'revision' }
      ]
    },
    60: {
      title: '1-Hour Balanced Routine (Concept + Current Linkage)',
      tasks: [
        { id: 'p1', text: 'Deep-dive into 1 Core Economy or Agriculture concept', tab: 'economy' },
        { id: 'p2', text: 'Study 2 Current Affairs items with Static Linker', tab: 'currentAffairs' },
        { id: 'p3', text: 'Solve 10-Question Prelims practice set', tab: 'prelims' },
        { id: 'p4', text: 'Review Mistake Book entries and memory tricks', tab: 'revision' }
      ]
    },
    120: {
      title: '2-Hour Intensive Session (Prelims + Mains Answer Writing)',
      tasks: [
        { id: 'p1', text: 'Analyze 1 canonical GS-III issue across 18 dimensions', tab: 'issueAnalyser' },
        { id: 'p2', text: 'Write 1 authentic 10-mark (150 words) Mains answer with timer', tab: 'mains' },
        { id: 'p3', text: 'Solve 20 Prelims questions across S&T and Environment', tab: 'prelims' },
        { id: 'p4', text: 'Memorize 3 data points from the GS-III Data Bank', tab: 'library' }
      ]
    },
    240: {
      title: '4-Hour Comprehensive Mastery (Full Syllabus Workout)',
      tasks: [
        { id: 'p1', text: 'Study 2 syllabus chapters (e.g. Disaster Cycle + Border Management)', tab: 'disaster' },
        { id: 'p2', text: 'Write 1 15-mark (250 words) Mains answer using structured framework', tab: 'mains' },
        { id: 'p3', text: 'Full 50-Question Prelims Mock Test with negative marking review', tab: 'prelims' },
        { id: 'p4', text: 'Read 1 Landmark Committee Report (e.g. Shanta Kumar / Dalwai)', tab: 'library' }
      ]
    }
  };

  const currentRoutine = planRoutines[activePlanTime] || planRoutines[120];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Top Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-amber-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Official-Source-First Architecture
              </span>
              <span className="text-xs text-slate-400">PIB • Budget • Economic Survey • NITI Aayog • ISRO • NDMA</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Welcome to GS-III MASTER
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1.5 leading-relaxed">
              Your comprehensive pair-programming and civil services personal tutor for General Studies Paper III. Connect concepts, official data, schemes, science breakthroughs, and security doctrines straight into Prelims MCQs and 10/15-mark Mains answers.
            </p>
          </div>

          {/* Exam Countdown Clocks */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3.5 text-center min-w-[120px] shadow-inner">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center justify-center gap-1">
                <Calendar size={12} />
                <span>UPSC CSE</span>
              </div>
              <div className="text-2xl font-black text-white mt-0.5">
                {daysToUPSC} <span className="text-xs font-normal text-slate-400">days</span>
              </div>
              <span className="text-[10px] text-slate-400">Prelims 2027</span>
            </div>

            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3.5 text-center min-w-[120px] shadow-inner">
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-400 flex items-center justify-center gap-1">
                <Calendar size={12} />
                <span>UPPSC PCS</span>
              </div>
              <div className="text-2xl font-black text-white mt-0.5">
                {daysToUPPSC} <span className="text-xs font-normal text-slate-400">days</span>
              </div>
              <span className="text-[10px] text-slate-400">Mains Cycle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Quick Indicator Ticker */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* Progress Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Syllabus Covered</span>
            <Award size={16} className="text-amber-400" />
          </div>
          <div className="my-2">
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black text-white">{completionPercentage}%</span>
              <span className="text-xs text-slate-400">{completedCount} of {totalCoreTopics} Topics</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-1.5">
              <div 
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-500" 
                style={{ width: `${Math.max(5, completionPercentage)}%` }}
              />
            </div>
          </div>
          <span className="text-[10px] text-slate-400">Target: 100% before preliminary mocks</span>
        </div>

        {/* Live Indicator 1: Real GDP */}
        <div 
          onClick={() => setActiveTab('economy')}
          className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-4 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Real GDP Growth</span>
            <TrendingUp size={16} className="text-emerald-400" />
          </div>
          <div className="my-1.5">
            <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
              {economicIndicators[0].latestValue}
            </span>
            <span className="text-xs text-emerald-400 ml-2 font-semibold">▲ YoY</span>
          </div>
          <span className="text-[10px] text-slate-400 block truncate">
            {economicIndicators[0].source}
          </span>
        </div>

        {/* Live Indicator 2: CPI Headline */}
        <div 
          onClick={() => setActiveTab('economy')}
          className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-4 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">CPI Retail Inflation</span>
            <AlertCircle size={16} className="text-amber-400" />
          </div>
          <div className="my-1.5">
            <span className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
              {economicIndicators[1].latestValue}
            </span>
            <span className="text-xs text-amber-400 ml-2 font-semibold">Target: 4±2%</span>
          </div>
          <span className="text-[10px] text-slate-400 block truncate">
            {economicIndicators[1].period}
          </span>
        </div>

        {/* Live Indicator 3: Forex Reserves */}
        <div 
          onClick={() => setActiveTab('economy')}
          className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-4 cursor-pointer group transition-all"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Forex Reserves</span>
            <TrendingUp size={16} className="text-sky-400" />
          </div>
          <div className="my-1.5">
            <span className="text-2xl font-black text-white group-hover:text-sky-400 transition-colors">
              {economicIndicators[4].latestValue}
            </span>
            <span className="text-xs text-sky-400 ml-2 font-semibold">11+ mo imports</span>
          </div>
          <span className="text-[10px] text-slate-400 block truncate">
            Reserve Bank of India
          </span>
        </div>

      </div>

      {/* Signature Highlight Card: Issue Analyser */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
              FEATURED LEARNING ENGINE
            </span>
            <span className="text-xs text-amber-300 font-semibold">Groundwater Depletion & Agri-Power Nexus</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            18-Point Multi-Dimensional GS-III Breakdown
          </h2>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Discover why India pumps &gt;25% of global groundwater, how free power and paddy MSP distorted Punjab hydrology, what technology sensors do, and practice the 15-mark UPSC question with model answer rubric.
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedIssueId('issue-groundwater-depletion');
            setActiveTab('issueAnalyser');
          }}
          className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-102"
        >
          <span>Open Issue Analyser</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Study Planner & Adaptive Practice Recommender */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Study Planner Widget */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Clock size={16} className="text-amber-400" />
                <span>Daily GS-III Study Planner</span>
              </h3>
              <p className="text-xs text-slate-400">Select your available study time for today</p>
            </div>
            
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg text-xs font-semibold">
              {[30, 60, 120, 240].map((mins) => (
                <button
                  key={mins}
                  onClick={() => setActivePlanTime(mins)}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activePlanTime === mins
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {mins >= 60 ? `${mins / 60}h` : `${mins}m`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-amber-300 mb-3">
              {currentRoutine.title}
            </h4>
            <div className="space-y-2">
              {currentRoutine.tasks.map((task) => {
                const isDone = !!plannerChecked[task.id];
                return (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      isDone 
                        ? 'bg-emerald-950/20 border-emerald-800/40 text-slate-400' 
                        : 'bg-slate-850 border-slate-750 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => setPlannerChecked(prev => ({ ...prev, [task.id]: !prev[task.id] }))}
                        className="rounded text-amber-500 focus:ring-amber-500 h-4 w-4 bg-slate-800 border-slate-700 cursor-pointer"
                      />
                      <span className={`text-xs ${isDone ? 'line-through' : 'font-medium'}`}>
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveTab(task.tab)}
                      className="text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold border border-slate-700"
                    >
                      Start
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Adaptive Practice Recommender & Mistake Log */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                <AlertCircle size={15} />
              </span>
              <div>
                <h3 className="text-xs font-bold text-white">Adaptive Learning Engine</h3>
                <span className="text-[10px] text-slate-400">Targeted reinforcement based on mistakes</span>
              </div>
            </div>

            {userState.mistakeBook.length > 0 ? (
              <div className="p-3 bg-red-950/20 border border-red-800/30 rounded-lg text-xs space-y-1 mt-2">
                <span className="font-bold text-red-300 block">
                  {userState.mistakeBook.length} Mistakes Identified in Question Engine
                </span>
                <p className="text-slate-300 text-[11px]">
                  You have recorded errors in recent questions. Revise related core concepts and re-test before proceeding!
                </p>
                <button
                  onClick={() => setActiveTab('revision')}
                  className="mt-2 text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <span>Review Mistake Book</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ) : (
              <div className="p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-lg text-xs space-y-1 mt-2">
                <span className="font-bold text-emerald-300 block">
                  Clean Track Record!
                </span>
                <p className="text-slate-300 text-[11px]">
                  No active errors logged in your Mistake Book. Take a 20-question Prelims test to stress-test your preparation.
                </p>
                <button
                  onClick={() => setActiveTab('prelims')}
                  className="mt-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                >
                  <span>Launch Prelims Practice Test</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            )}
          </div>

          {/* Quick Access Matrix */}
          <div className="border-t border-slate-800 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Fast Launch Modules
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setActiveTab('currentAffairs')}
                className="p-2 rounded bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 text-left font-semibold"
              >
                📰 GS-III LIVE
              </button>
              <button
                onClick={() => setActiveTab('mains')}
                className="p-2 rounded bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 text-left font-semibold"
              >
                ✍ Mains Lab
              </button>
              <button
                onClick={() => setActiveTab('uppsc')}
                className="p-2 rounded bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 text-left font-semibold"
              >
                🏛 UP-Specific
              </button>
              <button
                onClick={() => setActiveTab('library')}
                className="p-2 rounded bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 text-left font-semibold"
              >
                📚 Data Bank
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Main Syllabus 6-Pillar Quick Jump Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-white">
            GS-III Syllabus Labs & Specialized Knowledge Bases
          </h2>
          <span className="text-xs text-slate-400">Click to explore full textbook & interactive tools</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Economy */}
          <div 
            onClick={() => setActiveTab('economy')}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
              Indian Economy & Budget
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              GDP/GVA, Inflation (CPI/WPI), Monetary Policy Committee, FRBM Act, Union Budget Explorer, Planning 1951-Present.
            </p>
          </div>

          {/* Agriculture */}
          <div 
            onClick={() => setActiveTab('agriculture')}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-green-500/50 cursor-pointer group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sprout size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
              Agriculture & Food Security
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Cropping patterns map, Irrigation models, MSP calculation formulas, Farm subsidies, PDS supply chain, Food processing.
            </p>
          </div>

          {/* Science & Tech */}
          <div 
            onClick={() => setActiveTab('science')}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 cursor-pointer group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Cpu size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
              Science & Technology Lab
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              ISRO Space mission timeline, Artificial Intelligence & DPI, CRISPR-Cas9, Quantum Mission, Semiconductor Fabs, IPR & Patents.
            </p>
          </div>

          {/* Environment */}
          <div 
            onClick={() => setActiveTab('environment')}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 cursor-pointer group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Leaf size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
              Environment & Ecology
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Species database (IUCN/WPA/CITES), Environmental Conventions (Paris, CBD, Ramsar), Climate Change & Net-Zero, EIA lifecycle.
            </p>
          </div>

          {/* Disaster Management */}
          <div 
            onClick={() => setActiveTab('disaster')}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 cursor-pointer group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <CloudRain size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
              Disaster Management Lab
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Earthquakes, Cyclones, Urban flooding, Sendai Framework 4 Priorities, 4-Stage Disaster Cycle, NDMA/NDRF institutional hierarchy.
            </p>
          </div>

          {/* Internal Security */}
          <div 
            onClick={() => setActiveTab('security')}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 cursor-pointer group transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldAlert size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
              Internal Security Lab
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Left Wing Extremism (SAMADHAN), Cybersecurity & Critical Infra, Money Laundering (PMLA/FATF), Border Security Maps & CAPFs.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

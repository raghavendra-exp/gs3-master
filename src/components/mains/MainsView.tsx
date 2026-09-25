import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { mainsQuestionsBank, mainsDirectivesGuide } from '../../data/mainsQuestionsData';
import { MainsQuestion } from '../../types';
import { 
  Edit3, Clock, CheckCircle2, AlertCircle, 
  HelpCircle, Printer, FileText, ArrowRight, 
  Layers, Database, Sparkles, BookOpen 
} from 'lucide-react';

export const MainsView: React.FC = () => {
  const { userState } = useApp();
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(mainsQuestionsBank[0].id);
  const [userAnswerText, setUserAnswerText] = useState<string>('');
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [showDirectiveHelp, setShowDirectiveHelp] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  const currentQ = mainsQuestionsBank.find(q => q.id === selectedQuestionId) || mainsQuestionsBank[0];

  // Word count calculator
  const wordsCount = userAnswerText.trim() === '' ? 0 : userAnswerText.trim().split(/\s+/).length;
  const wordLimit = currentQ.wordLimit;
  const isOverLimit = wordsCount > wordLimit + 25;

  // Stopwatch effect
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning]);

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setSecondsElapsed(0);
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const recommendedTimeMins = currentQ.marks === 10 ? 7 : 11;

  const directiveInfo = mainsDirectivesGuide[currentQ.directive] || {
    explanation: 'Address all parts of the question logically with multi-dimensional evidence.',
    examStrategy: 'Use clear headings and substantiating committees.'
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-orange-950/30 to-slate-900 border border-orange-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
              Evaluator Lab • Module 71-75
            </span>
            <span className="text-xs text-slate-400">10-Mark (150W) & 15-Mark (250W) • Live Stopwatch • Directive Demystifier</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Mains Answer Writing Lab
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Master the art of scoring 100+ marks in GS Paper III: live word-counter, directive demand analysis, diagram recommendations, and structured rubrics.
          </p>
        </div>

        {/* Stopwatch Controller */}
        <div className="bg-slate-800 border border-slate-700/80 px-4 py-2.5 rounded-xl flex items-center gap-4 shrink-0">
          <div className="text-center">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Stopwatch</span>
            <span className={`text-xl font-mono font-black ${
              secondsElapsed > recommendedTimeMins * 60 ? 'text-red-400' : 'text-amber-400'
            }`}>
              {formatTimer(secondsElapsed)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isTimerRunning 
                  ? 'bg-amber-500 text-slate-950' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-500'
              }`}
            >
              {isTimerRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={handleResetTimer}
              className="px-2.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-650 text-slate-300 text-xs"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Questions Selector, Right Writing Desk + Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left: Questions Selector */}
        <div className="lg:col-span-1 space-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block px-1">
            Question Bank ({mainsQuestionsBank.length})
          </span>

          <div className="space-y-2">
            {mainsQuestionsBank.map((q) => {
              const isSelected = q.id === currentQ.id;
              return (
                <div
                  key={q.id}
                  onClick={() => {
                    setSelectedQuestionId(q.id);
                    setUserAnswerText('');
                    handleResetTimer();
                  }}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-850 border-orange-500 text-white shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-orange-400 uppercase">
                      {q.exam} {q.year ? `(${q.year})` : ''}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                      {q.marks}M • {q.wordLimit}W
                    </span>
                  </div>
                  <h3 className="text-xs font-semibold leading-snug line-clamp-2">
                    {q.questionText}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Writing Desk & Evaluator Framework */}
        <div className="lg:col-span-3 space-y-5">
          
          {/* Question Display Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  {currentQ.topic}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Target: {currentQ.marks} Marks • {currentQ.wordLimit} Words • Recommended Time: ~{recommendedTimeMins} mins
                </span>
              </div>
              
              <button
                onClick={() => setShowDirectiveHelp(!showDirectiveHelp)}
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
              >
                <HelpCircle size={14} />
                <span>Directive: &ldquo;{currentQ.directive}&rdquo; Demystified</span>
              </button>
            </div>

            {/* Directive Explanation Popover */}
            {showDirectiveHelp && (
              <div className="p-3 bg-slate-850 rounded-lg border border-amber-500/40 text-xs text-slate-300 space-y-1">
                <strong className="text-amber-300 block font-bold">
                  What does &ldquo;{currentQ.directive}&rdquo; expect from you?
                </strong>
                <p>{directiveInfo.explanation}</p>
                <p className="text-slate-400 text-[11px] pt-1">
                  <strong>Evaluator Strategy:</strong> {directiveInfo.examStrategy}
                </p>
              </div>
            )}

            <p className="text-sm font-semibold text-white leading-relaxed whitespace-pre-line">
              {currentQ.questionText}
            </p>
          </div>

          {/* Interactive Answer Editor */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-orange-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Your Answer Script
                </span>
              </div>

              {/* Word Count Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className={`font-bold ${isOverLimit ? 'text-red-400' : 'text-slate-300'}`}>
                  {wordsCount} Words
                </span>
                <span className="text-slate-500">/ {wordLimit} Words Max</span>
              </div>
            </div>

            <textarea
              rows={12}
              value={userAnswerText}
              onChange={(e) => setUserAnswerText(e.target.value)}
              placeholder="Structure your answer here:&#10;&#10;1. Introduction Hook (Define concept, quote latest GDP/PLFS/IPCC data)...&#10;2. Body Subheading 1 (Key Dimensions, Constitutional / Policy pillars)...&#10;3. Diagram representation (e.g. Causal chain, cycle)...&#10;4. Key bottlenecks / Challenges...&#10;5. Way Forward & Vision (Quote Committees, SDG targets, futuristic conclusion)..."
              className="w-full bg-slate-850 border border-slate-750 rounded-xl p-4 text-xs sm:text-sm text-white focus:outline-none focus:border-orange-500 font-sans leading-relaxed"
            />

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-400">
                Tip: Aim for 1 page (~150 words) for 10M and 2 pages (~250 words) for 15M.
              </span>
              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer size={14} />
                <span>Print / Export Script</span>
              </button>
            </div>
          </div>

          {/* EVALUATOR RUBRIC & FRAMEWORK GUIDE */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles size={18} className="text-orange-400" />
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Evaluator Benchmark: 3-Part Answer Framework & Enrichment Kit
                </h3>
                <span className="text-[10px] text-slate-400">Model answer layout designed to secure highest percentile marks</span>
              </div>
            </div>

            {/* Framework: Intro, Body, Conclusion */}
            <div className="space-y-3 text-xs">
              
              {/* Intro Hook */}
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-orange-400 block mb-1 uppercase text-[10px] font-bold">
                  1. Introduction Hook (15-20% of words)
                </strong>
                <p className="text-slate-300 leading-relaxed">{currentQ.framework.introHook}</p>
              </div>

              {/* Body Dimensions */}
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-2">
                <strong className="text-blue-400 block mb-1 uppercase text-[10px] font-bold">
                  2. Body Dimensions (60-70% of words)
                </strong>
                {currentQ.framework.bodyDimensions.map((dim, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-amber-300 font-bold block">{dim.dimension}:</span>
                    <ul className="space-y-0.5 text-slate-300 pl-2">
                      {dim.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Conclusion Outlook */}
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-emerald-400 block mb-1 uppercase text-[10px] font-bold">
                  3. Forward-Looking Conclusion (15-20% of words)
                </strong>
                <p className="text-slate-300 leading-relaxed">{currentQ.framework.conclusionOutlook}</p>
              </div>

            </div>

            {/* Value Enrichment: Diagrams, Data & Committees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
              
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-cyan-400 block mb-1 font-bold">Suggested Diagram to Sketch:</strong>
                <p className="text-slate-300 text-[11px] leading-relaxed">{currentQ.diagramSuggestion}</p>
              </div>

              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-amber-400 block mb-1 font-bold">Key Data Points to Quote:</strong>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  {currentQ.dataToCite.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750">
                <strong className="text-purple-400 block mb-1 font-bold">Committees & Reports to Cite:</strong>
                <ul className="space-y-1 text-slate-300 text-[11px]">
                  {currentQ.committeesToMention.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

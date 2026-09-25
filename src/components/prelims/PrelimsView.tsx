import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { prelimsQuestionsBank } from '../../data/prelimsQuestionsData';
import { PrelimsQuestion } from '../../types';
import confetti from 'canvas-confetti';
import { 
  CheckSquare, Clock, AlertTriangle, CheckCircle2, 
  XCircle, RotateCcw, Award, ArrowRight, Bookmark, 
  HelpCircle, Sparkles, Filter 
} from 'lucide-react';

export const PrelimsView: React.FC = () => {
  const { userState, logTestAttempt, logMistake, toggleBookmark } = useApp();
  
  // Test configuration state
  const [testState, setTestState] = useState<'config' | 'running' | 'review'>('config');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [topicFilter, setTopicFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  
  // Test running state
  const [activeQuestions, setActiveQuestions] = useState<PrelimsQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeRemainingSec, setTimeRemainingSec] = useState<number>(600); // 10 mins
  const timerRef = useRef<any>(null);

  // Score metrics
  const [testResults, setTestResults] = useState<{
    total: number;
    attempted: number;
    correct: number;
    wrong: number;
    score: number;
    accuracyPercent: number;
  }>({ total: 0, attempted: 0, correct: 0, wrong: 0, score: 0, accuracyPercent: 0 });

  // Filter bank questions
  const getFilteredBank = () => {
    return prelimsQuestionsBank.filter(q => {
      const matchTopic = topicFilter === 'All' || q.topic === topicFilter;
      const matchDiff = difficultyFilter === 'All' || q.difficulty === difficultyFilter;
      return matchTopic && matchDiff;
    });
  };

  const handleStartTest = () => {
    const bank = getFilteredBank();
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    
    if (selected.length === 0) {
      alert('No questions match your filter criteria. Please broaden your selection.');
      return;
    }

    setActiveQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeRemainingSec(selected.length * 60); // 1 minute per question
    setTestState('running');
  };

  // Timer effect
  useEffect(() => {
    if (testState === 'running') {
      timerRef.current = setInterval(() => {
        setTimeRemainingSec(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [testState]);

  const handleSelectOption = (optionId: string) => {
    const currentQ = activeQuestions[currentIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleSubmitTest = () => {
    clearInterval(timerRef.current);
    
    let correct = 0;
    let wrong = 0;
    const wrongQIds: string[] = [];

    activeQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans) {
        if (ans === q.correctOptionId) {
          correct += 1;
        } else {
          wrong += 1;
          wrongQIds.push(q.id);
          // Log mistake
          logMistake({
            questionId: q.id,
            userChoice: ans,
            timestamp: Date.now(),
            category: q.topic
          });
        }
      }
    });

    const attempted = correct + wrong;
    // UPSC marking: +2 for correct, -0.66 for incorrect
    const score = Number(((correct * 2) - (wrong * 0.66)).toFixed(2));
    const accuracyPercent = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    setTestResults({
      total: activeQuestions.length,
      attempted,
      correct,
      wrong,
      score,
      accuracyPercent
    });

    // Log to test history
    logTestAttempt({
      testId: `test-${Date.now()}`,
      timestamp: Date.now(),
      total: activeQuestions.length,
      score,
      correct,
      wrong,
      timeSpentSec: (activeQuestions.length * 60) - timeRemainingSec,
      wrongQuestions: wrongQIds
    });

    if (accuracyPercent >= 70 && attempted >= 3) {
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }

    setTestState('review');
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = activeQuestions[currentIndex];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Exam Simulation Engine • Module 67-70
            </span>
            <span className="text-xs text-slate-400">Pair-Matching • Statement I/II/III • Negative Marking (-0.66)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Prelims Practice Engine
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Simulate authentic UPSC & UPPSC Preliminary examination formats with stopwatch timer, negative penalty evaluation, trap analysis, and automated Mistake Book tracking.
          </p>
        </div>

        {testState === 'running' && (
          <div className="bg-slate-800 border border-amber-500/40 px-4 py-2 rounded-xl flex items-center gap-3">
            <Clock size={18} className="text-amber-400 animate-pulse" />
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Time Remaining</span>
              <span className="text-lg font-mono font-black text-white">{formatTimer(timeRemainingSec)}</span>
            </div>
          </div>
        )}
      </div>

      {/* 1. CONFIGURATION VIEW */}
      {testState === 'config' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Configure Your Practice Session</h2>
            <p className="text-xs text-slate-400">Choose question count, topic domain, and difficulty filters</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            
            {/* Question Count Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Question Count</label>
              <div className="grid grid-cols-3 gap-2">
                {[5, 10, 20].map((num) => (
                  <button
                    key={num}
                    onClick={() => setQuestionCount(num)}
                    className={`py-2 rounded-lg font-bold border transition-all ${
                      questionCount === num
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                    }`}
                  >
                    {num} MCQs
                  </button>
                ))}
              </div>
            </div>

            {/* Topic Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Topic Filter</label>
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="All">All GS-III Topics</option>
                <option value="Economy">Indian Economy</option>
                <option value="Agriculture">Agriculture & Food</option>
                <option value="Science">Science & Technology</option>
                <option value="Environment">Environment & Ecology</option>
                <option value="Disaster">Disaster Management</option>
                <option value="Security">Internal Security</option>
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Difficulty Tier</label>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="All">All Difficulty Tiers</option>
                <option value="Medium">Standard UPSC Prelims (Medium)</option>
                <option value="Hard">Advanced Trap & Pair Matching (Hard)</option>
              </select>
            </div>

          </div>

          <div className="p-4 bg-slate-850 rounded-xl border border-slate-750 text-xs text-slate-300 space-y-1">
            <strong className="text-amber-400 block mb-1">Authentic UPSC Prelims Marking Scheme:</strong>
            <p>• Correct Answer: <strong>+2.00 Marks</strong></p>
            <p>• Incorrect Answer: <strong>-0.66 Marks (One-third negative penalty)</strong></p>
            <p>• Unattempted: <strong>0.00 Marks</strong></p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={handleStartTest}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-102"
            >
              <span>Launch Practice Test</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* 2. TEST RUNNING VIEW */}
      {testState === 'running' && currentQ && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Question Panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Question {currentIndex + 1} of {activeQuestions.length}
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentQ.topic} • {currentQ.subtopic}
                  </span>
                </div>
                <button
                  onClick={() => toggleBookmark(currentQ.id)}
                  className="text-xs text-amber-400 hover:underline"
                >
                  {userState.bookmarks.includes(currentQ.id) ? '★ Bookmarked' : '☆ Bookmark'}
                </button>
              </div>

              {/* Question Text */}
              <div className="text-sm font-semibold text-white leading-relaxed">
                {currentQ.questionText}
              </div>

              {/* Statements (if any) */}
              {currentQ.statements && (
                <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-2 text-xs text-slate-200">
                  {currentQ.statements.map((stmt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">{idx + 1}.</span>
                      <span>{stmt}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Pairs (if any) */}
              {currentQ.pairs && (
                <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-1.5 text-xs text-slate-200">
                  {currentQ.pairs.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-800 last:border-none">
                      <span className="font-medium text-slate-300">{p.left}</span>
                      <span className="font-mono text-amber-300">{p.right}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Options Radio List */}
              <div className="space-y-2 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = userAnswers[currentQ.id] === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-500 text-white font-bold ring-1 ring-amber-500/50'
                          : 'bg-slate-850 border-slate-750 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {opt.id}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Nav Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 disabled:opacity-40 text-xs font-bold text-slate-300"
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {currentIndex < activeQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(prev => prev + 1)}
                      className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-xs font-bold text-white border border-slate-700"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitTest}
                      className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-lg"
                    >
                      Submit Test
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Question Palette */}
          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-4">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">Question Palette</span>
            
            <div className="grid grid-cols-5 gap-2">
              {activeQuestions.map((q, idx) => {
                const isAnswered = !!userAnswers[q.id];
                const isCurrent = currentIndex === idx;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'ring-2 ring-amber-400 bg-amber-500 text-slate-950'
                        : isAnswered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-750'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-600 inline-block" />
                <span>Attempted ({Object.keys(userAnswers).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-800 inline-block" />
                <span>Unattempted ({activeQuestions.length - Object.keys(userAnswers).length})</span>
              </div>
            </div>

            <button
              onClick={handleSubmitTest}
              className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md mt-4"
            >
              End & Submit Test
            </button>
          </div>

        </div>
      )}

      {/* 3. POST-TEST REVIEW VIEW */}
      {testState === 'review' && (
        <div className="space-y-6">
          
          {/* Score Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Test Performance Report
              </span>
              <h2 className="text-2xl font-black text-white">
                Final Score: <span className="text-amber-400">{testResults.score}</span> / {testResults.total * 2}
              </h2>
              <span className="text-xs text-slate-400 mt-1 block">
                Accuracy: {testResults.accuracyPercent}% | Correct: {testResults.correct} | Incorrect: {testResults.wrong} | Penalty: -{(testResults.wrong * 0.66).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTestState('config')}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-xs border border-slate-700 flex items-center gap-1.5"
              >
                <RotateCcw size={14} />
                <span>Take Another Test</span>
              </button>
            </div>
          </div>

          {/* Detailed Question by Question Solution Review */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Detailed Question Solutions & Traps Analysis
            </h3>

            {activeQuestions.map((q, idx) => {
              const userChoice = userAnswers[q.id];
              const isCorrect = userChoice === q.correctOptionId;
              const isUnattempted = !userChoice;

              return (
                <div 
                  key={q.id} 
                  className={`bg-slate-900 border rounded-xl p-5 space-y-3 ${
                    isCorrect 
                      ? 'border-emerald-500/40' 
                      : isUnattempted 
                      ? 'border-slate-800' 
                      : 'border-red-500/40 bg-red-950/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">Q{idx + 1}.</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        isCorrect ? 'bg-emerald-500/20 text-emerald-300' :
                        isUnattempted ? 'bg-slate-800 text-slate-400' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {isCorrect ? 'Correct (+2)' : isUnattempted ? 'Unattempted (0)' : 'Incorrect (-0.66)'}
                      </span>
                      <span className="text-xs text-slate-400">{q.topic} • {q.subtopic}</span>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-white leading-relaxed">
                    {q.questionText}
                  </p>

                  {q.statements && (
                    <div className="p-2.5 bg-slate-850 rounded border border-slate-750 space-y-1 text-xs text-slate-300">
                      {q.statements.map((s, i) => (
                        <div key={i}><span className="text-amber-400 font-bold">{i + 1}.</span> {s}</div>
                      ))}
                    </div>
                  )}

                  {/* Options Display with Answers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map(opt => {
                      const isThisCorrect = opt.id === q.correctOptionId;
                      const isUserPick = opt.id === userChoice;
                      return (
                        <div 
                          key={opt.id}
                          className={`p-2.5 rounded-lg border flex items-center justify-between ${
                            isThisCorrect 
                              ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold' 
                              : isUserPick 
                              ? 'bg-red-950/40 border-red-500 text-red-300 font-medium' 
                              : 'bg-slate-850 border-slate-750 text-slate-400'
                          }`}
                        >
                          <span>{opt.id}. {opt.text}</span>
                          {isThisCorrect && <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />}
                          {!isThisCorrect && isUserPick && <XCircle size={14} className="text-red-400 shrink-0" />}
                        </div>
                      );
                    })}
                  </div>

                  {/* Comprehensive Explanation & Memory Trap */}
                  <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-2 text-xs text-slate-300">
                    <div>
                      <strong className="text-emerald-400 block mb-0.5">Authoritative Explanation:</strong>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-750">
                      <strong className="text-red-400 block mb-0.5 flex items-center gap-1">
                        <AlertTriangle size={13} /> Common Examiner Trap:
                      </strong>
                      <p>{q.memoryTrap}</p>
                    </div>

                    {q.memoryTrick && (
                      <div className="pt-1 text-amber-300">
                        <strong>Memory Trick: </strong> {q.memoryTrick}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};

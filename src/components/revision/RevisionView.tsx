import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { flashcardsData, mnemonicsData } from '../../data/revisionData';
import { prelimsQuestionsBank } from '../../data/prelimsQuestionsData';
import { 
  Repeat, Layers, Sparkles, AlertCircle, 
  CheckCircle2, RotateCcw, ArrowRight, Trash2, Bookmark 
} from 'lucide-react';

export const RevisionView: React.FC = () => {
  const { userState, removeMistake, setActiveTab } = useApp();
  const [subTab, setSubTab] = useState<'flashcards' | 'mnemonics' | 'mistakes' | 'spaced'>('flashcards');
  
  // Flashcard flip state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcardsData[currentCardIndex] || flashcardsData[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(prev => (prev + 1) % flashcardsData.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(prev => (prev - 1 + flashcardsData.length) % flashcardsData.length);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-fuchsia-950/30 to-slate-900 border border-fuchsia-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
              Retention & Memory Engine • Module 86-91
            </span>
            <span className="text-xs text-slate-400">Spaced Repetition (1/3/7/15/30/90 Days) • Mnemonics • Mistake Book</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Revision Engine & Flashcards
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Never forget critical factual dates, constitutional articles, species schedules, or formulas. Leverage Hermann Ebbinghaus forgetting curve intervals.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'flashcards', label: 'Interactive Flashcards', icon: Layers },
            { id: 'mnemonics', label: 'Mnemonics & Tricks', icon: Sparkles },
            { id: 'mistakes', label: `Mistake Book (${userState.mistakeBook.length})`, icon: AlertCircle },
            { id: 'spaced', label: 'Spaced Schedule', icon: Repeat }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-fuchsia-500 text-white shadow-md'
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

      {/* 1. Interactive 3D Flip Flashcards Sub-tab */}
      {subTab === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 px-2">
            <span>Card {currentCardIndex + 1} of {flashcardsData.length}</span>
            <span className="text-fuchsia-400 font-bold uppercase">{currentCard.category} Card</span>
          </div>

          {/* Flashcard Component */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] bg-slate-900 border border-slate-800 hover:border-fuchsia-500/50 rounded-2xl p-8 flex flex-col justify-between cursor-pointer shadow-2xl transition-all duration-300 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                {isFlipped ? 'Answer Side' : 'Question Side'}
              </span>
              <span className="text-xs text-slate-500 group-hover:text-fuchsia-400 transition-colors">
                Click anywhere to flip ⟳
              </span>
            </div>

            <div className="my-auto py-6 text-center">
              {!isFlipped ? (
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold block mb-2">Prompt:</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                    {currentCard.question}
                  </h3>
                </div>
              ) : (
                <div className="animate-in fade-in duration-200">
                  <span className="text-xs text-fuchsia-400 uppercase font-bold block mb-2">Verified Answer:</span>
                  <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                    {currentCard.answer}
                  </p>
                  <div className="mt-4 p-3 bg-slate-850 rounded-lg border border-slate-750 text-xs text-amber-300">
                    <strong>Memory Anchor:</strong> {currentCard.keyFact}
                  </div>
                </div>
              )}
            </div>

            <div className="text-center text-[11px] text-slate-500">
              {isFlipped ? 'Great job! Click next to continue' : 'Try recalling before clicking to reveal'}
            </div>
          </div>

          {/* Card Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevCard}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold"
            >
              Previous Card
            </button>
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-bold shadow-md"
            >
              {isFlipped ? 'Show Question' : 'Reveal Answer'}
            </button>
            <button
              onClick={handleNextCard}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold"
            >
              Next Card
            </button>
          </div>
        </div>
      )}

      {/* 2. Mnemonics Hub Sub-tab */}
      {subTab === 'mnemonics' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Official Civil Services Mnemonics & Memory Frameworks</h2>
            <p className="text-xs text-slate-400">Strictly non-misleading acronyms to instantly recall complex multi-part doctrines in Mains & Prelims</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mnemonicsData.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-fuchsia-400">{item.topic}</span>
                  <span className="text-base font-mono font-black text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800/40">
                    {item.mnemonic}
                  </span>
                </div>

                <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-1">
                  <strong className="text-slate-300 block mb-1">Expanded Acronym:</strong>
                  <ul className="space-y-1 text-slate-300">
                    {item.expandedMeaning.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-fuchsia-400 font-bold">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Mistake Book Sub-tab */}
      {subTab === 'mistakes' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Your Personal Mistake Book</h2>
              <p className="text-xs text-slate-400">Questions you missed during Prelims engine tests, stored for targeted re-testing</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-950 text-red-300 border border-red-800">
              {userState.mistakeBook.length} Active Errors
            </span>
          </div>

          {userState.mistakeBook.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center text-slate-400">
              <CheckCircle2 size={36} className="text-emerald-400 mx-auto mb-2" />
              <p className="text-sm font-bold text-white">Your Mistake Book is Empty!</p>
              <p className="text-xs text-slate-400 mt-1">Take a Prelims Practice Test to automatically log any errors here.</p>
              <button
                onClick={() => setActiveTab('prelims')}
                className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Launch Prelims Practice Test
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {userState.mistakeBook.map((m, idx) => {
                const questionObj = prelimsQuestionsBank.find(q => q.id === m.questionId);
                return (
                  <div key={idx} className="bg-slate-900 border border-red-500/30 rounded-xl p-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-red-400 uppercase">
                        {m.category} • Error #{idx + 1}
                      </span>
                      <button
                        onClick={() => removeMistake(m.questionId)}
                        className="text-slate-400 hover:text-red-400 p-1 rounded"
                        title="Remove from Mistake Book"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <p className="text-white font-medium">
                      {questionObj ? questionObj.questionText : `Question ID: ${m.questionId}`}
                    </p>

                    {questionObj && (
                      <div className="p-3 bg-slate-850 rounded border border-slate-750 text-slate-300 space-y-1">
                        <div>
                          <strong className="text-emerald-400">Correct Answer: </strong>
                          <span>Option {questionObj.correctOptionId}</span>
                        </div>
                        <div>
                          <strong className="text-red-400">Your Answer: </strong>
                          <span>Option {m.userChoice}</span>
                        </div>
                        <div className="pt-1 text-[11px] text-slate-400">
                          <strong>Memory Trap:</strong> {questionObj.memoryTrap}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 4. Spaced Repetition Schedule Sub-tab */}
      {subTab === 'spaced' && (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 text-xs">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-base font-bold text-white">Ebbinghaus Spaced Repetition Intervals</h2>
            <p className="text-xs text-slate-400">Review schedule: Day 1, Day 3, Day 7, Day 15, Day 30, Day 90</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {userState.revisionSchedule.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-850 rounded-xl border border-slate-750 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-fuchsia-400 uppercase">{item.category}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Level: {item.masteryLevel}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <div className="text-slate-400 text-[11px]">
                  <span>Repetition Count: <strong>{item.repetitionCount}</strong></span>
                  <span className="block mt-0.5">Interval: Next review in {item.intervalDays} days</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

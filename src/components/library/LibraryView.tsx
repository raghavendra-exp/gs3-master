import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  dataBankItems, 
  reportItems, 
  committeeItems, 
  caseStudyLibrary, 
  internationalComparisons 
} from '../../data/libraryData';
import { pdfBooksDatabase } from '../../data/pdfBooksData';
import { 
  Database, FileText, Users, Award, 
  Globe, ExternalLink, Bookmark, Search, CheckCircle2,
  BookOpen, Download, Filter, Sparkles
} from 'lucide-react';

export const LibraryView: React.FC = () => {
  const { userState, toggleBookmark } = useApp();
  const [subTab, setSubTab] = useState<'pdfBooks' | 'databank' | 'reports' | 'committees' | 'cases' | 'international'>('pdfBooks');
  const [searchFilter, setSearchFilter] = useState('');

  // PDF Books specific filters
  const [pdfCategoryFilter, setPdfCategoryFilter] = useState<string>('All');
  const [pdfPriorityFilter, setPdfPriorityFilter] = useState<string>('All');
  const [pdfSearchTerm, setPdfSearchTerm] = useState<string>('');

  const pdfCategories = [
    'All', 
    'Economy', 
    'Agriculture', 
    'Science & Tech', 
    'Environment', 
    'Disaster Management', 
    'Internal Security', 
    'General GS-III'
  ];

  const filteredPdfBooks = pdfBooksDatabase.filter(book => {
    const matchesCategory = pdfCategoryFilter === 'All' || book.category === pdfCategoryFilter;
    const matchesPriority = pdfPriorityFilter === 'All' || book.readingPriority === pdfPriorityFilter;
    const matchesSearch = !pdfSearchTerm.trim() || 
      book.title.toLowerCase().includes(pdfSearchTerm.toLowerCase()) ||
      book.authorOrPublisher.toLowerCase().includes(pdfSearchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(pdfSearchTerm.toLowerCase()) ||
      book.keyChapters.some(ch => ch.toLowerCase().includes(pdfSearchTerm.toLowerCase())) ||
      book.tags.some(tag => tag.toLowerCase().includes(pdfSearchTerm.toLowerCase()));

    return matchesCategory && matchesPriority && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/30 to-slate-900 border border-teal-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              GS-III Digital Library & Resource Vault
            </span>
            <span className="text-xs text-slate-400">NCERTs • Official PDFs • Data Bank • Landmark Reports</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Data Bank, Reports & NCERT Books
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Curated open-access NCERT textbooks, apex government reports with direct links, verified empirical statistics, and high-impact case studies.
          </p>
        </div>

        {/* Sub-tab Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80">
          {[
            { id: 'pdfBooks', label: 'NCERT & PDF Books', icon: BookOpen },
            { id: 'databank', label: 'Data Bank', icon: Database },
            { id: 'reports', label: 'Reports', icon: FileText },
            { id: 'committees', label: 'Committees', icon: Users },
            { id: 'cases', label: 'Case Studies', icon: Award },
            { id: 'international', label: 'International', icon: Globe }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = subTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSubTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-teal-500 text-slate-950 shadow-md'
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

      {/* 0. NCERT & Official PDF Books Sub-tab */}
      {subTab === 'pdfBooks' && (
        <div className="space-y-6">
          
          {/* Header & Filter Controls */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <BookOpen size={18} className="text-teal-400" />
                  <span>Official NCERT Textbooks & Government PDF Library</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Direct official links to free government PDF books with specific chapter-by-chapter mapping for GS-III
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search book title, chapter, publisher..."
                  value={pdfSearchTerm}
                  onChange={(e) => setPdfSearchTerm(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-teal-500"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Filter by Syllabus Domain
                </span>
                <span className="text-[11px] text-teal-400 font-medium">
                  Showing {filteredPdfBooks.length} of {pdfBooksDatabase.length} Books
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {pdfCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setPdfCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      pdfCategoryFilter === cat
                        ? 'bg-teal-500 text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Reading Priority Filter */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-2">
                Reading Priority:
              </span>
              {['All', 'Must Read', 'High Yield', 'Selective Reference'].map((priority) => (
                <button
                  key={priority}
                  onClick={() => setPdfPriorityFilter(priority)}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                    pdfPriorityFilter === priority
                      ? priority === 'Must Read' 
                        ? 'bg-rose-500 text-white font-bold'
                        : priority === 'High Yield'
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {priority}
                </button>
              ))}
            </div>
          </div>

          {/* PDF Books Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPdfBooks.map((book) => {
              const isMustRead = book.readingPriority === 'Must Read';
              const isHighYield = book.readingPriority === 'High Yield';

              return (
                <div
                  key={book.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md group"
                >
                  <div className="space-y-3">
                    {/* Header info */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400 block mb-0.5">
                          {book.category} {book.classOrLevel ? `• ${book.classOrLevel}` : ''}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {book.authorOrPublisher}
                        </span>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                        isMustRead
                          ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                          : isHighYield
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                      }`}>
                        {book.readingPriority}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                      {book.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>

                    {/* Key Chapters for GS-3 */}
                    <div className="bg-slate-850 p-3 rounded-xl border border-slate-800 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles size={12} />
                        <span>Core Focus Chapters for GS-III:</span>
                      </div>
                      <ul className="text-[11px] text-slate-300 space-y-1">
                        {book.keyChapters.slice(0, 3).map((ch, idx) => (
                          <li key={idx} className="line-clamp-1 flex items-start gap-1">
                            <span className="text-teal-400 font-bold">•</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                        {book.keyChapters.length > 3 && (
                          <li className="text-[10px] text-slate-400 italic">
                            + {book.keyChapters.length - 3} more relevant chapters
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Footer & Action Button */}
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Format: {book.fileType}</span>
                      {book.sizeOrVolume && <span>{book.sizeOrVolume}</span>}
                    </div>

                    <a
                      href={book.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-450 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-teal-500/20"
                    >
                      <Download size={13} />
                      <span>Read / Download Official PDF</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPdfBooks.length === 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center space-y-2">
              <BookOpen size={32} className="mx-auto text-slate-500" />
              <h3 className="text-sm font-bold text-white">No Books Match Your Current Filter</h3>
              <p className="text-xs text-slate-400">Try changing the domain category or search keyword above.</p>
            </div>
          )}
        </div>
      )}

      {/* 1. Official Data Bank Sub-tab */}
      {subTab === 'databank' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">GS-III Official Data Bank</h2>
              <p className="text-xs text-slate-400">Strictly verified, dated figures ready to enrich Mains answers</p>
            </div>
            <span className="text-xs text-emerald-400 font-mono px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-800">
              Verified & Dated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataBankItems.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{item.year}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white leading-snug">{item.metric}</h3>
                  <div className="text-2xl font-black text-amber-400 my-2 font-mono">
                    {item.value}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.definition}</p>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-1 text-xs">
                  <div className="text-slate-300">
                    <strong className="text-teal-300">Exam Utility: </strong>
                    {item.examRelevance}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                    <span>Source: {item.source}</span>
                    <span>Verified: {item.lastVerified}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Official Reports Database Sub-tab */}
      {subTab === 'reports' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Landmark Official Reports Database</h2>
            <p className="text-xs text-slate-400">Synthesized findings, empirical metrics, and core Mains arguments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportItems.map((rep) => (
              <div key={rep.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-teal-400">{rep.publisher} ({rep.year})</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">GS-III Landmark Report</span>
                </div>
                <h3 className="text-sm font-bold text-white">{rep.reportName}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{rep.gs3Relevance}</p>

                <div className="space-y-1.5 pt-2">
                  <strong className="text-xs text-amber-300 block">Core Findings:</strong>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {rep.majorFindings.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-teal-400 font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 space-y-1">
                  <strong className="text-sky-300 block text-[11px] uppercase">Mains Argumentative Angles:</strong>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    {rep.mainsArguments.map((arg: string, i: number) => (
                      <li key={i}>• {arg}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Landmark Committees Sub-tab */}
      {subTab === 'committees' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Landmark Government Committees & Commissions</h2>
            <p className="text-xs text-slate-400">Key recommendations, implementation status, and associated past year exam questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {committeeItems.map((comm) => (
              <div key={comm.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-teal-400">Year {comm.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Chair: {comm.chairperson.split(' ')[0]}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{comm.name}</h3>
                  <span className="text-slate-400 block mt-0.5">{comm.subject}</span>

                  <div className="mt-3 space-y-1.5">
                    <strong className="text-amber-300 block">Key Recommendations:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {comm.keyRecommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-teal-400 font-bold">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-1 text-[11px]">
                  <div>
                    <strong className="text-emerald-400">Implementation: </strong>
                    <span className="text-slate-400">{comm.implementationStatus}</span>
                  </div>
                  <div className="text-slate-500">
                    Source: {comm.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Case Studies Sub-tab */}
      {subTab === 'cases' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">Grassroots Best-Practice Case Studies</h2>
            <p className="text-xs text-slate-400">Replicable models of sustainable agriculture, disaster resilience, and clean governance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudyLibrary.map((cs) => (
              <div key={cs.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">{cs.category}</span>
                    <span className="text-[10px] text-slate-400">{cs.location}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{cs.title}</h3>

                  <div className="mt-3 space-y-2 text-slate-300">
                    <div>
                      <strong className="text-rose-350 block mb-0.5">Initial Problem:</strong>
                      <p>{cs.problem}</p>
                    </div>
                    <div>
                      <strong className="text-teal-300 block mb-0.5">Intervention:</strong>
                      <p>{cs.intervention}</p>
                    </div>
                    <div>
                      <strong className="text-emerald-300 block mb-0.5">Measurable Outcome:</strong>
                      <p>{cs.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                  <strong className="text-amber-400 block mb-0.5">Replicable Lesson:</strong>
                  {cs.lesson}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. International Comparisons Sub-tab */}
      {subTab === 'international' && (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-base font-bold text-white">International Benchmarks & Global Comparative Models</h2>
            <p className="text-xs text-slate-400">Comparing Indian policy approaches with Japan, Israel, and Taiwan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {internationalComparisons.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-teal-400 block mb-1">
                    {item.domain}
                  </span>
                  <h3 className="text-sm font-bold text-white">India vs {item.country}</h3>

                  <div className="mt-3 space-y-2 text-slate-300">
                    <div>
                      <strong className="text-amber-300 block mb-0.5">Indian Paradigm:</strong>
                      <p>{item.india}</p>
                    </div>
                    <div>
                      <strong className="text-sky-300 block mb-0.5">{item.country} Model:</strong>
                      <p>{item.contrast}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-200">
                  <strong className="text-emerald-400 block mb-0.5">Lesson for India's GS-III Answers:</strong>
                  {item.lessonForIndia}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

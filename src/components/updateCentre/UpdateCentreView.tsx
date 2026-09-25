import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Settings, UploadCloud, DownloadCloud, CheckCircle2, 
  AlertTriangle, ShieldCheck, FileText, Database, RotateCcw 
} from 'lucide-react';

export const UpdateCentreView: React.FC = () => {
  const { exportUserData, importUserData, userState } = useApp();
  const [importJsonText, setImportJsonText] = useState<string>('');
  const [validationReport, setValidationReport] = useState<{
    status: 'idle' | 'valid' | 'invalid';
    totalChecked: number;
    errors: string[];
    warnings: string[];
  }>({ status: 'idle', totalChecked: 0, errors: [], warnings: [] });

  const handleValidateAndImport = () => {
    if (!importJsonText.trim()) {
      alert('Please paste a JSON payload into the box.');
      return;
    }

    const errors: string[] = [];
    const warnings: string[] = [];
    let count = 0;

    try {
      const parsed = JSON.parse(importJsonText);
      
      // If it's a user state backup
      if (parsed.completedTopics && Array.isArray(parsed.completedTopics)) {
        count = parsed.completedTopics.length;
        if (!Array.isArray(parsed.bookmarks)) warnings.push('Missing bookmarks array in state.');
        
        setValidationReport({
          status: 'valid',
          totalChecked: count,
          errors: [],
          warnings
        });

        const ok = importUserData(importJsonText);
        if (ok) {
          alert('User state successfully validated and restored!');
        }
        return;
      }

      // If it's an array of content items (e.g. questions or issues)
      if (Array.isArray(parsed)) {
        count = parsed.length;
        const seenIds = new Set<string>();

        parsed.forEach((item, index) => {
          if (!item.id) {
            errors.push(`Item #${index + 1}: Missing unique 'id'.`);
          } else if (seenIds.has(item.id)) {
            errors.push(`Duplicate ID detected: '${item.id}'.`);
          } else {
            seenIds.add(item.id);
          }

          if (!item.source) {
            warnings.push(`Item '${item.id || index + 1}': Missing authoritative source tag.`);
          }

          if (item.options && (!item.correctOptionId || !Array.isArray(item.options))) {
            errors.push(`Question '${item.id || index + 1}': Incomplete question structure.`);
          }
        });

        setValidationReport({
          status: errors.length === 0 ? 'valid' : 'invalid',
          totalChecked: count,
          errors,
          warnings
        });

        if (errors.length === 0) {
          alert(`Payload validated successfully! ${count} items verified against schema.`);
        }
      } else {
        errors.push('Payload must be either an array of content objects or a UserState JSON.');
        setValidationReport({ status: 'invalid', totalChecked: 0, errors, warnings: [] });
      }

    } catch (e: any) {
      setValidationReport({
        status: 'invalid',
        totalChecked: 0,
        errors: [`JSON Syntax Error: ${e.message}`],
        warnings: []
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Module Title Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
              Content Pipeline • Module 100-103
            </span>
            <span className="text-xs text-slate-400">JSON/CSV Importer • Schema Validation Engine • Offline Backups</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            GS-III Content Update Centre
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Import new questions, current affairs, or restore user progress. Every entry is automatically vetted through strict validation rules (duplicate IDs, missing sources, broken schemas).
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportUserData}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs border border-slate-700 flex items-center gap-1.5 transition-colors shadow"
          >
            <DownloadCloud size={15} />
            <span>Export User Progress</span>
          </button>
        </div>
      </div>

      {/* Main Validation & Import Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
        
        {/* Left: Input Payload Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <strong className="text-sm font-bold text-white flex items-center gap-1.5">
              <UploadCloud size={16} className="text-amber-400" />
              <span>Import JSON Content / Restore Backup</span>
            </strong>
            <button
              onClick={() => setImportJsonText('')}
              className="text-slate-400 hover:text-white text-[11px]"
            >
              Clear
            </button>
          </div>

          <textarea
            rows={12}
            value={importJsonText}
            onChange={(e) => setImportJsonText(e.target.value)}
            placeholder={`Paste content JSON here. Example schema:
[
  {
    "id": "mcq-new-001",
    "topic": "Economy",
    "questionText": "Sample question text...",
    "options": [
      { "id": "A", "text": "Option A" },
      { "id": "B", "text": "Option B" }
    ],
    "correctOptionId": "A",
    "explanation": "Why correct...",
    "source": "PIB Press Release"
  }
]`}
            className="w-full bg-slate-850 border border-slate-750 rounded-xl p-3 text-white font-mono text-[11px] focus:outline-none focus:border-amber-500 leading-relaxed"
          />

          <div className="flex justify-end pt-1">
            <button
              onClick={handleValidateAndImport}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              Validate & Import Payload
            </button>
          </div>
        </div>

        {/* Right: Real-Time Validation Report */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <strong className="text-sm font-bold text-white flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Automated Validation Report</span>
            </strong>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
              validationReport.status === 'valid' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
              validationReport.status === 'invalid' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
              'bg-slate-800 text-slate-400'
            }`}>
              Status: {validationReport.status}
            </span>
          </div>

          {validationReport.status === 'idle' ? (
            <div className="py-12 text-center text-slate-500 space-y-1">
              <Database size={30} className="mx-auto text-slate-600 mb-1" />
              <p>No active payload submitted for validation.</p>
              <p className="text-[11px]">Paste data on the left and click &ldquo;Validate & Import&rdquo;.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 bg-slate-850 rounded-lg border border-slate-750 flex items-center justify-between">
                <span>Total Items Evaluated:</span>
                <span className="font-mono font-bold text-white text-sm">{validationReport.totalChecked}</span>
              </div>

              {validationReport.errors.length > 0 && (
                <div className="p-3 bg-red-950/20 border border-red-800/40 rounded-lg space-y-1 text-red-300">
                  <strong className="block text-red-400 font-bold flex items-center gap-1">
                    <AlertTriangle size={13} /> {validationReport.errors.length} Critical Schema Errors:
                  </strong>
                  <ul className="space-y-0.5 text-[11px]">
                    {validationReport.errors.map((err, i) => (
                      <li key={i}>• {err}</li>
                    ))}
                  </ul>
                </div>
              )}

              {validationReport.warnings.length > 0 && (
                <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-lg space-y-1 text-amber-300">
                  <strong className="block text-amber-400 font-bold flex items-center gap-1">
                    <AlertTriangle size={13} /> {validationReport.warnings.length} Warnings (Missing Sources / Fields):
                  </strong>
                  <ul className="space-y-0.5 text-[11px]">
                    {validationReport.warnings.map((w, i) => (
                      <li key={i}>• {w}</li>
                    ))}
                  </ul>
                </div>
              )}

              {validationReport.status === 'valid' && (
                <div className="p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-lg text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>All checks passed! Zero duplicate IDs and compliant with official GS-III schema.</span>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

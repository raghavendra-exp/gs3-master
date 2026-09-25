import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavTab, ExamMode, DepthMode, UserState } from '../types';

interface AppContextType {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  examMode: ExamMode;
  setExamMode: (mode: ExamMode) => void;
  depthMode: DepthMode;
  setDepthMode: (depth: DepthMode) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  selectedIssueId: string | null;
  setSelectedIssueId: (id: string | null) => void;
  userState: UserState;
  toggleCompleteTopic: (id: string) => void;
  toggleBookmark: (id: string) => void;
  saveNote: (id: string, note: string) => void;
  logTestAttempt: (attempt: UserState['testHistory'][0]) => void;
  logMistake: (mistake: UserState['mistakeBook'][0]) => void;
  removeMistake: (questionId: string) => void;
  setPlannerGoal: (mins: number) => void;
  exportUserData: () => void;
  importUserData: (jsonData: string) => boolean;
}

const DEFAULT_USER_STATE: UserState = {
  completedTopics: ['gdp-vs-gva', 'threat-lwe-naxalism'],
  bookmarks: ['issue-groundwater-depletion', 'mcq-econ-001'],
  notes: {
    'gdp-vs-gva': 'Remember: GDP at Market Prices = GVA at Basic Prices + Net Product Taxes. Shift happened in 2015!',
    'issue-groundwater-depletion': 'CACP quote: Punjab pumps 3x more water than recharge. Over 75% blocks over-exploited.'
  },
  testHistory: [],
  mistakeBook: [],
  revisionSchedule: [
    {
      itemId: 'gdp-vs-gva',
      title: 'GDP vs GVA (National Income)',
      category: 'Economy',
      intervalDays: 1,
      dueDate: Date.now() + 86400000,
      repetitionCount: 1,
      masteryLevel: 'Moderate'
    }
  ],
  studyPlannerGoalMins: 120,
  examDateUPSC: '2027-05-23',
  examDateUPPSC: '2026-10-18'
};

const STORAGE_KEY = 'GS3_MASTER_USER_STATE_V1';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [examMode, setExamMode] = useState<ExamMode>('common');
  const [depthMode, setDepthMode] = useState<DepthMode>('standard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>('issue-groundwater-depletion');

  const [userState, setUserState] = useState<UserState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_USER_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load user state from localStorage', e);
    }
    return DEFAULT_USER_STATE;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    } catch (e) {
      console.error('Failed to save user state to localStorage', e);
    }
  }, [userState]);

  const toggleCompleteTopic = (id: string) => {
    setUserState(prev => {
      const exists = prev.completedTopics.includes(id);
      return {
        ...prev,
        completedTopics: exists
          ? prev.completedTopics.filter(t => t !== id)
          : [...prev.completedTopics, id]
      };
    });
  };

  const toggleBookmark = (id: string) => {
    setUserState(prev => {
      const exists = prev.bookmarks.includes(id);
      return {
        ...prev,
        bookmarks: exists
          ? prev.bookmarks.filter(b => b !== id)
          : [...prev.bookmarks, id]
      };
    });
  };

  const saveNote = (id: string, note: string) => {
    setUserState(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [id]: note
      }
    }));
  };

  const logTestAttempt = (attempt: UserState['testHistory'][0]) => {
    setUserState(prev => ({
      ...prev,
      testHistory: [attempt, ...prev.testHistory]
    }));
  };

  const logMistake = (mistake: UserState['mistakeBook'][0]) => {
    setUserState(prev => {
      const filtered = prev.mistakeBook.filter(m => m.questionId !== mistake.questionId);
      return {
        ...prev,
        mistakeBook: [mistake, ...filtered]
      };
    });
  };

  const removeMistake = (questionId: string) => {
    setUserState(prev => ({
      ...prev,
      mistakeBook: prev.mistakeBook.filter(m => m.questionId !== questionId)
    }));
  };

  const setPlannerGoal = (mins: number) => {
    setUserState(prev => ({ ...prev, studyPlannerGoalMins: mins }));
  };

  const exportUserData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `gs3-master-backup-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importUserData = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed && Array.isArray(parsed.completedTopics)) {
        setUserState({ ...DEFAULT_USER_STATE, ...parsed });
        return true;
      }
    } catch (e) {
      console.error('Invalid user data import', e);
    }
    return false;
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        examMode,
        setExamMode,
        depthMode,
        setDepthMode,
        searchQuery,
        setSearchQuery,
        isSearchModalOpen,
        setIsSearchModalOpen,
        selectedIssueId,
        setSelectedIssueId,
        userState,
        toggleCompleteTopic,
        toggleBookmark,
        saveNote,
        logTestAttempt,
        logMistake,
        removeMistake,
        setPlannerGoal,
        exportUserData,
        importUserData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

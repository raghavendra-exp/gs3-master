export type NavTab = 
  | 'dashboard'
  | 'economy'
  | 'agriculture'
  | 'infrastructure'
  | 'science'
  | 'environment'
  | 'disaster'
  | 'security'
  | 'issueAnalyser'
  | 'currentAffairs'
  | 'pyq'
  | 'prelims'
  | 'mains'
  | 'library'
  | 'revision'
  | 'uppsc'
  | 'updateCentre';

export type ExamMode = 'common' | 'upsc' | 'uppsc';
export type DepthMode = 'beginner' | 'standard' | 'advanced';

export type SourceType = 'FACT' | 'DATA' | 'ANALYSIS' | 'GOVT_CLAIM' | 'RESEARCH_FINDING' | 'EXPERT_OPINION' | 'CONTROVERSIAL_CLAIM';

// ------------------------------------
// Economy Types
// ------------------------------------
export interface EconomyConcept {
  id: string;
  title: string;
  category: 'National Income' | 'Inflation' | 'Fiscal Policy' | 'Monetary Policy' | 'External Sector' | 'Investment & Growth' | 'Employment';
  simpleExplanation: string;
  technicalDefinition: string;
  formula?: string;
  realLifeExample: string;
  indianExample: string;
  prelimsFacts: string[];
  commonConfusion: string;
  mainsRelevance: string;
  currentRelevance: string;
  relatedConcepts: string[];
  pyqReference?: string;
  source: string;
}

export interface EconomicIndicator {
  id: string;
  name: string;
  category: 'Growth' | 'Inflation' | 'Fiscal' | 'External' | 'Labor & Output';
  latestValue: string;
  previousValue: string;
  trend: 'up' | 'down' | 'stable';
  unit: string;
  period: string;
  source: string;
  lastUpdated: string;
  definition: string;
  examRelevance: string;
}

export interface BudgetAnnouncement {
  id: string;
  sector: 'Fiscal' | 'Taxation' | 'Capex' | 'Agriculture' | 'Infrastructure' | 'Green Economy' | 'Tech & Defence';
  title: string;
  whatChanged: string;
  whyImportant: string;
  whoBenefits: string;
  mechanism: string;
  fiscalImplication: string;
  criticism: string;
  prelimsFact: string;
  mainsRelevance: string;
  source: string;
}

export interface SurveyChapter {
  id: string;
  chapterNumber: number;
  title: string;
  keyFindings: string[];
  majorData: string[];
  policyImplications: string;
  prelimsFacts: string[];
  mainsArguments: string[];
  source: string;
}

// ------------------------------------
// Agriculture Types
// ------------------------------------
export interface CropData {
  id: string;
  name: string;
  season: 'Kharif' | 'Rabi' | 'Zaid';
  category: 'Foodgrain' | 'Millet' | 'Pulse' | 'Oilseed' | 'Commercial' | 'Horticulture';
  soilRequirements: string;
  temperatureRange: string;
  rainfallRequirement: string;
  topProducingStates: string[];
  currentMsp?: string;
  cacpFormula?: string;
  issues: string[];
  examSignificance: string;
}

export interface StateAgriProfile {
  id: string;
  name: string;
  majorCrops: string[];
  croppingPattern: string;
  soilType: string;
  irrigationCoveragePercent: number;
  majorIssues: string[];
  flagshipSchemes: string[];
  agriExports: string[];
  currentDevelopments: string;
  pyqFocus: string;
}

export interface IrrigationModel {
  id: string;
  name: string;
  costIntensity: 'Low' | 'Medium' | 'High';
  waterUseEfficiencyPercent: number;
  suitableCrops: string[];
  advantages: string[];
  limitations: string[];
  govtScheme: string;
}

export interface MspCrop {
  crop: string;
  category: 'Kharif' | 'Rabi' | 'Commercial';
  currentMsp: string; // e.g. "Rs 2,300 / quintal"
  costConceptUsed: 'A2+FL (50% margin minimum)';
  cacpBasis: string;
  procurementReality: string;
  regionalIssues: string;
  mainsDimension: string;
  source: string;
}

// ------------------------------------
// Science & Technology Types
// ------------------------------------
export interface TechPillar {
  id: string;
  title: string;
  category: 'Space' | 'AI & Computing' | 'Biotechnology' | 'Robotics' | 'Nanotechnology' | 'Quantum & Semiconductors' | 'IPR';
  whatIsIt: string;
  howItWorks: string;
  corePrinciple: string;
  applications: string[];
  indianDevelopments: string[];
  advantages: string[];
  limitationsAndRisks: string[];
  ethicalConcerns: string;
  economicAndSecurityRelevance: string;
  currentAffairsLink: string;
  prelimsFacts: string[];
  mainsRelevance: string;
  source: string;
}

export interface SpaceMission {
  id: string;
  name: string;
  agency: string;
  launchYear: string;
  launchVehicle: string;
  orbit: string;
  objective: string;
  payloads: string[];
  significance: string;
  status: 'Completed' | 'Operational' | 'Upcoming';
  source: string;
}

// ------------------------------------
// Environment & Biodiversity Types
// ------------------------------------
export interface SpeciesProfile {
  id: string;
  commonName: string;
  scientificName: string;
  taxonomy: string;
  habitat: string;
  distributionInIndia: string[];
  iucnStatus: 'Critically Endangered' | 'Endangered' | 'Vulnerable' | 'Near Threatened' | 'Least Concern';
  wpaSchedule: 'Schedule I' | 'Schedule II' | 'Schedule III' | 'Schedule IV';
  citesAppendix: 'Appendix I' | 'Appendix II' | 'Appendix III';
  threats: string[];
  conservationProjects: string;
  indianSignificance: string;
  recentDevelopments: string;
  prelimsFacts: string[];
  source: string;
}

export interface EnvironmentalConvention {
  id: string;
  name: string;
  yearAdopted: number;
  purpose: string;
  indiasRole: string;
  keyProvisions: string[];
  currentRelevance: string;
  prelimsFacts: string[];
  source: string;
}

// ------------------------------------
// Disaster Management Types
// ------------------------------------
export interface DisasterHazard {
  id: string;
  hazard: string;
  type: 'Natural' | 'Geophysical' | 'Hydrometeorological' | 'Anthropogenic' | 'Biological/Chemical';
  proneAreasInIndia: string[];
  causes: string[];
  vulnerabilities: string[];
  mitigationMeasures: string[];
  earlyWarningSystem: string;
  institutionalMechanism: string;
  recentCaseStudy: string;
}

export interface DisasterCaseStudy {
  id: string;
  disaster: string;
  location: string;
  year: number;
  hazardType: string;
  impact: string;
  responseHighlights: string[];
  techLeveraged: string[];
  lessonsAndBestPractices: string[];
  source: string;
}

// ------------------------------------
// Internal Security Types
// ------------------------------------
export interface SecurityThreat {
  id: string;
  domain: 'Terrorism' | 'Left Wing Extremism' | 'North-East Insurgency' | 'Organised Crime & Hawala' | 'Cybersecurity' | 'Border Security';
  nature: string;
  rootCauses: string[];
  geographicalSpread: string[];
  modusOperandi: string[];
  stateAndNonStateActors: string;
  govtResponseAndFramework: string[];
  technologyCountermeasures: string[];
  criticalChallenges: string[];
  wayForward: string[];
}

export interface SecurityAgency {
  id: string;
  name: string;
  shortName: string;
  ministry: 'Ministry of Home Affairs' | 'Ministry of Defence' | 'Cabinet Secretariat' | 'Ministry of Finance';
  legalBasis: string;
  mandate: string;
  jurisdictionAndBorders: string;
  majorFunctions: string[];
  specialRole: string;
  motto: string;
  keyFacts: string[];
}

// ------------------------------------
// Signature Issue Analyser Types (18-Dimension Framework)
// ------------------------------------
export interface SignatureIssue {
  id: string;
  title: string;
  category: 'Economy' | 'Agriculture' | 'Science & Tech' | 'Environment' | 'Disaster' | 'Internal Security' | 'Cross-Disciplinary';
  tags: string[];
  what: string;
  why: string;
  background: string;
  data: { metric: string; value: string; source: string; year: string }[];
  causes: string[];
  impact: {
    economic: string;
    social: string;
    environmental?: string;
    security?: string;
  };
  stakeholders: string[];
  govtMeasures: string[];
  technology: string[];
  environmentalDimension: string;
  economicDimension: string;
  securityDimension: string;
  challenges: string[];
  internationalExamples: string[];
  wayForward: string[];
  prelimsFacts: string[];
  pyqs: string[];
  mainsQuestions: string[];
}

// ------------------------------------
// Current Affairs & Linker Types
// ------------------------------------
export interface CurrentAffairItem {
  id: string;
  title: string;
  date: string;
  category: 'Economy' | 'Agriculture' | 'Science & Tech' | 'Environment' | 'Disaster' | 'Internal Security';
  source: string;
  sourceUrl: string;
  lastVerified: string;
  sourceType: SourceType;
  summary: string;
  keyDataPoints: string[];
  staticLinker: {
    coreConcept: string;
    gsSyllabusTopic: string;
    constitutionalOrLegalBasis: string;
    policyOrGovtScheme: string;
    pyqRef: string;
    prelimsPracticePrompt: string;
    mainsQuestionPrompt: string;
    diagramSuggestion: string;
  };
}

// ------------------------------------
// PYQ & Question Types
// ------------------------------------
export interface PYQItem {
  id: string;
  exam: 'UPSC_PRELIMS' | 'UPSC_MAINS' | 'UPPSC_PRELIMS' | 'UPPSC_MAINS';
  year: number;
  paper: 'GS-III' | 'GS-I (Prelims)';
  questionNumber?: number;
  marks?: number;
  questionText: string;
  topic: string;
  subtopic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  conceptTested: string;
  currentAffairsLinkage: string;
  explanationOrModelAnswer: string;
  officialSource: string;
  modelPoints?: string[];
}

export type PrelimsQuestionType = 
  | 'Single_Correct' 
  | 'Statement_Two' 
  | 'Statement_Three' 
  | 'Match_Following' 
  | 'Assertion_Reason' 
  | 'Pair_Matching';

export interface PrelimsQuestion {
  id: string;
  topic: 'Economy' | 'Agriculture' | 'Science' | 'Environment' | 'Disaster' | 'Security';
  subtopic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: PrelimsQuestionType;
  questionText: string;
  statements?: string[];
  pairs?: { left: string; right: string }[];
  assertion?: string;
  reason?: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  whyWrongOptions: string[];
  concept: string;
  memoryTrap: string;
  memoryTrick?: string;
  officialPYQRef?: string;
  tags: string[];
}

export interface MainsQuestion {
  id: string;
  exam: 'UPSC' | 'UPPSC';
  year?: number;
  marks: 8 | 10 | 12 | 15 | 20;
  wordLimit: 125 | 150 | 200 | 250;
  topic: 'Economy' | 'Agriculture' | 'Infrastructure' | 'Science & Tech' | 'Environment' | 'Disaster Management' | 'Internal Security';
  questionText: string;
  directive: 'Discuss' | 'Examine' | 'Critically Examine' | 'Evaluate' | 'Analyze' | 'Comment' | 'Elucidate' | 'Assess';
  directiveExplanation: string;
  framework: {
    introHook: string;
    bodyDimensions: { dimension: string; points: string[] }[];
    conclusionOutlook: string;
  };
  diagramSuggestion: string;
  dataToCite: string[];
  committeesToMention: string[];
  caseStudyRef?: string;
}

// ------------------------------------
// Data Bank, Reports, Committees
// ------------------------------------
export interface DataBankItem {
  id: string;
  category: 'Economy' | 'Agriculture' | 'Employment' | 'Infrastructure' | 'Environment' | 'Climate' | 'Science' | 'Security';
  metric: string;
  value: string;
  year: string;
  unit: string;
  source: string;
  definition: string;
  examRelevance: string;
  lastVerified: string;
}

export interface ReportItem {
  id: string;
  reportName: string;
  publisher: string;
  year: number;
  majorFindings: string[];
  importantData: string[];
  gs3Relevance: string;
  prelimsFacts: string[];
  mainsArguments: string[];
  sourceUrl: string;
}

export interface CommitteeItem {
  id: string;
  name: string;
  year: number;
  chairperson: string;
  subject: string;
  keyRecommendations: string[];
  implementationStatus: string;
  gs3Relevance: string;
  pyqsLinked: string[];
  source: string;
}

// ------------------------------------
// User Progress & Storage Types
// ------------------------------------
export interface UserState {
  completedTopics: string[];
  bookmarks: string[];
  notes: Record<string, string>; // key: itemId, value: note markdown
  testHistory: {
    testId: string;
    timestamp: number;
    total: number;
    score: number;
    correct: number;
    wrong: number;
    timeSpentSec: number;
    wrongQuestions: string[];
  }[];
  mistakeBook: {
    questionId: string;
    userChoice: string;
    timestamp: number;
    category: string;
    note?: string;
  }[];
  revisionSchedule: {
    itemId: string;
    title: string;
    category: string;
    intervalDays: number;
    dueDate: number;
    repetitionCount: number;
    masteryLevel: 'Weak' | 'Moderate' | 'Strong' | 'Mastered';
  }[];
  studyPlannerGoalMins: number;
  examDateUPSC: string;
  examDateUPPSC: string;
}

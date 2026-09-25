# GS-III MASTER — Content Update & Maintenance Guide

This guide details how to update content, import new questions, add Economic Survey/Budget figures, and extend modules in **GS-III MASTER**.

---

## 1. Architecture Overview

GS-III MASTER uses a **strictly decoupled static data architecture**:
- **Application Logic**: TypeScript React components located in `src/components/`.
- **Content & Data Layers**: Stored independently in `src/data/` with strict TypeScript types (`src/types/index.ts`).
- **Client-Side Persistence**: Browser `localStorage` maintains user test attempts, Mistake Book, flashcards spaced-repetition schedules, notes, and custom goal settings.

```
src/
├── types/                 # Central TypeScript interfaces & schemas
├── context/               # State management (AppContext)
├── data/                  # Official data modules
│   ├── economyData.ts     # GDP, CPI, WPI, Budget, Survey, Planning
│   ├── agricultureData.ts # Crops, Irrigation, MSP, Subsidies, PDS
│   ├── scienceData.ts     # Space, AI, Biotech, Quantum, IPR, Fabs
│   ├── environmentData.ts # Species, Conventions, Climate, EIA
│   ├── disasterData.ts    # Hazards, DM Cycle, NDMA, Case Studies
│   ├── securityData.ts    # Threats, Border maps, Security forces
│   ├── issueAnalyserData.ts # 18-dimension canonical issues
│   ├── currentAffairsData.ts # Current developments & Static Linker
│   ├── pyqData.ts         # UPSC & UPPSC 2013-2024 Archives
│   ├── prelimsQuestionsData.ts # Prelims MCQs with traps
│   ├── mainsQuestionsData.ts   # Mains 10M & 15M questions & rubrics
│   ├── libraryData.ts     # Data bank, reports, committees, cases
│   ├── revisionData.ts    # Flashcards & Mnemonics
│   └── uppscData.ts       # UP-specific GS-III / GS-V & VI
```

---

## 2. Official-Source-First Integrity Rules

1. **Never fabricate numbers**: Every metric must cite the publishing ministry, RBI bulletin, NSO release, or official report.
2. **Clear Source Types**: Every current affairs item must specify its `sourceType`:
   - `FACT`
   - `DATA`
   - `GOVT_CLAIM`
   - `RESEARCH_FINDING`
   - `EXPERT_OPINION`
   - `CONTROVERSIAL_CLAIM`
3. **Include Last-Verified Date**: Always provide the `lastVerified` field (`YYYY-MM-DD`).

---

## 3. Adding New Content

### A. Adding a New Signature Issue (`src/data/issueAnalyserData.ts`)
Each signature issue implements the 18-dimension civil services framework:
```typescript
{
  id: 'issue-semiconductors-india',
  title: 'Semiconductor Fabrication Ecosystem & Strategic Autonomy',
  category: 'Science & Tech',
  tags: ['Semiconductors', 'ISM', 'Supply Chain', 'Quad', 'PLI'],
  what: 'Technical definition of semiconductor microchip fabrication...',
  why: 'Geopolitical vulnerability, TSMC concentration, $50B+ import bill...',
  background: 'From 1984 SCL Mohali fire to 2021 India Semiconductor Mission...',
  data: [
    { metric: 'Global TSMC Advanced Fab Share', value: '> 90%', source: 'SIA Report', year: '2023' }
  ],
  causes: ['High capital cost ($10B per fab)', 'Ultra-pure water needs', 'EUV monopoly by ASML'],
  impact: {
    economic: 'Electronics trade deficit, auto assembly stoppages',
    social: 'High-skilled engineering job creation',
    security: 'Missile guidance and quantum radar hardware sovereignty'
  },
  stakeholders: ['MeitY', 'ISM Directorate', 'Global foundries', 'Automotive OEMs'],
  govtMeasures: ['₹76,000 cr incentive scheme', '50% fiscal parity support on project cost'],
  technology: ['FinFET', 'GAAFET', 'EUV Photolithography', 'ATMP / OSAT'],
  environmentalDimension: 'Millions of liters of pure water and toxic sludge management',
  economicDimension: 'Silicon as the foundational commodity replacing petroleum',
  securityDimension: 'Foreign hardware backdoors in defence communication networks',
  challenges: ['Interrupted power supply', 'Lack of domestic chemical ecosystems'],
  internationalExamples: ['Taiwan Hsinchu Science Park', 'US CHIPS and Science Act 2022'],
  wayForward: ['Focus on mature 28nm nodes first', 'Invest in compound semiconductors (GaN, SiC)'],
  prelimsFacts: ['Silicon bandgap is 1.1 eV', 'ISM is under Digital India Corporation, MeitY'],
  pyqs: ['UPSC Mains 2022: Semiconductor supply chain disruptions'],
  mainsQuestions: ['GS-3 (15M, 250W): Analyze the geopolitical and economic hurdles in establishing commercial semiconductor fabs in India.']
}
```

### B. Adding a New Prelims MCQ (`src/data/prelimsQuestionsData.ts`)
```typescript
{
  id: 'mcq-new-001',
  topic: 'Economy',
  subtopic: 'Monetary Policy',
  difficulty: 'Medium',
  type: 'Statement_Two',
  questionText: 'Consider the following statements regarding the Standing Deposit Facility (SDF):',
  statements: [
    'The RBI does not provide any collateral securities to banks when absorbing liquidity under SDF.',
    'It sets the lower bound of the Liquidity Adjustment Facility (LAF) corridor.'
  ],
  options: [
    { id: 'A', text: '1 only' },
    { id: 'B', text: '2 only' },
    { id: 'C', text: 'Both 1 and 2' },
    { id: 'D', text: 'Neither 1 nor 2' }
  ],
  correctOptionId: 'C',
  explanation: 'Both statements are correct. Introduced under Section 17 of RBI Act in 2022...',
  whyWrongOptions: ['Options A, B, and D are incomplete.'],
  concept: 'Standing Deposit Facility operates without collateral, unlike Reverse Repo.',
  memoryTrap: 'Students confuse SDF with Reverse Repo. Reverse Repo requires government securities as collateral; SDF does NOT require collateral!',
  memoryTrick: 'SDF = "Securities Denied Facility" (No collateral needed).',
  tags: ['Monetary Policy', 'SDF', 'LAF', 'RBI']
}
```

---

## 4. Bulk Data Import via Update Centre UI

1. Open **Update Centre** from the sidebar.
2. Paste valid JSON into the import textarea.
3. Click **Validate & Import Payload**.
4. The built-in validator verifies:
   - Duplicate ID detection across all records.
   - Missing required fields (`id`, `options`, `correctOptionId`, etc.).
   - Missing authoritative source attribution.
5. If validation passes, data integrates smoothly without application reloading.

---

## 5. Building & Deploying

To compile and verify the build locally:
```bash
npm run build
```

Pushing commits to the `main` branch automatically triggers GitHub Actions to deploy to GitHub Pages.

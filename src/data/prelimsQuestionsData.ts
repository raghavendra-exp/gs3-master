import { PrelimsQuestion } from '../types';

export const prelimsQuestionsBank: PrelimsQuestion[] = [
  // ------------------------------------
  // Economy Questions
  // ------------------------------------
  {
    id: 'mcq-econ-001',
    topic: 'Economy',
    subtopic: 'Inflation Indices & WPI vs CPI',
    difficulty: 'Medium',
    type: 'Statement_Three',
    questionText: 'With reference to the Wholesale Price Index (WPI) and Consumer Price Index (CPI) in India, consider the following statements:',
    statements: [
      'The weight of food in Consumer Price Index (Combined) is significantly higher than that in Wholesale Price Index.',
      'The WPI does not capture changes in the prices of services, which CPI captures.',
      'The Reserve Bank of India has adopted WPI as its key measure of inflation for setting monetary policy interest rates.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'A',
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect. The weight of food in CPI-Combined is 45.86% (Consumer Food Price Index weight is ~39.06%), whereas in WPI (2011-12 base) primary food articles weight is only 15.26% and manufactured food is 9.12% (total food weight is ~24.38%). WPI measures only manufactured and primary goods; it completely excludes services. Following Urjit Patel Committee recommendations, the RBI adopted CPI-Combined (not WPI) as its key inflation gauge under Flexible Inflation Targeting.',
    whyWrongOptions: [
      'Option B ignores Statement 1 which is fundamentally correct regarding food weight disparity.',
      'Option C and D include Statement 3, which is false since RBI shifted away from WPI to CPI in 2014-2016.'
    ],
    concept: 'WPI vs CPI composition: WPI excludes services and has highest weight for manufactured items (64.23%); CPI includes services and has highest weight for food and beverages (45.86%).',
    memoryTrap: 'Students often forget that RBI discarded WPI over a decade ago. Remember: "C" in CPI stands for Consumer and Central Bank\'s target!',
    memoryTrick: 'WPI = "Without People\'s Invoices" (No services, wholesale only). CPI = "Citizen\'s Pocket Index" (Direct retail impact).',
    officialPYQRef: 'UPSC Prelims 2020 (Identical question tested by UPSC)',
    tags: ['Inflation', 'CPI', 'WPI', 'Monetary Policy', 'RBI']
  },
  {
    id: 'mcq-econ-002',
    topic: 'Economy',
    subtopic: 'External Sector & Capital Account Convertibility',
    difficulty: 'Hard',
    type: 'Pair_Matching',
    questionText: 'Consider the following pairs of transactions and their classification in India’s Balance of Payments (BoP):',
    pairs: [
      { left: '1. Inward remittances from non-resident Indians (NRIs) to families', right: 'Capital Account' },
      { left: '2. Investment by foreign private equity in Indian tech startup equity', right: 'Capital Account' },
      { left: '3. Dividend paid by Indian company to overseas shareholders', right: 'Current Account' }
    ],
    options: [
      { id: 'A', text: 'Only one pair is correctly matched' },
      { id: 'B', text: 'Only two pairs are correctly matched' },
      { id: 'C', text: 'All three pairs are correctly matched' },
      { id: 'D', text: 'None of the pairs is correctly matched' }
    ],
    correctOptionId: 'B',
    explanation: 'Only pairs 2 and 3 are correctly matched. Pair 1 is incorrectly matched: Inward personal remittances are classified as unilateral unrequited transfers under the Current Account (Invisibles), not Capital Account. Pair 2 is correct: Foreign equity investments alter foreign liability/asset claims and constitute Foreign Direct Investment (FDI) in the Capital Account. Pair 3 is correct: Dividends, profits, and interest payments are cross-border factor investment income and are booked under the Current Account (Primary Income).',
    whyWrongOptions: [
      'Option A misses that two pairs (2 and 3) are accurately classified.',
      'Option C incorrectly includes Pair 1, which confuses unrequited gifts/remittances with capital assets.',
      'Option D is incorrect as pairs 2 and 3 are verified accounting classifications.'
    ],
    concept: 'BoP Current Account records flow of goods, services, primary income (dividends/interest), and secondary income (remittances/donations). Capital Account records ownership transfer of assets/liabilities (FDI, FPI, External Commercial Borrowings).',
    memoryTrap: 'Common trap: Thinking remittances must be capital because the money is used to buy property in India. In national accounts, who receives the money is what matters: it is a gift/unrequited transfer with zero return liability.',
    memoryTrick: 'If it creates future debt or ownership obligation -> Capital Account. If it is earnings, payment for services, or free gift -> Current Account.',
    tags: ['Balance of Payments', 'Current Account', 'Capital Account', 'Remittances', 'FDI']
  },
  {
    id: 'mcq-econ-003',
    topic: 'Economy',
    subtopic: 'Fiscal Policy & Deficit Concepts',
    difficulty: 'Medium',
    type: 'Single_Correct',
    questionText: 'Which one of the following statements correctly defines "Primary Deficit"?',
    options: [
      { id: 'A', text: 'Fiscal Deficit minus Net Interest Payments made by the government on past debt.' },
      { id: 'B', text: 'Total Budget Expenditure minus Total Revenue Receipts.' },
      { id: 'C', text: 'Fiscal Deficit plus Grants given to States for creation of capital assets.' },
      { id: 'D', text: 'Revenue Deficit minus Capital Expenditure.' }
    ],
    correctOptionId: 'A',
    explanation: 'Primary Deficit is defined as Fiscal Deficit minus Net Interest Payments. It indicates how much the government needs to borrow to finance expenses excluding the burden of servicing accumulated debt from previous years. A zero primary deficit means current government revenues cover current non-interest expenditures.',
    whyWrongOptions: [
      'Option B defines total budget deficit before capital receipts.',
      'Option C is an invented formula; Effective Revenue Deficit is Revenue Deficit minus grants for capital assets.',
      'Option D is mathematically meaningless in budget accounting.'
    ],
    concept: 'Primary Deficit = Fiscal Deficit - Interest Payments. It isolates the current fiscal stance of the ruling administration from legacy debt obligations.',
    memoryTrap: 'Do not confuse Primary Deficit with Revenue Deficit or Effective Revenue Deficit.',
    tags: ['Fiscal Deficit', 'Primary Deficit', 'FRBM', 'Union Budget']
  },

  // ------------------------------------
  // Agriculture Questions
  // ------------------------------------
  {
    id: 'mcq-agri-001',
    topic: 'Agriculture',
    subtopic: 'Minimum Support Price (MSP) & CACP',
    difficulty: 'Medium',
    type: 'Statement_Two',
    questionText: 'With reference to the Minimum Support Price (MSP) regime in India, consider the following statements:',
    statements: [
      'The Commission for Agricultural Costs and Prices (CACP) is a statutory body established under an Act of Parliament.',
      'The Central Government fixes MSP for 22 mandated crops and Fair and Remunerative Price (FRP) for sugarcane based on CACP recommendations.'
    ],
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: 'Both 1 and 2' },
      { id: 'D', text: 'Neither 1 nor 2' }
    ],
    correctOptionId: 'B',
    explanation: 'Statement 1 is incorrect: CACP is an attached office of the Ministry of Agriculture and Farmers Welfare (created in 1965 as Agricultural Prices Commission); it is NOT a statutory body. Statement 2 is correct: The Cabinet Committee on Economic Affairs (CCEA) approves MSP for 22 mandated crops (14 Kharif, 6 Rabi, and 2 commercial crops) and FRP for sugarcane under the Sugarcane (Control) Order, 1966.',
    whyWrongOptions: [
      'Option A and C are incorrect because CACP was set up via executive resolution and lacks statutory status under an Act.',
      'Option D is incorrect because Statement 2 is factually and officially accurate.'
    ],
    concept: 'CACP recommends prices based on Cost A2 (paid-out costs) and Cost A2+FL (family labour). National Commission on Farmers (Swaminathan Committee) recommended pricing at C2+50%.',
    memoryTrap: 'UPSC frequently tests whether an organization is statutory, constitutional, or an attached executive office. CACP is strictly an attached executive office.',
    memoryTrick: 'CACP = "Counsels And Consults Prices" (Advisory body, not statutory).',
    officialPYQRef: 'UPSC Prelims 2018 & 2020',
    tags: ['MSP', 'CACP', 'FRP', 'CCEA', 'Sugarcane']
  },
  {
    id: 'mcq-agri-002',
    topic: 'Agriculture',
    subtopic: 'Fertilizer Subsidies & Nutrient Based Subsidy (NBS)',
    difficulty: 'Hard',
    type: 'Statement_Three',
    questionText: 'Consider the following statements regarding fertilizer pricing and subsidies in India:',
    statements: [
      'Urea is the only fertilizer whose Maximum Retail Price (MRP) is statutorily fixed by the Government of India.',
      'The Nutrient Based Subsidy (NBS) scheme applies to all non-urea fertilizers like DAP, MOP, and complex fertilizers.',
      '100% of indigenous and imported urea is mandatorily neem-coated to prevent commercial diversion and slow nitrogen release.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'D',
    explanation: 'All three statements are correct. Urea remains under direct statutory price control under the Fertilizer (Control) Order; its MRP is fixed by the government (~₹242 per 45 kg bag). Non-urea phosphatic and potassic (P&K) fertilizers are governed by the Nutrient Based Subsidy (NBS) policy where a fixed per-kilogram subsidy is given on N, P, K, and Sulphur, while MRP is left open for market determination by manufacturers. Since 2015, the government mandated 100% neem coating on all domestic and imported urea to eliminate diversion to chemical industries and improve nitrogen efficiency.',
    whyWrongOptions: [
      'Options A, B, and C omit at least one statement that is thoroughly verified and in force.'
    ],
    concept: 'Disparity between heavily subsidized Urea (MRP fixed) and decontrolled NBS fertilizers has led to severe N:P:K nutrient distortion in Indian soils (ideal 4:2:1 vs actual up to 8:3:1 in Punjab).',
    memoryTrap: 'Students often believe NBS covers urea. Urea is strictly excluded from NBS, which is the main source of soil nutrient imbalances!',
    tags: ['Fertilizer Subsidy', 'Urea', 'NBS', 'Neem Coated Urea']
  },

  // ------------------------------------
  // Science & Technology Questions
  // ------------------------------------
  {
    id: 'mcq-sci-001',
    topic: 'Science',
    subtopic: 'Genome Editing & CRISPR-Cas9',
    difficulty: 'Medium',
    type: 'Single_Correct',
    questionText: 'What is Cas9 protein that is frequently mentioned in the news regarding biotechnology?',
    options: [
      { id: 'A', text: 'A molecular scissor used in targeted gene editing.' },
      { id: 'B', text: 'A biosensor used in the detection of heavy metals in wastewater.' },
      { id: 'C', text: 'A gene that makes plants resistant to pest attacks.' },
      { id: 'D', text: 'A structural protein responsible for cellular division in bacteria.' }
    ],
    correctOptionId: 'A',
    explanation: 'Cas9 (CRISPR-associated protein 9) is an RNA-guided endonuclease enzyme (molecular scissors) that can cut double-stranded DNA at precise locations specified by a complementary guide RNA (gRNA). It is the operative cutting tool in CRISPR-Cas9 genome editing.',
    whyWrongOptions: [
      'Option B refers to biological sensors or micro-fluidic assays.',
      'Option C describes Cry toxins in Bt crops (Cry1Ac).',
      'Option D describes tubulin or FtsZ bacterial proteins.'
    ],
    concept: 'CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) was originally an adaptive antiviral immune mechanism in bacteria.',
    memoryTrap: 'Do not confuse Cas9 enzyme (the cutter) with guide RNA (which identifies the target DNA sequence).',
    memoryTrick: 'Cas = "Cuts At Sequence" (Molecular scissor enzyme).',
    officialPYQRef: 'UPSC Prelims 2019 (Direct question repeated by UPSC)',
    tags: ['CRISPR', 'Cas9', 'Biotechnology', 'Gene Editing']
  },
  {
    id: 'mcq-sci-002',
    topic: 'Science',
    subtopic: 'India\'s Space Programme & Launch Vehicles',
    difficulty: 'Hard',
    type: 'Pair_Matching',
    questionText: 'Consider the following pairs of ISRO Launch Vehicles and their characteristics:',
    pairs: [
      { left: '1. PSLV (Polar Satellite Launch Vehicle)', right: '4-stage vehicle using alternating solid and liquid propulsion stages' },
      { left: '2. LVM3 (Launch Vehicle Mark-III)', right: '3-stage vehicle with an indigenous cryogenic upper stage (CE-20)' },
      { left: '3. SSLV (Small Satellite Launch Vehicle)', right: '3-stage vehicle using all-liquid propulsion for rapid turnaround' }
    ],
    options: [
      { id: 'A', text: 'Only one pair is correctly matched' },
      { id: 'B', text: 'Only two pairs are correctly matched' },
      { id: 'C', text: 'All three pairs are correctly matched' },
      { id: 'D', text: 'None of the pairs is correctly matched' }
    ],
    correctOptionId: 'B',
    explanation: 'Only pairs 1 and 2 are correctly matched. Pair 1 is correct: PSLV has 4 stages (Stage 1: Solid HTPB, Stage 2: Liquid Vikas engine using UDMH/N2O4, Stage 3: Solid, Stage 4: Liquid). Pair 2 is correct: LVM3 consists of 2 solid strap-ons (S200), a core liquid stage (L110), and the powerful cryogenic upper stage (C25 powered by CE-20 engine). Pair 3 is incorrectly matched: SSLV is a 3-stage ALL-SOLID propulsion vehicle with a liquid propulsion-based Velocity Trimming Module (VTM) as a terminal stage, specifically designed for low cost and 72-hour turnaround time.',
    whyWrongOptions: [
      'Option A misses that both Pair 1 and Pair 2 are correct.',
      'Option C incorrectly includes Pair 3, which falsely claims SSLV uses all-liquid propulsion (it uses all-solid stages).',
      'Option D is incorrect as pairs 1 and 2 are true.'
    ],
    concept: 'Solid fuel provides massive initial thrust but cannot be throttled or restarted; liquid engines allow restart and precise orbital insertion; cryogenic engines burn liquid hydrogen (-253°C) and liquid oxygen (-183°C) delivering highest specific impulse.',
    memoryTrap: 'SSLV was engineered for fast setup in days with minimal launch crew; liquid stages take weeks to fuel. Hence SSLV primary stages are SOLID.',
    tags: ['ISRO', 'PSLV', 'LVM3', 'SSLV', 'Cryogenic Engine']
  },

  // ------------------------------------
  // Environment Questions
  // ------------------------------------
  {
    id: 'mcq-env-001',
    topic: 'Environment',
    subtopic: 'Ramsar Sites & Montreux Record',
    difficulty: 'Medium',
    type: 'Statement_Two',
    questionText: 'Consider the following statements regarding the Montreux Record under the Ramsar Convention:',
    statements: [
      'It is a register of wetland sites where ecological changes have occurred, are occurring, or are likely to occur as a result of human interference.',
      'Currently, Loktak Lake in Manipur and Keoladeo National Park in Rajasthan are the only Indian wetlands listed in the Montreux Record.'
    ],
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: 'Both 1 and 2' },
      { id: 'D', text: 'Neither 1 nor 2' }
    ],
    correctOptionId: 'C',
    explanation: 'Both statements 1 and 2 are correct. The Montreux Record is a principal tool established under the Ramsar Convention to highlight Ramsar sites facing acute ecological threats. Chilika Lake (Odisha) was removed from the Montreux Record in 2002 after successful opening of a new mouth into the sea. Only Keoladeo NP (facing water scarcity and invasive Paspalum weed) and Loktak Lake (threatened by Ithai barrage impacting floating phumdis and Sangai deer habitat) remain on the record.',
    whyWrongOptions: [
      'Option A and B are incomplete because both assertions are factually true.',
      'Option D fails to acknowledge official Ramsar registry records.'
    ],
    concept: 'Montreux Record acts as a global watchlist requiring urgent international and national remediation efforts.',
    memoryTrap: 'Students often assume Chilika Lake is still on the Montreux Record. Chilika was successfully removed in 2002 and won the Ramsar Wetland Conservation Award!',
    officialPYQRef: 'UPSC Prelims 2014',
    tags: ['Ramsar Convention', 'Montreux Record', 'Wetlands', 'Loktak Lake', 'Keoladeo']
  },
  {
    id: 'mcq-env-002',
    topic: 'Environment',
    subtopic: 'Biodiversity & Wildlife (Protection) Act, 1972',
    difficulty: 'Hard',
    type: 'Single_Correct',
    questionText: 'Under the Wildlife (Protection) Amendment Act, 2022, which major structural change was made to the classification of animal schedules?',
    options: [
      { id: 'A', text: 'The number of schedules was reduced from six to four, with a dedicated schedule created for CITES-listed specimens.' },
      { id: 'B', text: 'Vermin animals like fruit bats and common crows were permanently moved to Schedule I.' },
      { id: 'C', text: 'All national parks and sanctuaries were decentralized to local Gram Sabhas.' },
      { id: 'D', text: 'Schedule I was completely eliminated and replaced by IUCN Red List categories.' }
    ],
    correctOptionId: 'A',
    explanation: 'The Wildlife (Protection) Amendment Act, 2022 rationalized and reduced the schedules from 6 to 4: Schedule I (highest protection for animal species), Schedule II (animal species with lesser protection), Schedule III (protected plant species), and Schedule IV (specimens listed under the CITES Appendices). The separate Schedule V for \'vermin\' was entirely omitted.',
    whyWrongOptions: [
      'Option B is false; the standalone vermin schedule was omitted, and vermin declaration is now notified on case-by-case basis by Central Govt.',
      'Option C is false; protected area management remains under State Chief Wildlife Wardens and NTCA.',
      'Option D is false; Schedule I remains the pinnacle of statutory domestic protection.'
    ],
    concept: 'The 2022 amendment was enacted specifically to implement India\'s obligations under CITES (Convention on International Trade in Endangered Species).',
    memoryTrap: 'Make sure not to quote the obsolete 6-schedule structure in exams. The new Act has exactly 4 schedules.',
    tags: ['Wildlife Protection Act', 'CITES', 'Schedule I', 'Conservation']
  },

  // ------------------------------------
  // Disaster Management Questions
  // ------------------------------------
  {
    id: 'mcq-dis-001',
    topic: 'Disaster',
    subtopic: 'Institutional Architecture under DM Act, 2005',
    difficulty: 'Medium',
    type: 'Single_Correct',
    questionText: 'Who among the following serves as the ex-officio Chairperson of the National Disaster Management Authority (NDMA)?',
    options: [
      { id: 'A', text: 'The Prime Minister of India' },
      { id: 'B', text: 'The Union Minister of Home Affairs' },
      { id: 'C', text: 'The Union Cabinet Secretary' },
      { id: 'D', text: 'The Director General of the National Disaster Response Force (NDRF)' }
    ],
    correctOptionId: 'A',
    explanation: 'Under Section 3 of the Disaster Management Act, 2005, the National Disaster Management Authority (NDMA) is headed by the Prime Minister of India as its ex-officio Chairperson. Similarly, State Disaster Management Authorities (SDMAs) are headed by the respective Chief Ministers.',
    whyWrongOptions: [
      'Option B: Union Home Minister is in charge of administrative ministry, but Prime Minister is statutory Chairperson.',
      'Option C: Cabinet Secretary heads the National Crisis Management Committee (NCMC), not NDMA.',
      'Option D: DG NDRF heads the operational response force, not the apex policy authority.'
    ],
    concept: 'Institutional hierarchy: NDMA (chaired by PM) -> SDMA (chaired by CM) -> DDMA (chaired by District Magistrate / Collector with Zilla Parishad CEO as co-chairperson).',
    memoryTrap: 'Do not confuse NDMA (chaired by PM) with NCMC (chaired by Cabinet Secretary). NCMC is the apex executive body for immediate operational coordination during a live disaster.',
    tags: ['NDMA', 'Disaster Management Act', 'Prime Minister', 'Governance']
  },

  // ------------------------------------
  // Internal Security Questions
  // ------------------------------------
  {
    id: 'mcq-sec-001',
    topic: 'Security',
    subtopic: 'Money Laundering & Enforcement Directorate',
    difficulty: 'Hard',
    type: 'Statement_Three',
    questionText: 'With reference to the Prevention of Money Laundering Act (PMLA), 2002 in India, consider the following statements:',
    statements: [
      'An offense under PMLA cannot be investigated independently by the Enforcement Directorate (ED) without an underlying predicate (scheduled) offense registered by another law enforcement agency.',
      'Statements recorded before an Enforcement Directorate officer during an inquiry under Section 50 of PMLA are admissible as evidence in a court of law.',
      'The Financial Intelligence Unit - India (FIU-IND) reports directly to the Ministry of Home Affairs.'
    ],
    options: [
      { id: 'A', text: '1 and 2 only' },
      { id: 'B', text: '2 and 3 only' },
      { id: 'C', text: '1 and 3 only' },
      { id: 'D', text: '1, 2 and 3' }
    ],
    correctOptionId: 'A',
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect. Under the Supreme Court ruling in Vijay Madanlal Choudhary v. Union of India (2022), money laundering is a secondary crime tied to proceeds of crime generated from a scheduled (predicate) offense. If the predicate offense is quashed or acquitted, the PMLA proceedings cannot survive independently. In the same judgment, the Supreme Court affirmed that an ED officer is not a police officer under the Evidence Act, meaning statements recorded under Section 50 are legally admissible. Statement 3 is false: FIU-IND operates under the Department of Revenue, Ministry of Finance, NOT the Ministry of Home Affairs.',
    whyWrongOptions: [
      'Option B and D include Statement 3, which confuses the administrative parentage of FIU-IND (Ministry of Finance vs Home Affairs).',
      'Option C misses the validity of Section 50 statements under the landmark Vijay Madanlal Choudhary 2022 verdict.'
    ],
    concept: 'PMLA requires an antecedent crime (predicate offense) listed in its Schedule (e.g. corruption under PC Act, narcotics under NDPS, murder under IPC/BNS).',
    memoryTrap: 'Students often assume FIU-IND belongs to MHA because it deals with financial intelligence. It is firmly under the Department of Revenue, Ministry of Finance!',
    tags: ['PMLA', 'Enforcement Directorate', 'FIU-IND', 'Money Laundering', 'Supreme Court']
  },
  {
    id: 'mcq-econ-003',
    topic: 'Economy',
    subtopic: 'FRBM Act & Budgetary Reforms',
    difficulty: 'Medium',
    type: 'Statement_Two',
    questionText: 'With reference to Government Budgeting and Fiscal Consolidation in India, consider the following statements:',
    statements: [
      'The merger of the 92-year-old Railway Budget into the Union Budget in 2017 was based on the recommendations of the Bibek Debroy Committee.',
      'Under the amended FRBM Act, an "Escape Clause" allows a relaxation of up to 0.5% of GDP in the fiscal deficit target during periods of national security, war, or severe agricultural collapse.'
    ],
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: 'Both 1 and 2' },
      { id: 'D', text: 'Neither 1 nor 2' }
    ],
    correctOptionId: 'C',
    explanation: 'Both statements 1 and 2 are correct. Statement 1 is correct: The separate Railway Budget (introduced in 1924 following the Acworth Committee) was abolished and merged into the Union Budget in 2017 based on the Bibek Debroy Committee recommendations. Statement 2 is correct: Based on the N.K. Singh Committee recommendations, the amended FRBM Act incorporates an Escape Clause permitting a 0.5% deviation in fiscal deficit targets during structural economic reforms, national security crises, acts of war, or severe agricultural downturns.',
    whyWrongOptions: [
      'Option A ignores the verified 0.5% escape clause under the amended FRBM framework.',
      'Option B misses the Bibek Debroy committee’s landmark role in the railway budget merger.'
    ],
    concept: 'Budget 2017 reforms: Railway budget merger, advancement to Feb 1, and scrapping of Plan vs Non-Plan expenditure.',
    memoryTrap: 'Do not confuse the Acworth Committee (separated rail budget in 1924) with the Bibek Debroy Committee (re-merged it in 2017).',
    tags: ['FRBM Act', 'Union Budget', 'Bibek Debroy Committee', 'Fiscal Consolidation']
  },
  {
    id: 'mcq-agri-003',
    topic: 'Agriculture',
    subtopic: 'WTO Boxes & Agricultural Subsidies',
    difficulty: 'Hard',
    type: 'Pair_Matching',
    questionText: 'Consider the following pairs of agricultural subsidies and their respective classifications under the WTO Agreement on Agriculture (AoA):',
    pairs: [
      { left: '1. Government expenditure on agricultural research and pest control', right: 'Green Box' },
      { left: '2. Minimum Support Price (MSP) price-support payments', right: 'Amber Box' },
      { left: '3. Direct payments to farmers linked to production-limiting programmes', right: 'Blue Box' }
    ],
    options: [
      { id: 'A', text: 'Only one pair is correctly matched' },
      { id: 'B', text: 'Only two pairs are correctly matched' },
      { id: 'C', text: 'All three pairs are correctly matched' },
      { id: 'D', text: 'None of the pairs is correctly matched' }
    ],
    correctOptionId: 'C',
    explanation: 'All three pairs are correctly matched. Green Box covers non-trade distorting measures (research, pest management, crop insurance, rural infrastructure) and is permitted without financial limits. Amber Box includes trade-distorting price support like India’s MSP and input subsidies, which are subject to a 10% de minimis limit for developing nations. Blue Box covers direct payments linked to production-limiting programs (common in EU/US), exempt from reduction commitments.',
    whyWrongOptions: [
      'Option A, B, and D fail to recognize that all three box definitions align exactly with WTO AoA Annex 2 and Article 6 guidelines.'
    ],
    concept: 'WTO Agreement on Agriculture categorizes domestic farm support into Green (permitted), Blue (production-limiting), and Amber (trade-distorting capped) boxes.',
    memoryTrap: 'Remember: Green = Go (unlimited); Amber = Caution/Stop (capped at 10% for developing nations); Blue = Blueprinted production caps.',
    tags: ['WTO', 'Agreement on Agriculture', 'MSP', 'Subsidies', 'Green Box']
  },
  {
    id: 'mcq-sci-003',
    topic: 'Science',
    subtopic: 'Achievements of Indian Scientists & Everyday Science',
    difficulty: 'Medium',
    type: 'Statement_Two',
    questionText: 'Consider the following statements regarding scientific achievements and pharmaceutical chemistry in India:',
    statements: [
      'The oral contraceptive pill "Saheli" (Centchroman) is the world’s first non-steroidal, once-a-week contraceptive developed indigenously by CDRI Lucknow.',
      'Satyendra Nath Bose derived Planck’s black-body radiation law without using classical electrodynamics, providing the basis for Bose-Einstein statistics.'
    ],
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: 'Both 1 and 2' },
      { id: 'D', text: 'Neither 1 nor 2' }
    ],
    correctOptionId: 'C',
    explanation: 'Both statements 1 and 2 are correct. Statement 1 is correct: "Saheli" (Ormeloxifene/Centchroman) was developed by the Central Drug Research Institute (CDRI) in Lucknow; unlike typical steroidal oral pills that release synthetic estrogen/progesterone, it is a non-steroidal selective estrogen receptor modulator (SERM) taken once a week with negligible hormonal side effects. Statement 2 is correct: In 1924, Satyendra Nath Bose sent a short paper to Albert Einstein formulating quantum statistics for photons without relying on classical electrodynamics, which Einstein translated into German and extended to atoms, predicting the Bose-Einstein Condensate.',
    whyWrongOptions: [
      'Option A misses S.N. Bose’s theoretical physics derivation that earned him global immortality in quantum mechanics.',
      'Option B misses CDRI’s globally acclaimed achievement in reproductive healthcare chemistry.'
    ],
    concept: 'S.N. Bose pioneered quantum statistics for integer-spin particles (bosons); CDRI Lucknow developed Centchroman (Saheli).',
    memoryTrap: 'Do not confuse S.N. Bose (quantum statistics/bosons) with J.C. Bose (radio millimeter waves and plant crescograph).',
    tags: ['Indian Scientists', 'S.N. Bose', 'CDRI Lucknow', 'Everyday Chemistry']
  },
  {
    id: 'mcq-env-003',
    topic: 'Environment',
    subtopic: 'Wildlife Protection Amendment Act 2022 & EIA 2006',
    difficulty: 'Hard',
    type: 'Statement_Two',
    questionText: 'With reference to environmental legislation and clearance procedures in India, consider the following statements:',
    statements: [
      'The Wildlife (Protection) Amendment Act, 2022 rationalized the original six schedules down to four, with Schedule IV specifically dedicated to specimens listed in the CITES Appendices.',
      'Under the EIA Notification 2006, developmental projects categorized as "Category B2" are mandated to conduct a comprehensive public hearing before the State Pollution Control Board.'
    ],
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: 'Both 1 and 2' },
      { id: 'D', text: 'Neither 1 nor 2' }
    ],
    correctOptionId: 'A',
    explanation: 'Statement 1 is correct. Statement 2 is incorrect. Under the Wildlife Protection (Amendment) Act 2022, schedules were reduced from 6 to 4: Schedule I (highest protection), Schedule II (lesser protection), Schedule III (protected plant species), and Schedule IV (specimens listed under the Appendices of CITES). Statement 2 is false: Under EIA 2006, Category B projects are appraised at the State level by SEIAA/SEAC and subdivided into B1 and B2; Category B1 projects require a full EIA report and public hearing, whereas Category B2 projects are explicitly EXEMPT from conducting an EIA study and public consultation.',
    whyWrongOptions: [
      'Option B and C incorrectly assert that Category B2 requires public consultation, which contradicts the core design of EIA 2006.',
      'Option D is incorrect as Statement 1 accurately captures the 2022 WPA schedule restructuring.'
    ],
    concept: 'WPA 2022 creates 4 schedules (Schedule IV = CITES); EIA 2006 Category B2 projects do NOT require EIA reports or public hearings.',
    memoryTrap: 'Students often assume that all developmental projects must undergo public consultation. Remember: Category B2 is an explicit statutory exemption!',
    tags: ['WPA 2022', 'CITES', 'EIA 2006', 'Environmental Clearance']
  },
  {
    id: 'mcq-sec-002',
    topic: 'Security',
    subtopic: 'Assam Rifles & Indo-Myanmar Border Management',
    difficulty: 'Medium',
    type: 'Statement_Two',
    questionText: 'With reference to border security and paramilitary forces in India, consider the following statements:',
    statements: [
      'Assam Rifles is under a dual control structure wherein administrative control rests with the Ministry of Home Affairs, while operational command rests with the Ministry of Defence.',
      'In 2024, the Government of India announced the complete suspension of the Free Movement Regime (FMR) along the Indo-Myanmar border to curb trans-border insurgent movement and illicit narco-trafficking.'
    ],
    options: [
      { id: 'A', text: '1 only' },
      { id: 'B', text: '2 only' },
      { id: 'C', text: 'Both 1 and 2' },
      { id: 'D', text: 'Neither 1 nor 2' }
    ],
    correctOptionId: 'C',
    explanation: 'Both statements 1 and 2 are correct. Statement 1 is correct: Raised in 1835 as the Cachar Levy, the Assam Rifles operates under dual control—its budgetary allocations and administrative management are overseen by the Ministry of Home Affairs (MHA), while its operational command and officers are drawn from the Indian Army under the Ministry of Defence (MoD). Statement 2 is correct: In early 2024, the Ministry of Home Affairs officially suspended the Free Movement Regime (which previously permitted border tribes to travel up to 16 km on either side without a visa) and announced smart fencing of the entire 1,643 km Indo-Myanmar border to tackle illegal immigration, insurgent transit, and Golden Triangle narcotics smuggling.',
    whyWrongOptions: [
      'Option A ignores the landmark 2024 decision to end the FMR along the Myanmar border.',
      'Option B misses the unique dual administrative-operational control that governs the Assam Rifles.'
    ],
    concept: 'Assam Rifles dual control: MHA (Admin) + MoD (Operational); Indo-Myanmar 1,643 km border FMR suspended in 2024.',
    memoryTrap: 'Do not confuse ITBP (under sole MHA control) with Assam Rifles (dual control MHA + MoD).',
    tags: ['Assam Rifles', 'Border Management', 'Free Movement Regime', 'Indo-Myanmar', 'MHA']
  }
];


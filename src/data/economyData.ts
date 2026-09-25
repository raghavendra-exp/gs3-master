import { EconomyConcept, EconomicIndicator, BudgetAnnouncement, SurveyChapter } from '../types';

export const economicIndicators: EconomicIndicator[] = [
  {
    id: 'ind-gdp-growth',
    name: 'Real GDP Growth Rate',
    category: 'Growth',
    latestValue: '7.8%',
    previousValue: '7.2%',
    trend: 'up',
    unit: 'YoY %',
    period: 'FY 2024-25 (MoSPI SAE)',
    source: 'National Statistical Office (NSO), MoSPI',
    lastUpdated: 'May 2025',
    definition: 'Percentage change in Gross Domestic Product measured at constant base year (2011-12) prices, stripping out inflation.',
    examRelevance: 'Directly tested in Prelims (base year, GVA vs GDP relation) and Mains GS-3 (India as fastest-growing major economy).'
  },
  {
    id: 'ind-cpi-inflation',
    name: 'CPI Headline Inflation (Combined)',
    category: 'Inflation',
    latestValue: '4.85%',
    previousValue: '5.10%',
    trend: 'down',
    unit: '% YoY',
    period: 'Latest 2025/26 Print',
    source: 'MoSPI / RBI MPC Resolution',
    lastUpdated: 'Jan 2026',
    definition: 'Change in retail price level of a fixed basket of goods & services consumed by households. Monetary Policy Target: 4% ± 2%.',
    examRelevance: 'Crucial for RBI MPC flexible inflation targeting mandate, food inflation volatility (cereals, pulses, vegetables).'
  },
  {
    id: 'ind-wpi-inflation',
    name: 'WPI Inflation (Wholesale)',
    category: 'Inflation',
    latestValue: '1.84%',
    previousValue: '1.26%',
    trend: 'up',
    unit: '% YoY',
    period: 'Monthly Index (2011-12 Base)',
    source: 'Office of Economic Adviser, DPIIT, Ministry of Commerce',
    lastUpdated: 'Jan 2026',
    definition: 'Measures bulk price movements of traded goods before retail. Excludes services; heavy weight on manufactured products (64.2%).',
    examRelevance: 'Prelims favorite: WPI vs CPI weights (Services excluded in WPI, Food weight higher in CPI ~45.86%).'
  },
  {
    id: 'ind-fiscal-deficit',
    name: 'Fiscal Deficit (% of GDP)',
    category: 'Fiscal',
    latestValue: '4.9%',
    previousValue: '5.6%',
    trend: 'down',
    unit: '% of GDP',
    period: 'Union Budget Estimates',
    source: 'Union Budget Documents / CGA, Ministry of Finance',
    lastUpdated: 'Budget 2025',
    definition: 'Excess of Total Expenditure over Non-Debt Receipts. Reflects total government borrowing requirement during the fiscal year.',
    examRelevance: 'FRBM Act compliance roadmap (targeting below 4.5% by FY26), debt sustainability, crowding-out effect.'
  },
  {
    id: 'ind-forex-reserves',
    name: 'Foreign Exchange Reserves',
    category: 'External',
    latestValue: '$692.5 Billion',
    previousValue: '$648.0 Billion',
    trend: 'up',
    unit: 'USD Billion',
    period: 'Weekly RBI Statistical Supplement',
    source: 'Reserve Bank of India (RBI)',
    lastUpdated: 'Feb 2026',
    definition: 'Foreign currency assets, Gold, SDRs (Special Drawing Rights), and Reserve Tranche Position (RTP) in IMF held by RBI.',
    examRelevance: 'Covers over 11 months of projected imports; protects against volatile capital outflows (taper tantrum resistance).'
  },
  {
    id: 'ind-cad-gdp',
    name: 'Current Account Deficit (CAD)',
    category: 'External',
    latestValue: '1.1%',
    previousValue: '1.9%',
    trend: 'down',
    unit: '% of GDP',
    period: 'RBI Balance of Payments (BoP)',
    source: 'Reserve Bank of India',
    lastUpdated: 'Q3 FY25',
    definition: 'Net balance of exports and imports of goods (merchandise), services (software, BPO), and net transfers (remittances).',
    examRelevance: 'Sustainable threshold for India is typically 2.5-3.0% of GDP. Offset by robust invisibles and remittance inflows ($125B+).'
  },
  {
    id: 'ind-capex-outlay',
    name: 'Capital Expenditure (Central Govt)',
    category: 'Fiscal',
    latestValue: '₹11.11 Lakh Crore',
    previousValue: '₹10.00 Lakh Crore',
    trend: 'up',
    unit: '₹ Lakh Crore',
    period: 'Union Budget',
    source: 'Union Budget, Ministry of Finance',
    lastUpdated: 'Budget 2024-25 / 2025-26',
    definition: 'Expenditure resulting in physical asset creation or debt reduction (multiplier effect estimated at 2.95x vs 0.9x for revenue spend).',
    examRelevance: 'Crowding-in private investment, National Infrastructure Pipeline, Bharatmala, Railways, Dedicated Freight Corridors.'
  },
  {
    id: 'ind-plfs-unemployment',
    name: 'Unemployment Rate (UR - 15+ years)',
    category: 'Labor & Output',
    latestValue: '3.2%',
    previousValue: '4.1%',
    trend: 'down',
    unit: '% (Usual Status)',
    period: 'Periodic Labour Force Survey (PLFS)',
    source: 'National Sample Survey Office (NSSO), MoSPI',
    lastUpdated: 'Annual PLFS Report',
    definition: 'Percentage of persons unemployed among the persons in the labour force (employed + seeking employment).',
    examRelevance: 'Mains GS-3 debate on jobless growth vs gig economy, female labour force participation rate (LFPR rising to ~37%), structural transformation.'
  }
];

export const economyConcepts: EconomyConcept[] = [
  {
    id: 'gdp-vs-gva',
    title: 'GDP vs GVA (Gross Value Added)',
    category: 'National Income',
    simpleExplanation: 'GDP measures the total monetary value of all finished goods and services made within a country from the consumer side. GVA measures the value added at each stage of production from the producer/sector side.',
    technicalDefinition: 'GDP at Market Prices = GVA at Basic Prices + (Product Taxes - Product Subsidies). GVA represents the contribution of an individual producer, industry or sector to GDP.',
    formula: 'GDP = GVA + Net Product Taxes (Taxes on products - Subsidies on products)',
    realLifeExample: 'If a farmer sells wheat for ₹100, flour mill converts it to flour worth ₹150 (value added = ₹50), and bakery turns it into bread worth ₹220 (value added = ₹70), total GVA is 100+50+70 = ₹220.',
    indianExample: 'India officially shifted its headline growth metric in 2015 from GDP at Factor Cost to GDP at Market Prices, bringing methodology in line with SNA 2008 standards.',
    prelimsFacts: [
      'Headline growth reported in media is GDP at constant market prices (2011-12 base).',
      'If indirect taxes rise sharply or subsidies are slashed, GDP growth will appear higher than GVA growth.',
      'GVA sector classification: Agriculture, Industry, and Services.'
    ],
    commonConfusion: 'Students often confuse GVA at Basic Prices with GDP at Factor Cost. Factor Cost excludes production taxes and subsidies, whereas Basic Price includes production taxes/subsidies but excludes product taxes/subsidies.',
    mainsRelevance: 'Essential for discussing sectoral health (Agri vs Manufacturing vs Services) and assessing whether tax buoyancy is inflating headline GDP figures.',
    currentRelevance: 'Economic Survey uses GVA to examine agricultural resilience and post-pandemic services sector expansion.',
    relatedConcepts: ['National Income', 'GDP Deflator', 'Nominal vs Real GDP', 'Factor Cost'],
    pyqReference: 'UPSC CSE Prelims 2015 & Mains 2017 GS-3',
    source: 'MoSPI National Accounts Statistics & Economic Survey'
  },
  {
    id: 'inflation-targeting-mpc',
    title: 'Flexible Inflation Targeting & Monetary Policy Committee',
    category: 'Monetary Policy',
    simpleExplanation: 'The RBI adjusts interest rates (Repo rate) to keep retail inflation at 4% with an acceptable band of 2% to 6%. If it fails for 3 consecutive quarters, it must report reasons to Parliament.',
    technicalDefinition: 'Statutory framework under Section 45ZB of RBI Act, 1934 (amended in 2016). MPC is a 6-member committee (3 from RBI, 3 appointed by Central Govt) chaired by RBI Governor with casting vote in case of tie.',
    formula: 'Target = 4% CPI-C with tolerance band [2%, 6%]',
    realLifeExample: 'When tomato and onion prices surge, raising overall CPI, RBI may raise repo rate to make loans costlier, cooling down aggregate demand and preventing generalized inflation expectations.',
    indianExample: 'Urjit Patel Committee recommended flexible inflation targeting (FIT) in 2014, shifting RBI anchor from WPI to CPI-Combined.',
    prelimsFacts: [
      'MPC has 6 members; each member has 1 vote; Governor has a casting vote.',
      'Inflation failure definition: Average inflation remains outside 2%-6% band for 3 consecutive quarters.',
      'Section 7 of RBI Act allows Central Govt to give directions to RBI Governor in public interest (not MPC directly).'
    ],
    commonConfusion: 'Students think RBI targets WPI. Since 2016, RBI explicitly targets CPI-Combined because retail prices directly impact citizen consumption.',
    mainsRelevance: 'Discussing dilemma between Growth vs Price Stability, supply-side food shocks vs demand-side monetary tightening, and monetary policy transmission bottlenecks.',
    currentRelevance: 'Recent food price spikes (vegetables & pulses) created divergent trends between headline CPI and core CPI (non-food, non-fuel).',
    relatedConcepts: ['Repo Rate', 'Reverse Repo / SDF', 'Liquidity Adjustment Facility (LAF)', 'Headline vs Core Inflation'],
    pyqReference: 'UPSC Prelims 2017, 2021; Mains 2020 GS-3',
    source: 'RBI Act 1934 & RBI Bulletins'
  },
  {
    id: 'fiscal-deficit-frbm',
    title: 'Fiscal Deficit & FRBM Architecture',
    category: 'Fiscal Policy',
    simpleExplanation: 'Fiscal deficit is the total money the government needs to borrow in a year to fund all its expenses over and above what it earns from taxes and non-debt revenues.',
    technicalDefinition: 'Fiscal Deficit = Total Budget Expenditure - (Revenue Receipts + Non-Debt Capital Receipts such as loan recoveries and disinvestment proceeds). Governed by FRBM Act, 2003.',
    formula: 'Fiscal Deficit = Total Expenditure - (Revenue Receipts + Recoveries of Loans + Other Non-Debt Receipts)',
    realLifeExample: 'If a family spends ₹1,00,000 on monthly lifestyle, medical, and education, but earns ₹70,000 in salary, the remaining ₹30,000 must be funded by bank loan or credit card — this is their deficit.',
    indianExample: 'During COVID-19 (FY21), India\'s Central Fiscal Deficit spiked to 9.2% of GDP due to relief outlays and revenue contraction, before being consolidated back to ~4.9% in FY25.',
    prelimsFacts: [
      'Primary Deficit = Fiscal Deficit - Net Interest Payments.',
      'Revenue Deficit = Revenue Expenditure - Revenue Receipts.',
      'Effective Revenue Deficit excludes grants for creation of capital assets given to states.',
      'N.K. Singh Committee (2017) recommended combined debt-to-GDP target of 60% (40% Centre, 20% States).'
    ],
    commonConfusion: 'Fiscal deficit is NOT total accumulated public debt; it is the single-year flow of fresh debt. Public debt is the accumulated stock of past fiscal deficits.',
    mainsRelevance: 'Quality of expenditure (Capex vs Revenue expenditure), debt sustainability, crowd-out vs crowd-in of private investment, fiscal federalism.',
    currentRelevance: 'Budget 2024-25 and 2025-26 reiterated adherence to bringing fiscal deficit below 4.5% of GDP by FY26 while keeping capex at ₹11+ lakh crore.',
    relatedConcepts: ['Primary Deficit', 'Debt-to-GDP Ratio', 'Crowding-Out Effect', 'N.K. Singh Committee'],
    pyqReference: 'UPSC Prelims 2016, 2018, 2020; Mains 2018, 2022 GS-3',
    source: 'Union Budget Documents, FRBM Act 2003 & N.K. Singh Review Report'
  },
  {
    id: 'balance-of-payments-bop',
    title: 'Balance of Payments (BoP): Current vs Capital Account',
    category: 'External Sector',
    simpleExplanation: 'BoP is the ledger of all economic transactions between residents of India and the rest of the world. It shows whether we are earning more foreign currency than we are paying out.',
    technicalDefinition: 'Statistical statement systematically summarizing transactions of an economy with the rest of the world. Divided into Current Account (goods, services, income, transfers) and Capital Account (FDI, FPI, External Commercial Borrowings, banking capital).',
    formula: 'BoP = Current Account Balance + Capital Account Balance + Errors & Omissions = Change in Official Reserve Assets',
    realLifeExample: 'When India buys crude oil from Saudi Arabia, foreign exchange flows out (Current Account: Trade Deficit). When Google invests $10 billion in Indian tech infrastructure, foreign exchange flows in (Capital Account: FDI).',
    indianExample: 'India historically runs a Merchandise Trade Deficit (driven by crude oil, gold, electronics) which is partially offset by Services Surplus (software exports) and Remittances ($125B+ in 2024-25).',
    prelimsFacts: [
      'Invisibles include: Services (IT, tourism), Transfers (remittances, gifts), and Income (interest, dividends).',
      'Remittances are unrequited transfers recorded in the Current Account, NOT capital account.',
      'India has full convertibility on Current Account (since 1994, Art VIII of IMF), but partial convertibility on Capital Account (Tarapore Committee recommendations).'
    ],
    commonConfusion: 'Students often classify FDI or foreign loans in the Current Account. Any transaction that alters foreign assets or liabilities belongs strictly to the Capital Account.',
    mainsRelevance: 'External vulnerability analysis, exchange rate management (Rupee depreciation drivers), Rupee Internationalisation roadmap.',
    currentRelevance: 'Bilateral local currency settlement mechanisms (INR-Dirham, Vostro accounts with Russia/Sri Lanka) to insulate trade from dollar shocks.',
    relatedConcepts: ['Foreign Direct Investment (FDI)', 'Foreign Portfolio Investment (FPI)', 'Special Drawing Rights (SDR)', 'Tarapore Committee'],
    pyqReference: 'UPSC Prelims 2013, 2014, 2019, 2022; Mains 2015 GS-3',
    source: 'RBI Balance of Payments Statistics & IMF BPM6 Manual'
  },
  {
    id: 'structural-transformation',
    title: 'Structural Transformation & Demographic Dividend',
    category: 'Investment & Growth',
    simpleExplanation: 'In normal economic development, workers move from low-productivity agriculture to high-productivity manufacturing, and then to services. India unique pattern skipped manufacturing to jump straight from agriculture to services.',
    technicalDefinition: 'The reallocation of economic activity across three broad sectors (agriculture, manufacturing, services) accompanied by shifts in labor force participation and capital deepening.',
    formula: 'Demographic Dividend Window: Working Age (15-64) > Dependent Population (<15 & 65+)',
    realLifeExample: 'China moved 300 million peasants into factory assembly lines in Guangdong between 1985-2010. In contrast, an Indian rural worker often transitions directly into informal urban gig delivery or construction.',
    indianExample: 'Agriculture employs ~45% of India\'s workforce but generates only ~18% of GVA, reflecting massive disguised unemployment. Manufacturing share in GDP has remained stagnant at 14-17% for decades.',
    prelimsFacts: [
      'Median age of India is ~28.5 years, making it one of the youngest nations globally till ~2045.',
      'PLFS shows Female Labour Force Participation Rate (FLFPR) has risen to ~37% (primarily in rural self-employment).',
      'Production Linked Incentive (PLI) scheme across 14 key sectors is designed to catalyze domestic manufacturing value-addition.'
    ],
    commonConfusion: 'Demographic transition automatically yields a dividend. In reality, a demographic dividend becomes a demographic disaster if youth lack quality education, health, and formal jobs.',
    mainsRelevance: 'Mains core theme: "Jobless growth", "Premature de-industrialization", Skill India, MSME bottleneck, and labour codes implementation.',
    currentRelevance: 'Economic Survey 2023-24 emphasized the urgency of creating 7.85 million non-farm jobs annually until 2030 to harness the closing demographic window.',
    relatedConcepts: ['Disguised Unemployment', 'Make in India', 'PLI Scheme', 'Labour Codes'],
    pyqReference: 'UPSC Mains 2013, 2017, 2019, 2023 GS-3',
    source: 'Economic Survey, PLFS & NITI Aayog Reports'
  }
];

export const budgetAnnouncements: BudgetAnnouncement[] = [
  {
    id: 'budget-capex',
    sector: 'Capex',
    title: 'Record ₹11.11 Lakh Crore Capital Expenditure Outlay',
    whatChanged: 'Central capital outlay enhanced to 3.4% of GDP, sustaining a 3x increase over 2019-20 levels to pump-prime private capex.',
    whyImportant: 'Public capex has the highest fiscal multiplier (estimated ~2.95x). It creates durable physical assets and lowers logistics costs.',
    whoBenefits: 'Infrastructure contractors, steel/cement industries, engineering workforce, logistics providers, and future manufacturing hubs.',
    mechanism: 'Direct budgetary support to Railways, MoRTH, PM Gati Shakti, and 50-year interest-free loans to State Governments (₹1.3 lakh crore).',
    fiscalImplication: 'Maintains consolidation trajectory by reallocating funds away from non-merit subsidies toward productive asset building.',
    criticism: 'Private sector corporate capex has been sluggish in kicking in meaningfully outside renewable energy and automotive.',
    prelimsFact: 'Capital outlay grants to states for asset creation are classified under Revenue Expenditure of the Centre, not Capital Expenditure.',
    mainsRelevance: 'Crucial quote for GS-3 Infrastructure and Investment models (crowding-in hypothesis).',
    source: 'Union Budget Documents, Ministry of Finance'
  },
  {
    id: 'budget-agri-dpi',
    sector: 'Agriculture',
    title: 'Digital Public Infrastructure (DPI) for Agriculture & Agri-Stack',
    whatChanged: 'Rollout of Digital Public Infrastructure for agriculture in collaboration with states, enabling digital crop surveys across 400 districts.',
    whyImportant: 'Eliminates asymmetry in land records, speeds up PM-KISAN, crop insurance claims (PMFBY), and enables algorithmic credit delivery without physical collateral.',
    whoBenefits: 'Small and marginal farmers, agri-tech startups, rural banking institutions, and state revenue departments.',
    mechanism: 'Three core registries: Farmers Registry, Village Land Maps Registry, and Crop Sown Registry tied via Agri-Stack APIs.',
    fiscalImplication: 'Reduces leakages in input subsidies (fertilizer/power) and saves thousands of crores in manual survey overheads.',
    criticism: 'Digital divide, inaccurate land titles in rural registries, and exclusion of tenant/landless cultivators who do not hold formal title deeds.',
    prelimsFact: 'Kisan Credit Card (KCC) loans are being integrated with Jan Samarth / Agri-DPI for instant friction-free disbursement.',
    mainsRelevance: 'Directly addresses GS-3 topic: "E-technology in the aid of farmers" and Agricultural Credit.',
    source: 'Ministry of Agriculture & Farmers Welfare, PIB'
  },
  {
    id: 'budget-green-energy',
    sector: 'Green Economy',
    title: 'PM-Surya Ghar Muft Bijli Yojana & Critical Mineral Mission',
    whatChanged: 'Rooftop solarization for 1 crore households with up to 300 units of free power/month, plus launching Critical Minerals Mission.',
    whyImportant: 'Reduces coal dependency, slashes Discom distribution losses from agricultural subsidies, and secures domestic supply of lithium, nickel, and cobalt.',
    whoBenefits: 'Middle-class & low-income households, domestic solar panel manufacturers, electric vehicle ecosystem.',
    mechanism: 'Direct subsidy up to 60% of solar system cost disbursed into bank accounts; Discoms sell surplus power into the grid.',
    fiscalImplication: '₹75,000+ crore scheme funded through budgetary allocation and multilateral green financing.',
    criticism: 'Transformer overload issues in urban colonies and delayed state net-metering regulatory approvals.',
    prelimsFact: 'Customs duties on 25 critical minerals (including Lithium, Copper, Cobalt, Rare Earth Elements) were fully exempted in the Budget.',
    mainsRelevance: 'Direct link to GS-3: Energy Infrastructure, Climate Change commitments (Panchamrit 500 GW non-fossil target), and Supply Chain Resilience.',
    source: 'Ministry of New & Renewable Energy & Ministry of Mines'
  }
];

export const surveyHighlights: SurveyChapter[] = [
  {
    id: 'survey-ch1-macro',
    chapterNumber: 1,
    title: 'State of the Economy: Steady as She Goes',
    keyFindings: [
      'Indian economy post-COVID demonstrated remarkable structural resilience, clocking 7%+ growth for three consecutive years.',
      'Gross Fixed Capital Formation (GFCF) expanded, driven by public capex and healthy bank/corporate balance sheets (Twin Balance Sheet Advantage).',
      'Retail inflation eased into the RBI tolerance band, though food price volatility remains an administrative challenge.'
    ],
    majorData: [
      'Real GDP projected growth: 6.5% - 7.0%',
      'Gross NPA ratio of Commercial Banks dropped to multi-year low of ~2.8%',
      'Bank credit growth maintained robust pace above 15%'
    ],
    policyImplications: 'Transitioning focus from emergency fiscal stimulus to structural reforms in land, labor, deregulation, and clean energy transition.',
    prelimsFacts: [
      'Twin Balance Sheet Syndrome (stressed banks + over-leveraged corporates) has transformed into Twin Balance Sheet Advantage.',
      'India is the 5th largest economy in nominal terms and 3rd largest in Purchasing Power Parity (PPP).'
    ],
    mainsArguments: [
      'Highlight the role of public investment as an engine of revival during global headwinds.',
      'Argue that deregulation for MSMEs and reducing compliance burdens is the next frontier of growth.'
    ],
    source: 'Economic Survey 2023-24 / 2024-25, Ministry of Finance'
  },
  {
    id: 'survey-ch2-employment',
    chapterNumber: 2,
    title: 'Employment & Skill Development: Towards Productive Quality Jobs',
    keyFindings: [
      'Indian labor market indicators have shown sustained improvement with rising Labour Force Participation Rate (LFPR) and declining Unemployment Rate.',
      'Notable rise in rural Female LFPR, predominantly driven by agriculture and self-employment (Self Help Groups).',
      'The economy must generate ~7.85 million non-farm jobs annually to absorb working-age entrants until 2030.'
    ],
    majorData: [
      'LFPR (15+) rose from 49.8% (2017-18) to ~58% in recent PLFS rounds.',
      'Youth unemployment rate has dropped from peak of 17.8% to under 10%.'
    ],
    policyImplications: 'Agro-processing, light manufacturing, tourism, and care economy must be prioritized to generate formal labor demand.',
    prelimsFacts: [
      'PLFS uses two approaches: Usual Principal and Subsidiary Status (UPSS) and Current Weekly Status (CWS).',
      'UPSS captures long-term employment status, while CWS captures short-term seasonal fluctuations.'
    ],
    mainsArguments: [
      'Critique the nature of female employment: whether it reflects distress-driven work or genuine economic empowerment.',
      'Propose apprenticeship-embedded degree programs and AI reskilling missions to cure skill mismatch.'
    ],
    source: 'Economic Survey & MoSPI PLFS Annual Report'
  }
];

export const planningTimeline = [
  {
    year: '1950',
    title: 'Establishment of Planning Commission',
    type: 'Institutional',
    details: 'Set up via an executive resolution (non-constitutional, non-statutory body) based on Nehruvian socialist vision of centralised resource allocation.',
    significance: 'Instituted 5-Year Plans (FYPs) to prioritize heavy industry, agriculture, and poverty alleviation.'
  },
  {
    year: '1951-1956',
    title: 'First Five-Year Plan (Harrod-Domar Model)',
    type: 'Plan',
    details: 'Focused on rehabilitation of refugees, agriculture, irrigation, and power (Bhakra Nangal, Damodar Valley dams).',
    significance: 'Achieved 3.6% growth against 2.1% target due to good monsoons.'
  },
  {
    year: '1956-1961',
    title: 'Second Five-Year Plan (Mahalanobis Heavy Industry Model)',
    type: 'Plan',
    details: 'Shifted focus to basic and heavy capital goods industries (Bhilai, Rourkela, Durgapur steel plants, Atomic Energy Commission).',
    significance: 'Lauded for industrial base, but led to foreign exchange crises and neglect of agriculture.'
  },
  {
    year: '1966-1969',
    title: 'Plan Holidays (Annual Plans)',
    type: 'Crisis',
    details: 'Wars (1962 Sino-India, 1965 Indo-Pak) and consecutive droughts led to devaluation of rupee and suspension of 5-year cycle.',
    significance: 'Green Revolution was launched during this period with High Yielding Varieties (HYV) seeds and MSP introduction.'
  },
  {
    year: '1991-1992',
    title: 'LPG Reforms & Eighth Plan (Indicative Planning)',
    type: 'Reform',
    details: 'Balance of Payments crisis forced economic liberalisation, privatisation, and globalisation under P.V. Narasimha Rao & Dr. Manmohan Singh.',
    significance: 'Shifted Indian planning from rigid Soviet-style command allocation to "Indicative Planning" where state acts as facilitator.'
  },
  {
    year: '2012-2017',
    title: 'Twelfth Plan: Faster, Sustainable & More Inclusive Growth',
    type: 'Plan',
    details: 'Last Five Year Plan of India. Targeted 8% growth, infrastructure investments, poverty reduction, and regional equity.',
    significance: 'Mid-way in 2014, the Government decided to scrap the Planning Commission.'
  },
  {
    year: '2015-Present',
    title: 'NITI Aayog (National Institution for Transforming India)',
    type: 'Modern Institution',
    details: 'Established on January 1, 2015 via Cabinet Resolution. Replaced top-down Planning Commission with a bottom-up Think Tank.',
    significance: 'Pillars: Cooperative Federalism, Competitive Federalism (SDG Index, Export Preparedness Index), Aspirational Districts Programme, 15-Year Vision, 7-Year Strategy, 3-Year Action Agenda.'
  }
];

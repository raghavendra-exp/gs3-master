// ============================================================================
// GS-III COMPREHENSIVE DATA: PLANNING, MOBILISATION, GROWTH & INFRASTRUCTURE
// ============================================================================

export interface SyllabusSection {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  description: string;
  coreConcepts: {
    title: string;
    description: string;
    points: string[];
    prelimsHook?: string;
    mainsHook?: string;
    officialSource?: string;
  }[];
  comparativeTable?: {
    headers: string[];
    rows: string[][];
  };
  keyStatistics?: {
    label: string;
    value: string;
    context: string;
  }[];
  schemesAndPolicies?: {
    name: string;
    objective: string;
    salientFeatures: string[];
  }[];
  diagramPrompt?: string;
}

export const planningAndGrowthData: SyllabusSection[] = [
  {
    id: 'planning-evolution',
    title: 'Planning in Economic Development',
    subTitle: 'Imperative vs Indicative vs Structural Planning, Planning Commission vs NITI Aayog',
    category: 'Planning',
    description: 'Planning is the conscious, directed utilization of a country’s collective resources to achieve predetermined socio-economic objectives within a defined timeframe.',
    coreConcepts: [
      {
        title: 'Types of Planning Paradigms',
        description: 'How economies organize the allocation of capital and resource mobilization.',
        points: [
          'Imperative Planning (Authoritarian/Command): Central state dictates production quotas, prices, and investments; private ownership eliminated or strictly marginal (Soviet Gosplan model, early China).',
          'Indicative Planning: State sets broad macro targets and creates fiscal/monetary incentives; market forces allocate resources with public sector guiding (French Monnet model; India 8th Plan 1992-1997 onwards).',
          'Structural Planning: Focuses on overhauling socio-economic structures (land relations, ownership of means of production, industrial baseline); followed in early post-independent India.',
          'Rolling Plan: Concept pioneered by Gunnar Myrdal; introduced in India by Janata Party government (1978-80) with three distinct plans: current year budget, 3-5 year mid-term plan, and 15-20 year perspective plan.'
        ],
        prelimsHook: 'India transitioned from Structural/Semi-Imperative planning to Indicative Planning during the 8th Five Year Plan (1992–1997) following 1991 LPG reforms.',
        mainsHook: 'Assess whether NITI Aayog’s 15-Year Vision, 7-Year Strategy, and 3-Year Action Agenda effectively substitutes Five-Year Plans in addressing inter-state regional disparities.',
        officialSource: 'Planning Commission Archives / NITI Aayog Charter'
      },
      {
        title: 'Objectives, Achievements & Failures of Indian Planning',
        description: 'Critical balance sheet of 12 Five-Year Plans spanning 1951 to 2017.',
        points: [
          'Core Objectives: Economic Growth, Self-Reliance (Atmanirbharta), Social Justice & Equity (Samata), Modernization, and Full Employment.',
          'Key Achievements: Built basic heavy industrial base (Bhilai, Rourkela, Durgapur); enabled Green Revolution (food sovereignty); developed extensive scientific & higher education base (IITs, IIMs, ISRO, BARC); raised average life expectancy from 32 years (1951) to 70+ years.',
          'Major Shortcomings: "Hindu Rate of Growth" averaging ~3.5% between 1950-1980 due to License-Permit-Quota Raj; persistent poverty and regional disparities; failure of land reforms in most states; capital-output ratio (ICOR) remained inefficiently high.',
          'Neglect of Primary Social Infrastructure: Excessive focus on heavy capital goods at the expense of basic health and primary education (unlike East Asian tiger economies).'
        ],
        prelimsHook: 'The "Hindu Rate of Growth" phrase was coined by economist Raj Krishna to describe India’s 3.5% annual GDP growth rate between 1950 and 1980.',
        mainsHook: 'Critically analyze why the Mahalanobis strategy of heavy industrialization failed to generate adequate employment for India’s surplus rural labor force.'
      },
      {
        title: 'Planning Commission vs. NITI Aayog: Structural Contrast',
        description: 'Transition from centralized resource allocation to cooperative federalism and think-tank advisory role.',
        points: [
          'Origin: Planning Commission was set up via Executive Resolution in March 1950; NITI Aayog replaced it via Executive Resolution on January 1, 2015.',
          'Power to Allocate Funds: Planning Commission possessed statutory-like power to disburse central plan funds and discretionary grants to states (often politicized); NITI Aayog has zero financial allocation power (vested with Finance Ministry).',
          'Top-Down vs Bottom-Up: Planning Commission enforced a "one-size-fits-all" top-down paradigm; NITI Aayog operates on "Cooperative and Competitive Federalism" with all Chief Ministers in the Governing Council.',
          'Indices Driven: NITI Aayog drives competitive governance through data indices (SDG India Index, State Energy & Climate Index, Export Preparedness Index, Multidimensional Poverty Index).'
        ]
      }
    ],
    comparativeTable: {
      headers: ['Dimension', 'Planning Commission (1950–2014)', 'NITI Aayog (2015–Present)'],
      rows: [
        ['Approach', 'Top-Down ("One size fits all")', 'Bottom-Up ("Cooperative Federalism")'],
        ['Financial Powers', 'Allocated plan funds and discretionary grants to states', 'Advisory Think-Tank; zero financial allocation powers'],
        ['State Representation', 'National Development Council (NDC) met irregularly', 'Governing Council with all CMs and Lt. Governors actively meets'],
        ['Planning Horizon', 'Rigid Five-Year Plans (1st to 12th Plan)', '15-Year Vision, 7-Year Strategy, 3-Year Action Agenda'],
        ['Role of Private Sector', 'Marginalized; focus on commanding heights of public sector', 'Engaged actively as strategic development partners']
      ]
    }
  },
  {
    id: 'resource-mobilisation',
    title: 'Mobilisation of Resources',
    subTitle: 'Financial, Human, Natural Resources; Tax vs Non-Tax; Public Debt & Banking',
    category: 'Resource Mobilisation',
    description: 'Resource mobilization involves generating, allocating, and efficiently deploying domestic and external financial, human, and physical assets to sustain inclusive economic growth.',
    coreConcepts: [
      {
        title: 'Components & Channels of Resource Mobilisation',
        description: 'How the Indian state and economy fund capital formation and development expenditure.',
        points: [
          'Public Financial Resources: Tax revenues (Direct: Corporation tax, Income tax; Indirect: GST, Customs, Excise); Non-tax revenues (Dividends from CPSEs & RBI surplus transfer, user charges, spectrum auctions, disinvestment).',
          'Private Savings & Financial Intermediation: Household financial savings (~5.3% of GDP net), Banking sector credit, Non-Banking Financial Companies (NBFCs), Corporate retained earnings.',
          'Capital Markets: Domestic equity markets (NSE/BSE market cap crossed $5 Trillion), Corporate Bond Market (remains shallow, <25% of GDP vs 100%+ in US), Municipal Bonds.',
          'External Sources: Foreign Direct Investment (FDI - non-debt creating, long term), Foreign Portfolio Investment (FPI - volatile "hot money"), External Commercial Borrowings (ECBs), Official Development Assistance (ODA - JICA, World Bank, ADB).'
        ],
        prelimsHook: 'Net household financial savings dipped to a 5-decade low of ~5.3% of GDP in FY23 as households shifted toward physical assets (real estate) and leveraged retail credit.',
        mainsHook: '"A shallow corporate bond market severely limits long-gestation infrastructure financing in India." Elucidate the structural impediments and propose remedies.',
        officialSource: 'RBI Financial Stability Report / MoF Economic Survey'
      },
      {
        title: 'Public Borrowing & Public Debt Dynamics',
        description: 'Managing sovereign obligations, internal debt versus external debt vulnerabilities.',
        points: [
          'Composition of Indian Sovereign Debt: ~95% of General Government debt is denominated in domestic currency (INR) and held internally by domestic institutions (commercial banks, RBI, insurance funds).',
          'Insulation from External Shocks: External sovereign debt is <5% of total debt, largely concessional multilateral loans (World Bank, ADB, JICA), protecting India from classic Asian-crisis style currency runs.',
          'General Government Debt-to-GDP Ratio: Rose to ~88% post-COVID-19 stimulus; currently consolidating around 82–84% of GDP (target recommended by NK Singh Committee: 60% total - 40% Centre + 20% States).',
          'Interest Burden: Over 24-25% of Centre’s revenue receipts are pre-empted by interest payments, restricting fiscal space for capex, health, and primary education.'
        ]
      },
      {
        title: 'Critical Bottlenecks in Resource Mobilisation',
        description: 'Structural constraints dampening India’s capital formation.',
        points: [
          'Low Tax-to-GDP Ratio: General government tax-to-GDP ratio stagnates at ~17–18% (Centre ~11.5%, States ~6.5%), far below OECD average (~34%) and emerging market peers (~21%).',
          'Direct Tax Base Narrowness: Only ~2-3% of the population pays effective income tax due to massive informal economy, agricultural income tax exemption (Article 274/List II), and widespread under-reporting.',
          'Disinvestment Shortfalls: Persistent missing of annual disinvestment targets due to market volatility and valuation litigation.',
          'Banking Strains: While Gross NPAs declined to a 12-year low of ~2.8% (2024), bank balance sheets face rising credit-deposit (CD) ratio imbalances.'
        ]
      }
    ],
    keyStatistics: [
      { label: 'Gross Tax-to-GDP Ratio', value: '11.7%', context: 'Central government gross tax revenue ratio (FY24 RE)' },
      { label: 'General Govt Debt-to-GDP', value: '82.5%', context: 'Combined Centre + States sovereign debt burden' },
      { label: 'Gross NPA Ratio of SCBs', value: '2.8%', context: 'Multi-year low reflecting resolution via IBC 2016' },
      { label: 'India Forex Reserves', value: '$692+ Billion', context: 'Sufficient to cover 11+ months of projected imports' }
    ]
  },
  {
    id: 'growth-development-employment',
    title: 'Growth, Development & Employment',
    subTitle: 'Jobless Growth, Informalization, PLFS Metrics, LFPR and Workforce Restructuring',
    category: 'Growth & Employment',
    description: 'Examining the divergence between headline economic growth and human development, productive employment generation, and structural economic transformation.',
    coreConcepts: [
      {
        title: 'Economic Growth vs. Economic Development',
        description: 'Quantitative output expansion versus qualitative structural and welfare transformation.',
        points: [
          'Growth (Quantitative): Increase in real output over time, measured by Real GDP, GVA, or Per Capita National Income; uni-dimensional and value-neutral.',
          'Development (Qualitative): Multidimensional process encompassing growth PLUS progressive changes in socio-economic structures: poverty reduction, declining inequality, gender parity, universal healthcare, and civil liberties.',
          'Amartya Sen’s Capability Approach: Development is the expansion of human freedoms and capabilities to lead lives people have reason to value (moving from commodities to functionings).',
          'Measurement Frameworks: Human Development Index (HDI - Life Expectancy, Mean/Expected Years of Schooling, GNI per capita PPP); Multidimensional Poverty Index (MPI - 10 indicators across Health, Education, Standard of Living); Genuine Progress Indicator (GPI).'
        ],
        prelimsHook: 'India ranks 134th on the UNDP Human Development Index (HDI 2023/24) with an HDI value of 0.644, placing it in the Medium Human Development category.',
        mainsHook: '"High GDP growth that fails to translate into human capabilities is fundamentally unsustainable." Discuss in the context of India’s healthcare and learning outcomes.',
        officialSource: 'UNDP HDR / MoSPI National Accounts Statistics'
      },
      {
        title: 'The Challenge of "Jobless Growth" in India',
        description: 'Why 7%+ GDP growth has generated inadequate formal, high-productivity jobs.',
        points: [
          'Employment Elasticity of Growth: Has collapsed from ~0.44 in the 1970s-80s to near 0.10 or lower across manufacturing in recent decades.',
          'Premature Deindustrialization: India skipped the conventional Kuznets-Lewis structural transition (Agriculture ➔ Manufacturing ➔ Services) by vaulting directly from Agriculture into high-skill, capital-intensive IT/Services.',
          'The 45-18-54 Anomaly: Agriculture employs ~45% of India’s workforce but contributes only ~18% of GVA; Services generate ~54% of GVA but employ only ~30% of workers.',
          'Capital-Intensive Manufacturing: Schemes like PLI incentivize capital-deepening and automation rather than labor-absorbing light manufacturing (textiles, leather, toys).'
        ]
      },
      {
        title: 'Periodic Labour Force Survey (PLFS) Key Terminology',
        description: 'Standard statistical metrics used by MoSPI to measure employment.',
        points: [
          'Labour Force Participation Rate (LFPR): Percentage of working-age population (15+) that is either employed or actively seeking work. India’s overall LFPR rose to ~57.9% in 2022-23.',
          'Female LFPR (FLFPR): Historically low in India (~23-28%); rose to ~37% in recent PLFS primarily driven by unpaid rural family labor and subsistence self-employment (distress-driven).',
          'Worker Population Ratio (WPR): Percentage of employed persons in the total population.',
          'Unemployment Rate (UR): Percentage of persons unemployed among the active labor force (declined to 3.2% in PLFS 2023 under Usual Status, though daily status reveals higher underemployment).',
          'Usual Principal & Subsidiary Status (UPSS) vs Current Weekly Status (CWS): UPSS measures activity over the reference year (captures chronic unemployment); CWS measures activity during the preceding 7 days (captures short-term fluctuations).'
        ],
        prelimsHook: 'In PLFS methodology, a person who worked for even 1 hour on any day during the reference week is categorized as employed under Current Weekly Status (CWS).',
        mainsHook: 'Distinguish between open unemployment, disguised unemployment, and underemployment. Why is disguised unemployment the primary drag on rural wage growth?'
      }
    ],
    schemesAndPolicies: [
      {
        name: 'Pradhan Mantri Rojgar Protsahan Yojana (PMRPY)',
        objective: 'Incentivize formal job creation by reimbursing employers EPF contribution.',
        salientFeatures: ['Govt pays 12% of employer contribution to EPFO for 3 years', 'Boosts formalization of low-wage workers']
      },
      {
        name: 'PM SVANidhi Scheme',
        objective: 'Micro-credit working capital facility for urban street vendors post-COVID-19.',
        salientFeatures: ['Collateral-free loan of ₹10k, ₹20k, ₹50k with 7% interest subsidy', 'Digital transaction cashbacks up to ₹1,200/year']
      },
      {
        name: 'MGNREGA 2005',
        objective: 'Statutory demand-driven wage employment safety net in rural areas.',
        salientFeatures: ['Guarantees 100 days of unskilled wage labor per rural household', 'Unemployment allowance if work not provided within 15 days']
      }
    ]
  },
  {
    id: 'inclusive-growth-budgeting',
    title: 'Inclusive Growth & Government Budgeting',
    subTitle: '12th FYP Elements, Deficit Indicators, 2017 Budget Reforms, FRBM Act',
    category: 'Budgeting & Inclusive Growth',
    description: 'Comprehensive analysis of equitable wealth distribution, social inclusion metrics, budgetary architecture, and sovereign fiscal consolidation.',
    coreConcepts: [
      {
        title: 'Inclusive Growth: Dimensions & Measurement',
        description: 'Growth that creates opportunities for all segments of population and distributes dividends equitably.',
        points: [
          'Definition (12th FYP): "Faster, Sustainable, and More Inclusive Growth" ensuring poverty reduction, regional balance, gender empowerment, and environmental sustainability.',
          'Core Elements: Pro-Poor Growth, Human Capital Formation (Education & Healthcare), Social Safety Nets, Productive Employment, Financial Inclusion (JAM Trinity), and Infrastructure Access.',
          'Inequality Indices: Gini Coefficient (0 = perfect equality, 1 = absolute inequality); Lorenz Curve (graphical cumulative income distribution); Palma Ratio (income share of top 10% divided by bottom 40%).',
          'Major Stumbling Blocks: Rural-urban developmental divide, unequal asset ownership (top 1% owning >40% of national wealth according to World Inequality Lab), informal labor traps.'
        ]
      },
      {
        title: 'Government Budgeting Architecture & 2017 Reforms',
        description: 'Receipts vs Expenditure structure and landmark changes in Indian fiscal procedures.',
        points: [
          'Revenue Account: Deals with current transactions that DO NOT create assets or reduce liabilities. Revenue Receipts (Tax & Non-tax); Revenue Expenditure (Interest payments, defense salaries, subsidies, pensions).',
          'Capital Account: Deals with transactions that CREATE assets or REDUCE liabilities. Capital Receipts (Borrowings, recovery of loans, disinvestment); Capital Expenditure (Building roads, ports, equity in PSUs, defense equipment procurement).',
          'Budget 2017 Landmark Reforms: (1) Merger of 92-year-old separate Railway Budget into General Budget (Bibek Debroy Committee); (2) Advancement of Budget presentation date from last day of Feb to February 1st (ensuring funds flow by April 1); (3) Scrapping of artificial Plan vs Non-Plan expenditure classification, replaced by Revenue vs Capital classification.'
        ],
        prelimsHook: 'A loan given by the Central Government to a State Government is a Capital Expenditure, whereas the interest received on that loan is a Revenue Receipt.',
        mainsHook: '"Scrapping the Plan vs Non-Plan distinction in 2017 brought true focus to the quality of expenditure." Elucidate with respect to Capital vs Revenue outlays.',
        officialSource: 'Union Budget / Art. 112 Constitution of India'
      },
      {
        title: 'Measures of Government Deficits & FRBM Act',
        description: 'Revenue, Fiscal, and Primary Deficits, and the legal framework for fiscal discipline.',
        points: [
          'Revenue Deficit = Revenue Expenditure - Revenue Receipts. Indicates government is dissaving and borrowing to fund day-to-day administrative consumption.',
          'Fiscal Deficit = Total Expenditure - Total Receipts excluding Borrowings. Represents the total sovereign borrowing requirement of the government in a fiscal year.',
          'Primary Deficit = Fiscal Deficit - Net Interest Payments. Measures the current fiscal stance independent of past accumulated sovereign debt obligations.',
          'FRBM Act 2003 & NK Singh Committee (2017): Recommended a debt-to-GDP target of 60% (40% Centre, 20% States) and Central fiscal deficit glide path to 3% of GDP. Introduced "Escape Clause" permitting 0.5% deficit breach for national security, war, agricultural collapse, or structural economic disruptions.'
        ],
        prelimsHook: 'If the Primary Deficit is zero, it implies that the government’s entire fiscal deficit (borrowing) is solely dedicated to paying interest on past debt.',
        mainsHook: 'Discuss the relevance of the FRBM Act glide path in post-pandemic fiscal policy. Should fiscal deficit targets yield to counter-cyclical capital expenditure?'
      }
    ],
    comparativeTable: {
      headers: ['Deficit Metric', 'Formula', 'Economic Significance'],
      rows: [
        ['Revenue Deficit (RD)', 'Rev. Exp - Rev. Receipts', 'Shows living beyond means; borrowing to fund consumption rather than assets'],
        ['Effective Revenue Deficit (ERD)', 'RD - Grants for Creation of Capital Assets', 'Isolates central grants that actually create capital assets at state level'],
        ['Fiscal Deficit (FD)', 'Total Exp - (Total Receipts - Borrowings)', 'True measure of sovereign debt expansion and macroeconomic stability'],
        ['Primary Deficit (PD)', 'Fiscal Deficit - Interest Payments', 'Reflects real deficit caused by current year policy actions alone']
      ]
    }
  },
  {
    id: 'land-reforms-industrial-policy',
    title: 'Land Reforms, Liberalization & Industrial Policy',
    subTitle: 'Abolition of Intermediaries, Tenancy Laws, Ceilings, 1991 LPG, National Manufacturing & PLI',
    category: 'Industrial Policy & Reforms',
    description: 'The structural evolution of property rights in rural India and industrial transitions from License-Permit Raj to global manufacturing hub.',
    coreConcepts: [
      {
        title: 'Land Reforms in India: 4 Key Pillars & Outcomes',
        description: 'Post-independence legislative attempts to restructure rural power and agricultural productivity.',
        points: [
          'Pillar 1: Abolition of Intermediaries (Zamindari, Jagirdari, Ryotwari intermediaries): Resounding success; brought ~20 million cultivators into direct contact with the state and freed large areas of wasteland.',
          'Pillar 2: Tenancy Reforms: Regulation of rent (capped at 1/4th to 1/5th of produce), security of tenure, conferment of ownership rights to tenants (Operation Barga in West Bengal was most successful).',
          'Pillar 3: Land Ceilings: Imposition of upper limits on agricultural landholdings; broadly failed due to benami transfers, fictitious divorces, exemptions for plantations, and administrative collusion.',
          'Pillar 4: Consolidation of Holdings (Chakbandi): Succeeded only in Punjab, Haryana, and Western UP; elsewhere thwarted by farmers’ emotional attachment to ancestral parcels.'
        ],
        prelimsHook: 'Land Reforms is an exclusive State subject under Entry 18 of the State List (List II) in the Seventh Schedule of the Constitution of India.',
        mainsHook: '"Land reforms in India succeeded in abolishing feudal intermediaries but failed in asset redistribution." Critically examine with regional variations.',
        officialSource: 'Ministry of Rural Development / NITI Aayog'
      },
      {
        title: 'Contemporary Land Reforms: 21st Century Initiatives',
        description: 'Digital land records, leasing laws, and transparent acquisition frameworks.',
        points: [
          'Model Land Leasing Act 2016 (NITI Aayog): Legalizes agricultural tenancy; allows landowners to lease land with secure titles while granting tenant farmers institutional credit, crop insurance, and disaster relief.',
          'LARR Act 2013: Replaced the colonial Land Acquisition Act 1894; mandated consent (70% for PPP, 80% for private), mandatory Social Impact Assessment (SIA), and up to 4x market value compensation in rural areas.',
          'SVAMITVA Scheme: Uses drone survey technology to map rural inhabited (Abadi) parcels and issue legal "Property Cards" for collateralizing loans.',
          'DILRMP (Digital India Land Records Modernization Programme): Computerization of Records of Rights (RoRs), digitizing cadastral maps, and linking sub-registrar offices.'
        ]
      },
      {
        title: 'Industrial Policy Evolution: Pre-1991 vs Post-1991',
        description: 'Transition from command economy to competitive, open industrial ecosystem.',
        points: [
          'Pre-1991 Framework: Industrial Policy Resolution (IPR) 1956 ("Economic Constitution of India") divided industries into Schedule A (state monopoly), Schedule B (mixed), and Schedule C (private). Enforced strict licensing under IDRA 1951, MRTP Act 1969, and FERA 1973.',
          'The 1991 New Industrial Policy: Abolished industrial licensing for all except 18 (now reduced to only 4: defense aerospace, atomic energy, hazardous chemicals, industrial explosives); ended MRTP limit; opened sectors to automatic FDI.',
          'National Manufacturing Policy (NMP 2011) & Make in India (2014): Set target to raise manufacturing share in GDP to 25% and create 100 million jobs.',
          'Production Linked Incentive (PLI) Scheme: Outlay of ~₹1.97 Lakh Crore across 14 strategic sectors (electronics, pharma, solar PV, autos, drones) providing 4-6% cash incentives on incremental sales.'
        ]
      }
    ]
  },
  {
    id: 'infrastructure-investment-models',
    title: 'Infrastructure & Investment Models',
    subTitle: 'Energy, Ports, Roads, Airports, Railways, Sagarmala, Bharatmala, BOT, HAM, EPC & NIP',
    category: 'Infrastructure & PPP',
    description: 'Deep dive into India’s logistics modernization, PM Gati Shakti, energy transitions, and public-private partnership (PPP) contracting models.',
    coreConcepts: [
      {
        title: 'Strategic Physical Infrastructure Pillars',
        description: 'Transforming connectivity across transport, logistics, and power sectors.',
        points: [
          'Roads & Highways: Bharatmala Pariyojana; construction pace accelerated to ~30-34 km/day; FASTag enabled automated toll collection; National Highways network expanded to 146,000+ km.',
          'Railways Modernization: Dedicated Freight Corridors (Western DFC: Dadri to JNPT; Eastern DFC: Ludhiana to Dankuni) separating freight from passenger traffic; Vande Bharat semi-high speed trains; Kavach indigenous automatic train protection system; Indian Railway Management Service (IRMS) unification.',
          'Ports & Maritime: Sagarmala Programme; port modernization, port connectivity, and Coastal Economic Zones; Major Port Authorities Act 2021 granting board autonomy; mega transshipment hubs at Vizhinjam (Kerala) and Vadhavan (Maharashtra).',
          'Airports & Civil Aviation: UDAN (Ude Desh ka Aam Naagrik) regional connectivity scheme reviving unserved airstrips; Greenfield international airports (Jewar, Navi Mumbai, Mopa); Airport Authority of India PPP concessions.',
          'Energy & Power: National Green Hydrogen Mission (5 MMT/year by 2030); RDSS (Revamped Distribution Sector Scheme) reducing AT&C power distribution losses; One Sun One World One Grid (OSOWOG).'
        ],
        prelimsHook: 'The dedicated freight corridors (DFCs) operate on 25-tonne axle load tracks with double-stack container capability and an average speed of 75 km/h vs 25 km/h on conventional lines.',
        mainsHook: '"PM Gati Shakti National Master Plan addresses the systemic disease of departmental silos in infrastructure execution." Critically analyze with examples.',
        officialSource: 'Ministry of Road Transport / Ministry of Ports / DPIIT'
      },
      {
        title: 'Investment Models: Public, Private & PPP Variants',
        description: 'How long-term infrastructure assets are procured, financed, and risk-allocated.',
        points: [
          'Engineering, Procurement & Construction (EPC): 100% government-funded model where private contractor undertakes design and construction; zero revenue risk for private player (used during private capital drought).',
          'Build-Operate-Transfer (BOT) - Toll vs Annuity: Private concessionaire finances, builds, operates (collects toll or fixed annuity from govt), and transfers back after 20-30 years; transfers traffic/market risk to private party.',
          'Hybrid Annuity Model (HAM): Developed by Vijay Kelkar Committee; 40% capital cost provided by government as cash support during construction in 5 equal milestones; remaining 60% arranged by concessionaire; NHAI collects toll and pays inflation-indexed semi-annual annuities, mitigating private revenue risk.',
          'Toll-Operate-Transfer (TOT) & InvITs: Asset monetization models; operational brownfield toll roads or power transmission assets leased out to institutional investors (CPPIB, sovereign wealth funds) to raise upfront capital under National Monetisation Pipeline (NMP).'
        ]
      }
    ],
    comparativeTable: {
      headers: ['PPP Model', 'Financing Share', 'Revenue / Traffic Risk', 'Key Suitability'],
      rows: [
        ['EPC (Turnkey)', '100% Government funded', '100% Government borne', 'High-complexity or low-traffic roads where private bidding is absent'],
        ['BOT-Toll', '100% Private financed', '100% Private party borne', 'High-density golden quadrilateral routes with predictable commercial traffic'],
        ['BOT-Annuity', '100% Private financed', '100% Government borne (fixed payout)', 'Socially vital routes where direct tolling is unviable or politically resisted'],
        ['HAM (Hybrid)', '40% Govt Grant + 60% Private', 'Shared / Annuity paid by Govt', 'Default highway contracting model balancing risk between NHAI and builders'],
        ['TOT / InvITs', 'Private upfront monetization', 'Private investor borne', 'Brownfield, de-risked assets generating steady operational cash flows']
      ]
    },
    schemesAndPolicies: [
      {
        name: 'PM Gati Shakti National Master Plan',
        objective: 'GIS-based multi-modal infrastructure planning platform across 16 central ministries.',
        salientFeatures: ['Breaks inter-ministerial silos', 'Integrated planning for road, rail, optical fiber, and gas pipelines']
      },
      {
        name: 'National Infrastructure Pipeline (NIP)',
        objective: 'Pipeline of ₹111 Lakh Crore investment in social and economic infrastructure.',
        salientFeatures: ['Capital share: Centre (39%), States (39%), Private (22%)', 'Energy, Roads, Urban & Railways form >70% of outlays']
      }
    ]
  }
];

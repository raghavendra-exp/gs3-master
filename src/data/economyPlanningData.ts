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
    subTitle: 'Harrod-Domar, Mahalanobis, Rao-Manmohan Models, NITI Aayog Dual Hubs & Strategic Frameworks',
    category: 'Planning',
    description: 'Planning is the conscious, directed utilization of a country’s collective resources to achieve predetermined socio-economic objectives within a defined timeframe.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               EVOLUTION OF ECONOMIC PLANNING PARADIGMS IN INDIA                   |
+-----------------------------------------------------------------------------------+
| 1951-1956: First Plan (Harrod-Domar Model)                                        |
|  - High savings rate -> Capital Accumulation -> ICOR efficiency -> Agri revival   |
|                                                                                   |
| 1956-1961: Second Plan (Feldman-Mahalanobis Heavy Industry Strategy)              |
|  - Shift to Capital Goods (Machines to produce machines) -> Import Substitution   |
|                                                                                   |
| 1966-1969: Plan Holiday (Three Annual Plans - Green Revolution HYV rollout)       |
| 1978-1980: Rolling Plan (Gunnar Myrdal paradigm - 1-year, 3-5 year, 15-year)     |
|                                                                                   |
| 1991-1997: Eighth Plan (Rao-Manmohan Indicative Planning Model)                   |
|  - Dismantled License-Permit Raj -> Market orientation -> State as Facilitator    |
|                                                                                   |
| 2015-Present: NITI Aayog (Cooperative & Competitive Federalism Architecture)      |
|  +-----------------------------------------------------------------------------+  |
|  | GOVERNING COUNCIL: PM + All State CMs + UT Lt. Governors (Federal consensus)|  |
|  +--------------------------------------+--------------------------------------+  |
|                                         |                                         |
|                 +-----------------------+-----------------------+                 |
|                 |                                               |                 |
|       [TEAM INDIA HUB]                              [KNOWLEDGE & INNOVATION HUB]  |
|   States-Centre Interface                           Think-Tank Core, Sectoral R&D |
|   State-specific roadmaps                           SDG Index, Aspirational Dists |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | STRATEGIC HORIZONS:                                                         |  |
|  | 1. 3-Year Action Agenda (Operational roadmaps and budget milestones)        |  |
|  | 2. 7-Year Strategy ('Strategy for New India @75' - Sectoral transformations)|  |
|  | 3. 15-Year Vision Document ('Viksit Bharat @2047' long-term compass)        |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+`,
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
        title: 'Theoretical Growth Models in Indian Planning: Harrod-Domar, Mahalanobis & Rao-Manmohan',
        description: 'Analytical mechanics of foundational planning strategies that shaped India’s capital formation.',
        points: [
          'Harrod-Domar Model (1st Five-Year Plan 1951-56): Conceptualized growth as a function of the marginal propensity to save/invest and the Incremental Capital-Output Ratio (ICOR): Growth Rate (g) = Savings Rate (s) / ICOR. Focused heavily on agriculture, irrigation projects (Bhakra-Nangal, Damodar Valley), and overcoming post-partition food shortages.',
          'Feldman-Mahalanobis Heavy Industry Strategy (2nd Five-Year Plan 1956-61): Four-sector model prioritizing the basic capital goods sector (Department I: steel, machinery, coal, energy). Rationale: Producing "machines to make machines" accelerates long-term industrial independence and breaks foreign exchange dependency, despite compressing short-term consumer goods supply.',
          'Rao-Manmohan Model (8th Five-Year Plan 1992-97 onwards): Post-1991 balance-of-payments crisis framework. Shifted India from an inward-looking import substitution regime to an export-competitive, market-driven indicative framework. Public investment reoriented away from commanding heights of commercial enterprise toward social infrastructure (education, health) and physical connectivity.',
          'Shortcomings of Mahalanobis Heavy Capital Bias: Neglected wage-goods (agriculture, light textiles) as highlighted by the Vakil-Brahmananda Wage Goods Model; bred high ICOR inefficiencies, bureaucratic red-tape (License-Permit-Quota Raj), and severe under-employment.'
        ],
        prelimsHook: 'The Vakil-Brahmananda Wage-Goods Model (1956) was the primary counter-model to Mahalanobis, advocating that rapid employment requires expanding wage-goods (food, consumer goods) rather than heavy machinery.',
        mainsHook: '"The Mahalanobis model created an industrial foundation at the cost of employment elasticity and agricultural terms of trade." Critically evaluate.'
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
        title: 'NITI Aayog Architecture & Strategic Frameworks',
        description: 'Cooperative federalism architecture, functional hubs, and strategic planning horizons.',
        points: [
          'Governing Council: Chaired by the Prime Minister; comprises Chief Ministers of all States, Chief Ministers of UTs with legislatures (Delhi, Puducherry, J&K), and Lieutenant Governors of other UTs. Institutionalizes consensus-based federal policy formulation.',
          'Team India Hub: Acts as the dedicated bridge between Central line ministries and State Governments; spearheads custom policy design, addresses state-specific bottlenecks, and champions states’ interests at the Centre.',
          'Knowledge and Innovation Hub: Serves as the apex public think-tank; generates evidence-based policy research, spearheads Atal Innovation Mission (AIM), and formulates national strategies for frontier sectors (AI, electric mobility, green hydrogen).',
          'Tripartite Planning Horizon: (1) 3-Year Action Agenda (operational roadmap and expenditure realignment); (2) 7-Year Strategy ("Strategy for New India @75" covering 41 crucial sectors); (3) 15-Year Vision Document (guiding perspective toward "Viksit Bharat @2047").',
          'Competitive Governance Indices: Drives cooperative-competitive federalism via quantifiable metrics: SDG India Index, State Energy and Climate Index (SECI), Export Preparedness Index (EPI), Composite Water Management Index, and Aspirational Districts Programme (ADP).'
        ],
        prelimsHook: 'Unlike the erstwhile Planning Commission, NITI Aayog has zero statutory powers to allocate financial grants or central plan funds to state governments; allocation power rests with the Ministry of Finance.',
        mainsHook: 'Evaluate the efficacy of NITI Aayog’s Aspirational Districts Programme in transforming governance delivery in India’s most backward administrative units.'
      }
    ],
    comparativeTable: {
      headers: ['Dimension', 'Planning Commission (1950–2014)', 'NITI Aayog (2015–Present)'],
      rows: [
        ['Approach', 'Top-Down ("One size fits all")', 'Bottom-Up ("Cooperative Federalism")'],
        ['Financial Powers', 'Allocated plan funds and discretionary grants to states', 'Advisory Think-Tank; zero financial allocation powers'],
        ['State Representation', 'National Development Council (NDC) met irregularly', 'Governing Council with all CMs and Lt. Governors actively meets'],
        ['Planning Horizon', 'Rigid Five-Year Plans (1st to 12th Plan)', '15-Year Vision, 7-Year Strategy, 3-Year Action Agenda'],
        ['Twin Hub Architecture', 'Bureaucratic divisions and sectoral adviser desks', 'Team India Hub (Centre-State) + Knowledge & Innovation Hub'],
        ['Role of Private Sector', 'Marginalized; focus on commanding heights of public sector', 'Engaged actively as strategic development partners']
      ]
    }
  },
  {
    id: 'resource-mobilisation',
    title: 'Mobilisation of Resources',
    subTitle: 'Direct/Indirect Taxation, Article 279A GST Architecture, NMP, InvITs/REITs & Debt Sustainability',
    category: 'Resource Mobilisation',
    description: 'Resource mobilization involves generating, allocating, and efficiently deploying domestic and external financial, human, and physical assets to sustain inclusive economic growth.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               RESOURCE MOBILISATION & REVENUE ARCHITECTURE                        |
+-----------------------------------------------------------------------------------+
| 1. TAXATION ARCHITECTURE                                                          |
|    +-----------------------------+     +----------------------------------------+ |
|    | DIRECT TAXATION             |     | INDIRECT TAXATION (GST - Art. 279A)    | |
|    | - Corporate Tax (22% / 15%) |     | - GST Council: Centre 1/3, States 2/3  | |
|    | - Faceless Assessment / AIS |     | - 75% Majority required for decisions  | |
|    | - Vivad se Vishwas dispute  |     | - Inverted Duty Correction & Anti-Prof | |
|    +-----------------------------+     +----------------------------------------+ |
|                                                                                   |
| 2. NON-TAX REVENUES & ASSET MONETISATION                                          |
|    +--------------------------------------------------------------------------+   |
|    | DIPAM Disinvestment Policy: Strategic Sale (Mgmt control) vs Minority    |   |
|    +--------------------------------------------------------------------------+   |
|    | National Monetisation Pipeline (NMP: Rs. 6 Lakh Crore Brownfield Leasing)|   |
|    | - Highways (NHAI InvIT)  - Power Grid (InvIT)  - Railways & Telecom      |   |
|    | - Core asset ownership retained by State; only operational cash-flows run|   |
|    +--------------------------------------------------------------------------+   |
|                                                                                   |
| 3. PUBLIC DEBT & FINANCIAL INTERMEDIATION                                         |
|    - Domestic Internal Debt (~95% denominated in INR; shielded from forex runs)   |
|    - External Debt (<5% concessional loans via World Bank / ADB / JICA)           |
|    - Gross NPA resolution via IBC 2016 -> Multi-year low of ~2.8%                 |
+-----------------------------------------------------------------------------------+`,
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
        title: 'Taxation Architecture: Direct Tax Reforms & GST Dynamics',
        description: 'Structural reforms in direct taxation and the cooperative federalism architecture of GST.',
        points: [
          'Direct Tax Modernization: (1) Corporate Tax Rate Rationalization: Slashed to 22% for existing companies (without exemptions) and 15% for new domestic manufacturing units under Section 115BAB; (2) Faceless Assessment & Appeals: Removed physical interface between taxpayer and income tax officer, utilizing dynamic algorithmic case allocation to curb corruption; (3) Transparent Taxation: Annual Information Statement (AIS) and Taxpayer Charter; (4) Vivad se Vishwas: Settlement scheme resolving legacy direct tax litigation.',
          'GST Council Voting Mechanics (Article 279A): Apex decision-making constitutional body on indirect taxation. Voting Weightage: Central Government holds 1/3rd (33.33%) of total votes cast; all State Governments combined hold 2/3rd (66.67%) of total votes cast. Decision Threshold: Every decision requires a weighted majority of not less than 3/4th (75%) of votes cast. Implication: Centre cannot pass a resolution without at least some states, and States cannot unite to pass a resolution without Central concurrence, enforcing institutional consensus.',
          'GST Operational Dynamics: (1) Composition Scheme: Simplified quarterly tax payment (1% for manufacturers/traders, 5% for restaurants) without Input Tax Credit (ITC) for small businesses with turnover up to ₹1.5 Crore; (2) Inverted Duty Structure: Situation where tax rate on inputs/raw materials is higher than the tax rate on finished output, causing structural accumulation of unutilized ITC and hurting domestic manufacturing competitiveness (addressed iteratively in textiles, footwear, fertilizer); (3) Compensation Cess Dispute: Levied under GST (Compensation to States) Act 2017 to bridge states’ revenue shortfall below 14% compounded growth; extended till March 2026 exclusively to service sovereign loans borrowed during COVID-19 pandemic.',
          'Anti-Profiteering Framework: Mandated suppliers to pass on tax reductions and ITC benefits to consumers via commensurate price cuts; National Anti-Profiteering Authority (NAA) dissolved and powers transferred to Competition Commission of India (CCI).'
        ],
        prelimsHook: 'Under Article 279A of the Constitution, decisions of the GST Council require a weighted majority of 75% of the members present and voting.',
        mainsHook: '"The GST Council embodies the purest institutional manifestation of cooperative federalism, yet fiscal federalism tensions persist." Analyze.'
      },
      {
        title: 'Non-Tax Revenue & Asset Management: Disinvestment, NMP, InvITs & REITs',
        description: 'Monetizing sovereign assets and transitioning public enterprise governance.',
        points: [
          'Disinvestment Policy Spectrum (DIPAM): Department of Investment and Public Asset Management classifies approaches: (1) Minority Stake Sale: Selling equity through IPO, FPO, or Offer for Sale (OFS) while government retains at least 51% shareholding and administrative control; (2) Strategic Disinvestment: Selling 50% or more equity along with complete transfer of management control to a private buyer (e.g., Air India sale to Tata Group); (3) Strategic PSE Policy 2021: Categorizes sectors into Strategic (bare minimum CPSE presence maintained across Atomic energy, Defence, Transport/Telecom, Power/Petroleum, Banking/Insurance) and Non-Strategic (CPSEs to be privatized, merged, or closed).',
          'National Monetisation Pipeline (NMP): 4-year pipeline (FY 2022–2025) launched by NITI Aayog targeting ₹6 Lakh Crore. Core Philosophy: Monetizing operational "brownfield" core assets (highways, railway tracks, power transmission lines, oil pipelines, telecom towers) by transferring operating rights to private capital through long-term concessions, while retaining 100% sovereign asset ownership.',
          'Infrastructure Investment Trusts (InvITs) & REITs: Collective investment vehicles regulated by SEBI that pool capital from retail and institutional investors to acquire income-yielding infrastructure/real estate assets. Public entities (NHAI InvIT, PowerGrid InvIT) utilize them to monetize highway stretches and transmission grids to raise upfront capital for fresh greenfield capex.'
        ],
        prelimsHook: 'Under the National Monetisation Pipeline (NMP), the government leases only brownfield operational assets; greenfield projects and sovereign ownership transfer are explicitly excluded.',
        mainsHook: '"The National Monetisation Pipeline unlocks idle public capital for infrastructure expansion without privatization of assets." Critically examine.'
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
    subTitle: 'GDP vs GVA Base Year, Jobless Growth, FLFPR U-Curve, Gig Economy & Social Security Code 2020',
    category: 'Growth & Employment',
    description: 'Examining the divergence between headline economic growth and human development, productive employment generation, and structural economic transformation.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               STRUCTURAL GROWTH, GVA METRICS & EMPLOYMENT TRAJECTORY             |
+-----------------------------------------------------------------------------------+
| 1. NATIONAL ACCOUNTS COMPUTATION (2011-12 Base Year Reform):                      |
|    GVA at Basic Prices = Compensation of Employees + Operating Surplus + CFC      |
|    GDP at Market Prices = GVA at Basic Prices + Product Taxes - Product Subsidies |
|                                                                                   |
| 2. EMPLOYMENT PARADOX & WORKFORCE RESTRUCTURING:                                  |
|    Agriculture: ~18% GVA | ~45% Workforce  (Massive Disguised Unemployment)       |
|    Manufacturing: ~15% GVA | ~12% Workforce  (Low Employment Elasticity <0.10)     |
|    Services:      ~54% GVA | ~30% Workforce  (Capital/Skill Intensive)            |
|                                                                                   |
| 3. FEMALE LABOUR FORCE PARTICIPATION (FLFPR) U-SHAPED CURVE:                      |
|    Subsistence Agri -> Income Effect Withdrawal -> Education Gap -> Modern Formal |
|    (U-shaped hypothesis: rising household wealth initially lowers female LFPR)    |
|                                                                                   |
| 4. GIG ECONOMY & INFORMALITY (Code on Social Security 2020):                      |
|    Aggregator Contribution: 1-2% annual turnover earmarked for Social Security    |
|    e-Shram Portal: National Unorganised Workers Database (>29 Crore registrants)  |
+-----------------------------------------------------------------------------------+`,
    coreConcepts: [
      {
        title: 'Economic Growth vs. Economic Development & National Accounts',
        description: 'Quantitative output expansion, base-year revisions, and qualitative structural transformation.',
        points: [
          'Growth vs Development: Growth measures quantitative expansion of output (Real GDP, GVA, Per Capita Income); Development is a multidimensional normative process encompassing growth plus poverty reduction, reduced inequality, universal healthcare, and capability expansion (Amartya Sen).',
          'National Accounts Revisions (2011-12 Base Year): Shifted headline growth measurement from GDP at Factor Cost to GDP at Market Prices. Adopted MCA-21 corporate database; introduced Gross Value Added (GVA) at basic prices: GDP (Market Prices) = GVA (Basic Prices) + Product Taxes - Product Subsidies.',
          'Measurement Frameworks: Human Development Index (HDI: Health via Life Expectancy, Education via Mean/Expected Years of Schooling, Living Standard via GNI per capita PPP); Multidimensional Poverty Index (MPI: NITI Aayog national MPI tracks 12 indicators including nutrition, child mortality, cooking fuel, sanitation, drinking water).',
          'Genuine Progress Indicator (GPI) & Green GDP: Adjusts conventional GDP by subtracting environmental degradation costs (carbon emissions, soil depletion, biodiversity loss) and adding non-market economic value (household care work).'
        ],
        prelimsHook: 'In national accounts, GVA at basic prices includes production taxes (e.g., stamp duty, land revenue) minus production subsidies, but excludes product taxes (e.g., GST, customs duty) and product subsidies (e.g., food/fertilizer subsidy).',
        mainsHook: '"High GDP growth that fails to translate into human capabilities is fundamentally unsustainable." Discuss in the context of India’s healthcare and learning outcomes.',
        officialSource: 'UNDP HDR / MoSPI National Accounts Statistics'
      },
      {
        title: 'The Challenge of "Jobless Growth" & Structural Bottlenecks',
        description: 'Why 7%+ GDP growth has generated inadequate formal, high-productivity jobs.',
        points: [
          'Employment Elasticity Collapse: Employment elasticity of growth (percentage increase in employment for 1% rise in GDP) has collapsed from ~0.44 during 1970-80s to near 0.10 across manufacturing, meaning output expansion is driven by capital-deepening and automation rather than labor absorption.',
          'Premature Deindustrialization: India bypassed the classical Kuznets-Lewis structural transition (Agriculture ➔ Manufacturing ➔ Services) by jumping straight from primary agriculture to skill-intensive, capital-intensive IT/Services.',
          'The 45-18-54 Anomaly: Agriculture generates ~18% of GVA but retains ~45% of total employment; Services generate ~54% of GVA but absorb only ~30% of workers; Manufacturing stagnates around 15% of GDP and 12% of workforce.',
          'Capital-Intensive Manufacturing: Government schemes such as PLI primarily incentivize high-capex, automated assembly rather than labor-absorbing light manufacturing (textiles, leather, footwear, food processing).'
        ]
      },
      {
        title: 'Female Labour Force Participation Rate (FLFPR) & The Care Economy',
        description: 'Structural barriers, the U-shaped hypothesis, and unpaid care burdens.',
        points: [
          'The U-Shaped FLFPR Hypothesis (Claudia Goldin): At low GDP levels, women work out of agricultural necessity. As household income rises, female LFPR declines due to income effect and social status considerations (withdrawal from manual field labor). Only when female education reaches higher thresholds and formal service sector opportunities expand does FLFPR rise again.',
          'PLFS Trends: Historically depressed around 23-28%; recent PLFS reports showed a rise to ~37-41% driven largely by rural women entering unpaid family labor or subsistence self-employment (distress-driven, not formal job expansion).',
          'Unpaid Care Burden: Time Use Survey (MoSPI) reveals Indian women spend an average of ~300 minutes/day on unpaid domestic care work versus ~30 minutes by men, restricting female entry into the formal paid economy.',
          'Policy Interventions: Maternity Benefit (Amendment) Act 2017 (26 weeks paid leave, mandatory creche in establishments with 50+ employees); Mission Shakti (Sambal for safety, Samarthya for empowerment).'
        ]
      },
      {
        title: 'Gig Economy, Informalization & Social Security Code 2020',
        description: 'Platform workers, contractualization, and unorganized welfare frameworks.',
        points: [
          'Definitions under Code on Social Security 2020: (1) Gig Worker: A person who performs work or participates in a work arrangement and earns from such activities outside of a traditional employer-employee relationship; (2) Platform Worker: A worker undertaking gig work accessed via online digital platforms/apps.',
          'Social Security Funding Mandate: The 2020 Code requires digital aggregators (ride-hailing, food delivery, logistics) to contribute 1% to 2% of their annual turnover (capped at 5% of amount payable to gig workers) into a National Social Security Board fund.',
          'e-Shram Portal: National database of unorganised workers seeded with Aadhaar, registering over 29 Crore workers with occupational classification (NCO codes) to facilitate portable welfare delivery.',
          'Periodic Labour Force Survey (PLFS) Terminology: LFPR (working age 15+ in labor force); WPR (employed ratio); Unemployment Rate (UR declined to ~3.2% in UPSS); UPSS (Usual Principal & Subsidiary Status - chronic status over 365 days) vs CWS (Current Weekly Status - preceding 7 days, captures seasonal slackness).'
        ],
        prelimsHook: 'Under the Code on Social Security 2020, aggregator contributions to the social security fund for gig and platform workers are capped at 5% of the aggregate amount payable to such workers.',
        mainsHook: '"The gig economy offers flexible livelihood generation at the expense of tenure security and collective bargaining." Analyze in light of recent state legislations (Rajasthan Platform Based Gig Workers Act).'
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
    subTitle: 'Kuznets/Lorenz Curves, Parliamentary Procedures, Deficit Metrics, FRBM & Budget Typologies',
    category: 'Budgeting & Inclusive Growth',
    description: 'Comprehensive analysis of equitable wealth distribution, social inclusion metrics, budgetary architecture, and sovereign fiscal consolidation.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|            INCLUSIVE GROWTH, INEQUALITY CURVES & BUDGETARY PROCEDURES             |
+-----------------------------------------------------------------------------------+
| 1. THEORIES & METRICS OF DISTRIBUTION:                                            |
|    - Kuznets Curve: Inverted U-hypothesis (Growth vs Inequality)                  |
|    - Lorenz Curve & Gini Coefficient: Cumulative population vs Income shares      |
|    - Palma Ratio: Top 10% income share / Bottom 40% income share                  |
|                                                                                   |
| 2. FINANCIAL INCLUSION TRINITY:                                                   |
|    [PMJDY Zero-Balance Bank Accounts] + [Aadhaar Biometric] + [Mobile Telephony]  |
|    ===> Direct Benefit Transfer (DBT) -> Eliminates ghost beneficiaries           |
|                                                                                   |
| 3. PARLIAMENTARY BUDGET PROCEDURES & LEGISLATIVE CONTROL:                         |
|    - Art. 112: Annual Financial Statement (Consolidated, Contingency, Public Acct)|
|    - Art. 113: Demands for Grants | Cut Motions (Policy, Economy, Token)         |
|    - Art. 114: Appropriation Bill (Statutory sanction to withdraw from CFI)       |
|    - Art. 110: Finance Bill (Taxation proposals enacted as Money Bill)            |
|    - Guillotine Closure: Undiscussed demands put to vote en bloc when time elapses|
|                                                                                   |
| 4. MODERN BUDGETING TYPOLOGIES:                                                   |
|    - Performance Budgeting: Inputs -> Outputs linkage                             |
|    - Outcome Budgeting: Physical tangible deliverables & outcomes tracked         |
|    - Zero-Based Budgeting (ZBB): Every item justified from scratch (zero base)    |
|    - Gender Budgeting: Statement 20 (Part A: 100% women; Part B: >=30% women)     |
+-----------------------------------------------------------------------------------+`,
    coreConcepts: [
      {
        title: 'Theories & Metrics of Distribution: Lorenz, Gini & Kuznets Hypothesis',
        description: 'Analytical measurement of multi-dimensional income and wealth inequality.',
        points: [
          'Kuznets Curve Hypothesis (Simon Kuznets): Postulates an inverted U-curve relationship between economic growth and income inequality. In early stages of industrialization, inequality widens as rural workers migrate to higher-paying urban factories. Later, as wealth diffuses, democratization advances, and welfare states develop, inequality automatically declines.',
          'Contestation in India: Piketty and Chancel data shows that post-1991 reforms, India’s top 1% income share surged to over 22% and wealth share crossed 40%, while the bottom 50% captured only 15% of national income, indicating that growth alone does not automatically compress inequality without progressive wealth taxes and public spending on social goods.',
          'Lorenz Curve: Graphical representation of wealth distribution plotting cumulative percentage of population against cumulative percentage of income earned. The 45-degree diagonal represents the "Line of Perfect Equality".',
          'Gini Coefficient: Ratio of the area between the Lorenz curve and the line of perfect equality to the total area under the line of perfect equality (G = A / (A + B)). Value ranges from 0 (perfect equality) to 1 (absolute inequality).',
          'Palma Ratio: Alternative inequality metric defined as the ratio of the richest 10% of the population’s share of gross national income divided by the poorest 40%’s share. Avoids the middle 50% whose income share remains stable across nations.'
        ],
        prelimsHook: 'The Gini Coefficient is equal to twice the area between the Lorenz Curve and the 45-degree Line of Perfect Equality on a normalized unit square.',
        mainsHook: '"The Kuznets curve hypothesis has failed in the post-liberalization Indian growth narrative." Critically examine the drivers of surging wealth concentration.'
      },
      {
        title: 'Financial Inclusion Frameworks: JAM Trinity & SHG Ecosystem',
        description: 'Institutional mechanics bridging the unbanked and informal segments.',
        points: [
          'PMJDY Ecosystem: Over 52 Crore Jan Dhan bank accounts opened (55%+ owned by women, 67% in rural/semi-urban branches); features zero-balance, RuPay debit card, and ₹10,000 overdraft facility.',
          'JAM Trinity (Jan Dhan, Aadhaar, Mobile): Enabled targeted Direct Benefit Transfer (DBT) across 300+ central schemes (PM-KISAN, PAHAL, MGNREGA), plugging fiscal leakage and saving over ₹2.7 Lakh Crore in cumulative ghost exclusions.',
          'SHG-Bank Linkage Programme (SBLP): Spearheaded by NABARD; links over 1.4 Crore Self-Help Groups (90%+ all-women) with formal commercial bank micro-credit, maintaining repayment rates exceeding 97%.',
          'Regulatory Architecture: RBI’s National Strategy for Financial Inclusion (NSFI 2019-2024); Priority Sector Lending (PSL) mandates requiring scheduled commercial banks to allocate 40% of Adjusted Net Bank Credit (ANBC) to agriculture, MSMEs, education, housing, and social infrastructure.'
        ]
      },
      {
        title: 'Parliamentary Budgetary Procedures & Constitutional Stages',
        description: 'Legislative scrutiny, constitutional mandates, and control over sovereign finances.',
        points: [
          'Constitutional Funds: (1) Consolidated Fund of India (Article 266(1)): All revenues received, loans raised, and loan repayments; zero withdrawal permitted without parliamentary law; (2) Public Account of India (Article 266(2)): Provident funds, judicial deposits, savings bank deposits where government acts as banker/trustee; executive action suffices; (3) Contingency Fund of India (Article 267): Imprest of ₹30,000 Crore placed at the disposal of the President for unforeseen emergencies, recouped via Parliament.',
          'Key Budgetary Bills: (1) Appropriation Bill (Article 114): Authorizes expenditure from the Consolidated Fund of India for both "Charged" expenditures (non-votable: President/Judges salaries, debt servicing) and "Made" expenditures (votable); (2) Finance Bill (Article 110): Authorizes taxation and revenue mobilization proposals; enacted as a Money Bill.',
          'Parliamentary Scrutiny Mechanisms: (1) Departmentally Related Standing Committees (DRSCs): 24 committees scrutinize Demands for Grants of various ministries during a 3-week parliamentary recess; (2) Cut Motions: Policy Cut (disapproval of policy; demand reduced to Re 1), Economy Cut (demand reduced by specified amount), Token Cut (ventilates specific grievance; demand reduced by ₹100). If a Cut Motion is passed in Lok Sabha, the Council of Ministers must resign.',
          'Guillotine Closure: On the last day allocated for discussion of Demands for Grants, the Speaker puts all remaining undiscussed demands of various ministries to vote en bloc without further debate, ensuring budgetary passage before April 1.'
        ],
        prelimsHook: 'Expenditure "charged" upon the Consolidated Fund of India (like Supreme Court judges’ salaries and sovereign debt interest) can be discussed in Parliament but cannot be put to vote.',
        mainsHook: '"The frequent resort to Guillotine closure undermines legislative scrutiny of executive spending." Analyze structural parliamentary reforms needed.'
      },
      {
        title: 'Modern Budgeting Typologies: Performance, Outcome, ZBB & Gender Budgeting',
        description: 'Methodologies to optimize allocative efficiency and equity in public outlays.',
        points: [
          'Performance Budgeting: Focuses on the relationship between inputs and outputs, assessing what the government accomplishes with the funds allocated rather than merely tracking expenditure compliance.',
          'Outcome Budgeting (Introduced 2005): Goes beyond physical outputs to evaluate actual developmental outcomes and qualitative impacts (e.g., instead of measuring km of highway built, it measures reduction in logistics transit time and freight cost).',
          'Zero-Based Budgeting (ZBB - Peter Pyhrr): Unlike traditional incremental budgeting (which takes last year’s outlay as baseline and adds an incremental percentage), ZBB requires every program or activity to justify its entire budget from scratch (zero base), identifying and terminating obsolete schemes.',
          'Gender Budgeting (Introduced 2005-06): Statement 20 of Union Budget; disaggregates allocations into: Part A (Schemes with 100% allocation exclusively for women, e.g., Sukanya Samriddhi, Beti Bachao) and Part B (Schemes with at least 30% to 99% allocation targeted at women, e.g., PMAY-G, MGNREGA).'
        ]
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

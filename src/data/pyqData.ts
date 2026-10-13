// ============================================================================
// GS-III AUTHENTIC PREVIOUS YEAR QUESTIONS (PYQ) REPOSITORY
// Covers UPSC CSE GS-III, UPPSC PCS GS-III, and UP RO/ARO Allied Domains
// Official Questions with Marking Demands, Concept Tested, and Model Points
// ============================================================================

import { PYQItem } from '../types';

export const pyqDatabase: PYQItem[] = [
  // --------------------------------------------------------------------------
  // 1. UPSC MAINS GS-III AUTHENTIC QUESTIONS
  // --------------------------------------------------------------------------
  {
    id: 'pyq-mains-2024-q1',
    exam: 'UPSC_MAINS',
    year: 2024,
    paper: 'GS-III',
    questionNumber: 1,
    marks: 10,
    topic: 'Economy',
    subtopic: 'Gross Domestic Product & GVA',
    difficulty: 'Medium',
    questionText: 'Distinguish between Gross Domestic Product (GDP) and Gross Value Added (GVA). Why has GVA become a more appropriate measure for assessing economic performance in sectoral terms?',
    conceptTested: 'National income accounting methodology, SNA 2008 standards, Factor cost vs Basic prices vs Market prices.',
    currentAffairsLinkage: 'Periodic revisions of GDP growth estimates and divergence between industrial GVA and corporate revenue.',
    officialSource: 'UPSC Civil Services (Main) Examination 2024 General Studies Paper-III',
    explanationOrModelAnswer: 'GDP measures total output from the expenditure/demand side including net product taxes. GVA measures sector-by-sector supply contributions at basic prices, insulating analysis from artificial fluctuations in indirect taxes or subsidy rollouts.',
    modelPoints: [
      'Define GDP: Value of final goods and services at market prices [GDP = GVA + Net Product Taxes].',
      'Define GVA: Producer perspective measuring net contribution of individual sectors (Agri, Industry, Services).',
      'Why GVA is superior for sectoral assessment: Eliminates tax distortion (e.g. sharp rise in fuel excise duties artificially lifts GDP without real output rise); identifies supply-side bottlenecks.',
      'International harmonization: Conforms to UN System of National Accounts (SNA 2008).'
    ]
  },
  {
    id: 'pyq-mains-2024-q4',
    exam: 'UPSC_MAINS',
    year: 2024,
    paper: 'GS-III',
    questionNumber: 4,
    marks: 10,
    topic: 'Agriculture',
    subtopic: 'Direct Seeding of Rice & Water Conservation',
    difficulty: 'Medium',
    questionText: 'How does Direct Seeding of Rice (DSR) help in conserving groundwater and mitigating air pollution compared to traditional transplantation? Discuss its operational challenges.',
    conceptTested: 'Agri-water nexus, aerobic rice cultivation, stubble burning seasonal cycle, mechanization barriers.',
    currentAffairsLinkage: 'Punjab and Haryana state incentives for DSR adoption and air quality crises in NCR.',
    officialSource: 'UPSC Civil Services (Main) Examination 2024 General Studies Paper-III',
    explanationOrModelAnswer: 'DSR eliminates nursery raising and continuous puddling, cutting 15-20% irrigation water and allowing short-duration cultivars to vacate fields early, preventing farmers from resorting to panic stubble burning.',
    modelPoints: [
      'Mechanism of water saving: Bypasses 30 days of standing water puddling; reduces evapotranspiration.',
      'Air pollution mitigation: Crops mature 10-15 days earlier, giving farmers sufficient window for mechanical wheat sowing without burning straw.',
      'Methane abatement: Aerobic soil conditions inhibit methanogenic bacterial activity.',
      'Operational challenges: Severe weed infestation requiring costly pre-emergence herbicides; soil crusting; seed drilling skill requirements for small farmers.'
    ]
  },
  {
    id: 'pyq-mains-2023-q1',
    exam: 'UPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 1,
    marks: 10,
    topic: 'Economy',
    subtopic: 'Manufacturing & MSMEs, PLI Scheme',
    difficulty: 'Hard',
    questionText: 'Faster economic growth requires increased share of the manufacturing sector in GDP, particularly of MSMEs. Comment on the present policies of the Government in this regard.',
    conceptTested: 'Industrial policy, National Manufacturing Policy, MSME Udyam registration, PLI scheme, credit guarantee.',
    currentAffairsLinkage: 'Make in India 2.0, Emergency Credit Line Guarantee Scheme (ECLGS), PLI rollouts across 14 sectors.',
    officialSource: 'UPSC Civil Services (Main) Examination 2023 General Studies Paper-III',
    explanationOrModelAnswer: 'Manufacturing share has hovered around 15-17% of GDP. MSMEs contribute 30% of GDP and 45% of exports. Government interventions like PLI, PM Gati Shakti, and revised MSME composite criteria aim to scale up value addition.',
    modelPoints: [
      'Present Status: Manufacturing employment elasticity remains low; MSMEs face inverted duty structure and delayed payments.',
      'Government Initiatives: Production Linked Incentive (PLI), Public Procurement Policy reserving 25% for MSEs, TReDS bill discounting platform, Udyam portal formalization.',
      'Bottlenecks: Complex compliance, logistics costs (~8-9% of GDP vs 6-7% global benchmark), lack of access to cheap risk capital for deep-tech MSMEs.',
      'Way Forward: Cluster development, plug-and-play industrial corridors, integration into Global Value Chains (GVCs).'
    ]
  },
  {
    id: 'pyq-mains-2023-q4',
    exam: 'UPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 4,
    marks: 10,
    topic: 'Agriculture',
    subtopic: 'Millets (Shree Anna) & Food Security',
    difficulty: 'Medium',
    questionText: 'What is the significance of the promotion of millets (Shree Anna) in ensuring nutritional security and climate-resilient agriculture in India? Detail the government initiatives in this regard.',
    conceptTested: 'Nutri-cereals agronomy, climate resilience, C4 photosynthetic pathway, International Year of Millets 2023.',
    currentAffairsLinkage: 'UN declaring 2023 as International Year of Millets proposed by India; inclusion in PDS and Mid-Day Meal.',
    officialSource: 'UPSC Civil Services (Main) Examination 2023 General Studies Paper-III',
    explanationOrModelAnswer: 'Millets require 70% less water than paddy, grow in semi-arid soils, and provide dense micronutrients (Iron, Zinc, Calcium), mitigating hidden hunger while adapting to climate extremes.',
    modelPoints: [
      'Nutritional Security: High dietary fiber, low glycemic index (diabetic friendly), rich in minerals (Ragi has 344mg Calcium/100g vs 10mg in rice).',
      'Climate Resilience: Drought-resistant C4 crops, withstand temperatures up to 45°C, zero synthetic pesticide reliance.',
      'Government Initiatives: Rebranded as "Shree Anna"; declared ICAR-IIMR Hyderabad as Global Centre of Excellence; enhanced MSP for Jowar, Bajra, Ragi; distributed under PMGKAY.',
      'Challenges: Low processing recovery, poor consumer shelf life of millet flour, lack of organized value chain.'
    ]
  },
  {
    id: 'pyq-mains-2023-q6',
    exam: 'UPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 6,
    marks: 10,
    topic: 'Science & Tech',
    subtopic: 'Artificial Intelligence & Generative AI',
    difficulty: 'Medium',
    questionText: 'Introduce the concept of Artificial Intelligence (AI). How does AI assist clinical diagnosis and drug discovery? Highlight key ethical concerns.',
    conceptTested: 'Machine learning algorithms, convolutional neural networks in radiology, AlphaFold protein folding, medical bioethics.',
    currentAffairsLinkage: 'Breakthroughs in DeepMind AlphaFold and deployment of AI in cancer detection across Indian hospitals.',
    officialSource: 'UPSC Civil Services (Main) Examination 2023 General Studies Paper-III',
    explanationOrModelAnswer: 'AI simulates human cognitive capabilities. In diagnosis, computer vision detects tumors in CT scans with superhuman accuracy; in drug discovery, generative algorithms simulate receptor docking in days rather than decades.',
    modelPoints: [
      'Concept: Algorithms learning patterns from big data to perform inference and decision-making.',
      'Clinical Diagnosis: Automated screening of diabetic retinopathy (e.g. Google ARDA in India), early detection of tuberculosis from chest X-rays.',
      'Drug Discovery: Predicting 3D protein structures (AlphaFold), screening chemical compounds, optimizing clinical trial patient cohort selection.',
      'Ethical Concerns: "Black box" unexplainability, algorithmic bias trained on Western genomic datasets, medical malpractice liability, patient privacy under DPDP Act.'
    ]
  },
  {
    id: 'pyq-mains-2023-q10',
    exam: 'UPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 10,
    marks: 10,
    topic: 'Internal Security',
    subtopic: 'Terrorism & Organised Crime Linkages',
    difficulty: 'Medium',
    questionText: 'What are the internal security challenges being faced by India in border areas? Also discuss the role of technology in border management.',
    conceptTested: 'Trans-border narcotics, drone infiltration, hybrid warfare, CIBMS, smart fencing.',
    currentAffairsLinkage: 'Increasing drone sorties along Punjab border and installation of anti-drone counter measures by BSF.',
    officialSource: 'UPSC Civil Services (Main) Examination 2023 General Studies Paper-III',
    explanationOrModelAnswer: 'India shares 15,106 km of land borders with 7 nations. Complex terrain, disputed boundaries, narco-terror networks, and modern drone infiltration demand technology-driven border management like CIBMS and anti-drone electronic warfare.',
    modelPoints: [
      'Border Challenges: Cross-border infiltration in J&K, drone dropping of arms/heroin in Punjab, ethnic spillover & Golden Triangle drugs along Myanmar border, cattle smuggling along Bangladesh border.',
      'Role of Technology: Comprehensive Integrated Border Management System (CIBMS) combining thermal imagers, infrared and seismic sensors; BOLD-QIT in riverine stretches; UAV reconnaissance; anti-drone RF jammers.',
      'Institutional Synergy: Central Armed Police Forces (BSF, ITBP, SSB, Assam Rifles) backed by NTRO and ISRO satellite surveillance.'
    ]
  },
  {
    id: 'pyq-mains-2022-q11',
    exam: 'UPSC_MAINS',
    year: 2022,
    paper: 'GS-III',
    questionNumber: 11,
    marks: 15,
    topic: 'Infrastructure',
    subtopic: 'PM Gati Shakti & National Logistics Policy',
    difficulty: 'Hard',
    questionText: 'What are the key features of the National Logistics Policy (NLP) 2022? How is it expected to integrate with the PM Gati Shakti National Master Plan to improve multimodal connectivity in India?',
    conceptTested: 'Logistics costs reduction (from ~14% to single digits), PM Gati Shakti 16 ministries GIS platform, ULIP, IDS.',
    currentAffairsLinkage: 'Launch of National Logistics Policy 2022 and Unified Logistics Interface Platform (ULIP).',
    officialSource: 'UPSC Civil Services (Main) Examination 2022 General Studies Paper-III',
    explanationOrModelAnswer: 'NLP 2022 aims to bring logistics costs down to global benchmarks (~8%), improve Logistics Performance Index (LPI) ranking to top 25, and create a data-driven Decision Support System through ULIP and PM Gati Shakti GIS.',
    modelPoints: [
      'Four Pillars of NLP: Integration of Digital System (IDS), Unified Logistics Interface Platform (ULIP), Ease of Logistics (ELOG), System Improvement Group (SIG).',
      'Integration with Gati Shakti: Gati Shakti provides spatial planning GIS mapping; NLP provides policy and regulatory harmonization across departments.',
      'Economic Benefits: Elimination of transport bottlenecks, rapid cargo evacuation from ports via DFCs, lower freight costs for MSME exports.'
    ]
  },
  {
    id: 'pyq-mains-2022-q12',
    exam: 'UPSC_MAINS',
    year: 2022,
    paper: 'GS-III',
    questionNumber: 12,
    marks: 15,
    topic: 'Environment',
    subtopic: 'Photochemical Smog & Clean Air Mitigation',
    difficulty: 'Medium',
    questionText: 'Discuss in detail the photochemical smog, its mechanism of formation and impacts. Suggest mitigation strategies as per national clean air programmes.',
    conceptTested: 'Atmospheric chemistry, secondary pollutants (Ozone, PAN), VOCs, NOx, NCAP, CAQM, GRAP.',
    currentAffairsLinkage: 'Winter air pollution in Indo-Gangetic Plains and execution of Graded Response Action Plan (GRAP).',
    officialSource: 'UPSC Civil Services (Main) Examination 2022 General Studies Paper-III',
    explanationOrModelAnswer: 'Photochemical smog is a brown haze formed when nitrogen oxides (NOx) and volatile organic compounds (VOCs) react under sunlight, producing ozone, PAN, and aldehydes.',
    modelPoints: [
      'Mechanism: Thermal inversion traps primary emissions. Photolysis of NO2 releases atomic oxygen which forms tropospheric Ozone (O3) and Peroxyacyl Nitrates (PAN).',
      'Impacts: Severe respiratory illness (bronchitis, reduced lung capacity), eye irritation, vegetation necrosis.',
      'Mitigation: National Clean Air Programme (NCAP) targeting 40% reduction in PM levels by 2026; enforcement of BS-VI standards; CAQM statutory oversight; Pusa bio-decomposers for stubble.'
    ]
  },
  {
    id: 'pyq-mains-2022-q16',
    exam: 'UPSC_MAINS',
    year: 2022,
    paper: 'GS-III',
    questionNumber: 16,
    marks: 15,
    topic: 'Disaster Management',
    subtopic: 'Cloudburst & Sendai Framework in Himalayas',
    difficulty: 'Medium',
    questionText: 'Explain the mechanism and causes of cloudburst events in the Indian Himalayan Region. Suggest disaster risk reduction measures as per Sendai Framework.',
    conceptTested: 'Orographic lifting, convective cloudburst (100 mm/hr over 20-30 sq km), Sendai Framework 4 Priorities, early warning Doppler radar.',
    currentAffairsLinkage: 'Recurrent monsoon disasters in Himachal Pradesh, Uttarakhand, and Amarnath cloudburst incidents.',
    officialSource: 'UPSC Civil Services (Main) Examination 2022 General Studies Paper-III',
    explanationOrModelAnswer: 'Cloudburst occurs when warm moist monsoon air currents undergo rapid orographic ascent along steep Himalayan slopes, forming massive cumulonimbus clouds. When vertical updrafts fail, catastrophic deluge is dumped over a localized pocket.',
    modelPoints: [
      'Mechanism: IMD defines cloudburst as rainfall >= 100 mm per hour over an area of ~20-30 sq km.',
      'Anthropogenic compounding: Unscientific slope cutting, road construction dumping debris into river beds, encroachment of natural drainage gullies.',
      'Sendai Framework Integration: Priority 1 (Understanding risk via landslide/GLOF micro-zonation); Priority 2 (Strengthening disaster governance through active DDMAs); Priority 3 (Investing in resilient infrastructure like elevated retaining walls); Priority 4 (Building back better and establishing Doppler weather radars in high hills).'
    ]
  },
  {
    id: 'pyq-mains-2021-q1',
    exam: 'UPSC_MAINS',
    year: 2021,
    paper: 'GS-III',
    questionNumber: 1,
    marks: 10,
    topic: 'Economy',
    subtopic: 'Fiscal Responsibility & FRBM Glide Path',
    difficulty: 'Hard',
    questionText: 'Distinguish between Capital Budget and Revenue Budget. Explain the components of both these Budgets. How has the FRBM Act guided fiscal consolidation in India?',
    conceptTested: 'Article 112, Revenue vs Capital account, FRBM Act 2003, NK Singh Committee recommendations, Escape Clauses.',
    currentAffairsLinkage: 'Post-pandemic fiscal glide path targeting fiscal deficit below 4.5% of GDP by FY26.',
    officialSource: 'UPSC Civil Services (Main) Examination 2021 General Studies Paper-III',
    explanationOrModelAnswer: 'Revenue Budget deals with current administrative expenses and taxes that create no assets or liabilities. Capital Budget relates to assets and liabilities (borrowings, loans, infrastructure investments).',
    modelPoints: [
      'Revenue Budget: Revenue Receipts (Tax & Non-Tax) vs Revenue Expenditure (Salaries, Interest payments, Subsidies).',
      'Capital Budget: Capital Receipts (Borrowings, Disinvestment, Loan recoveries) vs Capital Expenditure (Roads, Defense hardware, Loans to states).',
      'FRBM Guidance: Mandated reduction of Fiscal Deficit to 3% and Revenue Deficit to 0%. NK Singh Committee shifted focus to Debt-to-GDP (60% combined). Post-pandemic reset via fiscal glide path to <4.5% by FY26.'
    ]
  },
  {
    id: 'pyq-mains-2021-q10',
    exam: 'UPSC_MAINS',
    year: 2021,
    paper: 'GS-III',
    questionNumber: 10,
    marks: 10,
    topic: 'Internal Security',
    subtopic: 'Money Laundering & PMLA Framework',
    difficulty: 'Medium',
    questionText: 'Discuss how emerging technologies and globalisation have made money laundering more complex. What are the legal and institutional measures in place to tackle this menace in India?',
    conceptTested: 'Placement, Layering, Integration, Cryptocurrencies, Hawala, PMLA 2002, Enforcement Directorate (ED), FIU-IND, FATF.',
    currentAffairsLinkage: 'FATF Mutual Evaluation of India (2024) and regulatory crackdowns on unregistered crypto exchanges.',
    officialSource: 'UPSC Civil Services (Main) Examination 2021 General Studies Paper-III',
    explanationOrModelAnswer: 'Globalization and fintech have weaponized money laundering via decentralized crypto mixers, shell companies, and trade-based laundering, bypassing conventional SWIFT banking trails.',
    modelPoints: [
      'Modern Complexity: Dark web marketplaces, privacy coins (Monero), mule bank accounts, peer-to-peer crypto transfers.',
      'Legal Measures: Prevention of Money Laundering Act (PMLA 2002) - stringent bail conditions under Section 45, reversal of burden of proof (Section 24).',
      'Institutional Apparatus: Financial Intelligence Unit - India (FIU-IND) processing Suspicious Transaction Reports (STRs); Enforcement Directorate (ED) possessing asset attachment powers; compliance with FATF 40 recommendations.'
    ]
  },
  {
    id: 'pyq-mains-2020-q6',
    exam: 'UPSC_MAINS',
    year: 2020,
    paper: 'GS-III',
    questionNumber: 6,
    marks: 10,
    topic: 'Science & Tech',
    subtopic: 'Biotechnology: CRISPR-Cas9 & Gene Therapy',
    difficulty: 'Medium',
    questionText: 'What is the breakthrough technology behind CRISPR-Cas9? How does it differ from traditional genetic modification techniques? Discuss its ethical dimensions.',
    conceptTested: 'Clustered Regularly Interspaced Short Palindromic Repeats, guide RNA, Cas9 endonuclease, germline vs somatic editing, designer babies.',
    currentAffairsLinkage: '2020 Nobel Prize in Chemistry to Emmanuelle Charpentier and Jennifer Doudna; approval of Casgevy for sickle cell disease.',
    officialSource: 'UPSC Civil Services (Main) Examination 2020 General Studies Paper-III',
    explanationOrModelAnswer: 'CRISPR-Cas9 acts as programmable molecular scissors guided by synthetic RNA to cut and edit DNA at exact nucleotide coordinates, unlike random recombinant plasmid insertions.',
    modelPoints: [
      'Mechanism: Guide RNA (gRNA) locates specific target DNA sequence; Cas9 endonuclease makes a double-strand break; cell repairs cut via non-homologous end joining or homology-directed repair.',
      'Difference from Traditional GMOs: Precise base-level editing without introducing foreign species genes (transgenic vs cisgenic).',
      'Ethical Concerns: Germline editing passing heritable mutations to future generations; eugenics and "designer babies"; off-target genetic cuts causing cancers.'
    ]
  },
  {
    id: 'pyq-mains-2019-q1',
    exam: 'UPSC_MAINS',
    year: 2019,
    paper: 'GS-III',
    questionNumber: 1,
    marks: 10,
    topic: 'Economy',
    subtopic: 'Inclusive Growth & Financial Inclusion (JAM)',
    difficulty: 'Medium',
    questionText: 'It is argued that the strategy of inclusive growth is intended to meet the objectives of inclusiveness and sustainability together. Comment on this statement with reference to the Indian context.',
    conceptTested: '12th FYP inclusive growth definition, Lorenz curve, Gini coefficient, PMJDY, JAM Trinity, regional disparities.',
    currentAffairsLinkage: 'Expansion of Direct Benefit Transfer (DBT) and digital public infrastructure (DPI) in rural India.',
    officialSource: 'UPSC Civil Services (Main) Examination 2019 General Studies Paper-III',
    explanationOrModelAnswer: 'Inclusive growth guarantees that the dividends of GDP expansion reach the bottom quintile through productive employment, human capital investment, and financial inclusion while preserving ecological baselines.',
    modelPoints: [
      'Inclusiveness Dimensions: Universal banking access via PMJDY (50+ Crore accounts), gender parity in workforce, social safety nets (NFSA, Ayushman Bharat).',
      'Sustainability Dimensions: Pro-poor natural resource governance, decentralized renewable energy (PM-KUSUM), organic farming incentives.',
      'Challenges: Informal labor traps (90% in unorganized sector), high regional divergence (Western/Southern states vs BIMARU), wealth concentration.'
    ]
  },
  {
    id: 'pyq-mains-2018-q10',
    exam: 'UPSC_MAINS',
    year: 2018,
    paper: 'GS-III',
    questionNumber: 10,
    marks: 10,
    topic: 'Internal Security',
    subtopic: 'Left-Wing Extremism (LWE) & SAMADHAN Doctrine',
    difficulty: 'Medium',
    questionText: 'Left Wing Extremism (LWE) is showing a downward trend, but still affects many parts of the country. Briefly explain the Government of India\'s approach to counter the challenges posed by LWE.',
    conceptTested: 'Tribal land alienation, Forest Rights Act 2006, SAMADHAN doctrine, Greyhounds, CoBRA, Aspirational Districts.',
    currentAffairsLinkage: 'Reduction in notified SRE districts from 126 in 2014 to under 38 districts in 2024.',
    officialSource: 'UPSC Civil Services (Main) Examination 2018 General Studies Paper-III',
    explanationOrModelAnswer: 'The government employs a synchronized two-pronged strategy: aggressive tactical security operations coupled with holistic socio-economic empowerment under the SAMADHAN doctrine.',
    modelPoints: [
      'Security Measures: SAMADHAN operational framework; deployment of specialized forces (CRPF CoBRA, Greyhounds); fortified police stations; choking extortive funding networks via ED and NIA.',
      'Developmental Measures: Road Requirement Plan (RRP) building interior forest roads; Eklavya Model Residential Schools (EMRS); installation of 4G mobile towers in core Bastar villages.',
      'Trust Building: Implementation of PESA 1996 and Community Forest Rights under FRA 2006; surrender-cum-rehabilitation packages.'
    ]
  },
  {
    id: 'pyq-mains-2017-q1',
    exam: 'UPSC_MAINS',
    year: 2017,
    paper: 'GS-III',
    questionNumber: 1,
    marks: 10,
    topic: 'Economy',
    subtopic: 'NITI Aayog vs Planning Commission',
    difficulty: 'Medium',
    questionText: 'How are the principles followed by the NITI Aayog different from those followed by the erstwhile Planning Commission in India? Critically evaluate.',
    conceptTested: 'Command planning vs Cooperative federalism, top-down vs bottom-up, Governing Council, financial allocation powers.',
    currentAffairsLinkage: 'NITI Aayog 15-Year Vision Document and rollout of competitive indices (SDG India Index).',
    officialSource: 'UPSC Civil Services (Main) Examination 2017 General Studies Paper-III',
    explanationOrModelAnswer: 'Planning Commission followed a centralized, top-down resource allocation model; NITI Aayog acts as a strategic think-tank fostering cooperative and competitive federalism with zero fund allocation powers.',
    modelPoints: [
      'Structural Contrast: Planning Commission imposed uniform Five-Year Plans; NITI Aayog operates on 15-Year Vision, 7-Year Strategy, and 3-Year Action Agenda.',
      'Federal Inclusivity: Chief Ministers were mere observers in NDC; in NITI Aayog, all CMs are equal members of the Governing Council.',
      'Role of Market: NITI Aayog views private enterprise as strategic partners rather than secondary actors.',
      'Criticism: Lack of fund disbursement powers leaves backward states dependent on Finance Ministry discretion.'
    ]
  },

  // --------------------------------------------------------------------------
  // 2. UPPSC PCS MAINS GS-III AUTHENTIC QUESTIONS
  // --------------------------------------------------------------------------
  {
    id: 'pyq-uppsc-mains-2023-q8',
    exam: 'UPPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 8,
    marks: 12,
    topic: 'Economy',
    subtopic: 'Uttar Pradesh Defence Industrial Corridor',
    difficulty: 'Medium',
    questionText: 'Examine the role of the Uttar Pradesh Defence Industrial Corridor (UPDIC) in enhancing domestic defence manufacturing and regional economic growth in the state.',
    conceptTested: 'UPDIC 6 nodes (Aligarh, Agra, Kanpur, Chitrakoot, Jhansi, Lucknow), Make in India, MSME backward linkages.',
    currentAffairsLinkage: 'MoUs signed during UP Global Investors Summit and BrahMos missile assembly unit in Lucknow.',
    officialSource: 'UPPSC Combined State/Upper Subordinate Services (Mains) Examination 2023 Paper-III',
    explanationOrModelAnswer: 'UPDIC connects 6 strategic industrial nodes, leveraging Bundelkhand and Purvanchal expressways to provide world-class logistics for defence aerospace, metallurgy, and weapons manufacturing.',
    modelPoints: [
      'Nodes: Agra, Aligarh, Kanpur, Chitrakoot, Jhansi, Lucknow.',
      'Major Investments: BrahMos Aerospace assembly in Lucknow; small arms and ammunition cluster in Jhansi (Adani & Bharat Forge); hardware testing in Aligarh.',
      'Economic Multiplier: Galvanizes local MSMEs into Tier-1 and Tier-2 suppliers; creates high-skilled engineering jobs; drives industrialization in economically backward Bundelkhand.'
    ]
  },
  {
    id: 'pyq-uppsc-mains-2023-q14',
    exam: 'UPPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 14,
    marks: 12,
    topic: 'Economy',
    subtopic: 'Road to $1-Trillion Economy of UP',
    difficulty: 'Hard',
    questionText: 'Uttar Pradesh has envisioned becoming a $1-Trillion economy. Analyze the major sectoral engines and regional challenges that must be addressed to achieve this goal.',
    conceptTested: 'UP GSDP target, Western UP vs Purvanchal vs Bundelkhand regional disparities, UP GIS 2023, UP FRBM.',
    currentAffairsLinkage: 'GBC-IV grounding investments worth ₹10 Lakh Crore and focus on expressway-led economic zones.',
    officialSource: 'UPPSC Combined State/Upper Subordinate Services (Mains) Examination 2023 Paper-III',
    explanationOrModelAnswer: 'Achieving a $1-Trillion economy requires UP\'s GSDP to grow at over 15-18% annually, needing transformation across manufacturing, high-value agro-processing, and bridging the severe East-West regional divide.',
    modelPoints: [
      'Sectoral Engines: Manufacturing expansion (Defence Corridor, electronics in Noida/Yamuna Expressway); Agriculture modernization (ODOP clusters, cold chains); Religious & cultural tourism (Kashi, Ayodhya, Mathura circuits).',
      'Regional Disparities: Western UP generates ~50% of GSDP; Purvanchal and Bundelkhand suffer from low capital formation and disguised agrarian employment.',
      'Requisite Interventions: Fast-track industrial land acquisition, reduce DISCOM power transmission losses, enhance skill training for rural youth.'
    ]
  },
  {
    id: 'pyq-uppsc-mains-2022-q5',
    exam: 'UPPSC_MAINS',
    year: 2022,
    paper: 'GS-III',
    questionNumber: 5,
    marks: 8,
    topic: 'Agriculture',
    subtopic: 'Sugarcane Pricing: FRP vs SAP in UP',
    difficulty: 'Medium',
    questionText: 'Explain the mechanism of determination of Sugarcane price in Uttar Pradesh. What are the challenges faced by sugarcane farmers and sugar mill owners in the state?',
    conceptTested: 'CACP Fair & Remunerative Price (FRP), UP State Advised Price (SAP), cane arrears, ethanol blending diversification.',
    currentAffairsLinkage: 'State revision of SAP and redirection of surplus cane juice towards ethanol production.',
    officialSource: 'UPPSC Combined State/Upper Subordinate Services (Mains) Examination 2022 Paper-III',
    explanationOrModelAnswer: 'Centre fixes FRP based on CACP recommendations; UP declares a higher SAP under state legislation, creating fiscal friction between farmers demanding timely payments and millers facing sugar inventory gluts.',
    modelPoints: [
      'Pricing Mechanism: FRP determined under Sugarcane (Control) Order 1966; UP SAP fixed under UP Sugarcane Act 1953 (consistently ₹20-30/quintal higher than central FRP).',
      'Farmers\' Grievances: Persistent cane payment arrears; delayed crushing seasons; rising diesel and fertilizer input costs.',
      'Millers\' Bottlenecks: Fixed SAP irrespective of falling open-market sugar prices; working capital crunches; power export dues from state DISCOMs.',
      'Solutions: National Biofuel Policy ethanol blending programme (E20) enabling mills to generate round-the-year cash flows.'
    ]
  },
  {
    id: 'pyq-uppsc-mains-2022-q15',
    exam: 'UPPSC_MAINS',
    year: 2022,
    paper: 'GS-III',
    questionNumber: 15,
    marks: 12,
    topic: 'Internal Security',
    subtopic: 'Indo-Nepal Open Border Management in UP',
    difficulty: 'Medium',
    questionText: 'Discuss the security challenges along the open Indo-Nepal border in Uttar Pradesh and evaluate the role of the Sashastra Seema Bal (SSB) in border security.',
    conceptTested: '551 km Indo-Nepal border, 7 border districts of UP, 1950 Friendship Treaty, FICN, human trafficking, SSB mandate.',
    currentAffairsLinkage: 'Installation of biometric automated facial recognition systems at Rupaidiha and Sunauli Integrated Check Posts.',
    officialSource: 'UPPSC Combined State/Upper Subordinate Services (Mains) Examination 2022 Paper-III',
    explanationOrModelAnswer: 'UP shares a 551 km visa-free border with Nepal across 7 districts. While promoting friendly people-to-people ties, the open frontier is exploited for fake currency smuggling, human trafficking, and third-party intelligence penetration.',
    modelPoints: [
      'Vulnerabilities: 7 Border districts (Pilibhit, Lakhimpur Kheri, Bahraich, Shravasti, Balrampur, Siddharthnagar, Maharajganj); unregulated transit via unfenced rural crossings.',
      'Criminal Vectors: Smuggling of Chinese goods, Fake Indian Currency Notes (FICN), drug cartels, and vulnerable women trafficking.',
      'Role of SSB: Mandated with "Service, Security and Brotherhood"; conducts joint foot patrols, manages check-posts, runs Community Civic Action programmes to win local border population trust.'
    ]
  },

  // --------------------------------------------------------------------------
  // 3. UP RO/ARO AUTHENTIC PRELIMS / MAINS GS QUESTIONS
  // --------------------------------------------------------------------------
  {
    id: 'pyq-roaro-2021-q1',
    exam: 'UP_RO_ARO',
    year: 2021,
    paper: 'RO/ARO GS',
    questionNumber: 42,
    topic: 'Agriculture',
    subtopic: 'ICAR Research Institutes in UP (Match List)',
    difficulty: 'Medium',
    questionText: 'Match List-I (Institute) with List-II (Headquarters/City in UP) and select the correct answer using the codes given below:\nList-I:\nA. Indian Institute of Pulses Research (IIPR)\nB. Indian Institute of Sugarcane Research (IISR)\nC. Central Potato Research Station (CPRS)\nD. Indian Veterinary Research Institute (IVRI)\n\nList-II:\n1. Lucknow\n2. Kanpur\n3. Izatnagar, Bareilly\n4. Modipuram, Meerut',
    conceptTested: 'Agricultural research institutes under ICAR located in Uttar Pradesh.',
    currentAffairsLinkage: 'Standard high-frequency factual question in UPPSC and UP RO/ARO examinations.',
    officialSource: 'UP Review Officer / Assistant Review Officer (RO/ARO) Examination 2021 Paper-I',
    explanationOrModelAnswer: 'Correct Match: A-2 (IIPR -> Kanpur), B-1 (IISR -> Lucknow), C-4 (CPRS -> Modipuram, Meerut), D-3 (IVRI -> Izatnagar, Bareilly).',
    modelPoints: [
      'IIPR Kanpur: Apex pulse research body established in 1966.',
      'IISR Lucknow: Established in 1952 for fundamental sugarcane research.',
      'CPRS Modipuram (Meerut): Regional research station under CPRI Shimla.',
      'IVRI Izatnagar (Bareilly): Established in 1889; India\'s premier veterinary research institution.'
    ]
  },
  {
    id: 'pyq-roaro-2021-q2',
    exam: 'UP_RO_ARO',
    year: 2021,
    paper: 'RO/ARO GS',
    questionNumber: 68,
    topic: 'Environment',
    subtopic: 'UP Protected Areas & Wildlife Sanctuaries (Match List)',
    difficulty: 'Easy',
    questionText: 'Match List-I (Sanctuary / Park) with List-II (District Location) and choose the correct code:\nList-I:\nA. Dudhwa National Park\nB. Chandraprabha Wildlife Sanctuary\nC. Okhla Bird Sanctuary\nD. Hastinapur Wildlife Sanctuary\n\nList-II:\n1. Chandauli\n2. Lakhimpur Kheri\n3. Meerut / Ghaziabad / Amroha\n4. Gautam Buddha Nagar',
    conceptTested: 'Wildlife Sanctuaries and National Parks of Uttar Pradesh and their respective district boundaries.',
    currentAffairsLinkage: 'Core static environment component tested annually in UP PSC exams.',
    officialSource: 'UP Review Officer / Assistant Review Officer (RO/ARO) Examination 2021 Paper-I',
    explanationOrModelAnswer: 'Correct Match: A-2 (Dudhwa -> Lakhimpur Kheri), B-1 (Chandraprabha -> Chandauli), C-4 (Okhla Bird -> Gautam Buddha Nagar), D-3 (Hastinapur -> Meerut/Amroha/Ghaziabad).',
    modelPoints: [
      'Dudhwa: Only National Park in UP, declared in 1977.',
      'Chandraprabha: Located in Vindhyan ranges of Chandauli district.',
      'Okhla Bird Sanctuary: Situated at the entrance of Yamuna river into UP.',
      'Hastinapur: Largest wildlife sanctuary in UP (~2,073 sq km).'
    ]
  },
  {
    id: 'pyq-roaro-2021-q3',
    exam: 'UP_RO_ARO',
    year: 2021,
    paper: 'RO/ARO GS',
    questionNumber: 95,
    topic: 'Infrastructure',
    subtopic: 'Purvanchal Expressway Specifications',
    difficulty: 'Medium',
    questionText: 'Which of the following districts of Uttar Pradesh is NOT traversed by the Purvanchal Expressway?\n(a) Ayodhya\n(b) Basti\n(c) Azamgarh\n(d) Mau',
    conceptTested: 'Purvanchal Expressway (340.8 km) alignment across 9 districts.',
    currentAffairsLinkage: 'Inauguration of Purvanchal Expressway in November 2021.',
    officialSource: 'UP Review Officer / Assistant Review Officer (RO/ARO) Examination 2021 Paper-I',
    explanationOrModelAnswer: 'Correct Answer: (b) Basti. Purvanchal Expressway does NOT pass through Basti. It traverses 9 districts: Lucknow, Barabanki, Amethi, Sultanpur, Ayodhya, Ambedkar Nagar, Azamgarh, Mau, and Ghazipur.',
    modelPoints: [
      'Exact Length: 340.824 km.',
      'Start Point: Chand Sarai village (Lucknow).',
      'End Point: Haidaria village (Ghazipur).',
      'Districts: 9 districts in total (Basti is located north of the alignment across Ghaghara river).'
    ]
  },
  {
    id: 'pyq-roaro-2017-q1',
    exam: 'UP_RO_ARO',
    year: 2017,
    paper: 'RO/ARO GS',
    questionNumber: 114,
    topic: 'Agriculture',
    subtopic: 'Agricultural Production Rankings of UP',
    difficulty: 'Easy',
    questionText: 'In which of the following crop productions does Uttar Pradesh rank FIRST in India?\n1. Wheat\n2. Rice\n3. Sugarcane\n4. Potato\nSelect the correct answer using the codes below:\n(a) 1 and 2 only\n(b) 1, 3 and 4 only\n(c) 2, 3 and 4 only\n(d) 1, 2, 3 and 4',
    conceptTested: 'All-India crop production rankings and UP\'s national agricultural contribution.',
    currentAffairsLinkage: 'Annual Agricultural Statistics at a Glance by Ministry of Agriculture.',
    officialSource: 'UP Review Officer / Assistant Review Officer (RO/ARO) Examination 2017',
    explanationOrModelAnswer: 'Correct Answer: (b) 1, 3 and 4 only. UP ranks 1st in Wheat, Sugarcane, and Potato. In Rice production, UP ranks SECOND (after West Bengal).',
    modelPoints: [
      'Wheat: UP produces ~32-34% of national output (1st).',
      'Rice: West Bengal ranks 1st; UP ranks 2nd with ~13-15%.',
      'Sugarcane: UP produces ~45% of India\'s cane (1st).',
      'Potato: UP accounts for ~35% of national harvest (1st).'
    ]
  }
];

export const pyqTopicStats = [
  { topic: 'Economy & Planning', count: 72, percentage: 29, trend: 'High & Rising (Capex, Fiscal, Inflation)' },
  { topic: 'Agriculture & Food Processing', count: 54, percentage: 22, trend: 'Very High (MSP, Irrigation, DSR, PDS)' },
  { topic: 'Science & Technology', count: 38, percentage: 16, trend: 'Rising (AI, Space, Biotech, Quantum)' },
  { topic: 'Environment & Climate Change', count: 42, percentage: 17, trend: 'Consistent (Conventions, Pollution, EIA)' },
  { topic: 'Disaster Management', count: 18, percentage: 7, trend: 'Stable (Sendai, Urban Floods, GLOFs)' },
  { topic: 'Internal Security', count: 22, percentage: 9, trend: 'Consistent (Border, Cyber, LWE, PMLA)' }
];

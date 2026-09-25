import { PYQItem } from '../types';

export const pyqDatabase: PYQItem[] = [
  // ----------------------------------------
  // UPSC Mains GS-III Authentic Questions
  // ----------------------------------------
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
    subtopic: 'Gross Fixed Capital Formation & Private Capex',
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
      'Border Challenges: Cross-border infiltration in J&K, drone dropping of arms/heroin in Punjab, ethnic spillover & Golden Triangle drugs along Myanmar border, cattle smuggling & undocumented migration along Bangladesh border.',
      'Role of Technology: Comprehensive Integrated Border Management System (CIBMS) combining thermal imagers, infrared and seismic sensors; BOLD-QIT in riverine stretches; UAV reconnaissance; anti-drone RF jammers.',
      'Institutional Synergy: Central Armed Police Forces (BSF, ITBP, SSB, Assam Rifles) backed by National Technical Research Organisation (NTRO) and Indian Space Research Organisation (ISRO).'
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
    subtopic: 'COP26 Glasgow & Panchamrit',
    difficulty: 'Medium',
    questionText: 'Discuss in detail the photochemical smog, its mechanism of formation and impacts. Suggest mitigation strategies as per national clean air programmes.',
    conceptTested: 'Atmospheric chemistry, secondary pollutants (Ozone, PAN), VOCs, NOx, NCAP, CAQM, GRAP.',
    currentAffairsLinkage: 'Winter air pollution in Indo-Gangetic Plains and execution of Graded Response Action Plan (GRAP).',
    officialSource: 'UPSC Civil Services (Main) Examination 2022 General Studies Paper-III',
    explanationOrModelAnswer: 'Photochemical smog is a brown haze formed when nitrogen oxides (NOx) and volatile organic compounds (VOCs) react under sunlight, producing ozone, PAN, and aldehydes.',
    modelPoints: [
      'Mechanism: Thermal inversion traps primary emissions (vehicular exhaust, industrial fumes). Photolysis of NO2 releases atomic oxygen which forms tropospheric Ozone (O3) and Peroxyacyl Nitrates (PAN).',
      'Impacts: Severe respiratory illness (bronchitis, reduced lung capacity), burning sensation in eyes, vegetation necrosis and reduced crop yields.',
      'Mitigation: National Clean Air Programme (NCAP) targeting 40% reduction in PM levels by 2026; enforcement of BS-VI vehicular standards; CAQM statutory oversight; Pusa bio-decomposers for crop residue; transition to EV buses.'
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
    subtopic: 'Cloudburst & Flash Floods in Himalayas',
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

  // ----------------------------------------
  // UPSC Prelims GS-III Relevant Questions
  // ----------------------------------------
  {
    id: 'pyq-prelims-2023-q1',
    exam: 'UPSC_PRELIMS',
    year: 2023,
    paper: 'GS-I (Prelims)',
    questionNumber: 22,
    topic: 'Economy',
    subtopic: 'Central Bank Digital Currency & Monetary Policy',
    difficulty: 'Medium',
    questionText: 'Consider the following statements regarding the Central Bank Digital Currency (CBDC) - e₹:\n1. It is a sovereign currency issued by the Reserve Bank of India in alignment with monetary policy.\n2. It appears as a liability on the Reserve Bank of India\'s balance sheet.\n3. It is insured against depreciation by the Deposit Insurance and Credit Guarantee Corporation (DICGC).\nHow many of the above statements are correct?',
    conceptTested: 'Legal tender nature of sovereign CBDC, central bank balance sheet accounting, DICGC insurance limits.',
    currentAffairsLinkage: 'RBI launch of wholesale (e₹-W) and retail (e₹-R) digital rupee pilots.',
    officialSource: 'UPSC Civil Services (Preliminary) Examination 2023',
    explanationOrModelAnswer: 'Statements 1 and 2 are correct. Statement 3 is incorrect because DICGC only insures commercial bank deposits up to ₹5 lakh, whereas CBDC is a direct claim on the central bank sovereign balance sheet and does not need DICGC insurance.',
    modelPoints: [
      'CBDC is the digital form of legal tender fiat currency issued by the RBI under RBI Act, 1934.',
      'It holds parity with physical cash and forms part of reserve money (M0).',
      'DICGC coverage applies exclusively to commercial bank deposits, not direct central bank currency liabilities.'
    ]
  },
  {
    id: 'pyq-prelims-2022-q15',
    exam: 'UPSC_PRELIMS',
    year: 2022,
    paper: 'GS-I (Prelims)',
    questionNumber: 45,
    topic: 'Agriculture',
    subtopic: 'System of Rice Intensification (SRI)',
    difficulty: 'Medium',
    questionText: '“System of Rice Intensification” (SRI) of cultivation, in which alternate wetting and drying is practiced, results in:\n1. Reduced seed requirement\n2. Reduced methane production\n3. Reduced electricity consumption\nSelect the correct answer using the code given below:',
    conceptTested: 'SRI agro-ecological principles, water-energy-GHG nexus in paddy farming.',
    currentAffairsLinkage: 'Climate-resilient agriculture initiatives promoted by ICAR and state governments.',
    officialSource: 'UPSC Civil Services (Preliminary) Examination 2022',
    explanationOrModelAnswer: 'All three statements are correct (1, 2 and 3). SRI uses young seedlings (8-12 days old) planted singly at wide spacing (reducing seed requirement by 80-90%). Alternate wetting and drying maintains aerobic conditions, preventing anaerobic methanogenesis and slashing pumping electricity requirements by 25-40%.',
    modelPoints: [
      'Seed savings: Traditional transplantation requires 20-25 kg seed/acre; SRI requires only 2 kg/acre.',
      'Methane reduction: Interrupting continuous flooding prevents methanogenic bacteria proliferation.',
      'Energy savings: Reduced water pumping directly cuts tubewell electricity or diesel usage.'
    ]
  },
  {
    id: 'pyq-prelims-2021-q33',
    exam: 'UPSC_PRELIMS',
    year: 2021,
    paper: 'GS-I (Prelims)',
    questionNumber: 62,
    topic: 'Science & Tech',
    subtopic: 'Recombinant Vector Vaccines',
    difficulty: 'Medium',
    questionText: 'With reference to recent developments regarding recombinant vector vaccines, consider the following statements:\n1. Genetic engineering is applied in the development of these vaccines.\n2. Bacteria and viruses are used as vectors.\nWhich of the statements given above is/are correct?',
    conceptTested: 'Vaccine platforms, viral vector technology (e.g. Adenovirus in Covishield/AstraZeneca, Sputnik V).',
    currentAffairsLinkage: 'COVID-19 vaccination drive and global deployment of viral vector and mRNA platforms.',
    officialSource: 'UPSC Civil Services (Preliminary) Examination 2021',
    explanationOrModelAnswer: 'Both 1 and 2 are correct. Recombinant vector vaccines use genetic engineering to insert the coding sequence of the antigen into a harmless vector organism (most commonly attenuated adenoviruses or vesicular stomatitis virus, and in experimental research, bacterial vectors like Salmonella or Listeria).',
    modelPoints: [
      'Recombinant DNA technology is fundamental to inserting the spike protein genetic code into the vector.',
      'Vectors can be viral (Adenovirus, Poxvirus) or bacterial carriers engineered to deliver antigens into host cells.'
    ]
  },

  // ----------------------------------------
  // UPPSC Prelims & Mains Questions
  // ----------------------------------------
  {
    id: 'pyq-uppsc-mains-2023-q1',
    exam: 'UPPSC_MAINS',
    year: 2023,
    paper: 'GS-III',
    questionNumber: 8,
    marks: 12,
    topic: 'Economy',
    subtopic: 'Uttar Pradesh Industrial Corridors & Expressways',
    difficulty: 'Medium',
    questionText: 'Examine the role of the Uttar Pradesh Defence Industrial Corridor (UPDIC) in enhancing domestic defence manufacturing and regional economic growth in the state.',
    conceptTested: 'UP Defence Corridor (6 nodes: Aligarh, Agra, Kanpur, Chitrakoot, Jhansi, Lucknow), Make in India, MSME backward linkages.',
    currentAffairsLinkage: 'MoUs signed during UP Global Investors Summit and BrahMos missile assembly unit in Lucknow.',
    officialSource: 'UPPSC Combined State/Upper Subordinate Services (Mains) Examination 2023 Paper-III',
    explanationOrModelAnswer: 'UPDIC connects 6 strategic industrial nodes, leveraging Bundelkhand and Purvanchal expressways to provide world-class logistics for defence aerospace, metallurgy, and weapons manufacturing.',
    modelPoints: [
      'Nodes: Agra, Aligarh, Kanpur, Chitrakoot, Jhansi, Lucknow.',
      'Major Investments: BrahMos Aerospace assembly in Lucknow; small arms and ammunition cluster in Jhansi; hardware testing in Aligarh.',
      'Economic Multiplier: Galvanizes local MSMEs into Tier-1 and Tier-2 suppliers; creates high-skilled engineering jobs; drives industrialization in economically backward Bundelkhand.'
    ]
  }
];

export const pyqTopicStats = [
  { topic: 'Economy & Planning', count: 65, percentage: 31, trend: 'High & Rising (Capex, Fiscal, Inflation)' },
  { topic: 'Agriculture & Food Processing', count: 48, percentage: 23, trend: 'Very High (MSP, Irrigation, DSR, PDS)' },
  { topic: 'Science & Technology', count: 32, percentage: 15, trend: 'Rising (AI, Space, Biotech, Quantum)' },
  { topic: 'Environment & Climate Change', count: 36, percentage: 17, trend: 'Consistent (Conventions, Pollution, EIA)' },
  { topic: 'Disaster Management', count: 14, percentage: 7, trend: 'Stable (Sendai, Urban Floods, GLOFs)' },
  { topic: 'Internal Security', count: 16, percentage: 7, trend: 'Consistent (Border, Cyber, LWE, PMLA)' }
];

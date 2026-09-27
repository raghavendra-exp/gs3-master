// ============================================================================
// GS-III OFFICIAL PDF BOOKS, NCERTs & GOVERNMENT RESOURCE LIBRARY
// ============================================================================

import { PdfBookItem } from '../types';

export const pdfBooksDatabase: PdfBookItem[] = [
  // --------------------------------------------------------------------------
  // ECONOMICS & PLANNING NCERTs & OFFICIAL PDFs
  // --------------------------------------------------------------------------
  {
    id: 'pdf-ncert-econ-11',
    title: 'NCERT Class 11: Indian Economic Development',
    authorOrPublisher: 'NCERT',
    category: 'Economy',
    classOrLevel: 'Class 11',
    readingPriority: 'Must Read',
    description: 'The definitive foundation for UPSC GS-III Economy. Traces India’s economic trajectory from colonial exploitation, through five-year planning (1950–1990), to the 1991 LPG reforms, employment, infrastructure, and sustainable development.',
    keyChapters: [
      'Chapter 1: Indian Economy on the Eve of Independence',
      'Chapter 2: Indian Economy (1950–1990) - Goals of Planning & Land Reforms',
      'Chapter 3: Liberalisation, Privatisation and Globalisation: An Appraisal',
      'Chapter 4: Poverty (Absolute vs Relative, Poverty Line, MPM)',
      'Chapter 5: Human Capital Formation in India',
      'Chapter 6: Rural Development (Credit, Marketing & Diversification)',
      'Chapter 7: Employment: Growth, Informalisation and Other Issues',
      'Chapter 8: Infrastructure (Energy, Health, Transport)',
      'Chapter 9: Environment and Sustainable Development',
      'Chapter 10: Comparative Development Experiences of India and its Neighbours'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?keec1=0-10',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Book (10 Chapters)',
    tags: ['NCERT', 'Class 11', 'Economy', 'Planning', '1991 Reforms', 'Employment']
  },
  {
    id: 'pdf-ncert-macro-12',
    title: 'NCERT Class 12: Introductory Macroeconomics',
    authorOrPublisher: 'NCERT',
    category: 'Economy',
    classOrLevel: 'Class 12',
    readingPriority: 'Must Read',
    description: 'The conceptual bible for macroeconomics: GDP vs GVA, National Income accounting formulas, Money creation & banking multiplier, Central Bank monetary policy instruments, Government Budgeting (Deficits & FRBM), and Balance of Payments.',
    keyChapters: [
      'Chapter 1: Introduction to Macroeconomics (Classical vs Keynesian)',
      'Chapter 2: National Income Accounting (GDP, GNP, NNP at Factor Cost vs Market Price)',
      'Chapter 3: Money and Banking (High-Powered Money, Repo/CRR/SLR, Money Multiplier)',
      'Chapter 4: Determination of Income and Employment',
      'Chapter 5: Government Budget and the Economy (Revenue/Capital Deficit, Fiscal Stance)',
      'Chapter 6: Open Economy Macroeconomics (Current/Capital Account, BoP, Exchange Rates)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?leec1=0-6',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Book (6 Chapters)',
    tags: ['NCERT', 'Class 12', 'Macroeconomics', 'Budget', 'BoP', 'Monetary Policy']
  },
  {
    id: 'pdf-ncert-econ-10',
    title: 'NCERT Class 10: Understanding Economic Development',
    authorOrPublisher: 'NCERT',
    category: 'Economy',
    classOrLevel: 'Class 10',
    readingPriority: 'High Yield',
    description: 'Essential primer on the three sectors of the economy (Primary, Secondary, Tertiary), formal vs informal credit channels, Self-Help Groups (SHGs), and globalization dynamics.',
    keyChapters: [
      'Chapter 1: Development (Per Capita Income, HDI, Sustainable Development)',
      'Chapter 2: Sectors of the Indian Economy (Historical changes, Disguised unemployment)',
      'Chapter 3: Money and Credit (Formal vs Informal sectors, SHGs for the poor)',
      'Chapter 4: Globalisation and the Indian Economy (MNCs, WTO, Fair Globalisation)',
      'Chapter 5: Consumer Rights'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?jepd1=0-5',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Book (5 Chapters)',
    tags: ['NCERT', 'Class 10', 'Development', 'Sectors', 'Credit']
  },
  {
    id: 'pdf-ncert-econ-9',
    title: 'NCERT Class 9: Economics',
    authorOrPublisher: 'NCERT',
    category: 'Economy',
    classOrLevel: 'Class 9',
    readingPriority: 'Selective Reference',
    description: 'Covers the four factors of production (Land, Labour, Physical Capital, Human Capital), disguised unemployment in farming, and the institutional mechanism of Food Security in India (PDS & Buffer Stocks).',
    keyChapters: [
      'Chapter 1: The Story of Village Palampur (Organization of Production, Farming in Palampur)',
      'Chapter 2: People as Resource (Economic Activities, Quality of Population, Unemployment)',
      'Chapter 3: Poverty as a Challenge (Poverty estimates, Vulnerable groups, Anti-poverty measures)',
      'Chapter 4: Food Security in India (What is Food Security, Buffer Stock, PDS, Role of Cooperatives)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?ieec1=0-4',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Book (4 Chapters)',
    tags: ['NCERT', 'Class 9', 'Food Security', 'Production Factors', 'PDS']
  },
  {
    id: 'pdf-economic-survey',
    title: 'Economic Survey of India (Latest Official Document)',
    authorOrPublisher: 'Ministry of Finance, Government of India',
    category: 'Economy',
    classOrLevel: 'Apex Report',
    readingPriority: 'Must Read',
    description: 'The single most authoritative analytical document on the Indian economy presented before the Union Budget. Formulated by the Chief Economic Adviser (CEA); contains verified statistics on GDP, inflation, fiscal deficit, capex, and external sector.',
    keyChapters: [
      'State of the Economy: Steady as She Goes',
      'Monetary Management and Financial Intermediation',
      'Prices and Inflation: Under Control',
      'Fiscal Developments: Consolidation and Quality Capex',
      'External Sector: Resilient in Uncertain Times',
      'Agriculture and Food Management: Re-evaluating Priorities',
      'Industry: Spotlights on Manufacturing & PLI',
      'Services: Fuelling India’s Growth Engine',
      'Infrastructure: Catalysing Growth (PM Gati Shakti)',
      'Climate Change and Environment: Transition with Equity'
    ],
    pdfUrl: 'https://www.indiabudget.gov.in/economicsurvey/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Official GoI Release (PDF)',
    tags: ['Economic Survey', 'MoF', 'CEA', 'Macroeconomics', 'Indicators']
  },
  {
    id: 'pdf-union-budget',
    title: 'Union Budget: Budget at a Glance & Key Documents',
    authorOrPublisher: 'Ministry of Finance, Government of India',
    category: 'Economy',
    classOrLevel: 'Apex Report',
    readingPriority: 'Must Read',
    description: 'Official budget papers detailing Revenue vs Capital Receipts and Outlays, Fiscal Deficit targets (FRBM), Sectoral scheme allocations, and macroeconomic deficit trajectory.',
    keyChapters: [
      'Budget at a Glance (Deficit indicators, Rupee comes from / Rupee goes to)',
      'Receipts Budget (Tax buoyancy, Non-tax dividends, Capital receipts)',
      'Expenditure Budget (Revenue vs Capital outlays, Major Centrally Sponsored Schemes)',
      'Macroeconomic Framework Statement & Medium Term Fiscal Policy Statement'
    ],
    pdfUrl: 'https://www.indiabudget.gov.in/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Official Annual Release',
    tags: ['Union Budget', 'Fiscal Deficit', 'Capital Expenditure', 'MoF']
  },
  {
    id: 'pdf-niti-strategy-75',
    title: 'NITI Aayog: Strategy for New India @ 75',
    authorOrPublisher: 'NITI Aayog',
    category: 'Economy',
    classOrLevel: 'Apex Report',
    readingPriority: 'High Yield',
    description: 'Comprehensive policy roadmap establishing detailed targets and strategic action plans across 41 thematic chapters divided into Drivers, Infrastructure, Inclusion, and Governance.',
    keyChapters: [
      'Drivers: Economic Growth, Employment, Agriculture, Doubling Farmers’ Income',
      'Infrastructure: Energy, Surface Transport, Railways, Civil Aviation, Ports, Logistics',
      'Inclusion: Health, Education, Skill Development, Women Empowerment',
      'Governance: Civil Services Reforms, Modernization of City Governance'
    ],
    pdfUrl: 'https://www.niti.gov.in/reports-and-indices',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Document (41 Chapters)',
    tags: ['NITI Aayog', 'Strategy @ 75', 'Policy', 'Vision']
  },

  // --------------------------------------------------------------------------
  // AGRICULTURE & CROPPING NCERTs & OFFICIAL PDFs
  // --------------------------------------------------------------------------
  {
    id: 'pdf-ncert-geo-12-india',
    title: 'NCERT Class 12 Geography: India - People and Economy',
    authorOrPublisher: 'NCERT',
    category: 'Agriculture',
    classOrLevel: 'Class 12',
    readingPriority: 'Must Read',
    description: 'The foundation for GS-III Agriculture, Cropping patterns, Irrigation systems, and Mineral/Energy resources. Details agro-climatic conditions for rice, wheat, cotton, jute, sugarcane, tea, and coffee, along with watershed management.',
    keyChapters: [
      'Chapter 5: Land Resources and Agriculture (Cropping Seasons, Types of Farming, Major Crops, Problems of Indian Agriculture)',
      'Chapter 6: Water Resources (Groundwater vs Surface, Irrigation demand, Watershed Management: Haryali, Neeru-Meeru)',
      'Chapter 7: Mineral and Energy Resources (Conventional vs Non-conventional)',
      'Chapter 8: Planning and Sustainable Development in Indian Context (ITDP, Hill Area, Drought Prone Area programmes)',
      'Chapter 9: Transport and Communication (Roads, National Waterways, DFCs)',
      'Chapter 10: International Trade (Composition & direction of India’s trade)',
      'Chapter 12: Geographical Perspective on Selected Issues and Problems (Environmental pollution, Urban waste disposal, Slums)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?legy2=0-9',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Book (9 Chapters)',
    tags: ['NCERT', 'Class 12', 'Geography', 'Agriculture', 'Water Resources', 'Cropping']
  },
  {
    id: 'pdf-ncert-geo-10-contemp',
    title: 'NCERT Class 10 Geography: Contemporary India - II',
    authorOrPublisher: 'NCERT',
    category: 'Agriculture',
    classOrLevel: 'Class 10',
    readingPriority: 'High Yield',
    description: 'Lucid coverage of Indian farming types (Primitive subsistence, Intensive subsistence, Commercial), cropping seasons (Kharif, Rabi, Zaid), food security, and impact of globalization on agriculture.',
    keyChapters: [
      'Chapter 1: Resources and Development (Land degradation and conservation measures)',
      'Chapter 3: Water Resources (Multi-purpose river projects, Rainwater harvesting)',
      'Chapter 4: Agriculture (Types of farming, Cropping pattern, Major crops, Technological & Institutional reforms)',
      'Chapter 5: Minerals and Energy Resources (Solar, Wind, Biogas, Tidal)',
      'Chapter 6: Manufacturing Industries (Agro-based vs Mineral-based, Industrial pollution)',
      'Chapter 7: Lifelines of National Economy (Golden Quadrilateral, Major Ports, Pipelines)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?jess1=0-7',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Book (7 Chapters)',
    tags: ['NCERT', 'Class 10', 'Agriculture', 'Water Resources', 'Farming']
  },
  {
    id: 'pdf-cacp-price-policy',
    title: 'CACP Price Policy for Kharif & Rabi Crops Reports',
    authorOrPublisher: 'Commission for Agricultural Costs and Prices (CACP), MoA&FW',
    category: 'Agriculture',
    classOrLevel: 'Apex Report',
    readingPriority: 'High Yield',
    description: 'Official annual reports detailing Cost A2, A2+FL, and C2 calculations across 22 mandated crops, inter-crop parity, state-level yield gaps, fertilizer NPK imbalances, and procurement trends.',
    keyChapters: [
      'Price Policy for Kharif Crops: Cost of Cultivation and Recommendations',
      'Price Policy for Rabi Crops: Wheat, Gram, Mustard and Barley Economics',
      'Macro Scenario in Agriculture: Terms of Trade between Agriculture and Non-Agriculture',
      'Non-Price Recommendations (Storage, Silos, Irrigation, Crop Diversification)'
    ],
    pdfUrl: 'https://cacp.dacnet.nic.in/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Annual Government Report',
    tags: ['CACP', 'MSP', 'Agriculture Cost', 'Procurement', 'Fertilizer']
  },
  {
    id: 'pdf-dalwai-committee-summary',
    title: 'Ashok Dalwai Committee on Doubling Farmers’ Income (Summary)',
    authorOrPublisher: 'Ministry of Agriculture and Farmers Welfare',
    category: 'Agriculture',
    classOrLevel: 'Apex Report',
    readingPriority: 'High Yield',
    description: 'The 14-volume landmark blueprint on transitioning agriculture from a production-centric to an income-centric paradigm. Covers input efficiency, post-production marketing, value addition, FPOs, and secondary agriculture.',
    keyChapters: [
      'Volume I & II: March of Agriculture and Strategy for Doubling Income',
      'Volume III: Post-production Interventions: Agricultural Marketing',
      'Volume IV: Supply Chain and Logistics Management',
      'Volume VII: Input Management for Efficiency and Productivity',
      'Volume VIII: Production to Monetisation - Farm Gate to Retail',
      'Volume XI: Empowering Farmers through Institutional Mechanisms (FPOs, e-NAM)'
    ],
    pdfUrl: 'https://agricoop.nic.in/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Multi-Volume Comprehensive Policy',
    tags: ['Dalwai Committee', 'Doubling Farmers Income', 'FPO', 'Post-Harvest']
  },

  // --------------------------------------------------------------------------
  // SCIENCE & TECHNOLOGY NCERTs & OFFICIAL PDFs
  // --------------------------------------------------------------------------
  {
    id: 'pdf-ncert-bio-12-biotech',
    title: 'NCERT Class 12 Biology: Biotechnology & Applied Genetics',
    authorOrPublisher: 'NCERT',
    category: 'Science & Tech',
    classOrLevel: 'Class 12',
    readingPriority: 'Must Read',
    description: 'The gold-standard UPSC source for recombinant DNA technology, restriction endonucleases, PCR, cloning vectors (plasmids), GM crops (Bt cotton, RNA interference), and biosafety governance.',
    keyChapters: [
      'Chapter 11: Biotechnology: Principles and Processes (Recombinant DNA technology tools, Restriction enzymes, Gel electrophoresis, Bioreactors)',
      'Chapter 12: Biotechnology and its Applications (Transgenic plants, Bt crops, Pest resistant crops via RNAi, Gene therapy, Transgenic animals, Ethical issues & GEAC)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?lebo1=11-12',
    fileType: 'Official Portal',
    sizeOrVolume: 'Selected Chapters (11 & 12)',
    tags: ['NCERT', 'Class 12', 'Biotechnology', 'CRISPR', 'rDNA', 'Bt Cotton']
  },
  {
    id: 'pdf-ncert-chem-12-everyday',
    title: 'NCERT Class 12 Chemistry: Chemistry in Everyday Life',
    authorOrPublisher: 'NCERT',
    category: 'Science & Tech',
    classOrLevel: 'Class 12',
    readingPriority: 'Must Read',
    description: 'Directly covers the GS-III everyday science syllabus: therapeutic actions of drugs (antacids, antihistamines, tranquilizers, analgesics, antibiotics, antiseptics, disinfectants), artificial sweeteners (aspartame, saccharin), food preservatives, and cleansing soaps/detergents.',
    keyChapters: [
      'Section 16.1: Drugs and their Classification (Target molecules, Receptors)',
      'Section 16.2: Therapeutic Action of Different Classes of Drugs',
      'Section 16.3: Chemicals in Food (Artificial Sweeteners, Preservatives, Antioxidants)',
      'Section 16.4: Cleansing Agents (Soaps, Saponification, Synthetic Detergents: Anionic, Cationic, Non-ionic)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?lech2=0-7',
    fileType: 'Official Portal',
    sizeOrVolume: 'Chapter 16 PDF',
    tags: ['NCERT', 'Class 12', 'Chemistry', 'Drugs', 'Sweeteners', 'Soaps']
  },
  {
    id: 'pdf-isro-space-vision',
    title: 'ISRO Annual Report & Space Vision Document',
    authorOrPublisher: 'Department of Space / ISRO',
    category: 'Science & Tech',
    classOrLevel: 'Apex Report',
    readingPriority: 'High Yield',
    description: 'Authoritative official overview of Indian launch vehicle developments (PSLV, GSLV, LVM3, SSLV, RLV-LEX), Gaganyaan human spaceflight architecture, Bharatiya Antariksha Station (BAS), and satellite navigation (NavIC).',
    keyChapters: [
      'Launch Vehicle Programmes and Technology Demonstrators (Semi-cryogenic, Reusable)',
      'Satellite Missions: Earth Observation (Cartosat, RISAT, NISAR) and Communication',
      'Space Science and Planetary Exploration: Chandrayaan, Aditya-L1, Shukrayaan',
      'Human Spaceflight Programme (Gaganyaan Life Support and Crew Escape Systems)',
      'Space Commerce and Reforms: IN-SPACe and NewSpace India Limited (NSIL)'
    ],
    pdfUrl: 'https://www.isro.gov.in/Annual_Report.html',
    fileType: 'Official Portal',
    sizeOrVolume: 'Official DoS Publication',
    tags: ['ISRO', 'Space Missions', 'Gaganyaan', 'Launch Vehicles', 'NavIC']
  },
  {
    id: 'pdf-national-ipr-policy',
    title: 'National Intellectual Property Rights (IPR) Policy Document',
    authorOrPublisher: 'DPIIT, Ministry of Commerce and Industry',
    category: 'Science & Tech',
    classOrLevel: 'Apex Report',
    readingPriority: 'High Yield',
    description: 'The statutory charter under "Creative India, Innovative India" covering the seven forms of IP in India, Section 3(d) evergreening safeguards, Compulsory Licensing, Traditional Knowledge Digital Library (TKDL), and CIPAM.',
    keyChapters: [
      'Objective 1: IPR Awareness - Outreach and Promotion',
      'Objective 2: Generation of IPRs (Startups, Universities, R&D)',
      'Objective 3: Legal and Legislative Framework (TRIPS flexibilities, Doha Declaration)',
      'Objective 4: Administration and Management (Modernization of Patent Offices)',
      'Objective 5: Commercialization of IPRs and Technology Transfer',
      'Objective 6: Enforcement and Adjudication against Piracy and Counterfeiting'
    ],
    pdfUrl: 'https://dpiit.gov.in/policies-rules-and-acts/policies/national-intellectual-property-rights-ipr-policy',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Policy Document (PDF)',
    tags: ['IPR', 'Patents', 'Section 3(d)', 'DPIIT', 'TRIPS']
  },

  // --------------------------------------------------------------------------
  // ENVIRONMENT & BIODIVERSITY NCERTs & OFFICIAL PDFs
  // --------------------------------------------------------------------------
  {
    id: 'pdf-ncert-bio-12-ecology',
    title: 'NCERT Class 12 Biology: Ecology & Biodiversity Unit',
    authorOrPublisher: 'NCERT',
    category: 'Environment',
    classOrLevel: 'Class 12',
    readingPriority: 'Must Read',
    description: 'The universal foundational text for UPSC Environment. Covers ecological adaptations, population interactions, food webs, ecological pyramids, nutrient cycles (carbon, phosphorus), biodiversity hotspots, and environmental laws.',
    keyChapters: [
      'Chapter 13: Organisms and Populations (Adaptations, Population Growth Models, Interactions: Mutualism, Commensalism, Parasitism, Competition)',
      'Chapter 14: Ecosystem (Productivity, Decomposition, Energy Flow, Ecological Pyramids, Ecological Succession, Nutrient Cycling)',
      'Chapter 15: Biodiversity and Conservation (Levels, Latitudinal Gradients, Rivet Popper Hypothesis, HIPPO Causes, In-situ vs Ex-situ, Hotspots)',
      'Chapter 16: Environmental Issues (Air Pollution, Water Pollution & Eutrophication, Biomagnification, Solid Waste, Ozone Depletion, Global Warming)'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?lebo1=13-16',
    fileType: 'Official Portal',
    sizeOrVolume: 'Unit X (Chapters 13–16)',
    tags: ['NCERT', 'Class 12', 'Ecology', 'Biodiversity', 'Pollution', 'Hotspots']
  },
  {
    id: 'pdf-ncert-chem-11-env',
    title: 'NCERT Class 11 Chemistry: Environmental Chemistry',
    authorOrPublisher: 'NCERT',
    category: 'Environment',
    classOrLevel: 'Class 11',
    readingPriority: 'High Yield',
    description: 'Scientific explanation of atmospheric pollution (Tropospheric: photochemical smog, classical smog, acid rain; Stratospheric: ozone catalytic depletion Chapman cycle), water pollutants (BOD, COD, DO, eutrophication), soil pollution, and Green Chemistry principles.',
    keyChapters: [
      'Section 14.1: Environmental Pollution (Atmospheric, Tropospheric)',
      'Section 14.2: Smog (Classical vs Photochemical smog: PAN, Ozone, Acrolein)',
      'Section 14.3: Stratospheric Pollution: Formation and Breakdown of Ozone (CFCs, Freons)',
      'Section 14.4: Water Pollution (BOD, COD, Heavy metals, Pesticides)',
      'Section 14.5: Soil Pollution and Industrial Waste',
      'Section 14.6: Green Chemistry as an Alternative Tool for Reducing Pollution'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?kech2=0-7',
    fileType: 'Official Portal',
    sizeOrVolume: 'Chapter 14 PDF',
    tags: ['NCERT', 'Class 11', 'Smog', 'Ozone', 'BOD', 'Green Chemistry']
  },
  {
    id: 'pdf-isfr-forest-report',
    title: 'India State of Forest Report (ISFR) - Executive Summary',
    authorOrPublisher: 'Forest Survey of India (FSI), MoEFCC',
    category: 'Environment',
    classOrLevel: 'Apex Report',
    readingPriority: 'Must Read',
    description: 'Biennial assessment by the Forest Survey of India. The primary source for India’s forest cover (21.71%), tree cover (2.91%), total green cover (24.62%), mangrove cover, bamboo resources, carbon stock (7,204 million tonnes), and forest fires.',
    keyChapters: [
      'Chapter 1: Introduction and Methodological Innovations (LISS-III remote sensing)',
      'Chapter 2: Forest Cover (Very Dense, Moderately Dense, Open Forest)',
      'Chapter 3: Mangrove Cover in Coastal States and UTs',
      'Chapter 4: Assessment of Forest Fire Prone Areas',
      'Chapter 5: Tree Outside Forests (TOF) and Growing Stock',
      'Chapter 6: Bamboo Resources of the Country',
      'Chapter 7: Carbon Stock in India’s Forests'
    ],
    pdfUrl: 'https://fsi.nic.in/forest-report-2021',
    fileType: 'Official Portal',
    sizeOrVolume: 'Executive Summary & State Chapters (PDF)',
    tags: ['FSI', 'ISFR', 'Forest Cover', 'Carbon Stock', 'Mangroves']
  },
  {
    id: 'pdf-ipcc-ar6-syr',
    title: 'IPCC AR6: Climate Change Synthesis Report (SPM)',
    authorOrPublisher: 'Intergovernmental Panel on Climate Change (IPCC)',
    category: 'Environment',
    classOrLevel: 'International',
    readingPriority: 'High Yield',
    description: 'The Summary for Policymakers of the Sixth Assessment Report. Synthesizes physical science basis, impacts, adaptation, vulnerability, and mitigation pathways to limit global warming to 1.5°C.',
    keyChapters: [
      'Section A: Current Status and Trends (Observed warming 1.1°C, Greenhouse gas drivers)',
      'Section B: Future Climate Change, Risks, and Long-Term Responses',
      'Section C: Responses in the Near Term (Urgency of systemic transformation across energy, land, ocean, transport, cities)'
    ],
    pdfUrl: 'https://www.ipcc.ch/report/ar6/syr/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Summary for Policymakers (PDF)',
    tags: ['IPCC', 'Climate Change', 'Global Warming', '1.5C Target', 'Net-Zero']
  },

  // --------------------------------------------------------------------------
  // DISASTER MANAGEMENT NCERTs & OFFICIAL PDFs
  // --------------------------------------------------------------------------
  {
    id: 'pdf-ncert-geo-11-hazards',
    title: 'NCERT Class 11 Geography: Natural Hazards and Disasters',
    authorOrPublisher: 'NCERT',
    category: 'Disaster Management',
    classOrLevel: 'Class 11',
    readingPriority: 'Must Read',
    description: 'The core textbook for disaster classification: earthquakes (seismic zonation), tsunamis, tropical cyclones (structure & warning systems), floods, droughts, landslides, and the 4-stage Disaster Management Cycle.',
    keyChapters: [
      'Chapter 7: Natural Hazards and Disasters: Causes, Consequences and Management',
      'Classification: Atmospheric, Terrestrial, Aquatic, Biological',
      'Earthquakes in India (Seismic Zones II to V, Bureau of Indian Standards)',
      'Cyclones (Origin, IMD Warning Color Codes, Coastal vulnerability)',
      'Floods (Gangetic and Brahmaputra basins, Flash floods, Urban flooding)',
      'Droughts (Meteorological, Agricultural, Hydrological, Ecological)',
      'Disaster Management Act 2005 and Community Preparedness'
    ],
    pdfUrl: 'https://ncert.nic.in/textbook.php?kegy1=0-7',
    fileType: 'Official Portal',
    sizeOrVolume: 'Chapter 7 PDF',
    tags: ['NCERT', 'Class 11', 'Disasters', 'Cyclones', 'Earthquakes', 'Floods']
  },
  {
    id: 'pdf-ndmp-national-plan',
    title: 'National Disaster Management Plan (NDMP)',
    authorOrPublisher: 'National Disaster Management Authority (NDMA)',
    category: 'Disaster Management',
    classOrLevel: 'Apex Report',
    readingPriority: 'Must Read',
    description: 'India’s official national disaster management framework aligned with the Sendai Framework for Disaster Risk Reduction (2015–2030). Details horizontal and vertical integration across NDMA, SDMA, and DDMA.',
    keyChapters: [
      'Part 1: The Context, Vision, Objectives and Sendai Alignment',
      'Part 2: Disaster Risk Governance (Roles of Ministries, NDRF, SDRF)',
      'Part 3: Understanding Risk & Hazard Vulnerability Assessments',
      'Part 4: Interventions for Disaster Risk Reduction (Mitigation across 18 hazards)',
      'Part 5: Response, Incident Response System (IRS), and Build Back Better'
    ],
    pdfUrl: 'https://ndma.gov.in/Governance/Plans',
    fileType: 'Official Portal',
    sizeOrVolume: 'Full Government Policy Plan',
    tags: ['NDMA', 'NDMP', 'Sendai Framework', 'Disaster Governance']
  },
  {
    id: 'pdf-sendai-framework',
    title: 'Sendai Framework for Disaster Risk Reduction (2015–2030)',
    authorOrPublisher: 'United Nations Office for Disaster Risk Reduction (UNDRR)',
    category: 'Disaster Management',
    classOrLevel: 'International',
    readingPriority: 'High Yield',
    description: 'The landmark international agreement setting 4 Priorities for Action and 7 Global Targets to substantially reduce disaster mortality, affected populations, direct economic loss, and damage to critical infrastructure by 2030.',
    keyChapters: [
      'Priority 1: Understanding disaster risk',
      'Priority 2: Strengthening disaster risk governance to manage disaster risk',
      'Priority 3: Investing in disaster risk reduction for resilience',
      'Priority 4: Enhancing disaster preparedness for effective response and to "Build Back Better" in recovery, rehabilitation and reconstruction'
    ],
    pdfUrl: 'https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030',
    fileType: 'Official Portal',
    sizeOrVolume: 'Official UN Text (PDF)',
    tags: ['Sendai Framework', 'UNDRR', 'Disaster Reduction', 'Global Targets']
  },

  // --------------------------------------------------------------------------
  // INTERNAL SECURITY OFFICIAL REPORTS & MONOGRAPHS
  // --------------------------------------------------------------------------
  {
    id: 'pdf-mha-annual-report',
    title: 'Ministry of Home Affairs (MHA) Annual Report',
    authorOrPublisher: 'Ministry of Home Affairs, Government of India',
    category: 'Internal Security',
    classOrLevel: 'Apex Report',
    readingPriority: 'Must Read',
    description: 'The primary official source for internal security status in India: Left Wing Extremism (SAMADHAN, SRE districts, surrenders), J&K counter-infiltration, North-East peace accords, Border Management (CIBMS, fencing), and CAPF deployments.',
    keyChapters: [
      'Chapter 1: Internal Security & Counter-Terrorism (MAC, NIA, NATGRID)',
      'Chapter 2: Left Wing Extremism (Naxalism security & developmental response)',
      'Chapter 3: Security Situation in Jammu & Kashmir and Ladakh',
      'Chapter 4: Security in the North Eastern States and Peace Accords',
      'Chapter 5: Border Management (Indo-Pak, Indo-China, Indo-Myanmar, Coastal Security)',
      'Chapter 6: Central Armed Police Forces (BSF, CRPF, CISF, ITBP, SSB, Assam Rifles)',
      'Chapter 7: Cyber Security and Cyber Crime Coordination (I4C, 1930 Portal)'
    ],
    pdfUrl: 'https://www.mha.gov.in/en/documents/annual-reports',
    fileType: 'Official Portal',
    sizeOrVolume: 'Comprehensive Annual GoI Report',
    tags: ['MHA', 'Internal Security', 'LWE', 'Border Management', 'CAPF']
  },
  {
    id: 'pdf-fatf-mer-india',
    title: 'FATF Mutual Evaluation Report of India (2024)',
    authorOrPublisher: 'Financial Action Task Force (FATF)',
    category: 'Internal Security',
    classOrLevel: 'International',
    readingPriority: 'High Yield',
    description: 'The authoritative international evaluation assessing India’s anti-money laundering and counter-terrorist financing (AML/CFT) regime. Documents PMLA enforcement, FIU-IND suspicious transaction reporting, and ED asset attachments.',
    keyChapters: [
      'Executive Summary & Key Findings (India placed in "Regular Follow-Up" category)',
      'ML/TF Risks and Scenarios (Hawala, Trade-Based ML, Virtual Digital Assets)',
      'Legal System and Operational Issues (PMLA, UAPA, Prosecution & Conviction rates)',
      'Supervision and Preventive Measures (Banks, NBFCs, Crypto Exchanges)',
      'International Cooperation and Mutual Legal Assistance (MLAT)'
    ],
    pdfUrl: 'https://www.fatf-gafi.org/en/publications/Mutualevaluations/mer-india-2024.html',
    fileType: 'Official Portal',
    sizeOrVolume: 'Comprehensive International Evaluation (PDF)',
    tags: ['FATF', 'Money Laundering', 'PMLA', 'FIU-IND', 'Terror Financing']
  },
  {
    id: 'pdf-cert-in-cyber-directives',
    title: 'National Cyber Security Policy & CERT-In Directives',
    authorOrPublisher: 'CERT-In / MeitY',
    category: 'Internal Security',
    classOrLevel: 'Apex Report',
    readingPriority: 'High Yield',
    description: 'Statutory directions issued under Section 70B of the IT Act 2000. Mandates 6-hour reporting of cyber incidents, 5-year log preservation by VPN providers, Critical Information Infrastructure protection by NCIIPC, and Cyber Swachhta Kendra.',
    keyChapters: [
      'Directives under Section 70B (Mandatory 6-Hour Incident Reporting Categories)',
      'Requirements for Virtual Private Server (VPS) and Cloud Service Providers',
      'Protection of Critical Information Infrastructure (CII) under NCIIPC',
      'I4C Architecture and Citizen Financial Cyber Fraud Management System (1930)'
    ],
    pdfUrl: 'https://www.cert-in.org.in/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Official Directives & Guidelines',
    tags: ['CERT-In', 'Cyber Security', 'IT Act', 'NCIIPC', 'Ransomware']
  },

  // --------------------------------------------------------------------------
  // GS-III MAGAZINES & JOURNALS
  // --------------------------------------------------------------------------
  {
    id: 'pdf-yojana-archive',
    title: 'Yojana Monthly Journal (Focus on Development & GS-III)',
    authorOrPublisher: 'Publications Division, Ministry of Information & Broadcasting',
    category: 'General GS-III',
    classOrLevel: 'Monthly Journal',
    readingPriority: 'High Yield',
    description: 'Flagship development journal publishing thematic editions directly aligned with GS-III: Union Budget Special, Agriculture & Allied, Science & Innovation, Green Energy, Infrastructure, and Internal Security.',
    keyChapters: [
      'Union Budget Analysis & Macroeconomic Prospects',
      'Agriculture: Technology Missions, Sustainable Farming & Millets',
      'Science & Technology: Digital Public Infrastructure, AI, Space Exploration',
      'Environment & Climate Action: Net-Zero 2070, Lifestyle for Environment (LiFE)'
    ],
    pdfUrl: 'http://yojana.gov.in/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Monthly Thematic Editions',
    tags: ['Yojana', 'Publications Division', 'Socio-Economic Development', 'Govt Schemes']
  },
  {
    id: 'pdf-kurukshetra-archive',
    title: 'Kurukshetra Monthly Journal (Focus on Rural Development & Agriculture)',
    authorOrPublisher: 'Ministry of Rural Development / Publications Division',
    category: 'Agriculture',
    classOrLevel: 'Monthly Journal',
    readingPriority: 'High Yield',
    description: 'Premier rural development journal dedicated to agriculture modernization, farm mechanization, irrigation reforms, agro-processing, Panchayati Raj institutions, and rural livelihoods.',
    keyChapters: [
      'Precision Agriculture: Kisan Drones, Micro-Irrigation & AgriStack',
      'Agro-Processing & Value Chain Development (PMKSY, ODOP, PM-FME)',
      'Rural Infrastructure: PMGSY, Rural Housing, Jal Jeevan Mission',
      'Empowering Smallholders through FPOs and Cooperative Credit'
    ],
    pdfUrl: 'https://www.publicationsdivision.nic.in/',
    fileType: 'Official Portal',
    sizeOrVolume: 'Monthly Thematic Editions',
    tags: ['Kurukshetra', 'Rural Development', 'Agriculture', 'Livelihoods', 'PMGSY']
  }
];

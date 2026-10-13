// ============================================================================
// GS-III COMPREHENSIVE DATA: BIODIVERSITY CONSERVATION, POLLUTION,
// ENVIRONMENTAL IMPACT ASSESSMENT (EIA) & DISASTER MANAGEMENT
// ============================================================================

import { SyllabusSection } from './economyPlanningData';

export const environmentComprehensiveData: SyllabusSection[] = [
  {
    id: 'biodiversity-conservation',
    title: 'Biodiversity Conservation & Protected Areas',
    subTitle: 'HIPPO Model, In-Situ vs Ex-Situ, Western Ghats Gadgil vs Kasturirangan, WPA 2022, BDA 2023 & Ramsar Montreux Record',
    category: 'Biodiversity & Conservation',
    description: 'The preservation, sustainable management, and legal restoration of biological ecosystems, species richness, and indigenous genetic diversity.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               BIODIVERSITY CONSERVATION & PROTECTED AREAS MATRIX                  |
+-----------------------------------------------------------------------------------+
| 1. PROTECTED AREAS HIERARCHY (WPA 1972 amended 2022):                             |
|    - National Parks: Highest legal sanctity, zero grazing / human activity        |
|    - Wildlife Sanctuaries: Regulated grazing / minor forest produce permitted     |
|    - Conservation Reserves: Buffer zones / corridors (public land)                |
|    - Community Reserves: Privately or community owned conservation landscapes    |
|                                                                                   |
| 2. BIOSPHERE RESERVES (UNESCO MAB Programme):                                     |
|    [CORE ZONE: Strictly protected]                                                |
|       --> [BUFFER ZONE: Non-destructive research, education, eco-tourism]         |
|              --> [TRANSITION ZONE: Sustainable human settlements & agriculture]   |
|                                                                                   |
| 3. BIOLOGICAL DIVERSITY ACT 2002 (Amended 2023) - 3-TIER ARCHITECTURE:           |
|    National Biodiversity Authority (NBA, Chennai) - Apex foreign approval & ABS   |
|      --> State Biodiversity Boards (SBBs) - Commercial utilization regulation     |
|            --> Biodiversity Management Committees (BMCs) - Peoples Register (PBR) |
|                                                                                   |
| 4. WETLAND CONSERVATION (Ramsar Convention 1971):                                 |
|    - 85+ Ramsar Sites in India                                                    |
|    - Montreux Record: Keoladeo National Park (Rajasthan) & Loktak Lake (Manipur)  |
|      (Chilika Lake was successfully removed in 2002 post ecological recovery)     |
+-----------------------------------------------------------------------------------+`,
    coreConcepts: [
      {
        title: 'Levels of Biodiversity & Ecosystem Services',
        description: 'Genetic, Species, and Ecological diversity and the four pillars of Millennium Ecosystem Assessment.',
        points: [
          'Levels of Biodiversity: (1) Genetic Diversity: Variation of genes within a single species (e.g., India has over 50,000 distinct strains of rice and 1,000 varieties of mango); (2) Species Diversity: Variety of species within a region (measured by species richness and species evenness); (3) Ecosystem Diversity: Variety of habitats and biotic communities (deserts, rainforests, mangroves, coral reefs).',
          'Ecosystem Services (Millennium Ecosystem Assessment): (1) Provisioning: Food, timber, medicinal plants, fresh water; (2) Regulating: Carbon sequestration, climate control, flood attenuation by wetlands, pollination; (3) Supporting: Nutrient cycling, soil formation, primary photosynthesis; (4) Cultural: Ecotourism, spiritual and recreational values.',
          'The HIPPO Model of Biodiversity Loss: (H) Habitat destruction and fragmentation (leading cause); (I) Invasive alien species (e.g., Lantana camara, Water Hyacinth/Eichhornia, Prosopis juliflora, African Catfish); (P) Pollution (pesticides, heavy metals, microplastics); (P) Population growth and urban sprawl; (O) Overexploitation and poaching.',
          'Global Biodiversity Hotspots: Norman Myers criteria: must contain at least 1,500 species of vascular plants as endemics and must have lost at least 70% of its original primary habitat. India hosts 4 Hotspots: (1) Himalaya; (2) Indo-Burma; (3) Western Ghats & Sri Lanka; (4) Sundaland (includes Nicobar Islands).'
        ],
        prelimsHook: 'Under Norman Myers criteria, an area qualifies as a Biodiversity Hotspot only if it has lost at least 70% of its original primary habitat.',
        mainsHook: '"Invasive alien species represent a silent biological disaster destabilizing indigenous forests." Discuss with examples like Lantana camara and state interventions.',
        officialSource: 'MoEFCC / Wildlife Institute of India'
      },
      {
        title: 'Conservation Strategies: In-Situ vs. Ex-Situ & Western Ghats Ecology',
        description: 'On-site protected habitats versus off-site gene conservation, and the eco-sensitive zoning debate.',
        points: [
          'In-Situ Conservation (On-Site): Protecting endangered species in their natural habitats. Protected Area (PA) Network under WPA 1972: (1) National Parks: Highest legal protection, zero human activities or livestock grazing permitted; (2) Wildlife Sanctuaries: Certain traditional rights like grazing or minor forest produce collection permitted by Chief Wildlife Warden; (3) Biosphere Reserves: 18 in India (12 included in UNESCO World Network of Biosphere Reserves under MAB programme) with Core, Buffer, and Transition zones; (4) Sacred Groves: Traditional community-protected forest patches.',
          'Ex-Situ Conservation (Off-Site): Conserving germplasm away from natural habitats. Includes Botanical Gardens, Zoological Parks, Seed Banks, Cryopreservation gene banks (e.g., National Bureau of Plant Genetic Resources - NBPGR, New Delhi).',
          'Western Ghats Ecology Controversy: Madhav Gadgil Committee (WGEEP 2011) recommended designating the ENTIRE Western Ghats (100%) as an Ecologically Sensitive Area (ESA) divided into three vulnerability zones with a complete ban on mining, thermal power plants, and large dams. Facing stiff resistance from state governments, K. Kasturirangan Committee (HLWG 2013) recommended a pragmatic compromise: demarcating only 37% of the Western Ghats (natural landscape) as ESA while leaving out cultural landscapes (villages, agriculture).'
        ]
      },
      {
        title: 'Legislative Framework: WPA 1972 (2022 Amendment) & BDA 2002 (2023 Amendment)',
        description: 'Modernizing wildlife protection, People’s Biodiversity Registers (PBR), and Access and Benefit Sharing (ABS).',
        points: [
          'Wildlife Protection (Amendment) Act 2022: (1) Rationalized schedules from 6 down to 4: Schedule I (highest protection for endangered mammals, birds, reptiles); Schedule II (lesser protection); Schedule III (protected plant species); Schedule IV (specimens listed under CITES Appendices); (2) Created Standing Committee of State Board for Wildlife (SBWL); (3) Empowered Central Government to regulate or ban invasive alien species; (4) Regulates voluntary surrender of captive wild animals.',
          'Biological Diversity (Amendment) Act 2023: Three-tier statutory structure: National Biodiversity Authority (NBA - Chennai), State Biodiversity Boards (SBB), and local Biodiversity Management Committees (BMC). 2023 Amendment: Decriminalized offenses into civil penalties; exempted registered AYUSH practitioners and codified traditional knowledge holders from prior intimation to SBBs for accessing biological resources; streamlined Access and Benefit Sharing (ABS) to attract foreign bio-investment while protecting local community rights.',
          'People’s Biodiversity Register (PBR): Prepared by local BMCs to document comprehensive local bio-resources, landscape medicinal plants, traditional agronomic knowledge, and local landraces, preventing biopiracy.',
          'Ramsar Convention (1971) & Montreux Record: Intergovernmental treaty for wetland conservation (85+ Ramsar sites in India). Montreux Record: Register of wetland sites on the List of Wetlands of International Importance where changes in ecological character have occurred, are occurring, or are likely to occur due to technological developments, pollution, or human interference. Indian Sites on Montreux Record: (1) Keoladeo National Park (Rajasthan - water shortage and grazing issues); (2) Loktak Lake (Manipur - deforestation in catchment and phumdis degradation). Note: Chilika Lake (Odisha) was placed in 1993 but successfully removed in 2002 following lake-mouth dredging and community restoration.'
        ],
        prelimsHook: 'Currently, only two Indian wetlands are on the Montreux Record: Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur). Chilika Lake was removed from the Montreux Record in 2002.',
        mainsHook: '"The Biological Diversity (Amendment) Act 2023 balances ease of doing bio-business with community rights, but dilutes biopiracy safeguards." Critically examine.'
      }
    ],
    comparativeTable: {
      headers: ['Parameter', 'Madhav Gadgil Committee (WGEEP 2011)', 'K. Kasturirangan Committee (HLWG 2013)'],
      rows: [
        ['ESA Coverage', 'Entire Western Ghats (100% of geographical area)', '37% of Western Ghats (strictly Natural Landscapes)'],
        ['Zonation Approach', 'Graded into Ecologically Sensitive Zones I, II, and III', 'Binary distinction: Cultural Landscape vs Natural Landscape'],
        ['Mining & Quarries', 'Complete ban on new mining; phased closure of existing mines in ESZ-I', 'Complete ban on mining and quarrying in 37% ESA only'],
        ['Hydropower Projects', 'Complete ban on large dams and new thermal plants in ESZ-I', 'Permitted with stringent environmental flow conditions'],
        ['Public Participation', 'Grassroots-up: Gram Sabhas must hold ultimate veto power', 'State-level administrative planning with bureaucratic oversight']
      ]
    }
  },
  {
    id: 'environmental-pollution-degradation',
    title: 'Environmental Pollution & Global Phenomena',
    subTitle: 'Air NAAQS/NCAP/GRAP, BS-VI Leapfrog, Water BOD/COD, Plastic EPR, Microplastics, Chapman Cycle & IPCC AR6',
    category: 'Pollution & Climate',
    description: 'Systemic degradation of atmospheric, aquatic, and terrestrial spheres, waste governance rules, radiative climate forcing, and environmental jurisprudence.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               AIRSHED, POLLUTION & WASTE GOVERNANCE ARCHITECTURE                  |
+-----------------------------------------------------------------------------------+
| 1. AIR QUALITY GOVERNANCE (CAQM & NCAP):                                          |
|    - NCAP: Target 40% reduction in PM2.5/PM10 by 2026 across 131 non-attainment   |
|    - Graded Response Action Plan (GRAP) for Delhi-NCR Airshed:                    |
|      * Stage I (Poor, AQI 201-300): Mechanized sweeping, dust control             |
|      * Stage II (Very Poor, AQI 301-400): Diesel generator ban, enhanced parking  |
|      * Stage III (Severe, AQI 401-450): Halt non-essential construction, BS-III/IV|
|      * Stage IV (Severe+, AQI > 450): Ban non-BS-VI trucks, school closures       |
|                                                                                   |
| 2. VEHICULAR EMISSION LEAPFROG: BS-IV TO BS-VI:                                   |
|    - Sulphur content slashed from 50 ppm to 10 ppm (80% drop)                     |
|    - Selective Catalytic Reduction (SCR via AdBlue/urea) + DPF soot filters       |
|                                                                                   |
| 3. PLASTIC WASTE RULES & MICROPLASTICS:                                           |
|    - Nationwide ban on 19 Single-Use Plastic (SUP) items                          |
|    - Extended Producer Responsibility (EPR): Rigid, Flexible, Multi-layer, Sheets |
|    - Microplastics (<5mm): Primary (microbeads) vs Secondary (weathered debris)   |
+-----------------------------------------------------------------------------------+`,
    coreConcepts: [
      {
        title: 'Air Quality Governance: CAQM, NCAP, GRAP & BS-VI Transition',
        description: 'Particulate matter, criteria pollutants, airshed management, and vehicular emission leaps.',
        points: [
          'Air Pollution Metrics: National Ambient Air Quality Standards (NAAQS) monitors 12 criteria pollutants: PM10, PM2.5, SO2, NO2, CO, NH3, Ozone (O3), Lead (Pb), Arsenic, Nickel, Benzene, and Benzo(a)pyrene. National Clean Air Programme (NCAP): Targets a 40% reduction in PM2.5 and PM10 concentrations by 2026 across 131 non-attainment cities.',
          'Commission for Air Quality Management (CAQM): Statutory body overseeing Delhi-NCR and adjoining areas of Punjab, Haryana, Rajasthan, and UP, coordinating cross-jurisdictional airshed interventions.',
          'Graded Response Action Plan (GRAP): Emergency counter-measure framework activated based on Delhi AQI: (1) Stage I - Poor (AQI 201–300): Mechanized road sweeping, anti-smog guns; (2) Stage II - Very Poor (AQI 301–400): Ban on diesel generator sets, hike parking fees; (3) Stage III - Severe (AQI 401–450): Ban non-essential construction, prohibit BS-III petrol and BS-IV diesel cars; (4) Stage IV - Severe+ (AQI > 450): Ban entry of non-BS-VI diesel trucks, shift schools to online classes, work-from-home orders.',
          'BS-VI Leapfrog Norms: India skipped BS-V and moved directly from BS-IV to BS-VI in April 2020. Key engineering shifts: (1) Sulphur content slashed by 80% from 50 ppm to 10 ppm; (2) Diesel vehicles fitted with Diesel Particulate Filters (DPF) and Selective Catalytic Reduction (SCR) systems using Aqueous Urea Solution (AdBlue) to break down toxic NOx into harmless nitrogen and water.'
        ],
        prelimsHook: 'In the BS-VI emission transition, fuel sulphur content was reduced from 50 ppm (BS-IV) to 10 ppm (BS-VI), an 80% reduction in sulphur levels.',
        mainsHook: '"Managing winter smog in Delhi requires treating the entire Indo-Gangetic Plain as a single continuous airshed." Elucidate the role of CAQM.'
      },
      {
        title: 'Water Pollution Metrics & Eutrophication Lifecycle',
        description: 'Dissolved oxygen depletion, biological and chemical oxygen demand, and dead zones.',
        points: [
          'Water Pollution Metrics: Dissolved Oxygen (DO - clean water > 6-8 mg/L; below 4 mg/L aquatic life perishes); Biochemical Oxygen Demand (BOD - amount of dissolved oxygen consumed by aerobic bacteria to decompose organic matter; clean water < 2 mg/L, polluted water > 10-15 mg/L); Chemical Oxygen Demand (COD - measures total oxygen needed to oxidize all organic and inorganic pollutants; COD is always higher than BOD).',
          'Eutrophication Lifecycle: Nutrient enrichment (excess agricultural nitrates and phosphates) ➔ Accelerated algal bloom ➔ Sun-blocking carpet over water surface ➔ Algal die-off ➔ Aerobic bacterial decomposition consumes dissolved oxygen ➔ Hypoxia / Anoxia ➔ Widespread fish die-offs and dead zones.'
        ],
        prelimsHook: 'Chemical Oxygen Demand (COD) is always higher than Biochemical Oxygen Demand (BOD) because COD measures both biodegradable and non-biodegradable oxidizable organic compounds.',
        officialSource: 'CPCB / CAQM Directions'
      },
      {
        title: 'Waste Management Rules: Plastic EPR, SUP Ban & Microplastics Threat',
        description: 'Single-use plastic bans, four EPR packaging categories, and microplastic bioaccumulation.',
        points: [
          'Plastic Waste Management Rules (2016, amended 2022): Imposed a nationwide ban on 19 identified single-use plastic (SUP) items with low utility and high littering potential (cutlery, straws, stirrers, thermocol, plastic sticks). Mandated minimum thickness of 120 microns for carry bags. Introduced Extended Producer Responsibility (EPR) guidelines classifying plastics into 4 categories: Category I (rigid plastic packaging); Category II (flexible plastic packaging of single layer); Category III (multilayered plastic packaging); Category IV (plastic sheets used for packaging).',
          'Microplastics (<5mm): Particles smaller than 5 mm. Primary Microplastics: Manufactured directly at microscopic dimensions (microbeads in exfoliating cosmetics, facial scrubs, industrial blast media); Secondary Microplastics: Formed by environmental weathering, photodegradation, and wave mechanical breakdown of larger macroplastics (nylon ropes, synthetic clothing fibers, discarded fishing nets). Threat: Ingested by zooplankton, accumulate in marine trophic chains, and transfer synthetic endocrine disruptors into human food systems.',
          'E-Waste Management Rules 2022: Expanded scope to cover 106 electrical and electronic equipment (EEE), including solar photo-voltaic (PV) modules and panels. Enforces mandatory registration on CPCB online portal and year-on-year recycling targets under EPR for manufacturers, refurbishers, and recyclers.',
          'National Green Tribunal (NGT): Established under NGT Act 2010 (Article 21 Right to a Clean Environment). Specialized judicial body mandated to dispose of environmental disputes within 6 months. Guided by principles of Natural Justice, Sustainable Development, Precautionary Principle, and Polluter Pays Principle.'
        ]
      },
      {
        title: 'Global Phenomena: Ozone Depletion, Acid Rain & IPCC AR6',
        description: 'Stratospheric chemistry, Montreal/Kigali achievements, and climate tipping points.',
        points: [
          'Ozone Layer Depletion: Stratospheric ozone shield (15-35 km) absorbs harmful UV-B radiation. Ozone is synthesized and destroyed continuously in the Chapman Cycle. Chlorofluorocarbons (CFCs) and Halons release free chlorine radicals in the presence of UV radiation: Cl + O3 ➔ ClO + O2, and ClO + O ➔ Cl + O2. A single chlorine radical can destroy over 100,000 ozone molecules. Polar Stratospheric Clouds (PSCs) over Antarctica accelerate this catalytic destruction in austral spring.',
          'Vienna Convention (1985) & Montreal Protocol (1987): Universally ratified treaty phasing out Ozone Depleting Substances (ODS). Kigali Amendment (2016): Mandates phasedown of Hydrofluorocarbons (HFCs) by 80-85% by the late 2040s. Although HFCs do not deplete ozone, they are super-greenhouse gases with global warming potentials thousands of times higher than CO2.',
          'Acid Rain: Formed when atmospheric sulfur dioxide (SO2) and nitrogen oxides (NOx) react with water, oxygen, and oxidants to form dilute sulfuric acid (H2SO4) and nitric acid (HNO3). Precipitation with pH < 5.6 is classified as acid rain. Causes severe leaching of soil nutrients (calcium, magnesium), releases toxic aluminum into water bodies, and corrodes marble monuments ("Stone Leprosy" observed on Taj Mahal).',
          'IPCC Sixth Assessment Report (AR6): Confirms human influence has warmed the atmosphere, ocean, and land unequivocally. Highlights critical climate tipping points: irreversible Antarctic ice sheet collapse, permafrost carbon release, Amazon rainforest dieback, and Atlantic Meridional Overturning Circulation (AMOC) deceleration.'
        ]
      }
    ]
  },
  {
    id: 'environmental-impact-assessment',
    title: 'Environmental Impact Assessment (EIA)',
    subTitle: 'Statutory Basis under EPA 1986, 6-Stage Process, Category A vs B, Draft EIA 2020 Controversy',
    category: 'EIA Process',
    description: 'The statutory decision-making tool identifying, predicting, and mitigating the environmental and socio-ecological consequences of developmental projects prior to clearance.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               ENVIRONMENTAL IMPACT ASSESSMENT (EIA 2006) 6 STAGES                 |
+-----------------------------------------------------------------------------------+
| Stage 1: SCREENING   -> Category A (Central/MoEFCC) vs Category B1/B2 (SEIAA)    |
|                          (Category B2 exempt from full EIA & Public Hearing)      |
|                                   |                                               |
| Stage 2: SCOPING     -> EAC/SEAC frames Terms of Reference (ToR)                  |
|                                   |                                               |
| Stage 3: DRAFT EIA   -> Baseline Environmental Monitoring (3 non-monsoon seasons) |
|                                   |                                               |
| Stage 4: PUBLIC      -> 30-day notice, video-recorded public hearing by SPCB & DM |
|          CONSULTATION                                                             |
|                                   |                                               |
| Stage 5: APPRAISAL   -> Expert Appraisal Committee (EAC) technical scrutiny       |
|                                   |                                               |
| Stage 6: CLEARANCE   -> Environmental Clearance (EC) grant/rejection + Compliance |
|                                                                                   |
| CRITICAL CONTROVERSY: Draft EIA 2020 post-facto regularization (SC Alembic Pharm)|
+-----------------------------------------------------------------------------------+`,
    coreConcepts: [
      {
        title: 'Evolution & Legal Framework of EIA in India',
        description: 'How environmental screening became mandatory under the Environment Protection Act 1986.',
        points: [
          'Genesis & Legal Basis: Originated in the US under National Environmental Policy Act (NEPA 1969). In India, EIA is legally rooted in Section 3 of the Environment (Protection) Act 1986. First statutory notification issued in 1994, fully overhauled by the landmark EIA Notification 2006.',
          'Categorization of Projects (EIA 2006): (1) Category A: Projects with high spatial and environmental footprints (nuclear plants, major ports, highways, thermal power plants); appraised at the Central Level by Expert Appraisal Committee (EAC) and cleared by MoEFCC; (2) Category B: Appraised at the State Level by State Expert Appraisal Committee (SEAC) and cleared by State Environment Impact Assessment Authority (SEIAA). Subdivided into B1 (mandatory EIA report and public hearing) and B2 (exempted from full EIA report due to smaller scale).',
          'The 6-Stage EIA Lifecycle: (1) Screening (determining whether project falls under Category A or B1/B2); (2) Scoping (formulating Terms of Reference - ToR setting baseline data requirements); (3) Baseline Data Collection & Draft EIA Report; (4) Public Consultation / Public Hearing (conducted by SPCB and District Magistrate within 45 days); (5) Appraisal (independent technical evaluation by EAC/SEAC); (6) Environmental Clearance (EC) Grant or Rejection and Post-Clearance Monitoring (half-yearly compliance reports).'
        ],
        prelimsHook: 'Under EIA Notification 2006, Category B2 projects are exempt from conducting a comprehensive EIA study and public hearing.',
        mainsHook: '"EIA in India has deteriorated into a bureaucratic rubber-stamping ritual rather than a rigorous conservation tool." Critically analyze the structural loopholes and propose reforms.',
        officialSource: 'EIA Notification 2006 / MoEFCC'
      },
      {
        title: 'Critical Loopholes & The Draft EIA Notification 2020 Controversy',
        description: 'Conflict of interest, post-facto clearances, and the dilution of public consultation.',
        points: [
          'Conflict of Interest: Project proponents directly pay and hire the environmental consultants who prepare the EIA report, creating a perverse incentive to downplay ecological damage and falsify baseline biodiversity data.',
          'Perfunctory Public Hearings: Public hearings are often conducted in remote locations, notices published only in English/national dailies rather than local dialects, and local tribal communities intimidated by contractors.',
          'Post-Facto Environmental Clearance: Draft EIA 2020 proposed legitimizing projects that commenced construction without prior environmental clearance upon paying a nominal fine. The Supreme Court in *Alembic Pharmaceuticals (2020)* held that post-facto clearances are anathema to environmental jurisprudence and violate the Precautionary Principle.',
          'Dilution of Public Notice: Draft EIA 2020 proposed reducing the notice period for public consultation from 30 days to 20 days, curtailing democratic scrutiny by vulnerable indigenous populations.',
          'Linear Projects Exemption: Exempting strategic border highways, pipeline projects, and thermal plants from public hearings under the blanket cover of "strategic defense interest".'
        ]
      }
    ],
    comparativeTable: {
      headers: ['Lifecycle Stage', 'Executing Authority', 'Mandatory Requirements', 'Key Vulnerability'],
      rows: [
        ['1. Screening', 'SEIAA / SEAC', 'Classify into B1 (EIA required) or B2 (exempt)', 'Discretionary downgrading of destructive projects into B2'],
        ['2. Scoping', 'EAC / SEAC', 'Formulation of Terms of Reference (ToR)', 'Generic standard ToR without site-specific ecological nuances'],
        ['3. Draft EIA', 'Accredited Consultant', 'Baseline environmental monitoring across seasons', 'Conflict of interest: consultant hired by project developer'],
        ['4. Public Consultation', 'SPCB & District Magistrate', 'Mandatory 30-day notice, open hearing recorded on video', 'Intimidation of activists, language barriers, doctored minutes'],
        ['5. Appraisal', 'EAC / SEAC', 'Technical scrutiny and recommendation for EC', 'Rejections are exceedingly rare (<1% of all applications)'],
        ['6. Monitoring', 'MoEFCC Regional Offices', 'Half-yearly certified compliance submission', 'Acute shortage of inspectors; reliance on self-reporting']
      ]
    }
  },
  {
    id: 'disaster-management-framework',
    title: 'Disaster and Disaster Management',
    subTitle: '4-Stage Cycle, NDMA 3-Tier Architecture, 15th FC NDRMF Funding, GLOFs, Urban Floods & Sendai Framework',
    category: 'Disaster Management',
    description: 'Proactive paradigm shift from post-disaster relief to holistic disaster risk reduction, community preparedness, early warning systems, and resilient infrastructure.',
    diagramPrompt: `+-----------------------------------------------------------------------------------+
|               DISASTER RISK GOVERNANCE & FINANCING ARCHITECTURE                   |
+-----------------------------------------------------------------------------------+
| 1. INSTITUTIONAL 3-TIER ARCHITECTURE (DM Act 2005):                               |
|    - National: NDMA (Chaired by Prime Minister) + NDRF (16 Battalions) + NIDM     |
|    - State: SDMA (Chaired by Chief Minister)                                      |
|    - District: DDMA (Collector + Zila Parishad President - Executive fulcrum)     |
|                                                                                   |
| 2. FINANCING ARCHITECTURE (15th Finance Commission):                              |
|    National Disaster Risk Management Fund (NDRMF):                                |
|    - 80% Response Fund (NDRF / SDRF)                                              |
|    - 20% Mitigation Fund (NDMF / SDMF)                                            |
|    - Cost sharing: 75:25 (General States) | 90:10 (NE & Himalayan States)         |
|                                                                                   |
| 3. HIGH-VULNERABILITY DISASTER TYPOLOGIES:                                        |
|    - GLOFs: Glacial Lake Outbursts (South Lhonak, Sikkim 2023) - Sensor EWS       |
|    - Urban Flooding: Concretization, wetland encroachment - Sponge City remedies  |
|    - Heatwaves: IMD threshold (40 deg C Plains / 4.5 deg C anomaly) - Cool Roofs  |
|                                                                                   |
| 4. GLOBAL COMPASS: Sendai Framework (4 Priorities, 7 Targets) + CDRI (New Delhi)  |
+-----------------------------------------------------------------------------------+`,
    coreConcepts: [
      {
        title: 'Paradigm Shift: The 4-Stage Disaster Cycle & DM Act 2005',
        description: 'Moving from reactive ad-hoc compensation to institutional pre-disaster mitigation.',
        points: [
          'Paradigm Shift: Historically, Indian disaster management was post-facto, relief-centric under the Calamity Relief Fund. Following the 1999 Odisha Super Cyclone and 2004 Indian Ocean Tsunami, Parliament enacted the Disaster Management Act 2005, ushering in a proactive culture of prevention, mitigation, and preparedness.',
          '4-Stage Disaster Management Cycle: (1) Prevention & Mitigation: Structural (sea walls, check dams, earthquake-resistant buildings) and non-structural measures (land-use zoning, building codes); (2) Preparedness: Mock drills, early warning systems, Aapda Mitra community volunteers; (3) Response & Relief: Search, rescue, medical triage, and immediate provisioning of shelter and food; (4) Recovery & Reconstruction: "Build Back Better" incorporating resilient infrastructure.',
          'Three-Tier Institutional Architecture: (1) National Level: National Disaster Management Authority (NDMA) chaired by the Prime Minister; (2) State Level: State Disaster Management Authority (SDMA) chaired by the Chief Minister; (3) District Level: District Disaster Management Authority (DDMA) co-chaired by District Collector and Zila Parishad President (fulcrum of ground-level execution).',
          'Specialized Operational Wings: National Disaster Response Force (NDRF - 16 multi-disciplinary battalions deployed across strategic hubs); National Institute of Disaster Management (NIDM - capacity building, research, training).'
        ],
        prelimsHook: 'Under the Disaster Management Act 2005, the District Disaster Management Authority (DDMA) is the primary executive agency at the field level.',
        mainsHook: '"Community-based disaster management (CBDM) bridges the golden hour gap before institutional response forces arrive." Explain with case studies like Aapda Mitra.',
        officialSource: 'Disaster Management Act 2005 / NDMA Guidelines'
      },
      {
        title: 'Disaster Risk Financing: 15th Finance Commission NDRMF/SDRF Framework',
        description: 'Restructuring disaster funding into segregated Response and Mitigation baskets.',
        points: [
          '15th Finance Commission Restructuring: Created the comprehensive National Disaster Risk Management Fund (NDRMF) and State Disaster Risk Management Fund (SDRMF) allocating ~₹1.6 Lakh Crore over 2021-26.',
          'Segregated Allocation Baskets: Total fund divided into: (1) Disaster Response Fund (80% allocation) - sub-divided into Response and Relief (70%) and Recovery and Reconstruction (30%); (2) Disaster Mitigation Fund (20% allocation) - dedicated explicitly to preventive mitigation projects (NDMF at Centre, SDMF at States).',
          'Cost Sharing Pattern: SDRMF is shared between Centre and States in the ratio of: (1) 75:25 for General Category States; (2) 90:10 for North-Eastern and Himalayan States.',
          'National Disaster Response Fund (NDRF): Supplemented by the Centre from the National Calamity Contingent Duty (NCCD) levied on select excisable goods and customs duties.'
        ]
      },
      {
        title: 'High-Vulnerability Typologies: GLOFs, Urban Flooding & Heatwaves',
        description: 'Emerging climate-induced disaster manifestations and specialized mitigation guidelines.',
        points: [
          'Glacial Lake Outburst Floods (GLOFs): Occur when moraine- or ice-dams holding glacial meltwater breach catastrophically due to avalanche impact, earthquake, or thermal permafrost degradation. Exemplified by the South Lhonak lake breach in Sikkim (October 2023) destroying the Chungthang/Teesta-III dam, and the Chamoli rock-ice avalanche in Uttarakhand (2021). Mitigation: Automated water-level sensor telemetry, satellite InSAR monitoring, artificial controlled siphoning of glacial lakes, and prohibiting mega-hydro power dams immediately downstream of proglacial lakes.',
          'Urban Flooding: Distinct from riverine flooding due to rapid hydrological runoff (peaking in minutes rather than days). Root Causes: Unplanned concretization (impervious surface > 80%), destruction of natural retention ponds and wetlands (encroachments on Bellandur Lake in Bengaluru, Pallikaranai marsh in Chennai, and Yamuna floodplains in Delhi), and under-designed storm-water drainage. Mitigation: Sponge City concept (permeable pavements, urban bioswales, rain gardens, recharge wells) and restoring urban blue-green corridors.',
          'Heatwaves: Declared by IMD based on thresholds: Plains: Maximum temperature reaching at least 40°C, with departure from normal between 4.5°C to 6.4°C (Severe heatwave if departure > 6.4°C or temp >= 45°C); Coastal regions: Max temp >= 37°C; Hills: Max temp >= 30°C. Urban Heat Island (UHI) effect exacerbates mortality. Mitigation: Ahmedabad Heat Action Plan (HAP) model: color-coded early warnings, cool roofs (white reflective paint), public water kiosks, and adjusted outdoor labor hours.'
        ],
        prelimsHook: 'IMD declares a heatwave over the plains when the maximum temperature reaches at least 40°C and departs from normal by 4.5°C to 6.4°C, or when the absolute maximum temperature reaches 45°C.',
        mainsHook: '"Urban flooding in Indian metropolitan cities is an engineered catastrophe rather than a natural disaster." Discuss with root causes and Sponge City solutions.'
      },
      {
        title: 'Global Frameworks: Sendai Framework & Coalition for Disaster Resilient Infrastructure (CDRI)',
        description: 'International targets, disaster risk governance, and resilient global infrastructure.',
        points: [
          'Sendai Framework for Disaster Risk Reduction (SFDRR 2015–2030): Successor to the Hyogo Framework. Endorses 4 Priorities for Action: (1) Understanding disaster risk; (2) Strengthening disaster risk governance; (3) Investing in disaster risk reduction for resilience; (4) Enhancing disaster preparedness for effective response and to "Build Back Better". Sets 7 Global Targets (substantially reducing global mortality, affected populations, economic losses, and damage to critical infrastructure by 2030).',
          'Prime Minister’s 10-Point Agenda on DRR: Announced at Asian Ministerial Conference (2016); emphasizes building local capacities, women’s leadership in disaster response, mapping global disaster risks, and leveraging mobile technologies.',
          'Coalition for Disaster Resilient Infrastructure (CDRI): Global partnership launched by India at the UN Climate Action Summit (2019). Secretariat based in New Delhi; promotes climate- and disaster-resilience of new and existing infrastructure systems (power, transport, telecommunications, water) especially in Small Island Developing States (SIDS).'
        ]
      }
    ]
  }
];

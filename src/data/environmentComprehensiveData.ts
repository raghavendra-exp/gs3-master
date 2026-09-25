// ============================================================================
// GS-III COMPREHENSIVE DATA: BIODIVERSITY CONSERVATION, POLLUTION,
// ENVIRONMENTAL IMPACT ASSESSMENT (EIA) & DISASTER MANAGEMENT
// ============================================================================

import { SyllabusSection } from './economyPlanningData';

export const environmentComprehensiveData: SyllabusSection[] = [
  {
    id: 'biodiversity-conservation',
    title: 'Biodiversity Conservation & Protected Areas',
    subTitle: 'HIPPO Model, In-Situ vs Ex-Situ, Western Ghats Gadgil vs Kasturirangan, WPA 2022 & BDA 2023',
    category: 'Biodiversity & Conservation',
    description: 'The preservation, sustainable management, and legal restoration of biological ecosystems, species richness, and indigenous genetic diversity.',
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
        description: 'Modernizing wildlife protection and streamlining biological access and benefit sharing.',
        points: [
          'Wildlife Protection (Amendment) Act 2022: (1) Rationalized schedules from 6 down to 4: Schedule I (highest protection for endangered mammals, birds, reptiles); Schedule II (lesser protection); Schedule III (protected plant species); Schedule IV (specimens listed under CITES Appendices); (2) Created Standing Committee of State Board for Wildlife (SBWL); (3) Empowered Central Government to regulate or ban invasive alien species; (4) Regulates voluntary surrender of captive wild animals.',
          'Biological Diversity (Amendment) Act 2023: Three-tier statutory structure: National Biodiversity Authority (NBA - Chennai), State Biodiversity Boards (SBB), and local Biodiversity Management Committees (BMC). 2023 Amendment: Decriminalized offenses into civil penalties; exempted registered AYUSH practitioners and codified traditional knowledge holders from prior intimation to SBBs for accessing biological resources; streamlined Access and Benefit Sharing (ABS) to attract foreign bio-investment while protecting local community rights.'
        ]
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
    subTitle: 'Air NAAQS/NCAP, Water BOD/COD, Plastic/E-Waste Rules, Ozone Chapman Cycle, IPCC AR6 & NGT',
    category: 'Pollution & Climate',
    description: 'Systemic degradation of atmospheric, aquatic, and terrestrial spheres, waste governance rules, radiative climate forcing, and environmental jurisprudence.',
    coreConcepts: [
      {
        title: 'Air & Water Pollution Dynamics and Governance',
        description: 'Particulate matter, criteria pollutants, dissolved oxygen depletion, and river rejuvenation.',
        points: [
          'Air Pollution Metrics: National Ambient Air Quality Standards (NAAQS) monitors 12 criteria pollutants: PM10, PM2.5, SO2, NO2, CO, NH3, Ozone (O3), Lead (Pb), Arsenic, Nickel, Benzene, and Benzo(a)pyrene. National Clean Air Programme (NCAP): Targets a 40% reduction in PM2.5 and PM10 concentrations by 2026 across 131 non-attainment cities. Commission for Air Quality Management (CAQM) oversees Delhi-NCR air shed with statutory powers over stubble burning and industrial emissions.',
          'Water Pollution Metrics: Dissolved Oxygen (DO - clean water > 6-8 mg/L; below 4 mg/L aquatic life perishes); Biochemical Oxygen Demand (BOD - amount of dissolved oxygen consumed by aerobic bacteria to decompose organic matter; clean water < 2 mg/L, polluted water > 10-15 mg/L); Chemical Oxygen Demand (COD - measures total oxygen needed to oxidize all organic and inorganic pollutants; COD is always higher than BOD).',
          'Eutrophication Lifecycle: Nutrient enrichment (excess agricultural nitrates and phosphates) ➔ Accelerated algal bloom ➔ Sun-blocking carpet over water surface ➔ Algal die-off ➔ Aerobic bacterial decomposition consumes dissolved oxygen ➔ Hypoxia / Anoxia ➔ Widespread fish die-offs and dead zones.'
        ],
        prelimsHook: 'Chemical Oxygen Demand (COD) is always higher than Biochemical Oxygen Demand (BOD) because COD measures both biodegradable and non-biodegradable oxidizable organic compounds.',
        mainsHook: '"Air pollution in the Indo-Gangetic Plains is not an isolated municipal issue but an integrated airshed crisis." Analyze the structural and meteorological factors involved.',
        officialSource: 'CPCB / Commission for Air Quality Management (CAQM)'
      },
      {
        title: 'Waste Management Rules: Plastic, E-Waste & Hazardous Wastes',
        description: 'Extended Producer Responsibility (EPR) and the circular economy transition.',
        points: [
          'Plastic Waste Management Rules (2016, amended 2022): Imposed a nationwide ban on 19 identified single-use plastic (SUP) items with low utility and high littering potential (cutlery, straws, stirrers, thermocol, plastic sticks). Mandated minimum thickness of 120 microns for carry bags. Introduced Extended Producer Responsibility (EPR) guidelines classifying plastics into 4 categories: Category I (rigid plastic packaging); Category II (flexible plastic packaging of single layer); Category III (multilayered plastic packaging); Category IV (plastic sheets used for packaging).',
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
    subTitle: 'Natural vs Anthropogenic, 4-Stage Cycle, NDMA 3-Tier Architecture, Sendai Framework & CDRI',
    category: 'Disaster Management',
    description: 'Proactive paradigm shift from post-disaster relief to holistic disaster risk reduction, community preparedness, early warning systems, and resilient infrastructure.',
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

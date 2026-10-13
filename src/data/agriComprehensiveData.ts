// ============================================================================
// GS-III COMPREHENSIVE DATA: AGRICULTURE, CROPPING, IRRIGATION, MARKETING,
// SUBSIDIES, PDS, FOOD SECURITY & FOOD PROCESSING ARCHITECTURE
// Official Sources: MoAFW, CACP, ICAR, NITI Aayog, FCI, FSSAI, APEDA
// ============================================================================

import { SyllabusSection } from './economyPlanningData';

export const agricultureComprehensiveData: SyllabusSection[] = [
  {
    id: 'cropping-patterns-irrigation',
    title: 'Cropping Patterns, Agronomy & Irrigation Dynamics',
    subTitle: 'Agro-Climatic Zonation, Rice-Wheat Vulnerabilities, DSR, SRI, Millets (Shree Anna), ZBNF, PMKSY & PM-KUSUM',
    category: 'Cropping & Irrigation',
    description: 'Spatial and temporal arrangement of crops, agro-climatic determinants, sustainable agronomic paradigms, micro-irrigation economics, and solarized farm energetics.',
    diagramPrompt: `                           AGRICULTURAL ARCHITECTURE
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
 CROPPING PARAMETERS           IRRIGATION DYNAMICS           UPSTREAM/DOWNSTREAM
• Agro-climatic zonation      • Micro-irrigation (Drip)     • Precision farming via AI
• Millet agronomy (Shree Anna)• Micro-ATMs, PM-KUSUM        • Mega Food Parks model
• Zero Budget Nat. Farming    • Groundwater stress metrics  • Contract Farming, e-NAM`,
    coreConcepts: [
      {
        title: 'Agro-Climatic Zonation & Cropping Decisions',
        description: 'How physiographic and market determinants dictate crop distributions and systemic distortions.',
        points: [
          'Agro-Climatic Regionalization: Planning Commission demarcated India into 15 Agro-Climatic Zones based on physiography, climate (rainfall, temperature), soil types, and water availability. ICAR\'s National Agricultural Research Project (NARP) further delineated 127 agro-ecological sub-zones.',
          'Factors Influencing Cropping Decisions: (1) Agro-climatic conditions; (2) Price incentives & procurement assurances (MSP bias toward rice/wheat); (3) Institutional credit & subsidized electricity; (4) Landholding fragmentation (average size 1.08 ha); (5) Technology inputs (HYV seeds, mechanization).',
          'Rice-Wheat Cropping System (RWCS) Vulnerabilities in North-West India: Dominates Punjab, Haryana, and Western UP (~10 million hectares). Consequences: Catastrophic groundwater table depletion (tubewell depth sinking to >100m); soil salinization from canal irrigation; micronutrient deficiencies (zinc, boron); and seasonal winter smog from paddy stubble burning (Parali).'
        ],
        prelimsHook: 'Rice and Sugarcane together consume over 60% of India’s total agricultural irrigation water despite accounting for less than 25% of gross cropped area.',
        mainsHook: '"The MSP-procurement nexus has converted the semi-arid breadbasket of north-west India into an ecological disaster zone." Discuss crop diversification solutions.',
        officialSource: 'Planning Commission / ICAR NARP / CACP'
      },
      {
        title: 'Climate-Resilient Agronomy: DSR, SRI & Millets (Shree Anna)',
        description: 'Pioneering water-saving cultivation techniques and nutrient-dense grain agronomy.',
        points: [
          'Direct Seeded Rice (DSR): Sowing pre-germinated seeds directly into field with tractor-powered seed drills, bypassing the traditional 30-day flooded seedling nursery and puddling. Saves 15-20% irrigation water, cuts labor costs, reduces methane emissions by 30-40%, and allows crops to mature 10-15 days earlier (mitigating stubble burning windows). Operational challenges: Weed infestation requiring expensive pre-emergence herbicides, laser leveling prerequisites.',
          'System of Rice Intensification (SRI): Agro-ecological method developed in Madagascar. Plants young seedlings (8-12 days old) singly with wide spacing (25x25 cm), practicing Alternate Wetting and Drying (AWD) rather than continuous flooding. Slashes seed requirement by 80-90% (2 kg/acre vs 25 kg/acre), saves 25-40% water, and increases yields by 20-30%.',
          'Millet Agronomy (Shree Anna): C4 photosynthetic plants (Pearl Millet/Bajra, Sorghum/Jowar, Finger Millet/Ragi, Foxtail Millet). Possess higher water-use efficiency (requires 250-350 mm rain vs 1200+ mm for paddy), tolerate temperatures up to 45°C, sequester carbon, and provide dense micronutrients (Iron, Zinc, Calcium - Ragi contains 344 mg Calcium/100g vs 10 mg in polished rice).'
        ],
        prelimsHook: 'Millets are C4 photosynthetic plants, which exhibit higher carbon fixation rates, superior nitrogen use efficiency, and minimal transpiration losses compared to C3 crops like wheat and rice.',
        mainsHook: '"Millets (Shree Anna) are the tri-fold solution to India’s nutritional deficit, water crisis, and climate vulnerability." Detail their agronomic potential and value-chain hurdles.'
      },
      {
        title: 'Sustainable Agricultural Paradigms: ZBNF, Jaivik Bharat & Conservation Farming',
        description: 'Chemical-free farming, agro-ecological microbial restoration, and organic certifications.',
        points: [
          'Zero Budget Natural Farming (ZBNF): Pioneered by Subhash Palekar; rejects commercial synthetic fertilizers and pesticides. Four Pillars: (1) Bijamrita (seed treatment using indigenous cow dung and urine); (2) Jiwamrita (fermented concoction of cow dung, urine, jaggery, pulse flour acting as a microbial inoculum); (3) Acchadana (mulching with crop residues to conserve soil moisture and prevent weed growth); (4) Whapasa (soil aeration and moisture equilibrium).',
          'Jaivik Bharat Certification: Unified national organic food logo issued by FSSAI; certifies that foods adhere to the National Programme for Organic Production (NPOP) or Participatory Guarantee System for India (PGS-India).',
          'Conservation Agriculture: Practices three core principles: minimum mechanical soil disturbance (zero-till), permanent organic soil cover with crop residues, and diversified crop rotations.'
        ]
      },
      {
        title: 'Irrigation Infrastructure: Micro-Irrigation & Solar PM-KUSUM',
        description: 'Canals, Tubewells, Drip/Sprinkler efficiency, and clean-energy agricultural de-dieselization.',
        points: [
          'Water Use Efficiency (WUE): Traditional flood/furrow irrigation achieves only 30-40% efficiency due to conveyance and evaporation losses. Drip irrigation achieves 85-95% efficiency by delivering water and soluble nutrients directly to root zones; Sprinkler achieves 70-80%.',
          'PM Krishi Sinchayee Yojana (PMKSY): Built on 4 pillars: (1) Accelerated Irrigation Benefit Programme (AIBP - completing stalled major/medium projects); (2) Har Khet Ko Pani (minor irrigation and tank restoration); (3) Per Drop More Crop (PDMC - micro-irrigation subsidies up to 55%); (4) Watershed Development.',
          'PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan): De-dieselizes farm sector and guarantees extra income via solar power. Three Components: Component A (10,000 MW decentralized ground-mounted grid-connected solar plants on barren lands); Component B (Installation of 20 lakh standalone solar agriculture pumps); Component C (Solarization of 15 lakh grid-connected agriculture pumps including feeder-level solarization).'
        ]
      }
    ],
    comparativeTable: {
      headers: ['Irrigation Technique', 'Water Use Efficiency', 'Agronomic Suitability', 'Govt Support Scheme'],
      rows: [
        ['Surface Flood', '30% – 40%', 'Paddy, Jute; causes waterlogging, high evaporation', 'Canal command area development'],
        ['Drip Irrigation', '85% – 95%', 'Row crops, fruits, vegetables, sugarcane; 40-60% water savings', 'PMKSY - Per Drop More Crop (up to 55% subsidy)'],
        ['Sprinkler Irrigation', '70% – 80%', 'Undulating sandy terrain, pulses, oilseeds, wheat', 'Micro Irrigation Fund (NABARD ₹10,000 Cr corpus)'],
        ['Solar Pump (PM-KUSUM)', '90% (Integrated with Drip)', 'Replaces diesel pumps; zero electricity bill, sells surplus power', 'PM-KUSUM Component B & C (up to 60% subsidy)']
      ]
    }
  },
  {
    id: 'food-processing-supply-chain',
    title: 'Food Processing Industries, Supply Chain & Value Chains',
    subTitle: 'Weber’s Location Theory, Upstream/Downstream Bottlenecks, Mega Food Parks, PM-SAMPADA & e-NAM',
    category: 'Food Processing & Marketing',
    description: 'Transforming harvest into manufactured consumer goods, cold-chain logistics, contract farming architectures, and statutory quality standards.',
    coreConcepts: [
      {
        title: 'Scope, Significance & Industrial Location (Weber’s Theory)',
        description: 'Why India must expand agro-processing and how spatial economics determines factory locations.',
        points: [
          'Scope & Economic Significance: India is the world\'s #1 producer of milk, pulses, and spices; #2 producer of fruits, vegetables, and foodgrains. Yet India processes only ~10% of total agricultural output (compared to 60-80% in US/China/EU). Annual post-harvest losses exceed ₹1 Lakh Crore due to poor cold chains.',
          'Weber’s Theory of Industrial Location Applied to Food Processing: (1) Raw Material Oriented: Highly perishable, weight-losing agricultural commodities (sugarcane, dairy, fresh tomatoes, grapes) locate processing units proximate to agricultural fields to minimize bulk transport decay; (2) Market Oriented: Weight-gaining or shelf-stable goods (packaged beverages, bakeries, confectionery) locate near urban consumer hubs.',
          'Upstream & Downstream Requirements: Upstream: Assured quality raw material supply, contract farming tie-ups, primary processing centers (PPCs), refrigerated farm-gate transport; Downstream: Cold storage, multimodal refrigerated logistics, brand equity, quality certification (FSSAI, AGMARK, Codex Alimentarius), hypermarket retail linkages.'
        ],
        prelimsHook: 'AGMARK is a certification mark for agricultural produce under the Agricultural Produce (Grading and Marking) Act 1937, whereas FSSAI regulates overall food safety and standards under FSS Act 2006.',
        mainsHook: '"Food processing is the sunrise sector capable of bridging the rural-urban income chasm." Discuss upstream and downstream bottlenecks preventing scale.'
      },
      {
        title: 'Institutional Interventions: Mega Food Parks & PM Kisan SAMPADA',
        description: 'Cluster-based infrastructure creating direct farm-gate to supermarket pipelines.',
        points: [
          'Mega Food Park Scheme: Cluster-based hub-and-spoke model. Features a Central Processing Centre (CPC) spread across 50 acres with shared infrastructure (cold stores, IQF, quality labs, pulp lines) fed by 4-5 Primary Processing Centres (PPCs) and Collection Centres (CCs) located near farm gates.',
          'PM Kisan SAMPADA Yojana: Umbrella scheme with ₹6,000 Cr outlay across 7 sub-schemes: (1) Mega Food Parks; (2) Integrated Cold Chain & Value Addition; (3) Creation/Expansion of Food Processing Capacities (CEFPPC); (4) Agro-Processing Clusters; (5) Creation of Backward and Forward Linkages; (6) Food Safety & Quality Assurance; (7) Human Resources & Institutions.',
          'Operation Greens: Extended from "TOP" (Tomato, Onion, Potato) to "TOTAL" (all 22 perishable fruits and vegetables); provides 50% transport and cold storage subsidies during harvest gluts.'
        ]
      },
      {
        title: 'Supply Chain Transitions: e-NAM, Contract Farming & Quality Standards',
        description: 'Moving from fragmented APMC mandis to unified electronic trading and legal corporate partnerships.',
        points: [
          'APMC Mandi Flaws: High mandi commissions (up to 6-8%), cartelization among commission agents (Arhatiyas), barrier entry for private capital, deductions for mandi fees.',
          'Electronic National Agriculture Market (e-NAM): Pan-India electronic portal integrating 1,361+ mandis; introduces electronic bidding, assaying testing labs, warehouse-based trading (via e-NWR receipts), and online settlement directly to farmers\' bank accounts.',
          'Contract Farming Frameworks: Legal agreements between farmers and agribusiness firms (e.g. PepsiCo for potato chips) specifying price, quality, and quantity. Protects farmers against market volatility while assuring processors standardized grade inputs.',
          'Statutory Quality Standards: (1) FSSAI (Food Safety and Standards Authority of India under FSS Act 2006): Mandates food licensing, hygiene ratings, and maximum residue limits (MRLs) for pesticides; (2) AGMARK: Quality grades for pulses, spices, honey; (3) APEDA: Promotes export standards for basmati rice, mangoes, and buffalo meat.'
        ]
      }
    ]
  },
  {
    id: 'land-reforms-digitization',
    title: 'Land Reforms in India & Modern Digitization',
    subTitle: 'Abolition of Intermediaries, Tenancy Laws, Land Ceilings, DILRMP & SVAMITVA Drone Mapping',
    category: 'Land Reforms',
    description: 'Historical transformation of agrarian tenure rights and 21st-century drone-based digital cadastral titling.',
    coreConcepts: [
      {
        title: 'Post-Independence Land Reforms: The 4 Pillars & Outcomes',
        description: 'Legislative restructuring of rural property relations across Indian states.',
        points: [
          'Pillar 1: Abolition of Intermediaries: Dismantled colonial Zamindari, Jagirdari, and Mahalwari systems; brought over 20 million cultivators into direct relationship with the state; transferred ~6 million hectares of uncultivated wasteland to Gram Panchayats.',
          'Pillar 2: Tenancy Reforms: Regulation of rent (capped at 1/4th to 1/5th of produce), security of tenure against arbitrary eviction, and conferment of ownership rights. Successfully executed in Kerala and West Bengal (Operation Barga 1978 registering sharecroppers/Bargadars).',
          'Pillar 3: Land Ceilings: Upper limits placed on agricultural landholdings (typically 10-18 acres for irrigated double-cropped land up to 54 acres for dry land). Broadly failed pan-India due to benami transactions, fictitious divorces, deliberate administrative delays, and widespread exemptions for orchards/plantations.',
          'Pillar 4: Consolidation of Holdings (Chakbandi): Reorganized scattered fragmented parcels into single viable fields. Succeeded in Punjab, Haryana, and Western UP; failed elsewhere due to farmers\' emotional attachment to ancestral land.'
        ],
        prelimsHook: 'Land Reforms is an exclusive State subject under Entry 18 of the State List (List II) in the Seventh Schedule of the Constitution.',
        mainsHook: '"Land reforms in India succeeded in abolishing feudal intermediaries but failed in asset redistribution." Critically examine the institutional and political causes.'
      },
      {
        title: 'Modern 21st-Century Digitization: SVAMITVA & DILRMP',
        description: 'Drone surveying, digital property cards, and cadastral computerization.',
        points: [
          'SVAMITVA Scheme (Survey of Villages and Mapping with Improvised Technology in Village Areas): Central sector scheme by Ministry of Panchayati Raj using survey drones and Continuously Operating Reference Stations (CORS) network to map rural inhabited (Abadi) parcels with 5-cm accuracy. Issues legal "Property Cards" (Gharoni in UP) enabling rural citizens to monetize property for bank loans and mitigating village boundary disputes.',
          'Digital India Land Records Modernization Programme (DILRMP): 100% centrally funded scheme; digitizes cadastral maps, computerized Records of Rights (RoRs), and integrates land registry offices with revenue courts.',
          'Model Land Leasing Act (NITI Aayog): Legalizes agricultural leasing; gives security of tenure to tenant cultivators while protecting ownership rights of landholders, facilitating bank credit access for informal tenant farmers.'
        ]
      }
    ]
  }
];

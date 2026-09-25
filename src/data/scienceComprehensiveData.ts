// ============================================================================
// GS-III COMPREHENSIVE DATA: SCIENCE & TECHNOLOGY, INDIAN SCIENTISTS,
// INDIGENIZATION, DEFENCE, NUCLEAR & INTELLECTUAL PROPERTY RIGHTS (IPR)
// ============================================================================

import { SyllabusSection } from './economyPlanningData';

export const scienceComprehensiveData: SyllabusSection[] = [
  {
    id: 'everyday-science-chemistry',
    title: 'Everyday Science & Chemistry in Everyday Life',
    subTitle: 'Chemicals in Food, Therapeutic Drugs Classification, Cleansing Agents, Water Purification & Glass',
    category: 'Everyday Science',
    description: 'Foundational scientific and chemical principles governing food additives, pharmaceutical therapeutics, detergents, water treatment, and modern household appliances.',
    coreConcepts: [
      {
        title: 'Chemicals in Food: Sweeteners, Preservatives & Antioxidants',
        description: 'Synthetic additives enhancing preservation, taste, and caloric substitution.',
        points: [
          'Artificial Sweetening Agents: (1) Aspartame: ~100x sweeter than cane sugar; decomposes at cooking temperatures (used only in cold foods/soft drinks); (2) Saccharin: ~550x sweeter; excreted unchanged in urine; safe for diabetics; (3) Sucralose: Trichloroderivative of sucrose, ~600x sweeter, heat stable; (4) Alitame: ~2,000x sweeter, high potency makes sweetness control difficult.',
          'Food Preservatives: Prevent microbial growth and food spoilage. Common examples: Sodium Benzoate (C6H5COONa - widely used in juices/sauces); Salts of Sorbic acid and Propanoic acid (in cheese/bakery); Sodium Metabisulphite (converts to SO2, antimicrobial for fruits/jams).',
          'Antioxidants in Food: Retard oxidation of oils and fats (prevent rancidity). Examples: Butylated Hydroxytoluene (BHT) and Butylated Hydroxyanisole (BHA).'
        ],
        prelimsHook: 'Aspartame cannot be used in cooked or baked foods because it is chemically unstable and decomposes at elevated temperatures.',
        mainsHook: '"The proliferation of ultra-processed foods containing artificial sweeteners and preservatives raises serious public health concerns in India." Discuss regulatory safeguards needed under FSSAI.',
        officialSource: 'NCERT Chemistry Class XII / FSSAI Regulations'
      },
      {
        title: 'Therapeutic Drugs Classification & Pharmacology',
        description: 'How modern medicinal compounds act on specific biochemical receptor sites.',
        points: [
          'Antacids: Neutralize excess gastric HCl. Traditional: Magnesium hydroxide (Milk of Magnesia), Aluminium hydroxide; Modern H2-receptor blockers: Ranitidine, Cimetidine; Proton pump inhibitors: Omeprazole, Pantoprazole.',
          'Antihistamines: Prevent allergic inflammatory response by blocking histamine receptors. Examples: Brompheniramine, Terfenadine, Cetirizine.',
          'Neurologically Active Drugs: (1) Tranquilizers: Relieve stress, anxiety, and mental agitation without inducing deep sleep (Equanil, Valium, Chlordiazepoxide); (2) Analgesics: Painkillers. Non-narcotic: Paracetamol (antipyretic), Aspirin (inhibits prostaglandin synthesis, acts as anti-platelet blood thinner); Narcotic / Opioids: Morphine, Codeine, Heroin (potent painkillers, risk of addiction).',
          'Antimicrobials: (1) Antibiotics: Penicillin (first antibiotic discovered by Alexander Fleming), Ampicillin, Broad-spectrum like Chloramphenicol (effective against Gram-positive and Gram-negative bacteria); (2) Antiseptics: Applied to living tissues (Dettol = chloroxylenol + terpineol, Tincture of Iodine = 2-3% iodine in alcohol-water); (3) Disinfectants: Applied to inanimate objects/floors (0.2-0.4 ppm Chlorine, 1% phenol).',
          'Anti-Fertility Drugs: Synthetic progesterone/estrogen derivatives suppressing ovulation (Norethindrone, Ethinylestradiol); Saheli (Centchroman - world’s first non-steroidal, once-a-week oral contraceptive developed by CDRI Lucknow).'
        ]
      },
      {
        title: 'Cleansing Agents, Water Purification & Household Technologies',
        description: 'Saponification, detergent chemistry, permanent hardness removal, and microwave physics.',
        points: [
          'Soaps vs. Synthetic Detergents: Soaps are sodium or potassium salts of long-chain fatty acids (stearic, palmitic, oleic) formed via Saponification. Soaps form insoluble scum (precipitate) in hard water containing Ca2+ and Mg2+ ions. Synthetic detergents (anionic like sodium alkyl sulphates, cationic, and non-ionic) cleanse effectively in both soft and hard water.',
          'Glass Types & Manufacture: Soda-Lime Glass (ordinary window glass, bottles: Na2O + CaO + SiO2); Borosilicate Glass (Pyrex: SiO2 + B2O3, low coefficient of thermal expansion, used for lab glassware and microwave utensils); Flint Glass (contains lead oxide, high refractive index for optical lenses). Annealing is the controlled slow cooling process that removes internal stress and prevents shattering.',
          'Water Hardness & Softening: Temporary Hardness (caused by dissolved bicarbonates of Ca & Mg; removed by boiling or Clark’s method using slaked lime). Permanent Hardness (caused by chlorides and sulphates of Ca & Mg; removed by Washing Soda, Calgon’s process, or Ion-Exchange Resins / Zeolite Permutit process). Reverse Osmosis (RO) applies hydrostatic pressure greater than osmotic pressure across a semipermeable membrane to desalinate brackish water.',
          'Microwave Oven Heating Principle: Emits non-ionizing electromagnetic radiation at ~2.45 GHz. Water and polar molecules in food absorb microwave energy via Dielectric Heating (molecules rapidly rotate to align with alternating electric field, generating kinetic friction heat). Glass and ceramics do not absorb microwaves, while metals reflect them and can cause electrical sparking.'
        ]
      }
    ],
    comparativeTable: {
      headers: ['Class of Compound', 'Common Chemical Examples', 'Mechanism of Action', 'Primary Everyday Application'],
      rows: [
        ['Artificial Sweetener', 'Aspartame, Saccharin, Sucralose', 'Binds to taste-bud sweet receptors; non-metabolizable', 'Zero-calorie beverages, diabetic foods'],
        ['Antiseptic', 'Dettol (Chloroxylenol), Tincture of Iodine', 'Inactivates microbial enzymes on living skin', 'Wound cleaning, cuts, surgical prep'],
        ['Disinfectant', 'Chlorine water, 1% Phenol, SO2', 'Destroys bacterial cell walls on non-living surfaces', 'Sanitizing drainage, floors, municipal water'],
        ['Non-Narcotic Analgesic', 'Aspirin, Paracetamol', 'Inhibits cyclooxygenase (COX) enzyme & prostaglandins', 'Fever reduction, headache, cardiovascular protection'],
        ['Synthetic Detergent', 'Sodium lauryl sulphate', 'Amphiphilic micelle formation emulsifying grease in hard water', 'Laundry powders, liquid dishwashers']
      ]
    }
  },
  {
    id: 'great-indian-scientists',
    title: 'Achievements of Indian Scientists',
    subTitle: 'Raman, J.C. Bose, S.N. Bose, Saha, Bhabha, Chandrasekhar, Kalam, Sarabhai, Visvesvaraya, Khorana, Tessy Thomas',
    category: 'Indian Scientists',
    description: 'Pioneering scientific breakthroughs, conceptual paradigms, and institutional architectures built by India’s legendary scientific minds.',
    coreConcepts: [
      {
        title: 'Hall of Fame: Indian Scientific Giants (Part I)',
        description: 'Foundations of modern physics, astrophysics, radio optics, and engineering.',
        points: [
          'Sir Chandrasekhara Venkata Raman (1888–1970): Discovered the Raman Effect (February 28, 1928 - celebrated as National Science Day); proved that when light traverses a transparent material, deflected light changes wavelength due to molecular vibrational energy shifts. Won the Nobel Prize in Physics (1930) - first Asian to win a Nobel in science. Raman Spectroscopy is now indispensable in pharmaceutical testing, forensics, and Mars rovers.',
          'Acharya Jagadish Chandra Bose (1858–1937): Father of radio science and millimeter waves (demonstrated 60 GHz microwave wireless transmission in 1895 in Calcutta, preceding Marconi); invented the Crescograph to measure microscopic plant responses to external stimuli; pioneer of open-source science (refused to patent his radio coherer).',
          'Satyendra Nath Bose (1894–1974): Pioneered Bose-Einstein Statistics (quantum statistical mechanics for particles with integer spin); derived Planck’s black-body radiation law without classical electrodynamics. Predicted the Bose-Einstein Condensate (5th state of matter, realized experimentally in 1995). Subatomic particles following this statistic were named "Bosons" by Paul Dirac (including the Higgs Boson).',
          'Meghnad Saha (1893–1956): Formulated the Saha Ionization Equation (1920), which relates the ionization state of an element in a stellar atmosphere to temperature and pressure. It revolutionized astrophysics, allowing astronomers to accurately determine the surface temperatures and spectral classifications of stars.',
          'Sir Mokshagundam Visvesvaraya (1860–1962): Pre-eminent engineer, statesman, and Diwan of Mysore. Engineered the Krishna Raja Sagara dam, automated flood irrigation floodgates, and sea-wall flood protection systems for Visakhapatnam and Hyderabad. His birthday (September 15) is celebrated across India as National Engineers’ Day.'
        ],
        prelimsHook: 'The Saha Ionization Equation provides the theoretical foundation for determining the chemical composition and temperatures of stellar atmospheres from their spectral lines.',
        mainsHook: '"The work of J.C. Bose, S.N. Bose, and C.V. Raman proves that scientific genius can flourish despite colonial resource deprivations." Discuss their legacy for contemporary Indian R&D.',
        officialSource: 'INSA / Vigyan Prasar Profiles'
      },
      {
        title: 'Hall of Fame: Builders of Modern India’s Strategic Might (Part II)',
        description: 'Nuclear architects, space visionaries, missile pioneers, and Nobel laureates.',
        points: [
          'Homi Jehangir Bhabha (1909–1966): "Father of the Indian Nuclear Programme"; established Tata Institute of Fundamental Research (TIFR) and Trombay Atomic Energy Establishment (now BARC); conceptualized India’s unique Three-Stage Nuclear Power Programme to exploit India’s vast thorium reserves.',
          'Subrahmanyan Chandrasekhar (1910–1995): Formulated the Chandrasekhar Limit (1.44 Solar Masses); showed that white dwarf stars with mass exceeding 1.44 M☉ cannot support themselves against gravitational collapse and will collapse into neutron stars or black holes. Won the Nobel Prize in Physics (1983).',
          'Dr. Vikram Sarabhai (1919–1971): "Father of the Indian Space Programme"; established Physical Research Laboratory (PRL) and INCOSPAR (which evolved into ISRO in 1969); pioneered the Satellite Instructional Television Experiment (SITE 1975) to broadcast educational television to rural India.',
          'Dr. A.P.J. Abdul Kalam (1931–2015): "Missile Man of India" and 11th President of India. Led the SLV-III project that launched Rohini-1; architect of the Integrated Guided Missile Development Programme (IGMDP: Prithvi, Agni, Akash, Trishul, Nag); chief coordinator of Pokhran-II nuclear tests (1998); championed the PURA (Provision of Urban Amenities in Rural Areas) development model.',
          'Har Gobind Khorana (1922–2011): Shared the Nobel Prize in Physiology or Medicine (1968) for deciphering the genetic code and demonstrating how nucleotide triplets specify particular amino acids in protein synthesis; synthesized the world’s first artificial oligonucleotide gene.',
          'Dr. Tessy Thomas (b. 1963): "Missile Woman of India" (Agniputri); Project Director for the strategic Agni-IV and 5,000-km range Agni-V Intercontinental Ballistic Missile (ICBM); first woman scientist to head a strategic missile project in India.',
          'Prof. C.N.R. Rao (b. 1934): World-renowned authority on solid-state and materials chemistry, transition metal oxides, 2D graphene, and artificial photosynthesis; recipient of the Bharat Ratna (2014).'
        ]
      }
    ]
  },
  {
    id: 'indigenization-diverse-fields',
    title: 'Indigenization of Technology & Emerging Domains',
    subTitle: 'IT Supercomputing, ISRO Launchers, Nanotech, CRISPR Biotech, Defence Triad & Thorium Nuclear',
    category: 'Indigenization & Emerging Tech',
    description: 'In-depth analysis of India’s technological self-reliance across supercomputers, launch vehicles, advanced nanomaterials, gene therapy, defense hardware, and the three-stage nuclear doctrine.',
    coreConcepts: [
      {
        title: 'Information Technology, Supercomputing & Quantum Mission',
        description: 'From PARAM 8000 to AIRAWAT and the National Quantum Mission.',
        points: [
          'National Supercomputing Mission (NSM): Joint MeitY and DST initiative; installed 24+ petascale supercomputers (PARAM Shivay, PARAM Shakti, PARAM Siddhi-AI); AIRAWAT ranked #75 globally on the Top500 supercomputing list.',
          'National Quantum Mission (NQM): Outlay of ₹6,003 Crore; target to develop intermediate-scale quantum computers with 50-1000 physical qubits in 8 years; quantum satellite secure communication over 2,000 km.',
          'Semiconductor Indigenization: India Semiconductor Mission (ISM); $10 Billion incentive package granting 50% fiscal support for greenfield semiconductor fabrication plants (Tata-PSMC Dholera fab, Micron OSAT Sanand).'
        ],
        prelimsHook: 'The National Quantum Mission (NQM) aims to establish quantum communication across a ground station distance of 2,000 km within India.',
        mainsHook: '"Sovereign compute capacity and semiconductor fabrication are the bedrock of geopolitical autonomy in the 21st century." Analyze India’s strategy under the India AI and ISM missions.',
        officialSource: 'DST / MeitY Annual Reports'
      },
      {
        title: 'Space Technology: ISRO Launch Vehicle Evolution & Exploration',
        description: 'From sounding rockets to LVM3, Gaganyaan, and reusable space systems.',
        points: [
          'Launch Vehicle Hierarchy: (1) PSLV (Workhorse - 4 stages: Solid-Liquid-Solid-Liquid; placed Chandrayaan-1 and Mangalyaan into orbit); (2) GSLV Mk II (3 stages with indigenous Cryogenic Upper Stage - CE-7.5); (3) LVM3 (Bahubali - 2 solid S200 boosters, core liquid L110, cryogenic C25 engine; lifts 4 tonnes to GTO; launched Chandrayaan-3); (4) SSLV (Small Satellite Launch Vehicle - 3 solid stages; 500 kg payload to LEO for commercial rapid turnarounds).',
          'Key Milestones: Chandrayaan-3 (historic soft landing near Lunar South Pole, Shiv Shakti Point); Aditya-L1 (halo orbit around Sun-Earth Lagrangian Point L1); XPoSat (X-ray polarimetry space observatory - 2nd in the world after NASA); Gaganyaan (India’s 1st crewed spaceflight to 400 km LEO).',
          'Reusable Launch Vehicle (RLV-LEX): Autonomous winged body landing experiments demonstrating hypersonic aerodynamic reentry and autonomous landing runway recovery.'
        ]
      },
      {
        title: 'Biotechnology & Genetic Engineering: CRISPR-Cas9 & CAR-T',
        description: 'Precision molecular shears, immunotherapies, and GM crop biosafety governance.',
        points: [
          'CRISPR-Cas9: Clustered Regularly Interspaced Short Palindromic Repeats; guide RNA directs Cas9 endonuclease to cut double-stranded DNA at exact base pairs, enabling gene knockout or insertion. Awarded Nobel Prize in Chemistry 2020 (Doudna and Charpentier).',
          'CAR-T Cell Therapy (NexCAR19): Chimeric Antigen Receptor T-cell therapy; India’s first approved indigenous cancer gene therapy (developed by ImmunoACT and IIT Bombay), engineered to target CD19 proteins on B-cell lymphomas at 1/10th of western cost.',
          'GM Crops Governance in India: Regulated under EPA 1986 Rules for Manufacture, Use, Import, Export and Storage of Hazardous Micro-Organisms/Genetically Engineered Organisms (1989). Apex statutory body: Genetic Engineering Appraisal Committee (GEAC) under MoEFCC. Bt Cotton is the only commercially cultivated GM crop; DMH-11 Mustard (hybridization technology using Barnase-Barstar system) received environmental release approval.'
        ]
      },
      {
        title: 'Defence Indigenization: Strategic Triad & Missiles',
        description: 'Completing the nuclear triad and reducing import dependence.',
        points: [
          'Strategic Nuclear Triad: Land-based ballistic missiles (Agni-V with MIRV - Multiple Independently Targetable Re-entry Vehicle tested under Mission Divyastra); Air-delivered nuclear gravity bombs (Mirage 2000, Rafale); Sea-based survivable second-strike leg (SSBN INS Arihant and INS Arighat with K-15 and K-4 submarine-launched ballistic missiles - SLBMs).',
          'Missile Arsenal: BrahMos (supersonic cruise missile - Mach 2.8, joint Indo-Russian venture); Astra (indigenous Beyond Visual Range Air-to-Air Missile); Akash (surface-to-air missile with Rajendra radar); Helina / Nag (anti-tank guided missile with thermal imaging seeker).',
          'Naval & Aviation Indigenization: INS Vikrant (India’s 1st indigenous aircraft carrier - IAC-1 built by Cochin Shipyard); LCA Tejas Mk1A (light combat aircraft); Prachand Light Combat Helicopter (LCH, operational at Siachen altitudes); Positive Indigenisation Lists (over 4,000 military items banned from foreign import).'
        ]
      },
      {
        title: 'Nuclear Technology: Three-Stage Thorium Programme',
        description: 'Homi Bhabha’s sequential fuel-cycle design to unlock India’s monazite thorium reserves.',
        points: [
          'Stage 1: Pressurised Heavy Water Reactors (PHWRs): Uses Natural Uranium (0.7% U-235 fissile, 99.3% U-238 fertile) as fuel and Heavy Water (D2O) as moderator and coolant. Produces electricity and Plutonium-239 (Pu-239) byproduct.',
          'Stage 2: Fast Breeder Reactors (FBRs): Uses Plutonium-239 and Uranium-238 as fuel with liquid sodium coolant (no moderator, fast neutrons). "Breeds" more fissile fuel than it consumes (breeds Pu-239 from U-238 or Uranium-233 from Thorium-232 blanket). Prototype Fast Breeder Reactor (PFBR 500 MWe) constructed at Kalpakkam.',
          'Stage 3: Advanced Heavy Water Reactors (AHWRs): Uses Thorium-232 and Uranium-233 fuel cycle. Converts India’s abundant coastal monazite beach sand thorium into sovereign base-load power for centuries.',
          'Civil Nuclear Cooperation: Indo-US 123 Civil Nuclear Agreement (2008); NSG waiver permitting India to trade in civilian nuclear fuel despite being a non-signatory to the Nuclear Non-Proliferation Treaty (NPT).'
        ],
        prelimsHook: 'Thorium-232 is not itself fissile; it is fertile and must absorb a neutron to transmute into fissile Uranium-233 in a reactor core.',
        mainsHook: '"India’s Three-Stage Nuclear Power Programme is an engineering masterpiece of energy security." Detail its stages, fuel cycles, and current operational status.',
        officialSource: 'Department of Atomic Energy (DAE) / BARC'
      }
    ]
  },
  {
    id: 'intellectual-property-rights',
    title: 'Intellectual Property Rights (IPR)',
    subTitle: '7 Types of IPR, National IPR Policy 2016, Section 3(d), Compulsory Licensing & Novartis Case',
    category: 'IPR & Patents',
    description: 'Balancing corporate incentives for R&D with public welfare, affordable life-saving medicines, evergreening safeguards, and international TRIPS compliance.',
    coreConcepts: [
      {
        title: 'The 7 Forms of Intellectual Property in India',
        description: 'Statutory framework protecting industrial, literary, and artistic innovations.',
        points: [
          '1. Patents (Patents Act 1970, amended 2005): Protects new inventions having novelty, inventive step (non-obviousness), and industrial applicability. Term: 20 years from filing date.',
          '2. Trademarks (Trade Marks Act 1999): Protects distinctive brand names, logos, and taglines. Term: 10 years, renewable indefinitely.',
          '3. Copyrights (Copyright Act 1957): Protects original literary, dramatic, musical, artistic works, and computer software. Term: Author’s lifetime + 60 years.',
          '4. Industrial Designs (Designs Act 2000): Protects aesthetic visual features (shape, pattern, color) of manufactured articles. Term: 10 years + 5 years extension.',
          '5. Geographical Indications (GI Act 1999): Identifies goods originating from a specific geographical territory possessing unique quality/reputation (e.g., Darjeeling Tea, Basmati Rice, Kancheepuram Silk). Term: 10 years, renewable.',
          '6. Protection of Plant Varieties and Farmers’ Rights (PPV&FR Act 2001): Unique Indian legislation balancing breeders’ rights with farmers’ traditional rights to save, use, sow, and exchange seeds.',
          '7. Semiconductor Integrated Circuits Layout-Design (SICLD Act 2000): Protects topography of 3D microchips. Term: 10 years.'
        ],
        prelimsHook: 'Unlike Western patent regimes, India’s PPV&FR Act 2001 grants farmers the statutory right to save, use, resow, exchange, or sell seeds of protected varieties (except branded seeds).',
        mainsHook: '"India’s patent regime strikes a delicate equilibrium between TRIPS compliance and the constitutional Right to Health (Article 21)." Discuss with reference to Section 3(d).',
        officialSource: 'Controller General of Patents, Designs and Trade Marks (CGPDTM) / DPIIT'
      },
      {
        title: 'Landmark IPR Controversies: Evergreening & Compulsory Licensing',
        description: 'Section 3(d), Novartis Glivec verdict, and Bayer-Natco compulsory licensing precedent.',
        points: [
          'Anti-Evergreening Safeguard (Section 3(d) of Patents Act): Prevents pharmaceutical MNCs from extending expired 20-year monopolies by making incremental cosmetic alterations (new forms, polymorphs, salts) without demonstrating a statistically significant increase in "Therapeutic Efficacy".',
          'Novartis AG v. Union of India (Supreme Court 2013): Novartis sought patent for Beta-crystalline form of Imatinib Mesylate (cancer drug Glivec). SC rejected patent on grounds that Novartis failed to prove enhanced therapeutic efficacy over the known substance under Section 3(d), protecting access to generic oncology drugs globally.',
          'Compulsory Licensing (Section 84 of Patents Act): Government can license a third party to manufacture a patented drug without patentee’s consent if: (1) Reasonable public requirements are not satisfied; (2) Patented invention is not available at reasonably affordable price; (3) Invention is not worked in India.',
          'Bayer v. Natco Pharma (2012): India’s first compulsory license granted to Natco for kidney-liver cancer drug Nexavar (Sorafenib tosylate). Bayer sold the drug at ~₹2,80,000 per month; Natco was permitted to sell generic version at ~₹8,800 per month while paying Bayer a 6% royalty.',
          'Traditional Knowledge Digital Library (TKDL): Groundbreaking database documenting traditional Ayurvedic and Unani medicinal formulations in 5 international languages (English, French, German, Spanish, Japanese) to prevent foreign biopiracy patents (e.g., Turmeric and Neem patent revocations).'
        ]
      }
    ],
    comparativeTable: {
      headers: ['IPR Type', 'Governing Indian Act', 'Protection Period', 'Statutory Authority'],
      rows: [
        ['Patents', 'Patents Act 1970 (amended 2005)', '20 Years from filing', 'Controller General of Patents, Designs & Trademarks'],
        ['Trademarks', 'Trade Marks Act 1999', '10 Years (Renewable indefinitely)', 'Trade Marks Registry (DPIIT)'],
        ['Copyright', 'Copyright Act 1957', 'Lifetime of author + 60 years', 'Copyright Office (DPIIT)'],
        ['Geographical Indications', 'GI of Goods Act 1999', '10 Years (Renewable)', 'GI Registry, Chennai'],
        ['Plant Varieties', 'PPV&FR Act 2001', '15 to 18 Years', 'PPV&FR Authority (Min of Agriculture)']
      ]
    }
  }
];

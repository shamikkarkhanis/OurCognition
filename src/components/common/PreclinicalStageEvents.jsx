// File: src/components/common/AlzheimersEvents.jsx
const preclinicalStageEvents = [

    //* include some meta data for color based on stage (later stages begin more warm)
    {
        title: "Preclinical Stage",
        timeframe: "15–20 years before symptoms",
        description: "Silent brain changes begin well before cognitive symptoms are noticeable. This stage is marked by molecular pathology, particularly involving amyloid-beta and tau proteins.",
        brain_region: ['parietal-lobe', 'posterior-cingulate', 'medial-prefrontal-cortex'],
        what_happens: [
            'Amyloid-beta (Aβ) peptides begin to misfold and aggregate.',
            'Extracellular amyloid plaques form in neocortical areas, especially the precuneus and posterior cingulate cortex.',
            'Subtle synaptic changes occur despite preserved neuron count.',
            'CSF biomarkers may show decreased Aβ42 levels.'
        ],
        why_it_matters: [
            'Amyloid accumulation is thought to trigger downstream tauopathy and neuroinflammation.',
            'Synaptic failure precedes atrophy or memory loss.',
            'This stage offers a long window for early intervention before symptoms arise.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2011.03.003",
            "https://doi.org/10.1016/j.jalz.2018.02.018",
            "https://doi.org/10.1016/S1474-4422(13)70044-9"
        ]
    },
    {
        title: "Amyloid Initiation",
        timeframe: "15–10 years before symptoms",
        description: "The buildup of amyloid-beta begins silently in healthy adults. No noticeable cognitive changes yet.",
        brain_region: ['precuneus', 'posterior-cingulate', 'medial-prefrontal-cortex'],
        what_happens: [
            'Misfolded Aβ peptides begin to accumulate into plaques.',
            'Amyloid deposits begin in the default mode network regions like the precuneus and posterior cingulate.',
            'FDG-PET scans may reveal early hypometabolism in these regions.'
        ],
        why_it_matters: [
            'Amyloid may trigger a toxic cascade that disrupts synaptic transmission.',
            'These early changes can go undetected for over a decade.',
            'This is the first sign Alzheimer’s pathology is underway, despite no memory symptoms.'
        ],
        sources: [
            "https://doi.org/10.1016/S1474-4422(13)70044-9",
            "https://doi.org/10.1016/j.jalz.2009.07.003"
        ]
    },
    {
        title: "Tau Seeding & Spread",
        timeframe: "10–5 years before symptoms",
        description: "Hyperphosphorylated tau begins accumulating in the medial temporal lobe, specifically the entorhinal cortex.",
        brain_region: ['entorhinal-cortex', 'hippocampus'],
        what_happens: [
            'Tau proteins become hyperphosphorylated, forming intracellular tangles.',
            'Tangles originate in the transentorhinal and entorhinal cortices.',
            'These regions show subtle structural atrophy on MRI.'
        ],
        why_it_matters: [
            'Tau pathology is more closely linked to cognitive decline than amyloid.',
            'Tangle spread disrupts neural circuits involved in memory encoding.',
            'The hippocampus begins to show early signs of structural deterioration.'
        ],
        sources: [
            "https://doi.org/10.1007/BF00308809",
            "https://doi.org/10.1016/j.jalz.2011.03.003"
        ]
    },
    {
        title: "Early Neurodegeneration",
        timeframe: "5–0 years before symptoms",
        description: "Hippocampal shrinkage and subtle cognitive inefficiencies begin to emerge before clinical symptoms.",
        brain_region: ['hippocampus', 'entorhinal-cortex', 'temporo-parietal-cortex'],
        what_happens: [
            'Ongoing neuronal loss in the hippocampus and adjacent cortices.',
            'Detectable atrophy on structural MRI (e.g., volumetric analysis).',
            'Mild metabolic decline shown via FDG-PET.',
            'Synaptic loss leads to measurable changes in memory performance on sensitive tests.'
        ],
        why_it_matters: [
            'Early neurodegeneration sets the stage for mild cognitive impairment (MCI).',
            'Memory encoding becomes less efficient before noticeable symptoms.',
            'Brain reserve may compensate temporarily, delaying clinical diagnosis.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2018.02.018",
            "https://doi.org/10.1016/j.jalz.2009.07.003",
            "https://doi.org/10.1016/j.nicl.2011.11.002"
        ]
    }
]

export default preclinicalStageEvents;
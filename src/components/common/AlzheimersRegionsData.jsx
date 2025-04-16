const alzheimersRegionData = {
    "frontal-lobe": {
        name: "Frontal Lobe",
        functions: [
            "Executive functions (planning, decision making, reasoning)",
            "Motor control and goal-directed behavior",
            "Personality, emotional regulation, and impulse control"
        ],
        alzheimersImpact: {
            structuralChanges: "Notable atrophy observed particularly in the dorsolateral prefrontal cortex and orbitofrontal cortex, reducing cortical thickness and white matter connectivity.",
            biochemicalChanges: [
                "Significant reduction in cholinergic and dopaminergic neurotransmission",
                "Increased tau pathology disrupting executive control circuits",
                "Synaptic loss impairs cortical integration and inhibitory control"
            ],
            clinicalSymptoms: [
                "Impaired planning and reasoning",
                "Personality changes including disinhibition or apathy",
                "Reduced motivation, initiative, and goal-oriented behavior"
            ]
        },
        sources: [
            "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6869805/",
            "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2443731/"
        ]
    },

    "parietal-lobe": {
        name: "Parietal Lobe",
        functions: [
            "Spatial orientation and navigation",
            "Object recognition and manipulation",
            "Mathematical and numerical cognition"
        ],
        alzheimersImpact: {
            structuralChanges: "Marked cortical thinning, especially in the inferior parietal lobule and precuneus, contributing to impaired spatial processing.",
            biochemicalChanges: [
                "Functional disconnection from hippocampal-cortical networks",
                "Decreased glucose metabolism evident in FDG-PET studies",
                "Glutamatergic signaling disruption affecting visuospatial integration"
            ],
            clinicalSymptoms: [
                "Difficulty navigating familiar environments",
                "Impaired visuospatial awareness and depth perception",
                "Problems with calculations and object manipulation"
            ]
        },
        sources: [
            "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2734142/",
            "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5956809/"
        ]
    },

    "temporal-lobe": {
        name: "Temporal Lobe",
        functions: [
            "Auditory and language comprehension (Wernicke’s area)",
            "Declarative and episodic memory formation",
            "Emotional processing (via amygdala and hippocampus)"
        ],
        alzheimersImpact: {
            structuralChanges: "Early and severe atrophy of medial temporal structures such as the hippocampus and entorhinal cortex, along with lateral temporal degeneration in later stages.",
            biochemicalChanges: [
                "Dense amyloid-beta and hyperphosphorylated tau accumulation",
                "Loss of synapses and neuronal networks crucial for language and memory",
                "Reduced acetylcholine levels in memory-related circuits"
            ],
            clinicalSymptoms: [
                "Profound short-term memory impairment",
                "Difficulty understanding spoken language and naming objects",
                "Disrupted recall of autobiographical events"
            ]
        },
        sources: [
            "https://pubmed.ncbi.nlm.nih.gov/1759558/",
            "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3267543/"
        ]
    },

    "occipital-lobe": {
        name: "Occipital Lobe",
        functions: [
            "Primary and associative visual processing",
            "Interpretation of motion, shape, and spatial orientation",
            "Recognition of faces and complex scenes"
        ],
        alzheimersImpact: {
            structuralChanges: "Atrophy observed in visual association areas, especially in the lingual gyrus and cuneus, with more severe damage in posterior cortical atrophy (PCA).",
            biochemicalChanges: [
                "Disruption of dorsal and ventral visual pathways",
                "Amyloid-beta deposition in the calcarine and extrastriate cortex",
                "Reduced metabolic activity in the occipital pole"
            ],
            clinicalSymptoms: [
                "Visual misperceptions or illusions (e.g. simultanagnosia)",
                "Difficulty recognizing faces, objects, or text (visual agnosia)",
                "Occasional visual hallucinations in late stages"
            ]
        },
        sources: [
            "https://pubmed.ncbi.nlm.nih.gov/21348892/",
            "https://www.nature.com/articles/nrneurol.2012.13"
        ]
    },

    "brainstem": {
        name: "Brainstem",
        functions: [
            "Autonomic control (respiration, cardiac regulation, digestion)",
            "Sleep-wake cycle and arousal (via reticular activating system)",
            "Neurochemical relay hub for dopamine, serotonin, norepinephrine"
        ],
        alzheimersImpact: {
            structuralChanges: "Early neurodegeneration of the locus coeruleus (noradrenaline) and dorsal raphe nucleus (serotonin), even before cortical symptoms emerge.",
            biochemicalChanges: [
                "Degeneration of monoaminergic neurons leads to dysregulation of mood and circadian rhythms",
                "Noradrenergic depletion disrupts attention and cognitive vigilance",
                "Serotonergic loss contributes to depression and sleep fragmentation"
            ],
            clinicalSymptoms: [
                "REM sleep disturbances and daytime drowsiness",
                "Heightened anxiety or mood instability",
                "Autonomic dysfunctions such as irregular heart rate and poor thermoregulation"
            ]
        },
        sources: [
            "https://pubmed.ncbi.nlm.nih.gov/28326995/",
            "https://pubmed.ncbi.nlm.nih.gov/23620517/"
        ]
    }
};

export default alzheimersRegionData;

const alzheimersRegionData = {
    "frontal-lobe": {
        name: "Frontal Lobe",
        functions: [
            "Executive functions (planning, decision making, reasoning)",
            "Motor control",
            "Personality and emotional regulation"
        ],
        alzheimersImpact: {
            structuralChanges: "Progressive atrophy, particularly in the dorsolateral prefrontal cortex and orbitofrontal cortex.",
            biochemicalChanges: [
                "Reduced cholinergic transmission",
                "Impaired dopamine signaling in prefrontal circuits"
            ],
            clinicalSymptoms: [
                "Impaired judgment and decision-making",
                "Personality changes",
                "Loss of initiative and apathy"
            ]
        }
    },
    "parietal-lobe": {
        name: "Parietal Lobe",
        functions: [
            "Spatial orientation and navigation",
            "Object recognition and manipulation",
            "Mathematical and numerical cognition"
        ],
        alzheimersImpact: {
            structuralChanges: "Cortical thinning and disrupted white matter tracts affecting visuospatial processing.",
            biochemicalChanges: [
                "Dysregulation of glutamatergic pathways",
                "Functional disconnect from hippocampus"
            ],
            clinicalSymptoms: [
                "Getting lost easily",
                "Difficulty recognizing familiar objects or faces",
                "Disorientation in time and space"
            ]
        }
    },
    "temporal-lobe": {
        name: "Temporal Lobe",
        functions: [
            "Auditory processing",
            "Memory formation",
            "Language comprehension (left hemisphere)"
        ],
        alzheimersImpact: {
            structuralChanges: "Atrophy of the medial temporal structures including the hippocampus and entorhinal cortex.",
            biochemicalChanges: [
                "Early tau pathology and amyloid deposition",
                "Decreased synaptic density in auditory and language areas"
            ],
            clinicalSymptoms: [
                "Memory loss (especially episodic)",
                "Difficulty understanding spoken language",
                "Impaired auditory discrimination"
            ]
        }
    },
    "occipital-lobe": {
        name: "Occipital Lobe",
        functions: [
            "Visual processing and interpretation",
            "Recognition of shapes, colors, and motion"
        ],
        alzheimersImpact: {
            structuralChanges: "Less affected in early stages but may show atrophy in visual association areas later.",
            biochemicalChanges: [
                "Disruption of posterior cortical networks",
                "Secondary involvement from parietal and temporal degeneration"
            ],
            clinicalSymptoms: [
                "Visual misperceptions",
                "Difficulty interpreting complex visual scenes",
                "Reduced visual memory"
            ]
        }
    },
    "brainstem": {
        name: "Brainstem",
        functions: [
            "Autonomic functions (breathing, heart rate)",
            "Sleep regulation",
            "Relay center for sensory and motor pathways"
        ],
        alzheimersImpact: {
            structuralChanges: "Neuronal loss in the locus coeruleus and dorsal raphe nuclei.",
            biochemicalChanges: [
                "Early degeneration of noradrenergic and serotonergic systems",
                "Reduced arousal and alertness modulation"
            ],
            clinicalSymptoms: [
                "Sleep disturbances",
                "Reduced attention and alertness",
                "Autonomic dysfunction in late stages"
            ]
        }
    }
};

export default alzheimersRegionData;

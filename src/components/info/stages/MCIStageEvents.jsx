// File: src/components/common/MCIStageEvents.jsx

const mciStageEvents = [
    {
        title: "Onset of Mild Cognitive Impairment",
        timeframe: "0–2 years before diagnosis",
        description: "Patients begin experiencing subtle memory problems, especially around recent conversations or appointments.",
        brain_region: ['hippocampus', 'amygdala'],
        what_happens: [
            'Tau tangles accumulate further in the hippocampus and adjacent cortices.',
            'Neural circuits responsible for forming and retrieving recent memories become disrupted.',
            'Amygdala shows early signs of involvement, affecting emotional regulation and memory consolidation.'
        ],
        why_it_matters: [
            'Memory lapses begin to affect daily activities, such as misplacing items or forgetting recent events.',
            'These symptoms may be dismissed as “normal aging,” delaying diagnosis.',
            'Patients are often aware of their own memory changes.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2011.03.003",
            "https://doi.org/10.1016/j.neuron.2004.01.014"
        ]
    },
    {
        title: "Progression of MCI",
        timeframe: "2–4 years after onset",
        description: "Memory, executive function, and attention decline more noticeably, affecting social and occupational functioning.",
        brain_region: ['hippocampus', 'entorhinal-cortex', 'amygdala', 'prefrontal-cortex'],
        what_happens: [
            'Structural atrophy in the hippocampus and medial temporal lobe increases.',
            'Functional MRI shows reduced activation in memory encoding tasks.',
            'Tau pathology spreads to prefrontal circuits involved in planning and multitasking.'
        ],
        why_it_matters: [
            'Patients may struggle to follow conversations, plan tasks, or remember scheduled events.',
            'Changes in attention and emotional control begin to surface.',
            'This stage often precedes conversion to early Alzheimer’s dementia.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2018.02.018",
            "https://doi.org/10.1016/j.biopsych.2008.12.027"
        ]
    },
    {
        title: "Conversion to Alzheimer’s Dementia",
        timeframe: "4+ years after MCI diagnosis",
        description: "MCI progresses into diagnosable Alzheimer’s dementia, marked by significant cognitive and functional impairment.",
        brain_region: ['hippocampus', 'amygdala', 'temporo-parietal-cortex', 'prefrontal-cortex'],
        what_happens: [
            'Widespread neurodegeneration involving cortical association areas.',
            'Further spread of tau and reduction in glucose metabolism on PET.',
            'Loss of gray matter correlates with clear cognitive deficits.'
        ],
        why_it_matters: [
            'Daily life becomes impaired: patients may need assistance with medications, appointments, or household tasks.',
            'Neuropsychiatric symptoms such as anxiety or apathy may emerge.',
            'This marks the beginning of Alzheimer’s as a diagnosed dementia.'
        ],
        sources: [
            "https://doi.org/10.1016/S1474-4422(13)70044-9",
            "https://doi.org/10.1016/j.neuroimage.2009.01.053"
        ]
    }
];

export default mciStageEvents;
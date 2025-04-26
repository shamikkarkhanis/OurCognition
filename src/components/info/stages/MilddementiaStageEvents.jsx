// File: src/components/common/AlzheimersEvents.jsx
const milddementiaStageEvents = [
    {
        title: "Early Mild Dementia",
        timeframe: "0–2 years after Alzheimer's diagnosis",
        description: "Memory and orientation difficulties become more pronounced. Language and visuospatial skills begin to deteriorate.",
        brain_region: ['temporal-lobe', 'parietal-lobe'],
        what_happens: [
            'Tau tangles spread into lateral temporal and parietal cortices.',
            'Amyloid plaques become denser across association cortices.',
            'Degradation of angular gyrus and supramarginal gyrus affects visuospatial reasoning.'
        ],
        why_it_matters: [
            'Patients struggle with word retrieval and naming objects.',
            'Increased disorientation in familiar places (e.g., getting lost while driving).',
            'Daily tasks like reading maps, managing money, or cooking become error-prone.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2018.02.018",
            "https://doi.org/10.1016/j.neuropsychologia.2004.11.013",
            "https://doi.org/10.1016/j.neuroimage.2005.10.031"
        ]
    },
    {
        title: "Language and Spatial Breakdown",
        timeframe: "2–4 years after Alzheimer's diagnosis",
        description: "As tau pathology expands, patients show marked decline in communication and navigation abilities.",
        brain_region: ['superior-temporal-gyrus', 'inferior-parietal-lobule', 'fusiform-gyrus'],
        what_happens: [
            'Wernicke’s area begins to show functional impairment, disrupting comprehension.',
            'Damage to inferior parietal areas affects body orientation and object manipulation.',
            'Degeneration of the fusiform gyrus impairs facial recognition.'
        ],
        why_it_matters: [
            'Patients may misuse words, repeat stories, or lose track mid-sentence.',
            'Navigation problems emerge even in familiar settings (e.g., own neighborhood).',
            'Visual agnosia may lead to confusion recognizing people or places.'
        ],
        sources: [
            "https://doi.org/10.1016/S0140-6736(10)61349-9",
            "https://doi.org/10.1002/ana.410220207",
            "https://doi.org/10.1016/j.nicl.2014.06.012"
        ]
    },
    {
        title: "Compensatory Decline & Routine Dependence",
        timeframe: "4–5 years after mild dementia onset",
        description: "Patients rely heavily on structured routines and external cues to manage daily life as independent memory use deteriorates.",
        brain_region: ['temporal-lobe', 'parietal-lobe', 'posterior-cingulate'],
        what_happens: [
            'Widespread cortical thinning disrupts integration between sensory, memory, and motor functions.',
            'Posterior cingulate dysfunction impairs cognitive flexibility and planning.',
            'Connectivity between medial parietal and hippocampal regions breaks down.'
        ],
        why_it_matters: [
            'Patients begin to rely on calendars, alarms, or caregivers for basic tasks.',
            'Increased confusion with time, date, and personal schedule.',
            'High emotional impact on caregivers and increased risk of accidents.'
        ],
        sources: [
            "https://doi.org/10.1016/j.neuropsychologia.2012.05.029",
            "https://doi.org/10.1016/j.jalz.2016.03.002"
        ]
    }

];

export default milddementiaStageEvents;
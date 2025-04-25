

const moderatedementiaStageEvents = [
    {
        title: "Frontal Lobe Impairment Onset",
        timeframe: "2–5 years after Alzheimer’s diagnosis",
        description: "Patients begin exhibiting signs of frontal lobe dysfunction, such as poor judgment and impulse control issues.",
        brain_region: ['prefrontal-cortex', 'orbitofrontal-cortex'],
        what_happens: [
            'Tau pathology and neuronal loss expand into the prefrontal cortex.',
            'Disruption of circuits involved in decision-making, planning, and social behavior.',
            'Increased metabolic decline seen in PET scans of the frontal lobes.'
        ],
        why_it_matters: [
            'Patients may make unsafe financial or personal decisions.',
            'They may show reduced awareness of inappropriate behavior.',
            'Frontal dysfunction often leads to increased caregiver burden.'
        ],
        sources: [
            "https://doi.org/10.1016/j.neurobiolaging.2010.10.014",
            "https://doi.org/10.1016/j.neuroimage.2010.06.031"
        ]
    },
    {
        title: "Behavioral and Personality Changes",
        timeframe: "5–7 years after diagnosis",
        description: "Alterations in emotional regulation and personality become more pronounced.",
        brain_region: ['anterior-cingulate-cortex', 'orbitofrontal-cortex', 'amygdala'],
        what_happens: [
            'Atrophy affects networks responsible for emotional processing and self-awareness.',
            'Decreased activation in the anterior cingulate impairs empathy and attention.',
            'Involvement of the amygdala contributes to mood swings and paranoia.'
        ],
        why_it_matters: [
            'Patients may exhibit aggression, depression, or apathy.',
            'There is reduced insight into their cognitive deficits.',
            'These changes are often distressing for caregivers and family members.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2008.05.2231",
            "https://doi.org/10.1016/j.neuroimage.2007.11.046"
        ]
    },
    {
        title: "Loss of Functional Independence",
        timeframe: "6–8 years after diagnosis",
        description: "Patients lose the ability to manage daily tasks such as dressing, cooking, or managing medications without help.",
        brain_region: ['frontal-lobe', 'parietal-lobe'],
        what_happens: [
            'Frontal and parietal atrophy disrupts motor planning and executive coordination.',
            'Difficulty sequencing multi-step activities.',
            'Increased reliance on caregivers for basic needs.'
        ],
        why_it_matters: [
            'The patient transitions from partial to full-time care dependency.',
            'Quality of life declines without structured support.',
            'This marks a significant inflection point in disease severity.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2011.03.007",
            "https://doi.org/10.1016/j.nicl.2015.07.005"
        ]
    }
];

export default moderatedementiaStageEvents;
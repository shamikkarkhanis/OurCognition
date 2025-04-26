import React from 'react';
import preclinicalStageEvents from './stages/PreclinicalStageEvents';
import mciStageEvents from './stages/MCIStageEvents';
import milddementiaStageEvents from './stages/MilddementiaStageEvents';
import moderatedementiaStageEvents from './stages/ModeratedementiaStageEvents';
import severedementiaStageEvents from './stages/SeveredementiaStageEvents';

// Alzheimer's timeline data
const alzheimersEvents = [
    {
        title: "Introduction to Alzheimer's Disease",
        description: "Alzheimer's is a progressive neurodegenerative disorder that gradually destroys memory and cognitive function.",
        brain_region: ['hippocampus', 'entorhinal-cortex'],
        what_happens: [
            "Alzheimer's starts in the entorhinal cortex and hippocampus — centers of memory formation.",
            'Beta-amyloid plaques and tau tangles accumulate → neuron death begins.',
            'Neuron loss leads to shrinkage in affected brain areas.'
        ],
        why_it_matters: [
            'Early detection of brain changes is crucial for intervention',
            'Understanding the initial regions affected helps track disease progression',
            'Identifying these changes enables better treatment planning'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2011.03.003",
            "https://doi.org/10.1016/S1474-4422(13)70044-9"
        ]
    },
    ...preclinicalStageEvents,
    ...mciStageEvents,
    ...milddementiaStageEvents,
    ...moderatedementiaStageEvents,
    ...severedementiaStageEvents

];

export default alzheimersEvents;
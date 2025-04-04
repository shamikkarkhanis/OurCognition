import React from 'react';

// Alzheimer's timeline data
const alzheimersEvents = [
    {
        title: "Introduction to Alzheimer's Disease",
        description: "Alzheimer's is a progressive neurodegenerative disorder that gradually destroys memory and cognitive function.",
        brain_region: ['hippocampus', 'entorhinal-cortex'],
        details: [
            'Alzheimer’s starts in the entorhinal cortex and hippocampus — centers of memory formation.',
            'Beta-amyloid plaques and tau tangles accumulate → neuron death begins.',
            'Neuron loss leads to shrinkage in affected brain areas.'
        ]
    },
    {
        title: "Memory Loss",
        description: "Forgetting recently learned information is one of the earliest and most common symptoms.",
        brain_region: ['hippocampus', 'temporal-lobe'],
        details: [
            'The hippocampus helps form and consolidate new memories.',
            'The temporal lobe stores sensory input and contextual memory.',
            'As damage spreads, short-term memory and recall worsen.'
        ]
    },
    {
        title: "Difficulty Planning or Solving Problems",
        description: "Higher-order cognitive functions like planning and problem-solving become impaired.",
        brain_region: ['prefrontal-cortex'],
        details: [
            'The prefrontal cortex (PFC) manages executive function: planning, organization, reasoning.',
            'Alzheimer’s disrupts neural circuits in the PFC.',
            'Symptoms include poor judgment, disorganization, and trouble following steps.'
        ]
    },
    {
        title: "Confusion with Time or Place",
        description: "Patients begin to lose track of time, dates, and familiar places.",
        brain_region: ['parietal-lobe', 'retrosplenial-cortex'],
        details: [
            'The parietal lobe integrates spatial awareness and orientation.',
            'The retrosplenial cortex helps with temporal sequencing and navigation.',
            'Damage leads to confusion about current events and getting lost.'
        ]
    },
    {
        title: "Challenges in Completing Familiar Tasks",
        description: "Daily tasks, such as cooking or managing finances, become increasingly difficult.",
        brain_region: ['temporal-lobe', 'parietal-lobe', 'frontal-lobe'],
        details: [
            'Temporal lobe: language and auditory processing.',
            'Parietal lobe: motor planning and visual-spatial coordination.',
            'Frontal lobe: sequencing and decision-making.',
            'Disruption across these regions causes problems with task completion.'
        ]
    },
    {
        title: "Changes in Mood and Personality",
        description: "Noticeable mood swings, depression, anxiety, or suspiciousness may develop.",
        brain_region: ['amygdala', 'prefrontal-cortex', 'anterior-cingulate-cortex'],
        details: [
            'Amygdala → processes fear, anxiety, and emotional memory.',
            'PFC → regulates impulse control and emotional response.',
            'Anterior cingulate → involved in empathy, attention, and mood regulation.',
            'Damage here contributes to irritability, apathy, or paranoia.'
        ]
    },
    {
        title: "Loss of Physical Function",
        description: "In late stages, physical abilities such as walking, swallowing, and bladder control decline.",
        brain_region: ['motor-cortex', 'brainstem'],
        details: [
            'Motor cortex controls voluntary movement; damage leads to stiffness or inability to walk.',
            'Brainstem functions like swallowing and breathing may eventually be impaired.',
            'This stage requires full-time care.'
        ]
    }
];

export default alzheimersEvents;
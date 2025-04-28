const severedementiaStageEvents = [
    {
        title: "Cognitive Disconnection and Language Loss",
        timeframe: "8–10 years after diagnosis",
        description: "Patients lose the ability to form coherent speech and have difficulty recognizing loved ones or familiar environments.",
        brain_region: ['temporal-lobe', 'parietal-lobe', 'hippocampus'],
        what_happens: [
            'Advanced atrophy in language-associated regions of the left temporal lobe.',
            'Loss of hippocampal integrity eliminates the ability to form or retrieve personal memories.',
            'Parietal degeneration disrupts spatial awareness and object recognition.'
        ],
        why_it_matters: [
            'Patients may speak in fragments, or become entirely nonverbal.',
            'They can no longer recognize spouses, children, or lifelong friends.',
            'Emotional disconnect becomes profound and heartbreaking for caregivers.'
        ],
        sources: [
            "https://doi.org/10.1016/j.neuroimage.2004.07.067",
            "https://doi.org/10.1016/j.jalz.2014.06.005"
        ]
    },
    {
        title: "Motor Decline and Physical Dependency",
        timeframe: "10–12 years after diagnosis",
        description: "Severe brain shrinkage spreads to motor regions, leading to loss of mobility and fine motor control.",
        brain_region: ['motor-cortex', 'cerebellum', 'brainstem'],
        what_happens: [
            'Degeneration of the motor cortex causes muscle rigidity and difficulty walking.',
            'Cerebellar involvement disrupts balance and coordination.',
            'Swallowing reflex and respiratory control may be impaired as the brainstem is affected.'
        ],
        why_it_matters: [
            'Patients become bedridden or require wheelchairs and full-time assistance.',
            'Risk of aspiration pneumonia increases due to impaired swallowing.',
            'Severe weight loss, infections, and immobility-related complications are common.'
        ],
        sources: [
            "https://doi.org/10.1016/j.jalz.2013.06.005",
            "https://doi.org/10.1016/j.neurobiolaging.2007.04.007"
        ]
    },
    {
        title: "End-Stage Neurological Decline",
        timeframe: "12+ years after diagnosis",
        description: "Widespread neuronal death and cortical collapse lead to near-total unresponsiveness and biological shutdown.",
        brain_region: ['entire-cortex', 'brainstem', 'thalamus'],
        what_happens: [
            'Neurodegeneration is global — affecting all cortical and subcortical systems.',
            'Brainstem failure may compromise respiratory and cardiovascular centers.',
            'Loss of thalamocortical connectivity results in deep unresponsiveness.'
        ],
        why_it_matters: [
            'Patients are no longer responsive to their environment or stimuli.',
            'Hospice or palliative care is typically required.',
            'This stage often precedes death due to organ failure or complications.'
        ],
        sources: [
            "https://doi.org/10.1016/j.nicl.2015.09.005",
            "https://doi.org/10.1016/j.jalz.2014.10.001"
        ]
    }

];

export default severedementiaStageEvents;
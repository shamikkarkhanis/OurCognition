// Timeline.jsx

import React, { useState } from 'react';

const Timeline = ({ selection }) => { // ! func to set selected region through timeline 
    const [currentIndex, setCurrentIndex] = useState(0);

    const alzheimers_events = [
        {
            title: "Introduction to Alzheimer's Disease",
            description: "Alzheimer's is a progressive neurodegenerative disorder that gradually destroys memory and cognitive function.",
            brain_region: ['hippocampus'],
            details: [
                'Beta-amyloid plaques → tau tangles → neuron death.',
                'Neuron loss → brain tissue shrinkage in affected areas.',
                'Starts in memory centers (e.g., hippocampus) → spreads to other regions.'
            ]
        },
        {
            title: 'Memory Loss',
            description: 'Forgetting recently learned information is one of the earliest symptoms of Alzheimer’s.',
            brain_region: ['hippocampus'],
            details: [
                'Hippocampus → forms and consolidates new memories.',
                'Plaques and tangles → hippocampus damage → impaired short-term memory.',
                'Progression → widespread memory loss across the brain.'
            ]
        },
        {
            title: 'Difficulty Planning or Solving Problems',
            description: 'Alzheimer’s impairs higher-order cognitive functions like planning and problem-solving.',
            brain_region: ['pfc'],
            details: [
                'PFC → manages reasoning, planning, and organization.',
                'Disrupted PFC connections → poor task management → difficulty solving problems.',
                'Symptoms → trouble handling numbers, following steps, or making decisions.'
            ]
        },
        {
            title: 'Confusion with Time or Place',
            description: 'Individuals lose track of time, dates, or familiar locations as Alzheimer’s progresses.',
            brain_region: ['parietal-lobe'],
            details: [
                'Parietal lobe → processes spatial awareness and temporal orientation.',
                'Damage → disorientation → confusion about current events and surroundings.',
                'Symptoms → difficulty recognizing familiar places or navigating environments.'
            ]
        },
        {
            title: 'Challenges in Completing Familiar Tasks',
            description: 'Daily tasks, such as managing a budget or driving, become increasingly difficult.',
            brain_region: ['temporal-lobe', 'parietal-lobe'],
            details: [
                'Temporal lobe → processes sensory input, language, and memory.',
                'Parietal lobe → coordinates spatial reasoning and motor planning.',
                'Alzheimer’s disrupts these areas → difficulty with routine and familiar activities.'
            ]
        },
        {
            title: 'Changes in Mood and Personality',
            description: 'Alzheimer’s leads to mood swings and personality changes, such as anxiety or suspicion.',
            brain_region: ['amygdala', 'pfc'],
            details: [
                'Amygdala → emotional regulation → damage → heightened anxiety and irritability.',
                'PFC dysfunction → reduced emotional control → unpredictable mood swings.',
                'Behavioral changes → confusion, withdrawal, or suspicion toward others.'
            ]
        }
    ];


    const anxiety_events = [
        {
            title: 'Introduction to Anxiety',
            description: 'Anxiety is a complex emotional and physiological response affecting multiple brain regions and systems.',
            brain_region: ['hypothalamus', 'amygdala', 'pfc', 'basal-ganglia', 'brainstem'],
            details: [
                'Interconnected neural circuits → heightened arousal, worry, and vigilance.',
                'Cognitive effects → poor focus, memory issues, and impaired decision-making.',
                'Understanding anxiety → better coping strategies and treatments.'
            ]
        },
        {
            title: 'Increased Cortisol Levels',
            description: 'Anxiety elevates cortisol, impairing cognitive functions like attention and memory.',
            brain_region: ['hypothalamus'],
            details: [
                'Hypothalamus → HPA axis → cortisol release.',
                'Chronic cortisol → hippocampus damage → impaired memory.',
                'Excess cortisol → prefrontal cortex disruption → poor concentration.'
            ]
        },
        {
            title: 'Heightened Amygdala Activity',
            description: 'Anxiety activates the amygdala, amplifying fear and emotional responses.',
            brain_region: ['amygdala'],
            details: [
                'Amygdala → processes threats → initiates fight-or-flight.',
                'Hyperactivity → exaggerated fear → reduced prefrontal cortex control.',
                'Weakened regulation → emotional dysregulation and avoidance behaviors.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Function',
            description: 'Anxiety diminishes the prefrontal cortex, impairing reasoning and self-control.',
            brain_region: ['pfc'],
            details: [
                'PFC → rational thinking and emotional regulation.',
                'Reduced PFC → weaker control over amygdala → heightened reactivity.',
                'Impaired focus → poor problem-solving and decision-making.'
            ]
        },
        {
            title: 'Altered Neurotransmitter Balance',
            description: 'Anxiety disrupts serotonin, dopamine, and GABA levels, affecting mood and cognition.',
            brain_region: ['basal-ganglia'],
            details: [
                'Basal ganglia → mood regulation and habits.',
                'Low serotonin → irritability and emotional instability.',
                'Dopamine imbalance → reduced motivation and pleasure.',
                'Low GABA → increased neural excitability → heightened anxiety.'
            ]
        },
        {
            title: 'Increased Heart Rate and Blood Pressure',
            description: 'Physical symptoms of anxiety impair cognitive focus and increase fatigue.',
            brain_region: ['brainstem'],
            details: [
                'Brainstem → autonomic functions (e.g., heart rate, blood pressure).',
                'Sympathetic nervous system → physical arousal (e.g., rapid heartbeat).',
                'Chronic activation → reduced oxygen to brain → poor focus and clarity.'
            ]
        },
        {
            title: 'Disrupted Sleep Patterns',
            description: 'Anxiety leads to poor sleep, worsening cognitive and emotional regulation.',
            brain_region: ['thalamus', 'brainstem'],
            details: [
                'Thalamus/brainstem → regulate sleep-wake cycles.',
                'Anxiety → fragmented sleep → impaired memory and focus.',
                'Sleep disruption → worsened emotional regulation and stress.'
            ]
        }
    ];


    const depression_events = [
        {
            title: 'Introduction to Depression',
            description: 'Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and loss of interest.',
            brain_region: ['pfc', 'amygdala', 'hippocampus'],
            details: [
                'Depression involves changes in neural circuits that regulate mood, emotion, and cognition.',
                'Chronic depression can lead to physical changes in brain structure and function.',
                'Understanding depression helps improve treatments and therapies.'
            ]
        },
        {
            title: 'Reduced Activity in the Prefrontal Cortex',
            description: 'Depression often results in reduced activity in the prefrontal cortex, impairing executive functions.',
            brain_region: ['pfc'],
            details: [
                'The prefrontal cortex is crucial for decision-making, focus, and impulse control.',
                'Depression diminishes the PFC’s role in regulating emotions and planning.',
                'Leads to difficulty concentrating, making decisions, and managing stress.'
            ]
        },
        {
            title: 'Hyperactivity in the Amygdala',
            description: 'Depression increases activity in the amygdala, heightening negative emotions and stress responses.',
            brain_region: ['amygdala'],
            details: [
                'The amygdala governs emotional reactions and threat detection.',
                'In depression, overactivity amplifies feelings of fear, sadness, and hopelessness.',
                'This imbalance makes it harder to experience positive emotions.'
            ]
        },
        {
            title: 'Hippocampal Atrophy',
            description: 'Chronic depression can lead to shrinkage of the hippocampus, affecting memory and learning.',
            brain_region: ['hippocampus'],
            details: [
                'The hippocampus is critical for memory formation and stress regulation.',
                'Prolonged exposure to stress hormones, like cortisol, can damage hippocampal neurons.',
                'Hippocampal atrophy is linked to memory issues and emotional dysregulation in depression.'
            ]
        },
        {
            title: 'Imbalances in Neurotransmitters',
            description: 'Depression is associated with imbalances in neurotransmitters like serotonin, dopamine, and norepinephrine.',
            brain_region: ['basal-ganglia'],
            details: [
                'The basal ganglia play a role in mood, reward processing, and motor control.',
                'Low levels of serotonin and dopamine contribute to feelings of sadness and lack of motivation.',
                'These imbalances are often targeted by antidepressant medications.'
            ]
        },
        {
            title: 'Disruption of Sleep and Circadian Rhythms',
            description: 'Depression disrupts sleep patterns, causing insomnia or hypersomnia and affecting overall brain health.',
            brain_region: ['hypothalamus'],
            details: [
                'The hypothalamus regulates circadian rhythms and sleep-wake cycles.',
                'Depression can cause irregularities in melatonin production and sleep quality.',
                'Poor sleep exacerbates symptoms of depression, creating a negative feedback loop.'
            ]
        },
        {
            title: 'Decreased Connectivity in Neural Networks',
            description: 'Depression reduces connectivity between key brain regions, impairing emotional regulation and cognitive processing.',
            brain_region: ['pfc', 'amygdala', 'hippocampus'],
            details: [
                'Disruptions in neural communication weaken the ability to regulate emotions.',
                'This disconnection contributes to feelings of isolation and difficulty coping.',
                'Improving connectivity through therapy or medication can alleviate symptoms.'
            ]
        }
    ];

    const bipolar_events = [
        {
            title: 'Introduction to Bipolar Disorder',
            description: 'Bipolar disorder is marked by extreme mood swings, including episodes of mania and depression.',
            brain_region: ['pfc', 'amygdala', 'hippocampus', 'basal-ganglia'],
            details: [
                'Dysregulation of mood → affects energy, cognition, and behavior.',
                'Alternates between depression and mania → impacts multiple brain regions.',
                'Understanding mechanisms → improves therapies.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Function in Depressive States',
            description: 'Depressive episodes impair the PFC, affecting decision-making and emotion regulation.',
            brain_region: ['pfc'],
            details: [
                'PFC → regulates planning, focus, and emotion control.',
                'Depressive states → reduced PFC activity → impaired decision-making.',
                'Leads to indecisiveness, hopelessness, and difficulty focusing.'
            ]
        },
        {
            title: 'Increased Amygdala Activity in Manic States',
            description: 'Manic episodes heighten amygdala activity, increasing impulsivity and emotional reactivity.',
            brain_region: ['amygdala'],
            details: [
                'Amygdala → processes emotional stimuli and reactions.',
                'Hyperactivity → heightened emotions → impulsive behaviors.',
                'Contributes to risky actions and difficulty regulating emotions.'
            ]
        },
        {
            title: 'Hippocampal Changes and Mood Dysregulation',
            description: 'Structural and functional changes in the hippocampus disrupt mood regulation.',
            brain_region: ['hippocampus'],
            details: [
                'Hippocampus → governs memory and emotional control.',
                'Bipolar disorder → hippocampal atrophy → impaired regulation.',
                'Linked to memory loss during depressive and manic episodes.'
            ]
        },
        {
            title: 'Altered Neurotransmitter Activity',
            description: 'Neurotransmitter imbalances affect mood, energy, and behavior in bipolar disorder.',
            brain_region: ['basal-ganglia'],
            details: [
                'Basal ganglia → regulate mood and reward processing.',
                'Mania → high dopamine levels; depression → low dopamine levels.',
                'Dysregulation → mood instability and behavioral shifts.'
            ]
        },
        {
            title: 'Irregular Circadian Rhythms',
            description: 'Disrupted sleep patterns worsen mood swings in bipolar disorder.',
            brain_region: ['hypothalamus'],
            details: [
                'Hypothalamus → controls sleep-wake cycles and circadian rhythms.',
                'Disruptions → insomnia or hypersomnia → exacerbates mood episodes.',
                'Stabilizing sleep rhythms → helps manage symptoms.'
            ]
        },
        {
            title: 'Connectivity Imbalances in Neural Networks',
            description: 'Impaired connectivity between brain regions impacts emotional regulation.',
            brain_region: ['pfc', 'amygdala', 'hippocampus'],
            details: [
                'Poor connectivity → reduced control over mood and emotions.',
                'Manic/depressive episodes → worsen imbalances in connectivity.',
                'Therapies → focus on restoring neural communication.'
            ]
        },
        {
            title: 'Heightened Risk of Stress-Induced Episodes',
            description: 'Stress increases vulnerability to manic or depressive episodes in bipolar disorder.',
            brain_region: ['hypothalamus', 'amygdala'],
            details: [
                'Stress → activates hypothalamic-pituitary-adrenal (HPA) axis.',
                'HPA activation → amygdala hyperactivity → amplifies stress responses.',
                'Stress management → essential for stabilizing mood.'
            ]
        }
    ];


    const schizophrenia_events = [
        {
            title: 'Introduction to Schizophrenia',
            description: 'Schizophrenia is a chronic brain disorder causing delusions, hallucinations, and cognitive impairments.',
            brain_region: ['pfc', 'amygdala', 'hippocampus', 'basal-ganglia', 'thalamus'],
            details: [
                'Disrupted brain signaling → neurotransmitter imbalances.',
                'Positive symptoms (hallucinations) → negative symptoms (reduced emotional expression).',
                'Focus on affected brain regions → targeted treatments.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Activity',
            description: 'Decreased activity in the prefrontal cortex impairs cognitive and executive functions.',
            brain_region: ['pfc'],
            details: [
                'PFC governs decision-making → planning and rational thought.',
                'Hypofrontality → disorganized thoughts + impaired focus.',
                'Underactivity → difficulty solving problems.'
            ]
        },
        {
            title: 'Hyperactivity in the Amygdala',
            description: 'Amygdala hyperactivity → paranoia + emotional dysregulation.',
            brain_region: ['amygdala'],
            details: [
                'Processes emotions + threat detection → heightened fear.',
                'Overactivation → suspicion + exaggerated reactions.',
                'Contributes to paranoia symptoms.'
            ]
        },
        {
            title: 'Hippocampal Atrophy and Memory Impairments',
            description: 'Structural changes in the hippocampus impair memory and learning.',
            brain_region: ['hippocampus'],
            details: [
                'Hippocampus forms + recalls memories → spatial navigation.',
                'Atrophy → disrupted memory formation.',
                'Linked to cognitive deficits in schizophrenia.'
            ]
        },
        {
            title: 'Basal Ganglia Dysregulation',
            description: 'Basal ganglia dysfunction → motor issues + repetitive behaviors.',
            brain_region: ['basal-ganglia'],
            details: [
                'Regulates motor control → reward processing.',
                'Dysregulation → motor abnormalities (e.g., catatonia).',
                'Contributes to repetitive actions + initiation challenges.'
            ]
        },
        {
            title: 'Disrupted Thalamic Connectivity',
            description: 'Thalamus connectivity changes → sensory distortions + hallucinations.',
            brain_region: ['thalamus'],
            details: [
                'Thalamus relays sensory input → cortex integration.',
                'Disruptions → distorted perception → hallucinations.',
                'Linked to positive symptoms like delusions.'
            ]
        },
        {
            title: 'Imbalance in Dopamine Transmission',
            description: 'Dopamine overactivity in the mesolimbic pathway drives positive symptoms.',
            brain_region: ['pfc', 'basal-ganglia', 'amygdala'],
            details: [
                'Excess dopamine → hallucinations + delusions.',
                'Low dopamine in PFC → cognitive deficits.',
                'Antipsychotic treatments target dopamine balance.'
            ]
        },
        {
            title: 'Disrupted Default Mode Network (DMN)',
            description: 'Schizophrenia affects the DMN, impairing self-referential thought.',
            brain_region: ['pfc', 'hippocampus'],
            details: [
                'DMN → active during introspection → self-referential thinking.',
                'Disruptions → difficulty distinguishing internal from external stimuli.',
                'Leads to delusions + distorted reality perception.'
            ]
        },
        {
            title: 'Cortical Thinning and Connectivity Issues',
            description: 'Cortical thinning + reduced connectivity affect cognition + processing.',
            brain_region: ['pfc', 'hippocampus', 'thalamus'],
            details: [
                'Thinning → slower processing speed + reduced flexibility.',
                'Impaired regional communication → symptom complexity.',
                'Reduced connectivity intensifies schizophrenia effects.'
            ]
        }
    ];


    const filler_events = [
        {
            title: 'No Event Selected',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            brain_region: ['hypothalamus', 'amygdala', 'pfc', 'basal-ganglia', 'brainstem'],
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Suspendisse varius enim in eros elementum tristique.',
                'Proin euismod, nisi vel consectetur elementum, nisi velit pulvinar nisl, eget fermentum augue arcu quis velit.'
            ]
        }
    ];


    const events = selection === "alzheimers"
        ? alzheimers_events
        : selection === "anxiety"
            ? anxiety_events
            : selection === "depression"
                ? depression_events
                : selection == "bipolar"
                    ? bipolar_events
                    : selection === "schizophrenia"
                        ? schizophrenia_events
                        : filler_events;


    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        const regions = events[(currentIndex + 1) % events.length].brain_region;
        regions.forEach((region, index) => {
            setTimeout(() => {
                triggerUndulation(region);
            }, index * 2100); // 2.1 seconds for each region
        });

    };

    return (
        <div style={styles.timeline}>
            <h2 style={styles.heading}>Timeline</h2>
            <div style={styles.progressIndicator}>
                <span>{currentIndex + 1} of {events.length}</span>
            </div> <br />
            <div style={styles.eventItem}>
                <strong>{events[currentIndex].title}:</strong> {events[currentIndex].description} <br />
                <br />
                <strong> Region: </strong> {Array.isArray(events[currentIndex].brain_region) ?
                    events[currentIndex].brain_region.map(region => region.charAt(0).toUpperCase() + region.slice(1)).join(', ') :
                    events[currentIndex].brain_region.toUpperCase()}
                <br />
                <br />
                <em><strong>Details:</strong></em>
                <ul>
                    {events[currentIndex].details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
            <button onClick={handleNext} style={styles.nextButton}>
                Next →
            </button>

        </div>
    );
};

const styles = {
    timeline: {
        padding: '10px',
        borderRadius: '10px',
        color: 'white',
    },
    heading: {
        color: 'white',
        marginBottom: '15px',
    },
    eventList: {
        listStyleType: 'none',
        padding: 0,
    },
    eventItem: {
        marginBottom: '10px',
        color: '#ccc',
    },
};

export default Timeline;

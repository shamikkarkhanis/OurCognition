// Timeline.jsx

import React, { useState } from 'react';

const Timeline = ({ selection, triggerUndulation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const anxiety_events = [
        {
            title: 'Introduction to Anxiety',
            description: 'Anxiety is a complex emotional and physiological response that affects multiple brain regions and bodily systems.',
            brain_region: ['hypothalamus', 'amygdala', 'pfc', 'basal-ganglia', 'brainstem'],
            details: [
                'Anxiety involves interconnected neural circuits throughout the brain.',
                'Both emotional and physical symptoms manifest during anxiety.',
                'Understanding anxiety\'s effects helps develop better coping strategies.'
            ]
        },
        {
            title: 'Increased Cortisol Levels',
            description: 'Anxiety leads to elevated cortisol levels, which can impair cognitive functions and memory retrieval.',
            brain_region: ['hypothalamus'], // Converted to array
            details: [
                'The hypothalamus activates the hypothalamic-pituitary-adrenal (HPA) axis.',
                'The HPA axis releases cortisol in response to stress.',
                'Chronic cortisol elevation damages the hippocampus, impairing learning and memory.'
            ]
        },
        {
            title: 'Heightened Amygdala Activity',
            description: 'Anxiety activates the amygdala, increasing emotional responses and potentially hindering rational thought.',
            brain_region: ['amygdala'], // Converted to array
            details: [
                'The amygdala is the brain’s fear center, responsible for detecting threats.',
                'Hyperactivity in the amygdala amplifies fear and emotional responses.',
                'Overwhelms regulatory systems like the prefrontal cortex, leading to emotional dysregulation.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Function',
            description: 'Anxiety can diminish the functioning of the prefrontal cortex, affecting decision-making and impulse control.',
            brain_region: ['pfc'], // Converted to array
            details: [
                'The prefrontal cortex regulates rational thinking and top-down emotional control.',
                'In anxiety, the PFC’s diminished function reduces its ability to moderate the amygdala.',
                'Leads to impaired decision-making and difficulty controlling impulsive behaviors.'
            ]
        },
        {
            title: 'Altered Neurotransmitter Balance',
            description: 'Anxiety disrupts the balance of neurotransmitters like serotonin and dopamine, impacting mood and cognition.',
            brain_region: ['basal-ganglia'], // Converted to array
            details: [
                'The basal ganglia play a role in mood regulation and motor control.',
                'Imbalances in neurotransmitters like dopamine and serotonin cause mood instability.',
                'Contributes to repetitive or compulsive behaviors seen in anxiety.'
            ]
        },
        {
            title: 'Increased Heart Rate and Blood Pressure',
            description: 'Physical symptoms of anxiety, such as increased heart rate, can distract from cognitive tasks and impair focus.',
            brain_region: ['brainstem'], // Converted to array
            details: [
                'The brainstem controls autonomic functions like heart rate and blood pressure.',
                'Anxiety activates the sympathetic nervous system, causing physical arousal.',
                'Leads to heightened heart rate, increased blood pressure, and difficulty focusing.'
            ]
        }
    ];

    const alzheimers_events = [
        {
            title: 'Introduction to Alzheimer\'s Disease',
            description: 'Alzheimer\'s is a progressive neurodegenerative disorder that gradually destroys memory and cognitive function.',
            brain_region: ['hippocampus'], // Multiple regions affected initially
            details: [
                'Alzheimer\'s disease is characterized by the buildup of abnormal protein deposits in the brain.',
                'Beta-amyloid plaques and tau tangles accumulate, leading to neuron death and brain tissue loss.',
                'The disease typically begins in memory centers before spreading to other brain regions.'
            ]
        },
        {
            title: 'Memory Loss',
            description: 'One of the most common early signs of Alzheimer’s is forgetting recently learned information.',
            brain_region: ['hippocampus'], // Converted to array
            details: [
                'The hippocampus is the primary area responsible for forming new memories.',
                'Alzheimer’s begins by damaging the hippocampus, impairing the ability to retain recently learned information.',
                'As the disease progresses, the damage spreads, further affecting memory consolidation.'
            ]
        },
        {
            title: 'Difficulty Planning or Solving Problems',
            description: 'People with Alzheimer’s may experience changes in their ability to develop and follow a plan or work with numbers.',
            brain_region: ['pfc'], // Converted to array
            details: [
                'The prefrontal cortex is responsible for higher-order cognitive functions like planning and problem-solving.',
                'Alzheimer’s disrupts connections in this region, making it harder to organize thoughts or manage complex tasks.',
                'This leads to difficulty handling numbers or following step-by-step instructions.'
            ]
        },
        {
            title: 'Confusion with Time or Place',
            description: 'Alzheimer’s can cause individuals to lose track of dates, seasons, and the passage of time.',
            brain_region: ['parietal-lobe'], // Converted to array
            details: [
                'The parietal lobe helps process spatial awareness and orientation in time and space.',
                'Damage to this region leads to disorientation and confusion regarding time and place.',
                'Individuals may struggle to recognize familiar environments or understand the current context.'
            ]
        },
        {
            title: 'Challenges in Completing Familiar Tasks',
            description: 'Individuals may find it hard to complete daily tasks, such as driving to a familiar location or managing a budget.',
            brain_region: ['temporal-lobe', 'parietal-lobe'], // Converted to array
            details: [
                'The temporal lobe is involved in understanding and processing sensory information, such as language and memory.',
                'The parietal lobe contributes to motor planning and spatial reasoning.',
                'Alzheimer’s disrupts these functions, causing difficulty in performing familiar or routine tasks.'
            ]
        },
        {
            title: 'Changes in Mood and Personality',
            description: 'Alzheimer’s can lead to mood swings and changes in personality, making individuals more confused, suspicious, or anxious.',
            brain_region: ['amygdala', 'pfc'], // Converted to array
            details: [
                'The amygdala regulates emotions and is often affected by Alzheimer’s, leading to heightened anxiety or suspicion.',
                'The prefrontal cortex’s dysfunction exacerbates mood swings and reduces emotional control.',
                'These changes make individuals more irritable, withdrawn, or confused.'
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
            description: 'Bipolar disorder is a mental health condition characterized by extreme mood swings, including episodes of mania and depression.',
            brain_region: ['pfc', 'amygdala', 'hippocampus', 'basal-ganglia'],
            details: [
                'Bipolar disorder involves dysregulation of mood, energy, and cognition.',
                'It alternates between depressive and manic phases, impacting multiple brain regions.',
                'Understanding these changes can help improve treatments and therapies.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Function in Depressive States',
            description: 'During depressive episodes, reduced activity in the prefrontal cortex impairs decision-making and impulse control.',
            brain_region: ['pfc'],
            details: [
                'The prefrontal cortex governs executive functions like planning and regulating emotions.',
                'Depressive states diminish the PFC’s ability to manage emotional stress.',
                'This leads to indecisiveness, impaired focus, and a sense of hopelessness.'
            ]
        },
        {
            title: 'Increased Amygdala Activity in Manic States',
            description: 'During manic episodes, hyperactivity in the amygdala heightens emotional reactivity and impulsivity.',
            brain_region: ['amygdala'],
            details: [
                'The amygdala processes emotional stimuli and reactions.',
                'Overactivation during mania results in heightened emotions and impulsive behaviors.',
                'This can contribute to risky actions and difficulty regulating emotions.'
            ]
        },
        {
            title: 'Hippocampal Changes and Mood Dysregulation',
            description: 'Bipolar disorder is associated with structural and functional changes in the hippocampus.',
            brain_region: ['hippocampus'],
            details: [
                'The hippocampus is vital for memory and emotional regulation.',
                'In bipolar disorder, hippocampal atrophy can impair memory and emotional control.',
                'These changes are linked to both manic and depressive episodes.'
            ]
        },
        {
            title: 'Altered Neurotransmitter Activity',
            description: 'Bipolar disorder disrupts neurotransmitter balance, affecting mood, energy, and motivation.',
            brain_region: ['basal-ganglia'],
            details: [
                'The basal ganglia regulate mood and reward processing.',
                'Dysregulated dopamine and serotonin levels contribute to mood instability.',
                'High dopamine levels during mania and low levels during depression affect behavior.'
            ]
        },
        {
            title: 'Irregular Circadian Rhythms',
            description: 'Bipolar disorder often disrupts sleep and circadian rhythms, exacerbating mood swings.',
            brain_region: ['hypothalamus'],
            details: [
                'The hypothalamus controls sleep-wake cycles and circadian rhythms.',
                'Disrupted rhythms contribute to insomnia or hypersomnia during episodes.',
                'Stabilizing circadian rhythms can help manage mood swings in bipolar disorder.'
            ]
        },
        {
            title: 'Connectivity Imbalances in Neural Networks',
            description: 'Bipolar disorder alters connectivity between key brain regions, impacting emotional regulation and cognition.',
            brain_region: ['pfc', 'amygdala', 'hippocampus'],
            details: [
                'Imbalanced connectivity leads to poor regulation of emotions and mood.',
                'This imbalance is more pronounced during manic or depressive episodes.',
                'Improving neural connectivity is a focus of many therapeutic interventions.'
            ]
        },
        {
            title: 'Heightened Risk of Stress-Induced Episodes',
            description: 'Bipolar disorder increases susceptibility to stress, which can trigger manic or depressive episodes.',
            brain_region: ['hypothalamus', 'amygdala'],
            details: [
                'Stress activates the hypothalamic-pituitary-adrenal (HPA) axis.',
                'The amygdala’s heightened activity amplifies stress responses during episodes.',
                'Stress management techniques are crucial for stabilizing mood.'
            ]
        }
    ];

    const filler_events = [
        {
            title: 'Blank',
            description: 'kljadsfl;kjasdfl;kajsdfl;',
            brain_region: ['hypothalamus', 'amygdala', 'pfc', 'basal-ganglia', 'brainstem'],
            details: [
                'lkjsadflkjsdf',
                'kljsdlakfjlkajsdf',
                'kljasdlfkjasdf'
            ]
        }
    ];

    const schizophrenia_events = [
        {
            title: 'Introduction to Schizophrenia',
            description: 'Schizophrenia is a chronic brain disorder characterized by delusions, hallucinations, and cognitive impairments.',
            brain_region: ['pfc', 'amygdala', 'hippocampus', 'basal-ganglia', 'thalamus'],
            details: [
                'Schizophrenia involves disrupted brain signaling and neurotransmitter imbalances.',
                'Symptoms can include both positive (hallucinations) and negative (reduced emotional expression) aspects.',
                'Understanding the affected brain regions helps develop targeted treatments.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Activity',
            description: 'Decreased activity in the prefrontal cortex contributes to cognitive and executive function deficits.',
            brain_region: ['pfc'],
            details: [
                'The prefrontal cortex is crucial for decision-making, planning, and rational thought.',
                'Hypofrontality is a hallmark of schizophrenia, leading to impaired problem-solving.',
                'This underactivity contributes to disorganized thoughts and difficulty focusing.'
            ]
        },
        {
            title: 'Hyperactivity in the Amygdala',
            description: 'Hyperactivity in the amygdala contributes to paranoia and emotional dysregulation in schizophrenia.',
            brain_region: ['amygdala'],
            details: [
                'The amygdala plays a key role in processing emotions and detecting threats.',
                'In schizophrenia, overactivation can lead to heightened fear and suspicion.',
                'This contributes to paranoia and exaggerated emotional reactions.'
            ]
        },
        {
            title: 'Hippocampal Atrophy and Memory Impairments',
            description: 'Schizophrenia is associated with structural changes in the hippocampus, affecting memory and learning.',
            brain_region: ['hippocampus'],
            details: [
                'The hippocampus is involved in memory formation and spatial navigation.',
                'Atrophy in this region disrupts the ability to form and recall memories.',
                'These changes are linked to the cognitive symptoms of schizophrenia.'
            ]
        },
        {
            title: 'Basal Ganglia Dysregulation',
            description: 'Dysfunction in the basal ganglia affects motor function and contributes to repetitive behaviors.',
            brain_region: ['basal-ganglia'],
            details: [
                'The basal ganglia help regulate motor control and reward processing.',
                'Dysregulation can lead to motor abnormalities such as catatonia.',
                'Also associated with repetitive behaviors and difficulty initiating actions.'
            ]
        },
        {
            title: 'Disrupted Thalamic Connectivity',
            description: 'The thalamus, a sensory relay center, shows altered connectivity in schizophrenia, affecting perception.',
            brain_region: ['thalamus'],
            details: [
                'The thalamus integrates and relays sensory information to the cortex.',
                'Disrupted connectivity leads to sensory distortions and hallucinations.',
                'This may contribute to the positive symptoms of schizophrenia, like delusions.'
            ]
        },
        {
            title: 'Imbalance in Dopamine Transmission',
            description: 'Schizophrenia involves overactivity of dopamine pathways, particularly in the mesolimbic system.',
            brain_region: ['pfc', 'basal-ganglia', 'amygdala'],
            details: [
                'Excessive dopamine activity in the mesolimbic pathway is linked to hallucinations and delusions.',
                'Reduced dopamine in the prefrontal cortex contributes to cognitive deficits.',
                'Balancing dopamine levels is a key focus of antipsychotic treatments.'
            ]
        },
        {
            title: 'Disrupted Default Mode Network',
            description: 'Schizophrenia affects the default mode network (DMN), disrupting self-referential thought processes.',
            brain_region: ['pfc', 'hippocampus'],
            details: [
                'The DMN is active during introspection and self-referential thinking.',
                'In schizophrenia, disruptions lead to difficulty distinguishing internal from external stimuli.',
                'This contributes to delusions and a distorted sense of reality.'
            ]
        },
        {
            title: 'Cortical Thinning and Connectivity Issues',
            description: 'Schizophrenia is associated with cortical thinning and reduced connectivity across brain regions.',
            brain_region: ['pfc', 'hippocampus', 'thalamus'],
            details: [
                'Cortical thinning affects processing speed and cognitive flexibility.',
                'Connectivity disruptions impair communication between key brain regions.',
                'These changes contribute to the complexity of schizophrenia symptoms.'
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
            }, index * 2100); // 2 seconds for each region
        });

    };

    return (
        <div style={styles.timeline}>
            <h2 style={styles.heading}>Timeline</h2>
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

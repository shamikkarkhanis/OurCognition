// Timeline.jsx

import { color } from 'd3';
import React, { useState } from 'react';

const Timeline = ({ selection }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const anxiety_events = [
        {
            title: 'Increased Cortisol Levels',
            description: 'Anxiety leads to elevated cortisol levels, which can impair cognitive functions and memory retrieval.',
            brain_region: 'hypothalamus',
            details: [
                'The hypothalamus activates the hypothalamic-pituitary-adrenal (HPA) axis.',
                'The HPA axis releases cortisol in response to stress.',
                'Chronic cortisol elevation damages the hippocampus, impairing learning and memory.'
            ]
        },
        {
            title: 'Heightened Amygdala Activity',
            description: 'Anxiety activates the amygdala, increasing emotional responses and potentially hindering rational thought.',
            brain_region: 'amygdala',
            details: [
                'The amygdala is the brain’s fear center, responsible for detecting threats.',
                'Hyperactivity in the amygdala amplifies fear and emotional responses.',
                'Overwhelms regulatory systems like the prefrontal cortex, leading to emotional dysregulation.'
            ]
        },
        {
            title: 'Reduced Prefrontal Cortex Function',
            description: 'Anxiety can diminish the functioning of the prefrontal cortex, affecting decision-making and impulse control.',
            brain_region: 'pfc',
            details: [
                'The prefrontal cortex regulates rational thinking and top-down emotional control.',
                'In anxiety, the PFC’s diminished function reduces its ability to moderate the amygdala.',
                'Leads to impaired decision-making and difficulty controlling impulsive behaviors.'
            ]
        },
        {
            title: 'Altered Neurotransmitter Balance',
            description: 'Anxiety disrupts the balance of neurotransmitters like serotonin and dopamine, impacting mood and cognition.',
            brain_region: 'basal-ganglia',
            details: [
                'The basal ganglia play a role in mood regulation and motor control.',
                'Imbalances in neurotransmitters like dopamine and serotonin cause mood instability.',
                'Contributes to repetitive or compulsive behaviors seen in anxiety.'
            ]
        },
        {
            title: 'Increased Heart Rate and Blood Pressure',
            description: 'Physical symptoms of anxiety, such as increased heart rate, can distract from cognitive tasks and impair focus.',
            brain_region: 'brainstem',
            details: [
                'The brainstem controls autonomic functions like heart rate and blood pressure.',
                'Anxiety activates the sympathetic nervous system, causing physical arousal.',
                'Leads to heightened heart rate, increased blood pressure, and difficulty focusing.'
            ]
        }
    ];

    const alzheimers_events = [
        {
            title: 'Memory Loss',
            description: 'One of the most common early signs of Alzheimer’s is forgetting recently learned information.',
            brain_region: 'Hippocampus',
            details: [
                'The hippocampus is the primary area responsible for forming new memories.',
                'Alzheimer’s begins by damaging the hippocampus, impairing the ability to retain recently learned information.',
                'As the disease progresses, the damage spreads, further affecting memory consolidation.'
            ]
        },
        {
            title: 'Difficulty Planning or Solving Problems',
            description: 'People with Alzheimer’s may experience changes in their ability to develop and follow a plan or work with numbers.',
            brain_region: 'Prefrontal Cortex',
            details: [
                'The prefrontal cortex is responsible for higher-order cognitive functions like planning and problem-solving.',
                'Alzheimer’s disrupts connections in this region, making it harder to organize thoughts or manage complex tasks.',
                'This leads to difficulty handling numbers or following step-by-step instructions.'
            ]
        },
        {
            title: 'Confusion with Time or Place',
            description: 'Alzheimer’s can cause individuals to lose track of dates, seasons, and the passage of time.',
            brain_region: 'Parietal Lobe',
            details: [
                'The parietal lobe helps process spatial awareness and orientation in time and space.',
                'Damage to this region leads to disorientation and confusion regarding time and place.',
                'Individuals may struggle to recognize familiar environments or understand the current context.'
            ]
        },
        {
            title: 'Challenges in Completing Familiar Tasks',
            description: 'Individuals may find it hard to complete daily tasks, such as driving to a familiar location or managing a budget.',
            brain_region: 'Temporal and Parietal Lobes',
            details: [
                'The temporal lobe is involved in understanding and processing sensory information, such as language and memory.',
                'The parietal lobe contributes to motor planning and spatial reasoning.',
                'Alzheimer’s disrupts these functions, causing difficulty in performing familiar or routine tasks.'
            ]
        },
        {
            title: 'Changes in Mood and Personality',
            description: 'Alzheimer’s can lead to mood swings and changes in personality, making individuals more confused, suspicious, or anxious.',
            brain_region: 'Amygdala and Prefrontal Cortex',
            details: [
                'The amygdala regulates emotions and is often affected by Alzheimer’s, leading to heightened anxiety or suspicion.',
                'The prefrontal cortex’s dysfunction exacerbates mood swings and reduces emotional control.',
                'These changes make individuals more irritable, withdrawn, or confused.'
            ]
        }
    ];


    const events = selection === "outer" ? alzheimers_events : anxiety_events;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    };

    return (
        <div style={styles.timeline}>
            <h2 style={styles.heading}>Timeline</h2>
            <div style={styles.eventItem}>
                <strong>{events[currentIndex].title}:</strong> {events[currentIndex].description} <br />
                <br /> <br />
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

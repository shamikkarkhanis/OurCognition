import React from 'react';

const microTimelineData = [
    {
        stage: "Preclinical",
        time: "Before symptoms manifest",
        keyEvent: "Amyloid-beta (Aβ) begins to accumulate in the brain, forming plaques.",
        details: [
            "Amyloid-beta is a peptide normally produced by the breakdown of a larger protein, amyloid precursor protein (APP).",
            "In Alzheimer's disease, amyloid-beta production increases and clearance decreases, leading to plaque accumulation.",
            "Plaques appear in the hippocampus and cortex, disrupting synaptic function."
        ]
    },
    {
        stage: "Early Disease Progression",
        time: "Begins after amyloid accumulation and precedes major symptoms",
        keyEvent: "Tau proteins misfold, forming neurofibrillary tangles.",
        details: [
            "Tau helps stabilize microtubules in neurons but becomes hyperphosphorylated in Alzheimer's.",
            "Misfolded tau forms tangles inside neurons, first appearing in the medial temporal lobe.",
            "Tangles disrupt neuron structure, leading to loss of function and cell death."
        ]
    },
    {
        stage: "Synaptic Dysfunction",
        time: "Shortly after tau-related changes",
        keyEvent: "Amyloid-beta disrupts synaptic communication.",
        details: [
            "Amyloid-beta plaques interfere with synaptic signaling, particularly in the hippocampus.",
            "This disruption contributes to cognitive decline and may trigger inflammation.",
            "Calcium influx and dendritic degeneration further damage neurons."
        ]
    },
    {
        stage: "Neuron Death Begins",
        time: "Following synaptic dysfunction",
        keyEvent: "Chronic inflammation from glial cells overactivation contributes to neuron death.",
        details: [
            "Glial cells (microglia and astrocytes) become overactive in response to amyloid-beta and tau.",
            "Microglia attempt to clear plaques but release inflammatory molecules, damaging neurons.",
            "This accelerates neuron death, leading to significant cognitive impairment."
        ]
    },
    {
        stage: "Cortical Atrophy Progresses",
        time: "As Alzheimer's progresses",
        keyEvent: "Widespread neuron death and loss of gray matter in the cerebral cortex.",
        details: [
            "Cortical atrophy causes shrinkage in areas responsible for reasoning and decision-making.",
            "Neuron loss leads to severe cognitive decline and loss of daily function abilities.",
            "The frontal, temporal, and parietal lobes are particularly affected."
        ]
    }
];

const MicroTimeline = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Micro-Scale Timeline of Alzheimer's Progression</h2>
            {microTimelineData.map((event, index) => (
                <div key={index} style={styles.card}>
                    <h3 style={styles.stage}>{event.stage}</h3>
                    <p style={styles.time}><strong>Time:</strong> {event.time}</p>
                    <p><strong>Key Event:</strong> {event.keyEvent}</p>
                    <ul>
                        {event.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#1c1c1e',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '20px',
        color: 'white'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px'
    },
    card: {
        backgroundColor: '#2a2a2d',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '10px'
    },
    stage: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    time: {
        fontStyle: 'italic'
    }
};

export default MicroTimeline;
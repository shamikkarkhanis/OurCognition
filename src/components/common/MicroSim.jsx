import React, { useState } from 'react';
import { motion } from 'framer-motion';

const stages = [
  {
    title: "Preclinical",
    time: "Before symptoms manifest",
    keyEvent: "Amyloid-beta (Aβ) begins to accumulate in the brain, forming plaques.",
    details: [
      "Amyloid-beta is a peptide normally produced by the breakdown of amyloid precursor protein (APP).",
      "In Alzheimer's, amyloid-beta increases and doesn't clear efficiently, forming plaques.",
      "Plaques appear in the hippocampus and cortex, disrupting synaptic function."
    ]
  },
  {
    title: "Early Disease Progression",
    time: "Begins after amyloid accumulation and precedes major symptoms",
    keyEvent: "Tau proteins misfold, forming neurofibrillary tangles.",
    details: [
      "Tau helps stabilize microtubules but becomes hyperphosphorylated in Alzheimer's.",
      "Misfolded tau forms tangles inside neurons, starting in the medial temporal lobe.",
      "Tangles disrupt neuron structure and lead to cell death."
    ]
  },
  {
    title: "Synaptic Dysfunction",
    time: "Shortly after tau-related changes",
    keyEvent: "Amyloid-beta disrupts synaptic communication.",
    details: [
      "Plaques interfere with synaptic signaling, especially in the hippocampus.",
      "This leads to cognitive decline and inflammation.",
      "Amyloid-beta causes calcium influx, synaptic loss, and dendritic degeneration."
    ]
  },
  {
    title: "Neuron Death Begins",
    time: "Following synaptic dysfunction",
    keyEvent: "Chronic inflammation from glial cell overactivation contributes to neuron death.",
    details: [
      "Glial cells (microglia and astrocytes) become overactive responding to plaques and tangles.",
      "They release inflammatory molecules that damage neurons.",
      "Neuron death accelerates, especially in the hippocampus."
    ]
  },
  {
    title: "Cortical Atrophy Progresses",
    time: "As Alzheimer's progresses",
    keyEvent: "Widespread neuron death and gray matter loss in the cerebral cortex.",
    details: [
      "The cortex shrinks, affecting reasoning, decision-making, and language.",
      "Neuron loss causes severe cognitive decline and daily function impairments.",
      "Frontal, temporal, and parietal lobes are particularly affected."
    ]
  }
];

const MicroSim = ({ currentStage, setCurrentStage }) => {
  const stage = stages[currentStage];

  return (
    <div style={styles.container}>
      <motion.div
        key={currentStage}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.card}
      >
        <h2>{stage.title}</h2>
        <p><em>{stage.time}</em></p>
        <p><strong>{stage.keyEvent}</strong></p>
        <ul>
          {stage.details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div style={styles.controls}>
        <button
          onClick={() => setCurrentStage(currentStage - 1)}
          disabled={currentStage === 0}
          style={styles.button}
        >
        Back
        </button>
          <button
            onClick={() => setCurrentStage(currentStage + 1)}
            disabled={currentStage === stages.length - 1}
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0f0f0f',
    color: 'white',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: '12px',
    padding: '2rem',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  },
  controls: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default MicroSim;

import React from 'react';
import '../../styles/Timeline.css'; // Reusing your existing shared CSS

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
    <div className="timeline-container">
      <div className="timeline-header">
        <h2 className="timeline-title">{stage.title}</h2>
        <div className="stage-progress">{currentStage + 1}/{stages.length}</div>
      </div>

      <div className="timeline-content">
        <p className="timeline-description">{stage.time}</p>
        <p className="timeline-region"><strong>Key Event:</strong> {stage.keyEvent}</p>

        <div className="timeline-details">
          <strong>Details:</strong>
          <ul className="event-list">
            {stage.details.map((point, idx) => (
              <li key={idx} className="event-item">{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="timeline-buttons">
        <button
          onClick={() => setCurrentStage(currentStage - 1)}
          disabled={currentStage === 0}
        >
          ← Back
        </button>
        <button onClick={() => setCurrentStage(0)}>
          Reset
        </button>
        <button
          onClick={() => setCurrentStage(currentStage + 1)}
          disabled={currentStage === stages.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default MicroSim;

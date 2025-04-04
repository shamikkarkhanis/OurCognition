import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MicroSynapse = ({ stage }) => {
  const [signalKey, setSignalKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalKey(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Define animation behavior based on stage
  const getStageStyles = (stage) => {
    switch (stage) {
      case 0: // Preclinical
        return { color: '#00d8ff', duration: 2.5, opacity: 1, label: "Preclinical" };
      case 1: // Early Disease Progression
        return { color: '#ffc107', duration: 2.5, opacity: 1, label: "Early Disease Progression" };
      case 2: // Synaptic Dysfunction
        return { color: '#ff5722', duration: 3, opacity: 0.8, label: "Synaptic Dysfunction" };
      case 3: // Neuron Death Begins
        return { color: '#e91e63', duration: 3.5, opacity: 0.5, label: "Neuron Death Begins" };
      case 4: // Cortical Atrophy
        return { color: '#9e9e9e', duration: 4, opacity: 0.3, label: "Cortical Atrophy Progresses" };
      default:
        return { color: '#00d8ff', duration: 2.5, opacity: 1, label: "Unknown Stage" };
    }
  };

  const stageStyles = getStageStyles(stage);

  return (
    <div style={styles.container}>
      <div style={styles.stageLabel}>Stage: {stageStyles.label}</div>
      <div style={styles.synapse}>
        <div style={styles.neuron}>Neuron A</div>
        <motion.div
          key={signalKey}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 415, opacity: 1 }}
          transition={{ duration: stageStyles.duration, ease: "easeInOut" }}
          style={{ ...styles.signal, backgroundColor: stageStyles.color }}
        />
        <div style={styles.neuron}>Neuron B</div>
      </div>
      <p style={styles.label}>Simulated neurotransmission between neurons</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  synapse: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    width: '450px',
    height: '100px',
    backgroundColor: '#333',
    borderRadius: '40px',
    padding: '0 10px',
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  neuron: {
    width: '60px',
    height: '60px',
    backgroundColor: '#f3b5b8',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.75rem',
  },
  signal: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  label: {
    color: '#ccc',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
  },
  stageLabel: {
    color: '#f3b5b8',
    fontSize: '1.1rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  }
};

export default MicroSynapse;

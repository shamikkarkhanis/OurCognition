import React, { useState, useEffect } from 'react'; // Add useEffect import
import MicroSim from '../components/common/MicroSim.jsx';
import MicroSynapse from '../components/common/MicroSynapse.jsx';

export default function MicroSimPage() {
  const [currentStage, setCurrentStage] = useState(0);

  // This useEffect is correctly imported now
  useEffect(() => {
    // Reset animation when stage changes
    const timer = setTimeout(() => {
      setCurrentStage(prev => prev);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [currentStage]);

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.leftPane}>
          <div style={styles.card}>
            <MicroSynapse stage={currentStage} />
          </div>
        </div>

        <div style={styles.rightPane}>
          <div style={styles.card}>
            <MicroSim currentStage={currentStage} setCurrentStage={setCurrentStage} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0f0f0f',
    color: 'white',
    padding: '2rem',
    minHeight: '100vh',
  },
  contentContainer: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  leftPane: {
    flex: '1 1 45%',
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
  },
  rightPane: {
    flex: '1 1 45%',
    minWidth: '300px',
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    minHeight: '300px', 
    minWidth: '100%',    
    margin: '1rem' ,
  }
};

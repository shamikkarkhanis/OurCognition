import React, { useEffect, useState } from "react";

const getStageStyles = (stage) => {
  switch (stage) {
    case 0: return { color: "#00d8ff", duration: 2.5, opacity: 1, label: "Preclinical" };
    case 1: return { color: "#ffc107", duration: 2.5, opacity: 1, label: "Early Disease Progression" };
    case 2: return { color: "#ff5722", duration: 3, opacity: 0.8, label: "Synaptic Dysfunction" };
    case 3: return { color: "#e91e63", duration: 3.5, opacity: 0.5, label: "Neuron Death Begins" };
    case 4: return { color: "#9e9e9e", duration: 4, opacity: 0.3, label: "Cortical Atrophy Progresses" };
    default: return { color: "#00d8ff", duration: 2.5, opacity: 1, label: "Unknown Stage" };
  }
};

const MicroSynapse = ({ stage }) => {
  const [signalKey, setSignalKey] = useState(0);
  const stageStyles = getStageStyles(stage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSignalKey((prev) => prev + 1);
    }, 50);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div style={styles.container}>
      <div style={styles.stageLabel}>Stage: {stageStyles.label}</div>
      <svg width="600" height="200" style={styles.svg}>
        {/* Signal Path */}
        <defs>
          <path id="signalPath" d="M80,100 C200,30 400,170 520,100" fill="none" stroke="transparent" />
        </defs>
        <path d="M80,100 C200,30 400,170 520,100" fill="none" stroke="#bbb" strokeWidth="1" />

        {/* Neuron A */}
        <circle cx="80" cy="100" r="30" fill="#f3b5b8" />
        <text x="80" y="105" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">Neuron A</text>

        {/* Neuron B */}
        <circle cx="520" cy="100" r="30" fill="#f3b5b8" />
        <text x="520" y="105" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">Neuron B</text>

        {/* Amyloid-beta plaques */}
        {stage <= 2 && (
          <>
            <circle cx="160" cy="60" r="10" fill="#8ab4f8" opacity="0.6" />
            <circle cx="260" cy="100" r="8" fill="#8ab4f8" opacity="0.7" />
            <circle cx="350" cy="130" r="7" fill="#8ab4f8" opacity="0.5" />
            <text x="185" y="50" fontSize="10" fill="#8ab4f8">Aβ Plaques</text>
          </>
        )}

        {/* Tau tangles */}
        {(stage >= 1 && stage <= 3) && (
          <>
            <path d="M65,90 Q70,80 75,90 T85,90" stroke="#ffb347" fill="none" strokeWidth="2" />
            <path d="M505,90 Q510,80 515,90 T525,90" stroke="#ffb347" fill="none" strokeWidth="2" />
            <text x="45" y="75" fontSize="10" fill="#ffb347">Tau Tangles</text>
          </>
        )}

        {/* Animated signal */}
        <g key={signalKey}>
          <circle
            r="10"
            fill={stageStyles.color}
            style={{ opacity: stageStyles.opacity }}
          >
            <animateMotion
              dur={`${stageStyles.duration}s`}
              repeatCount="indefinite"
              keyTimes="0;1"
              keyPoints="0;1"
              calcMode="linear"
              fill="remove"
            >
              <mpath href="#signalPath" />
              {stage >= 2 && (
                <animate
                  attributeName="opacity"
                  values="1;0"
                  dur={`${stageStyles.duration}s`}
                  begin="0s"
                  fill="freeze"
                />
              )}
            </animateMotion>
          </circle>
        </g>
      </svg>
      <p style={styles.label}>Simulated neurotransmission between labeled neurons</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", flexDirection: "column", alignItems: "center"
  },
  svg: {
    borderRadius: "20px",
    marginBottom: "1rem",
    backgroundColor: "#1e1e1e",
  },
  label: {
    color: "#ccc",
    fontSize: "0.9rem",
  },
  stageLabel: {
    color: "#f3b5b8",
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  }
};

export default MicroSynapse;

import React, { useEffect, useState } from "react";

const MicroSynapse = ({ stage }) => {
  const [signalKey, setSignalKey] = useState(0);
  const [animate, setAnimate] = useState(true);

  const getStageStyles = (stage) => {
    switch (stage) {
      case 0:
        return {
          color: "#00d8ff",
          duration: 2.5,
          opacity: 1,
          label: "Preclinical",
        };
      case 1:
        return {
          color: "#ffc107",
          duration: 2.5,
          opacity: 1,
          label: "Early Disease Progression",
        };
      case 2:
        return {
          color: "#ff5722",
          duration: 3,
          opacity: 0.8,
          label: "Synaptic Dysfunction",
        };
      case 3:
        return {
          color: "#e91e63",
          duration: 3.5,
          opacity: 0.5,
          label: "Neuron Death Begins",
        };
      case 4:
        return {
          color: "#9e9e9e",
          duration: 4,
          opacity: 0.3,
          label: "Cortical Atrophy Progresses",
        };
      default:
        return {
          color: "#00d8ff",
          duration: 2.5,
          opacity: 1,
          label: "Unknown Stage",
        };
    }
  };

  const stageStyles = getStageStyles(stage);

  useEffect(() => {
    setAnimate(false);
    const shortDelay = setTimeout(() => {
      setSignalKey((prev) => prev + 1);
      setAnimate(true);
    }, 50);
    return () => clearTimeout(shortDelay);
  }, [stageStyles.duration]);

  useEffect(() => {
    if (!animate) return;
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, stageStyles.duration * 1000 + 100);
    return () => clearTimeout(timeout);
  }, [signalKey, animate, stageStyles.duration]);

  return (
    <div style={styles.container}>
      <div style={styles.stageLabel}>Stage: {stageStyles.label}</div>
      <svg width="540" height="160" style={{ ...styles.svg, backgroundColor: stage >= 3 ? "#552222" : "#333", boxShadow: stage >= 3 ? "0 0 15px #e91e63" : "none" }}>
        <defs>
          <path
            id="signalPath"
            d="M60,80 C180,20 360,140 480,80"
            fill="none"
            stroke="transparent"
          />
        </defs>
        <path
          d="M60,80 C180,20 360,140 480,80"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />

        {/* Amyloid-beta plaques for stages 0–2 */}
        {stage <= 2 && (
          <>
            <circle cx="140" cy="55" r="5" fill="#8ab4f8" opacity="0.6" />
            <circle cx="220" cy="80" r="6" fill="#8ab4f8" opacity="0.7" />
            <circle cx="300" cy="110" r="4" fill="#8ab4f8" opacity="0.5" />
          </>
        )}

        {/* Tau tangles for stages 1–3 */}
        {(stage >= 1 && stage <= 3) && (
          <>
            {/* Inside left neuron */}
            <g>
              <line x1="50" y1="70" x2="70" y2="90" stroke="#ffb347" strokeWidth="2" />
              <line x1="70" y1="70" x2="50" y2="90" stroke="#ffb347" strokeWidth="2" />
              <line x1="55" y1="75" x2="65" y2="85" stroke="#ffb347" strokeWidth="2" />
              <line x1="65" y1="75" x2="55" y2="85" stroke="#ffb347" strokeWidth="2" />
            </g>
            {/* Inside right neuron */}
            <g>
              <line x1="470" y1="70" x2="490" y2="90" stroke="#ffb347" strokeWidth="2" />
              <line x1="490" y1="70" x2="470" y2="90" stroke="#ffb347" strokeWidth="2" />
              <line x1="475" y1="75" x2="485" y2="85" stroke="#ffb347" strokeWidth="2" />
              <line x1="485" y1="75" x2="475" y2="85" stroke="#ffb347" strokeWidth="2" />
            </g>
          </>
        )}

        {/* Glial inflammation for stages 3–4 */}
        {stage >= 3 && (
          <>
            <circle cx="190" cy="60" r="3" fill="#ff9999" />
            <circle cx="250" cy="100" r="2.5" fill="#ff9999" />
          </>
        )}

        <circle 
          cx="60" 
          cy="80" 
          r="30" 
          fill={stage >= 3 ? "#b48e8e" : "#f3b5b8"} 
          stroke={stage === 4 ? "#ff4d4d" : "none"} 
          strokeWidth={stage === 4 ? 2 : 0} 
        />
        <circle 
          cx="480" 
          cy="80" 
          r="30" 
          fill={stage >= 3 ? "#b48e8e" : "#f3b5b8"} 
          stroke={stage === 4 ? "#ff4d4d" : "none"} 
          strokeWidth={stage === 4 ? 2 : 0} 
        />

        {animate && (
          <circle
            key={signalKey}
            r="10"
            fill={stageStyles.color}
            style={{ opacity: stageStyles.opacity }}
          >
            <animateMotion
              dur={`${stageStyles.duration}s`}
              repeatCount="1"
              keyTimes="0;1"
              keyPoints="0;1"
              calcMode="linear"
              fill="freeze"
            >
              <mpath href="#signalPath" />
              {stage >= 2 && (
                <animate attributeName="opacity" values="1;0" dur={`${stageStyles.duration}s`} begin="0s" fill="freeze" />
              )}
            </animateMotion>
          </circle>
        )}
      </svg>
      <p style={styles.label}>Simulated neurotransmission between neurons</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    borderRadius: "20px",
    marginBottom: "1rem",
  },
  label: {
    color: "#ccc",
    fontSize: "0.9rem",
    marginTop: "0.5rem",
  },
  stageLabel: {
    color: "#f3b5b8",
    fontSize: "1.1rem",
    marginBottom: "1rem",
    fontWeight: "bold",
  }
};

export default MicroSynapse;

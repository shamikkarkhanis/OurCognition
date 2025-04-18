import { useState } from 'react';
import ContentNavbar from '../components/layout/ContentNavbar.jsx';
import BrainMap from '../components/layout/BrainHeatmap';
import Timeline from '../components/layout/Timeline';
import BrainEnhance from '../components/layout/BrainEnhance';
import { Button } from "../components/common/Button.jsx";
import { useNavigate } from 'react-router-dom';
import '../styles/Content.css';

function Content() {
  const [selection, setSelection] = useState('alzheimers');
  const [activeRegion, setActiveRegion] = useState(null);
  const [activeRegions, setActiveRegions] = useState({});
  const [enhancedRegion, setEnhancedRegion] = useState(null);
  const [lastVisitedIndex, setLastVisitedIndex] = useState(0);

  const navigate = useNavigate();

  const handleRegionSelect = (region) => {
    setActiveRegion(region);
  };

  const handleEnhanceRegion = (region) => {
    setEnhancedRegion(region);
  };

  const goToMicroSim = () => {
    navigate('/sim');
  };

  return (
    <div className="content-root">
      <ContentNavbar setSelection={setSelection} />
      <div className="content-body">
        <div className="sim-container">
          <BrainMap
            selectedRegions={activeRegions}
            onRegionSelect={handleRegionSelect}
            activeRegion={activeRegion}
            enhanceRegion={handleEnhanceRegion}
          />
        </div>

        <div className="description-container">
          {/* Redirect to MicroSimPage */}
          <Button onClick={goToMicroSim} style={{ marginBottom: '10px', width: '100%' }}>
            View Micro Timeline & Synapse Simulation →
          </Button>

          {/* Enhanced region OR timeline view */}
          {enhancedRegion ? (
            <BrainEnhance
              enhancedRegion={enhancedRegion}
              setEnhancedRegion={setEnhancedRegion}
            />
          ) : (
            <Timeline
              selection={selection}
              setActiveRegions={setActiveRegions}
              activeRegion={activeRegion}
              lastVisitedIndex={lastVisitedIndex}
              setLastVisitedIndex={setLastVisitedIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;

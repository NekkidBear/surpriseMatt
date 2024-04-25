import { useState } from 'react';
import SurpriseButton from './Surprise Button/SurpriseButton';
import BirthdaySurprise from './Birthday Surprise/BirthdaySurprise'
import ToFromTag from './ToFromTag/ToFromTag';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="App">
      {!showSurprise && <ToFromTag />} {/* use the new component */}
      {!showSurprise && <SurpriseButton onClick={handleClick} />}
      {showSurprise && <BirthdaySurprise />}
    </div>
  );
}

export default App;
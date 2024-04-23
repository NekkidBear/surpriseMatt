import React, { useState } from 'react';
import SurpriseButton from './Surprise Button/SurpriseButton';
import BirthdaySurprise from './Birthday Surprise/BirthdaySurprise'

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="App">
      {!showSurprise && <SurpriseButton onClick={handleClick} />}
      {showSurprise && <BirthdaySurprise />}
    </div>
  );
}

export default App;
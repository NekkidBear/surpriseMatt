import { useState } from 'react';
import SurpriseButton from './Surprise Button/SurpriseButton';
import BirthdaySurprise from './Birthday Surprise/BirthdaySurprise'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  const handleClick = () => {
    setShowSurprise(true);
  };

  return (
    <div className="App">
      <h1 className='beginningH1'>{showSurprise ? '' : 'To: Matt'}</h1>
      {!showSurprise && <SurpriseButton onClick={handleClick} />}
      {showSurprise && <BirthdaySurprise />}
    </div>
  );
}

export default App;
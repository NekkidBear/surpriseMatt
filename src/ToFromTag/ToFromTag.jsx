// ToFromTag.jsx
import React from 'react';
import groupScreenshot from '../assets/images/BiscayneGroupShot.jpg'; // replace with the actual path to your image
import './ToFromTag.css';

function ToFromTag() {
  return (
    <div className='toFromTag'>
      <h1 className='beginningH1'>To: Matt</h1>
      <br />
      <img className='groupShot' src={groupScreenshot} alt="Group screenshot" />
      
    </div>
  );
}

export default ToFromTag;
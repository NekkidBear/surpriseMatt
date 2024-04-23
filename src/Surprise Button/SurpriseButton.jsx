import React from 'react';
import './SurpriseButton.css'

function SurpriseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Surprise!
    </button>
  );
}

export default SurpriseButton;
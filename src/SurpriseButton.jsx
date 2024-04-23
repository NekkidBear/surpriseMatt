import React from 'react';

function SurpriseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Surprise!
    </button>
  );
}

export default SurpriseButton;
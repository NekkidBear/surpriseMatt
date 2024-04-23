import React from "react";
import "./SurpriseButton.css";

function SurpriseButton({ onClick }) {
  return (
    <section className="centered">
      <button onClick={onClick}>Surprise!</button>
    </section>
  );
}

export default SurpriseButton;

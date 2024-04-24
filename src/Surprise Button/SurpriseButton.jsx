import PropTypes from "prop-types";
import "./SurpriseButton.css";

function SurpriseButton({ onClick }) {
  return (
    <section className="centered">
      <button onClick={onClick}>Surprise!</button>
    </section>
  );
}

SurpriseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SurpriseButton;

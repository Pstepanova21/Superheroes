import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Rating from "./Rating";
import "./HeroCard.css";

Modal.setAppElement("#root");

const HeroCard = ({ hero }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(hero.name);
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    }
  }, [hero.name]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem(hero.name, newRating);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="hero-card">
      <div className="card-content">
        <img src={hero.url} alt={hero.name} className="hero-image" />
        <h2>{hero.name}</h2>
        <p>
          <strong>Вселенная:</strong> {hero.universe}
        </p>
        <p>
          <strong>Альтер Эго:</strong> {hero.alterego}
        </p>
        <p>
          <strong>Род деятельности:</strong> {hero.occupation}
        </p>
      </div>
      <div className="card-actions">
        <button onClick={toggleDetails}>
          {showDetails ? "Скрыть" : "Детали"}
        </button>
        <div className="rating-container">
          <Rating rating={rating} onRatingChange={handleRatingChange} />
        </div>
      </div>

      <Modal
        isOpen={showDetails}
        onRequestClose={toggleDetails}
        contentLabel="Hero Details"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>{hero.name}</h2>
        <p>
          <strong>Вселенная:</strong> {hero.universe}
        </p>
        <p>
          <strong>Альтер Эго:</strong> {hero.alterego}
        </p>
        <p>
          <strong>Род деятельности:</strong> {hero.occupation}
        </p>
        <p>
          <strong>Друзья:</strong> {hero.friends}
        </p>
        <p>
          <strong>Суперсилы:</strong> {hero.superpowers}
        </p>
        <p>{hero.info}</p>
        <button onClick={toggleDetails}>Скрыть</button>
      </Modal>
    </div>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    universe: PropTypes.string.isRequired,
    alterego: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    friends: PropTypes.string,
    superpowers: PropTypes.string,
    url: PropTypes.string.isRequired,
    info: PropTypes.string,
  }).isRequired,
};

export default HeroCard;

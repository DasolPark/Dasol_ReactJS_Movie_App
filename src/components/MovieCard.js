import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card ui segment">
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      <div className="movie-content">
        <h5>{movie.title}</h5>
        <p>{movie.summary.slice(0, 50)}</p>
      </div>
    </div>
  );
};

export default MovieCard;

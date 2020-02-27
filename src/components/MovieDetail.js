import React from 'react';
import './MovieDetail.css';
import { Link } from 'react-router-dom';

const MovieDetail = ({ movie }) => {
  if (movie) {
    return (
      <Link
        className="movie-detail a"
        to={{ pathname: `/movie/${movie.id}`, state: { movie } }}
      >
        <div className="movie-detail ui segment">
          <img src={movie.medium_cover_image} alt={movie.title}></img>
          <div className="movie-content">
            <h3>{movie.title}</h3>
            <h5 className="genre">
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </h5>
            <h5>{movie.year} 🎞</h5>
            <h5>
              {movie.rating}/10{' '}
              <span role="img" aria-label="close">
                ⭐
              </span>
            </h5>
            <h5>{movie.runtime} minutes</h5>
            <p>{movie.summary}</p>
          </div>
        </div>
      </Link>
    );
  }
  return <div>Loading...</div>;
};

export default MovieDetail;

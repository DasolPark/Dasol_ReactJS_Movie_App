import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  if (movie) {
    console.log(movie);
    return (
      <div className="movie-detail ui segment">
        <img src={movie.medium_cover_image} alt={movie.title}></img>
        <div className="movie-content">
          <h3>{movie.title}</h3>
          <h5 className="genre">
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </h5>
          <h5>{movie.year}</h5>
          <h5>{movie.rating}</h5>
          <p>{movie.summary}</p>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default MovieDetail;

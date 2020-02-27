import React from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onSelectMovie }) => {
  const renderMovieCard = movies.map(movie => (
    <MovieCard
      key={movie.id}
      movie={movie}
      onSelectMovie={onSelectMovie}
    ></MovieCard>
  ));
  return <div className="movie-list">{renderMovieCard}</div>;
};

export default MovieList;

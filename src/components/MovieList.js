import React from 'react';
import MovieCard from '../components/MovieCard';
import './MovieList.css';

const MovieList = ({ movies }) => {
  const renderMovieCard = movies.map(movie => (
    <MovieCard key={movie.id} movie={movie}></MovieCard>
  ));
  return <div className="movie-list">{renderMovieCard}</div>;
};

export default MovieList;

import React from 'react';
import './Detail.css';

const Detail = ({ history, location }) => {
  console.log(location);
  if (location.state) {
    const { movie } = location.state;
    return (
      <div className="detail ui container">
        <div className="detail ui segment">
          <img src={movie.large_cover_image} alt={movie.title}></img>
          <div className="detail detail-content">
            <h2>🎞 {movie.title_long}</h2>
            <h4 className="genre">
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </h4>
            <h4>
              <span role="img" aria-label="close">
                ⭐
              </span>{' '}
              {movie.rating}/10
            </h4>
            <h4>{movie.runtime} minutes</h4>
            <h4>{movie.language}</h4>
            <p>{movie.description_full}</p>
          </div>
        </div>
      </div>
    );
  }
  return <div>{history.push('/')}</div>;
};

export default Detail;

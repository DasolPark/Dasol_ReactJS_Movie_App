import React from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

class Home extends React.Component {
  state = { movies: [] };

  getMovies = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );

    console.log(response);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="ui container">
        <MovieList></MovieList>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';

class Home extends React.Component {
  state = { movies: [], selectMovie: null };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );

    console.log(movies);
    this.setState({ movies, selectMovie: movies[0] });
  };

  onSelectMovie = movie => {
    this.setState({ selectMovie: movie });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="ui container">
        <MovieDetail movie={this.state.selectMovie}></MovieDetail>
        <MovieList
          movies={this.state.movies}
          onSelectMovie={this.onSelectMovie}
        ></MovieList>
      </div>
    );
  }
}

export default Home;

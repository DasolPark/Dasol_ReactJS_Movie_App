import React from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';

class Home extends React.Component {
  state = { isLoading: true, movies: [], selectMovie: null };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );

    this.setState({ movies, selectMovie: movies[0], isLoading: false });
  };

  onSelectMovie = movie => {
    window.scrollTo(0, 0);

    this.setState({ selectMovie: movie });
  };

  componentDidMount() {
    this.getMovies();
  }

  renderContent = () => {
    if (this.state.isLoading) {
      return (
        <div
          className="ui container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            fontWeight: 600
          }}
        >
          Loading...
        </div>
      );
    }
    return (
      <div className="ui container">
        <MovieDetail movie={this.state.selectMovie}></MovieDetail>
        <MovieList
          movies={this.state.movies}
          onSelectMovie={this.onSelectMovie}
        ></MovieList>
      </div>
    );
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Home;

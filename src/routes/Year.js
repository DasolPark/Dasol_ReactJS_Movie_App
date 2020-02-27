import React from 'react';
import axios from 'axios';

class Year extends React.Component {
  state = { movies: [] };

  getMovies = async () => {
    const response = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=year'
    );

    console.log(response);
  };

  render() {
    return <div>Year</div>;
  }
}

export default Year;

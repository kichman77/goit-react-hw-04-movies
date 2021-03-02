import React, { Component } from "react";
import api from "../../services/apiService";
import MovieCard from "../MovieCard/MovieCard";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    api.getMovieInfo("587807").then((movie) => {
      console.log(movie);
      this.setState({ movie });
    });
  }

  handleBack = () => {};

  render() {
    const { handleBack } = this;
    const { movie } = this.state;
    return (
      <>
        <button onClick={handleBack} type="submit"></button>
        <MovieCard {...movie} />
      </>
    );
  }
}

export default MovieDetailsPage;

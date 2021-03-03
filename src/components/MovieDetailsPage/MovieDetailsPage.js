import React, { Component } from "react";
import api from "../../services/apiService";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.getMovieInfo(movieId).then((movie) => {
      // console.log(movie);
      return this.setState({ movie });
    });
  }

  handleBack = () => {
    const { state } = this.props.location;
    const { history } = this.props;
    if (state && state.from) {
      history.push(state.from);
      return;
    }
    history.push("/");
  };

  render() {
    const { handleBack } = this;
    const { movie } = this.state;
    const { state } = this.props.location;
    const { movieId } = this.props.match.params;
    // console.log(this.props.match.params);
    // console.log(this.props.location);
    // console.log(this.props);
    return (
      <>
        <button className={styles.btn} onClick={handleBack} type="button">
          go Back
        </button>
        <MovieCard state={state} movieId={movieId} {...movie} />
      </>
    );
  }
}

export default MovieDetailsPage;

import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as id } from "uuid";
import api from "../../services/apiService";
import styles from "./MoviesPage.module.css";
import PropTypes from "prop-types";

class MoviesPage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      state: PropTypes.shape({ from: PropTypes.string.isRequired }),
    }),
  };
  state = {
    query: "",
    page: 1,
    movies: [],
  };
  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    api.getMovies(query).then((movies) => {
      this.setState({ movies: [...movies] });
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.query.value);
    this.setState({ query: e.target.elements.query.value });
  };
  handleChange = (e) => {
    // console.log(e.target.value);
  };
  render() {
    const { handleChange, handleSubmit } = this;
    // console.log(this.props.location);
    const { location } = this.props;
    return (
      <>
        <h2 className={styles.moviesTitle}>MoviesPage</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              placeholder="Your movie"
              onChange={handleChange}
              type="text"
              name="query"
              id="query"
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <ul className={styles.moviesList}>
          {this.state.movies.map((movie) => {
            // console.log(movie);
            return (
              <li key={id()}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default MoviesPage;

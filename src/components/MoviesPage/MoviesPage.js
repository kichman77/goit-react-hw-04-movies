import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as id } from "uuid";
import queryString from "query-string";
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
    notification: "",
  };
  componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    console.log(query);
    if (query) {
      api.getMovies(query).then((movies) => {
        // this.setState({ movies: [...movies] });
        movies.length > 0
          ? this.setState({ movies: [...movies], notification: "" })
          : this.setState({
              movies: [],
              notification: "Sorry!!! Information not found",
            });
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: newQuery } = queryString.parse(this.props.location.search);
    const { query: oldQuery } = queryString.parse(prevProps.location.search);

    if (newQuery !== oldQuery && newQuery !== "") {
      api.getMovies(newQuery).then((movies) => {
        // this.setState({ movies: [...movies] });
        movies.length > 0
          ? this.setState({ movies: [...movies], notification: "" })
          : this.setState({
              movies: [],
              notification: "Sorry!!! Information not found",
            });
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.query.value);
    this.props.history.push({
      ...this.props.location,
      search: `query=${this.state.query}`,
    });
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ query: e.target.value });
  };
  render() {
    const { handleChange, handleSubmit } = this;
    // console.log(this.props.location);
    const { location } = this.props;
    const { notification, movies } = this.state;
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
        {notification ? (
          <p>{notification}</p>
        ) : (
          <ul className={styles.moviesList}>
            {movies.map((movie) => {
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
        )}
      </>
    );
  }
}

export default MoviesPage;

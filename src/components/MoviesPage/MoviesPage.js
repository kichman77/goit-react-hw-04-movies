import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/apiService";
import styles from "./MoviesPage.module.css";

class MoviesPage extends Component {
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
    console.log(e.target.elements.query.value);
    this.setState({ query: e.target.elements.query.value });
  };
  handleChange = (e) => {
    // console.log(e.target.value);
  };
  render() {
    const { handleChange, handleSubmit } = this;
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
              <li>
                <Link to="">{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default MoviesPage;

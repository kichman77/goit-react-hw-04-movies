import React, { Component } from "react";
import { v4 as id } from "uuid";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import api from "../../services/apiService";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      state: PropTypes.shape({ from: PropTypes.string.isRequired }),
    }),
  };
  state = {
    // movie_id: ``,
    trends: [],
  };
  componentDidMount() {
    api.getTrends().then((result) => {
      this.setState({
        trends: [...result],
      });
    });
  }
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  render() {
    const { trends } = this.state;
    const { location } = this.props;
    // console.log(location);
    return (
      <>
        <h2 className={styles.homeTitle}>Trending today</h2>
        <ul className={styles.homeList}>
          {trends.map((movie) => {
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

export default HomePage;

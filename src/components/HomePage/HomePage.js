import React, { Component } from "react";
import { v4 as id } from "uuid";
import { Link } from "react-router-dom";
import api from "../../services/apiService";
import styles from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movie_id: ``,
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

  handleClick = (e) => {
    console.log(e.target.dataset.id);
    this.setState({
      movie_id: e.target.dataset.id,
    });
  };
  render() {
    const { trends } = this.state;
    return (
      <>
        <h2 className={styles.homeTitle}>Trending today</h2>
        <ul className={styles.homeList}>
          {trends.map((movie) => {
            // console.log(movie);
            return (
              <li onClick={this.handleClick} key={id()}>
                <Link to="">{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HomePage;

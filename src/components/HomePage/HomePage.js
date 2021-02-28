import React, { Component } from "react";
import styles from "./HomePage.module.css";
import { v4 as id } from "uuid";
import api from "../../services/apiService";

class HomePage extends Component {
  state = {
    movie_id: ``,
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  handleClick = (e) => {
    console.log(e.target.dataset.id);
    this.setState({
      movie_id: e.target.dataset.id,
    });
  };
  render() {
    const { trends } = this.props;
    return (
      <>
        <h2 className={styles.homeTitle}>Trending today</h2>
        <ul className={styles.homeList}>
          {trends.map((movie) => {
            // console.log(movie);
            return (
              <li onClick={this.handleClick} key={id()}>
                <a data-id={movie.id} href="#">
                  {movie.title}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HomePage;

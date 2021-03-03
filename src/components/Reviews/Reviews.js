import React, { Component } from "react";
import { v4 as id } from "uuid";
import api from "../../services/apiService";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.getReviews(movieId).then((response) => {
      console.log(response);
      this.setState({ reviews: [...response] });
    });
  }
  render() {
    return (
      <>
        <ul className={styles.reviews}>
          {this.state.reviews.map((item) => {
            console.log(item);
            return (
              <li key={id()}>
                <h3 className={styles.author}>{item.author}</h3>
                <p className={styles.content}>{item.content}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Reviews;

import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/apiService";
import styles from "./Reviews.module.css";

class Reviews extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };
  state = {
    reviews: [],
    notification: "",
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.getReviews(movieId).then((response) => {
      console.log(response);
      response.length > 0
        ? this.setState({ reviews: [...response], notification: "" })
        : this.setState({ reviews: [], notification: "Noone review yet" });
    });
  }
  render() {
    const { notification, reviews } = this.state;

    return (
      <>
        {notification ? (
          <p>{notification}</p>
        ) : (
          <ul className={styles.reviews}>
            {reviews.map((item) => {
              // console.log(item);
              const { author, content, id } = item;
              let reviewAuthor = author ? author : "anonimus";
              let reviewContent = content ? content : "...";
              return (
                <li key={id}>
                  <h3 className={styles.author}>{reviewAuthor}</h3>
                  <p className={styles.content}>{reviewContent}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;

import React, { Component } from "react";
import { v4 as id } from "uuid";
import PropTypes from "prop-types";
import api from "../../services/apiService";
import styles from "./Cast.module.css";

class Cast extends Component {
  static propTypes = {
    movieId: PropTypes.string,
  };
  state = {
    cast: [],
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    api.getCast(movieId).then((response) => {
      // console.log(response);
      this.setState({ cast: [...response] });
    });
  }

  render() {
    const path = `https://image.tmdb.org/t/p/w500`;

    // console.log(this.props.match.params);
    return (
      <>
        <ul className={styles.castList}>
          {this.state.cast.map((item) => {
            // console.log(item.profile_path);
            const { name, character, profile_path } = item;
            let castName = name ? name : "anonimus";
            let castCharacter = character ? character : "anonimus";
            let profilePath =
              profile_path !== null
                ? path + profile_path
                : `https://via.placeholder.com/500x750.png?text=NO+POSTER`;

            return (
              <li key={id()}>
                <div className={styles.imgWrapper}>
                  <img src={profilePath} alt={name} />
                </div>
                <h3>{castName}</h3>
                <p>{castCharacter}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;

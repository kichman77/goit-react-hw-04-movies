import React, { Component } from "react";
import { v4 as id } from "uuid";
import api from "../../services/apiService";
import styles from "./Cast.module.css";

class Cast extends Component {
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
            let profilePath =
              item.profile_path !== null
                ? path + item.profile_path
                : `https://via.placeholder.com/500x750.png?text=NO+POSTER`;

            return (
              <li key={id()}>
                <div className={styles.imgWrapper}>
                  <img src={profilePath} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;

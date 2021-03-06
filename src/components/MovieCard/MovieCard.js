import React, { lazy } from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./MovieCard.module.css";
import PropTypes from "prop-types";

const Cast = lazy(() => {
  return import("../Cast/Cast");
});
const Reviews = lazy(() => {
  return import("../Reviews/Reviews");
});
const MovieCard = ({ title, overview, poster_path, movieId, state }) => {
  const path = `https://image.tmdb.org/t/p/w500`;
  let profilePath =
    poster_path !== null
      ? path + poster_path
      : `https://via.placeholder.com/500x750.png?text=NO+POSTER`;

  return (
    <div className={styles.cardWraper}>
      <div className={styles.card}>
        <div className={styles.imgWraper}>
          <img src={profilePath} alt={title} />
        </div>
        <div className={styles.movieInfo}>
          <h3>{title}</h3>
          <p>{overview}</p>
          <ul className={styles.additional}>
            <li>
              <Link
                to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: { from: state && state.from ? state.from : "" },
                }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: { from: state && state.from ? state.from : "" },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </div>
    </div>
  );    
};

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  movieId: PropTypes.string,
  state: PropTypes.shape({ from: PropTypes.object }),
};

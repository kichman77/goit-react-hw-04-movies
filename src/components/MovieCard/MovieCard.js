import React from "react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, overview, poster_path }) => {
  const path = `https://image.tmdb.org/t/p/w500`;
  return (
    <div className={styles.cardWraper}>
      <div className={styles.imgWraper}>
        <img src={path + poster_path} alt={title} />
      </div>
      <div className={styles.movieInfo}>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;

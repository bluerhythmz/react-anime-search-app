import styles from './animeResult.module.css'
import { Link } from 'react-router-dom';

const AnimeResult = ({anime, bottom, bottomImg, bottomInfo}) => {
  /* ${anime.type === "Movie" ? "movie" : "tv"} */
  console.log(anime, bottom)
  return (
    <div className={`${styles[`anime`]} ${styles[bottom]}`}>
    <Link to={`/anime/${anime.mal_id}/${anime.title}`}
    style={{ textDecoration: "none" }}>
      <img className={`${styles[`anime__img`]} ${styles[bottomImg]}`} src={anime.image_url} alt="" />
      <div className={`${styles[`anime__info`]} ${styles[bottomInfo]}`}>
        <h3 className={styles["anime__title"]}>{anime.title}</h3>
        <p className={styles["anime__episodes"]}>Episodes: {anime.episodes}</p>
        <p className={`${styles[`anime__type`]} ${anime.type === "Movie" ? styles["movie"] : styles["tv"]}`}>{anime.type}</p>
      </div>
      </Link>
    </div>
  );
};

export default AnimeResult;

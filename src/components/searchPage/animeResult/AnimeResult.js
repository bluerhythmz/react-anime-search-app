import styles from './animeResult.module.css'

const AnimeResult = ({anime, bottom, bottomImg, bottomInfo}) => {
    
  return (
    <div className={styles[`anime ${bottom}`]}>
      <img className={styles[`anime__img ${bottomImg}`]} src={anime.image_url} alt="" />
      <div className={styles[`anime__info ${bottomInfo}`]}>
        <h3 className={styles["anime__title"]}>{anime.title}</h3>
        <p className={styles["anime__episodes"]}>Episodes: {anime.episodes}</p>
        <p className={styles[`anime__type ${anime.type === "Movie" ? "movie" : "tv"}`]}>{anime.type}</p>
      </div>
    </div>
  );
};

export default AnimeResult;

import styles from "./animeGrid.module.css";
import Anime from "../anime/Anime";
import { Link } from "react-router-dom";

const AnimeGrid = ({ data, heading, description }) => {
  return (
    <section className={styles["grid-wrapper"]}>
      <div className={styles["anime__heading"]}>
        <h3 className={styles["anime__heading-text"]}>{heading}</h3>
        <p className={styles["anime__heading-description"]}>{description}</p>
        <div className={styles["divider"]}></div>
      </div>
      <div className={styles["anime-container"]}>
        {data.map((anime) => {
          return (
            <Link key={anime.mal_id} to={`/anime/${anime.mal_id}/${anime.title}`} style={{textDecoration: "none"}}>
            <Anime
              image={anime.image_url}
              title={anime.title}
            />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AnimeGrid;

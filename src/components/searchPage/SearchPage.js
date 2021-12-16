import styles from "./searchPage.module.css";
import AnimeResult from "./animeResult/AnimeResult";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";

const SearchPage = ({ data, isLoading }) => {
  const sort = data.sort((a, b) => (a.score < b.score ? 1 : -1)).slice(0, 3);
  const seriesFilter = data.filter((anime) => {
    return anime.type === "TV";
  });
  const movieFilter = data.filter((anime) => {
    return anime.type === "Movie";
  });

  if (isLoading) return <Loading />;

  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["search__grid-wrapper"]}`}>
        <h2 className={styles["heading"]}>Top Results</h2>
        <div className={`${styles["search__grid"]} ${styles["--top"]}`}>
          {sort.map((anime) => (
            <AnimeResult anime={anime} />
          ))}
        </div>
      </div>
      <div className={`${styles["search__grid-wrapper"]}`}>
        <h2 className={styles["heading"]}>Series</h2>
        <div className={`${styles["search__grid"]} ${styles["--bottom"]}`}>
          {seriesFilter.map((anime) => (
            <AnimeResult
              anime={anime}
              bottom="bottom"
              bottomImg="bottom-img"
              bottomInfo="bottom-info"
            />
          ))}
        </div>
      </div>
      <div className={`${styles["search__grid-wrapper"]}`}>
        <h2 className={styles["heading"]}>Movies</h2>
        <div className={`${styles["search__grid"]} ${styles["--bottom"]}`}>
          {movieFilter.map((anime) => (
            <AnimeResult
              anime={anime}
              bottom="bottom"
              bottomImg="bottom-img"
              bottomInfo="bottom-info"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

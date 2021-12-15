import styles from "./searchPage.module.css";
import AnimeResult from "./animeResult/AnimeResult";
import { useState } from "react";
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
      <h2 className={styles["heading"]}>Top Results</h2>
      <div className={styles["search__grid --top"]}>
        {sort.map((anime) => (
          <Link key={anime.mal_id} to={`/anime/${anime.mal_id}/${anime.title}`} style={{textDecoration: "none"}}>
            <AnimeResult anime={anime} />
          </Link>
        ))}
      </div>
      <h2 className={styles["heading"]}>Series</h2>
      <div className={styles["search__grid --bottom"]}>
        {seriesFilter.map((anime) => (
          <Link key={anime.mal_id} to={`/anime/${anime.mal_id}/${anime.title}`} style={{textDecoration: "none"}}>
            <AnimeResult
              anime={anime}
              bottom={"bottom"}
              bottomImg={"bottom-img"}
              bottomInfo={"bottom-info"}
            />
          </Link>
        ))}
      </div>
      <h2 className={styles["heading"]}>Movies</h2>
      <div className={styles["search__grid --bottom"]}>
        {movieFilter.map((anime) => (
          <Link key={anime.mal_id} to={`/anime/${anime.mal_id}/${anime.title}`} style={{textDecoration: "none"}}>
            <AnimeResult
              anime={anime}
              bottom="bottom"
              bottomImg={"bottom-img"}
              bottomInfo={"bottom-info"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

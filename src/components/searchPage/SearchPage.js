import styles from "./searchPage.module.css";
import AnimeResult from "./components/animeResult/AnimeResult";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

const SearchPage = ({ search, clicked, handleSearch }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const sort = results.sort((a, b) => (a.score < b.score ? 1 : -1)).slice(0, 3);
  const seriesFilter = results.filter((anime) => {
    return anime.type === "TV";
  });
  const movieFilter = results.filter((anime) => {
    return anime.type === "Movie";
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.length <= 2) {
        setIsLoading(true);
        setResults([]);
      } else {
        axios
          .get(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=30`)
          .then((res) => {
            const items = res.data.results;
            setResults(items);
            setIsLoading(false);
          });
      }
    }, 250);
    return () => clearTimeout(timeout);
  }, [search, navigate]);

  return (
    <>
      <Searchbar
        search={search}
        clicked={clicked}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles["wrapper"]}>
          <div className={`${styles["search__grid-wrapper"]}`}>
            <h2 className={styles["heading"]}>Top Results</h2>
            <div className={`${styles["search__grid"]} ${styles["--top"]}`}>
              {sort.map((anime) => (
                <AnimeResult anime={anime} key={anime.mal_id} />
              ))}
            </div>
          </div>
          <div className={`${styles["search__grid-wrapper"]}`}>
            <h2 className={styles["heading"]}>Series</h2>
            <div className={`${styles["search__grid"]} ${styles["--bottom"]}`}>
              {seriesFilter.map((anime) => (
                <AnimeResult
                  key={anime.mal_id}
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
                  key={anime.mal_id}
                  anime={anime}
                  bottom="bottom"
                  bottomImg="bottom-img"
                  bottomInfo="bottom-info"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;

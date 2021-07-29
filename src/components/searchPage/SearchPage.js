import "./searchPage.css";
import AnimeResult from "./animeResult/AnimeResult";
import { useState } from "react";
import Loading from "../loading/Loading";

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
    <div className="wrapper">
      <h2 className="heading">Top Results</h2>
      <div className="search__grid --top">
        {sort.map((anime) => (
          <AnimeResult key={anime.mal_id} anime={anime} />
        ))}
      </div>
      <h2 className="heading">Series</h2>
      <div className="search__grid --bottom">
        {seriesFilter.map((anime) => (
          <AnimeResult
            key={anime.mal_id}
            anime={anime}
            bottom={"bottom"}
            bottomImg={"bottom-img"}
            bottomInfo={"bottom-info"}
          />
        ))}
      </div>
      <h2 className="heading">Movies</h2>
      <div className="search__grid --bottom">
        {movieFilter.map((anime) => (
          <AnimeResult
            key={anime.mal_id}
            anime={anime}
            bottom="bottom"
            bottomImg={"bottom-img"}
            bottomInfo={"bottom-info"}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

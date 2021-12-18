import axios from "axios";
import { useEffect, useState } from "react";
import AnimeGrid from "../components/animeGrid/AnimeGrid";
import Loading from "../components/loading/Loading";

const FetchPageLoadData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popularAnime, setPopularAnime] = useState([]);
  const [seasonAnime, setSeasonAnime] = useState([]);

  

  useEffect(() => {
    const fetchData = () => {
        setIsLoading(true)
        const getPopularAnime = axios.get(
          "https://api.jikan.moe/v3/top/anime"
        );
        const getSeasonAnime = axios.get("https://api.jikan.moe/v3/season");
        axios.all([getPopularAnime, getSeasonAnime]).then(
          axios.spread((...allData) => {
            const popular = allData[0].data.top;
            const season = allData[1].data.anime;
            setPopularAnime(popular)
            setSeasonAnime(season)
            setIsLoading(false)
          })
        );
      }
      fetchData()
  }, []);

  if (isLoading) return <Loading />

  return (
    <>
      <AnimeGrid
        data={popularAnime}
        heading={"Most Popular Anime"}
        description={"All the cool kids love these"}
      />
      <AnimeGrid
        data={seasonAnime}
        heading={"This Season's Anime"}
      />
    </>
  );
};

export default FetchPageLoadData;

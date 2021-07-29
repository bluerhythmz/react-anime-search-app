import axios from "axios";
import { useState, useEffect } from "react";
import AnimeGrid from "../components/animeGrid/AnimeGrid";
import Loading from "../components/loading/Loading";

const SeasonAnime = () => {
  const [season, setSeason] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchSeasonAnime = async () => {
      setIsLoading(true)
      const res = await axios.get("https://api.jikan.moe/v3/season");
      const data = await res.data.anime;
      const slicedData = data.slice(0, 20)
      setSeason(slicedData)
      setIsLoading(false)
    }
    fetchSeasonAnime()
  },[])

  if (isLoading) return <Loading />

  return <AnimeGrid data={season} heading={"This Season's Anime"} isLoading={isLoading} />
};

export default SeasonAnime;

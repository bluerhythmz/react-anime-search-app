import axios from "axios";
import { useState, useEffect } from "react";
import AnimeGrid from "../components/animeGrid/AnimeGrid";

const SeasonAnime = ({isLoading}) => {
  const [season, setSeason] = useState([])

  useEffect(() => {
    const fetchSeasonAnime = async () => {
      const res = await axios.get("https://api.jikan.moe/v3/season");
      const data = await res.data.anime;
      const slicedData = data.slice(0, 20)
      setSeason(slicedData)
    }
    fetchSeasonAnime()
  },[])
  return <AnimeGrid data={season} heading={"This Season's Anime"} isLoading={isLoading} />
};

export default SeasonAnime;

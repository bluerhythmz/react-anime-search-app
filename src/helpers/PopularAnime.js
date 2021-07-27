import axios from "axios";
import { useState, useEffect } from "react";
import AnimeGrid from "../components/animeGrid/AnimeGrid";

const PopularAnime = ({isLoading}) => {
    const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchPopularAnime = async () => {
      const res = await axios.get('https://api.jikan.moe/v3/top/anime?limit=10')
      const data = await res.data.top.slice(0, 10)
      setPopular(data)
    }
    fetchPopularAnime()
  },[])
  return <AnimeGrid data={popular} heading={"Most Popular Anime"} isLoading={isLoading} description={"All the cool kids love these"} />
}

export default PopularAnime

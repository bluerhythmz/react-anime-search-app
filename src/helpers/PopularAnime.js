import axios from "axios";
import { useState, useEffect } from "react";
import AnimeGrid from "../components/animeGrid/AnimeGrid";
import Loading from "../components/loading/Loading";

const PopularAnime = () => {
    const [popular, setPopular] = useState([])
    const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      const fetchPopularAnime = async () => {
        setIsLoading(true)
      const res = await axios.get('https://api.jikan.moe/v3/top/anime?limit=10')
      const data = await res.data.top.slice(0, 10)
      setPopular(data)
      setIsLoading(false)
    }
    fetchPopularAnime()
  },[])

  if (isLoading) return <Loading />

  return <AnimeGrid data={popular} heading={"Most Popular Anime"} isLoading={isLoading} description={"All the cool kids love these"} />
}

export default PopularAnime

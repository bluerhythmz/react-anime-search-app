import React from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const AnimePage = ({setSearch, setClicked}) => {
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation()
  const params = useParams();
  const animeId = params.id;

  

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${animeId}`).then((data) => {
      console.log(data.data);
      setAnime(data.data);
    });
  }, [animeId]);

  useEffect(() => {
    if (!location.pathname.includes('q')) {
      setSearch("")
      setClicked(false)
    }
  })

  //data we want:
  //image_url, title, episodes, rating, synopsis, genres, trailer_url
  return (
    <section>
      <div>
        <img src={anime.image_url} alt="anime_image" />
      </div>
      <div>
        <h1>{anime.title}</h1>
        <p>
          {anime.episodes} episodes * {anime.rating}
        </p>
      </div>
      <iframe width="320" height="240"  title="trailer"
        src={anime.trailer_url}>
        Your browser does not support the video tag.
      </iframe>
    </section>
  );
};

export default AnimePage;

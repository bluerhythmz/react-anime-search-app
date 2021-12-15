import React from "react";
import axios from "axios";
import "./animePage.css";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";

const AnimePage = ({ setSearch, setClicked }) => {
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const params = useParams();
  const animeId = params.id;

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${animeId}`).then((data) => {
      console.log(data.data);
      setAnime(data.data);
      setLoading(false);
    });
    if (loading) return <Loading />;
  }, [animeId, loading]);

  useEffect(() => {
    if (!location.pathname.includes("q")) {
      setSearch("");
      setClicked(false);
    }
  });

  //data we want:
  //image_url, title, episodes, rating, synopsis, genres, trailer_url
  return (
    <section>
      <div className="video-player">
        <iframe className="iframe" title="trailer" src={anime.trailer_url}>
          Your browser does not support the video tag.
        </iframe>
      </div>
      <div className="anime-wrapper">
        <img
          className="anime-thumbnail"
          src={anime.image_url}
          alt="anime_image"
        />
        <div>
          <h1>{anime.title}</h1>
          <p>
            {anime.episodes} episodes * {anime.rating}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimePage;

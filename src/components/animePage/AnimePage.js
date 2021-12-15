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
    <>
      {!loading && (
        <section className="anime-page">
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
            <div className="anime-page-details">
              <h1 className="anime-page-title">{anime.title}</h1>
              <p className="anime-page-details-text">
                Episodes: {anime.episodes}
              </p>
              <p className="anime-page-details-text">Rating: {anime.rating}</p>
              <p className="anime-page-details-text">
                Genres:
                {anime.genres.map((genre, index) => {
                  if (index === anime.genres.length - 1) {
                    return ` ${genre.name}`;
                  } else {
                    return ` ${genre.name},`;
                  }
                })}
              </p>
            </div>
          </div>
          <div className="anime-page-synopsis">
            <h2 className="synopsis-title">Synopsis</h2>
            <p className="synopsis-details">{anime.synopsis}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default AnimePage;

import React from "react";
import styles from  "./animePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import useFetch from "../../hooks/useFetch";

const AnimePage = () => {
  const [anime, setAnime] = useState({});
  const params = useParams();
  const animeId = params.id;
  const { loading, data } = useFetch(`https://api.jikan.moe/v3/anime/${animeId}`, {}, [animeId])

  useEffect(() => {
    if (data) {
      setAnime(data.data)
    }
  }, [data]);
  
  if (loading) return <Loading />;
  return (
    <>
        <section className={styles[`anime-page`]}>
          <div className={styles["video-player"]}>
            <iframe className={styles["iframe"]} title="trailer" src={anime.trailer_url}>
              Your browser does not support the video tag.
            </iframe>
          </div>
          <div className={styles["anime-wrapper"]}>
            <img
              className={styles["anime-thumbnail"]}
              src={anime.image_url}
              alt="anime_image"
            />
            <div className={styles["anime-page-details"]}>
              <h1 className={styles["anime-page-title"]}>{anime.title}</h1>
              <p className={styles["anime-page-details-text"]}>
                Episodes: {anime.episodes}
              </p>
              <p className={styles["anime-page-details-text"]}>Rating: {anime.rating}</p>
              <p className={styles["anime-page-details-text"]}>
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
          <div className={styles["anime-page-synopsis"]}>
            <h2 className={styles["synopsis-title"]}>Synopsis</h2>
            <p className={styles["synopsis-details"]}>{anime.synopsis}</p>
          </div>
        </section>
      
    </>
  );
};

export default AnimePage;

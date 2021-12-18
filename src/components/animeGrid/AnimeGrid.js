import styles from "./animeGrid.module.css";
import Anime from "../anime/Anime";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import windowDimensions from "../../hooks/UseWindowDimensions";

const AnimeGrid = ({ data, heading, description }) => {
  const [width, setWidth] = useState(0)
  const [count, setCount] = useState(0)
  const [transition, setTransition] = useState("")

  const imageWidthRef = useCallback(
    (node) => {
      if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
      }
    },
    [/* windowDimensions() */]
  );

  const handleNextClick = () => {
    setTransition("transform .4s ease-in-out");
    setCount((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setTransition("transform .4s ease-in-out");
    setCount((prev) => prev - 1);
  };

  return (
    <section className={styles["grid-wrapper"]}>
      <div className={styles["anime__heading"]}>
        <h3 className={styles["anime__heading-text"]}>{heading}</h3>
        <p className={styles["anime__heading-description"]}>{description}</p>
        <div className={styles["divider"]}></div>
      </div>
      <div className={styles["anime-container"]} ref={imageWidthRef}>
          <div className={styles["anime-links"]} >
          {data.map((anime) => {
          return (
            <Link key={anime.mal_id} to={`/anime/${anime.mal_id}/${anime.title}`} style={{textDecoration: "none", transform: `translateX(${-width * count}px)`,
            transition: `${transition}`,}} >
            <Anime
              image={anime.image_url}
              title={anime.title}
            />
            </Link>
          );
        })}
          </div>
        
      </div>
      <IconContext.Provider
        value={{ className: "", color: "white", size: "3em" }}
      >
        <button
          className={styles["prev"]}
          onClick={handlePrevClick}
          
        >
          <FaAngleLeft />
        </button>
        <button
          className={styles["next"]}
          onClick={handleNextClick}
          
        >
          <FaAngleRight />
        </button>
      </IconContext.Provider>
    </section>
  );
};

export default AnimeGrid;

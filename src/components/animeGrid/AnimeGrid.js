import "./animeGrid.css";
import Anime from "../anime/Anime";
import AnimePage from "../animePage/AnimePage";
import { Link } from "react-router-dom";

const AnimeGrid = ({ data, heading, description }) => {
  return (
    <section className="grid-wrapper">
      <div className="anime__heading">
        <h3 className="anime__heading-text">{heading}</h3>
        <p className="anime__heading-description">{description}</p>
        <div className="divider"></div>
      </div>
      <div className="anime-container">
        {data.map((anime) => {
          return (
            <Link key={anime.mal_id} to={{
              pathname: `/anime/${anime.mal_id}/${anime.title}`,
              state: {
                hello: "helloooo"
              }
            }}  >
            <Anime
              image={anime.image_url}
              title={anime.title}
            />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AnimeGrid;

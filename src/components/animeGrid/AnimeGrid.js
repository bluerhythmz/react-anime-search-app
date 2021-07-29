import "./animeGrid.css";
import Anime from "../anime/Anime";

const AnimeGrid = ({ data, heading, description }) => {
  return (
    <section className="grid-wrapper">
      <div className="anime__heading">
        <h3 className="anime__heading-text">{heading}</h3>
        <p className="anime__heading-description">{description}</p>
        <div className="divider"></div>
      </div>
      <div className="anime-container">
        {data.map((item) => {
          return (
            <Anime
              key={item.mal_id}
              image={item.image_url}
              title={item.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AnimeGrid;

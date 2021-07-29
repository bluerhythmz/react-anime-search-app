import "./animeGridWrapper.css";
import PopularAnime from "../../helpers/PopularAnime";
import SeasonAnime from "../../helpers/SeasonAnime";

const AnimeGridWrapper = () => {
  return (
    <div className="wrapper-grid">
      <PopularAnime  />
      <SeasonAnime  />
    </div>
  );
};

export default AnimeGridWrapper;

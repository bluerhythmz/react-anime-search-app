import "./animeGridWrapper.css";
/* import PopularAnime from "../../helpers/PopularAnime";
import SeasonAnime from "../../helpers/SeasonAnime"; */
import FetchPageLoadData from "../../helpers/FetchPageLoadData";

const AnimeGridWrapper = () => {
  return (
    <div className="wrapper-grid">
      <FetchPageLoadData />
    </div>
  );
};

export default AnimeGridWrapper;

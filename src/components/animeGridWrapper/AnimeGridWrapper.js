import styles from "./animeGridWrapper.module.css";
/* import PopularAnime from "../../helpers/PopularAnime";
import SeasonAnime from "../../helpers/SeasonAnime"; */
import FetchPageLoadData from "../../helpers/FetchPageLoadData";

const AnimeGridWrapper = () => {
  return (
    <div className={styles["wrapper-grid"]}>
      <FetchPageLoadData />
    </div>
  );
};

export default AnimeGridWrapper;

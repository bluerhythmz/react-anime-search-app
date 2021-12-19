import styles from "./animeGridWrapper.module.css";
import FetchPageLoadData from "../../utils/FetchPageLoadData";
import Loading from "../loading/Loading";
import AnimeGrid from "../animeGrid/AnimeGrid";

const AnimeGridWrapper = () => {
  const { isLoading, popularAnime, seasonAnime } = FetchPageLoadData()
  
  if (isLoading) return <Loading />
  return (
    <div className={styles["wrapper-grid"]}>
      <>
      <AnimeGrid
        data={popularAnime}
        heading={"Most Popular Anime"}
        description={"All the cool kids love these"}
      />
      <AnimeGrid
        data={seasonAnime}
        heading={"This Season's Anime"}
      />
    </>
    </div>
  );
};

export default AnimeGridWrapper;

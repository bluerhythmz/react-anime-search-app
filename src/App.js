import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modal/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/searchPage/SearchPage";
import AnimeGridWrapper from "./components/animeGridWrapper/AnimeGridWrapper";
import { Routes, Route, useNavigate } from "react-router-dom";
import ImageCarousel from "./components/imageCarousel/ImageCarousel";
import AnimePage from "./components/animePage/AnimePage";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  /* const [genre, setGenre] = useState('') */
  /* const genres = [
    "Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Mystery", "Drama", "Ecchi", "Fantasy", "Game", "Hentai", "Historical",
    "Horror", "Kids", "Magic", "Martial Arts", "Mecha", "Music", "Parody", "Samurai", "Romance", "School", "Sci Fi", "Shoujo", "Shoujo Ai", "Shounen", "Shounen Ai", "Space", "Sports", "Super Power", "Vampire", "Yaoi", "Yuri", "Harem", "Slice of Life", "Supernatural", "Military", "Police", "Psychological", "Thriller", "Seinen", "Josei"
  ] */

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (search.length < 2) {
        return setData([]);
      }
      if (search.length > 2) {
        setIsLoading(true);
        axios
          .get(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=30`)
          .then((res) => {
            navigate(`q=${search}`);
            const items = res.data.results;
            setData(items);
            setIsLoading(false);
          });
      }
    }, 250);
    return () => clearTimeout(timeout);

    /* if (genre) {
        await axios.get(`https://api.jikan.moe/v3/search/anime?genre=${genre}&limit=30`)
        .then(res => {
          let items = res.data.results
          setData(items)
          setIsLoading(false)
        })
      } */
  }, [search, navigate /* genre */]);

  const handleSearch = (input) => {
    setSearch(input);
  };

  const handleClick = () => {
    if (clicked) {
      navigate('/')
      setSearch("");
    } 
    setClicked((prev) => !prev);
  };

  const handleGenreClick = (id) => {
    /* setGenre(id) */
    setClicked((current) => !current);
  };

  return (
    <div className="container">
      <Navbar
        search={search}
        clicked={clicked}
        handleClick={handleClick}
        handleSearch={handleSearch}
      />

      <Routes>
        <Route
          path={`q=:query`}
          element={<SearchPage data={data} isLoading={isLoading} />}
        />

        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <AnimeGridWrapper />
            </>
          }
        />
        <Route path="/anime/:id/:title" element={<AnimePage setSearch={setSearch} setClicked={setClicked} />} />
      </Routes>
      <Modal handleGenreClick={handleGenreClick} /* genres={genres} */ />
      <Footer />
    </div>
  );
}

export default App;

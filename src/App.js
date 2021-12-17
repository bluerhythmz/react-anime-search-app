import "./App.css";
import Navbar from "./components/navbar/Navbar";
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
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  

  const handleSearch = (input) => {
    setSearch(input);
  };

  const handleClick = () => {
    if (clicked) {
      navigate('/')
      /* setSearch(""); */
    } else {
      navigate(`q=`);
      /* setSearch("nar") */
    }
    setClicked((prev) => !prev);
  };

  return (
    <div className="container">
      <Navbar
        handleClick={handleClick}
      />

      <Routes>
        <Route
          path={`q=`}
          element={<SearchPage search={search} handleSearch={handleSearch} />}
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
      <Footer />
    </div>
  );
}

export default App;

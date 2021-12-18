import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/searchPage/SearchPage";
import AnimeGridWrapper from "./components/animeGridWrapper/AnimeGridWrapper";
import { Routes, Route, useLocation } from "react-router-dom";
import ImageCarousel from "./components/imageCarousel/ImageCarousel";
import AnimePage from "./components/animePage/AnimePage";

function App() {
  const [search, setSearch] = useState("");
  
  const location = useLocation()

  const handleSearch = (input) => {
    setSearch(input);
  };

  useEffect(() => {
    if (!location.pathname.includes("search")) {
      setSearch("")
    }
  }, [location])

  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageCarousel />
              <AnimeGridWrapper />
            </>
          }
        />
        <Route
          path={`search`}
          element={<SearchPage search={search} handleSearch={handleSearch} />}
        />

        <Route
          path="/anime/:id/:title"
          element={<AnimePage setSearch={setSearch} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

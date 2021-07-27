import './App.css';
import Navbar from './components/navbar/Navbar';
import AnimeGrid from './components/animeGrid/AnimeGrid'
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react'
import axios from 'axios'
import SeasonAnime from './helpers/SeasonAnime';
import PopularAnime from './helpers/PopularAnime';
import Footer from './components/footer/Footer';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  /* const [genre, setGenre] = useState('') */
  const [clicked, setClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  /* const genres = [
    "Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Mystery", "Drama", "Ecchi", "Fantasy", "Game", "Hentai", "Historical",
    "Horror", "Kids", "Magic", "Martial Arts", "Mecha", "Music", "Parody", "Samurai", "Romance", "School", "Sci Fi", "Shoujo", "Shoujo Ai", "Shounen", "Shounen Ai", "Space", "Sports", "Super Power", "Vampire", "Yaoi", "Yuri", "Harem", "Slice of Life", "Supernatural", "Military", "Police", "Psychological", "Thriller", "Seinen", "Josei"
  ] */

  useEffect(() => {
    
    const timeout = setTimeout( () => {
      if (search.length < 2) return setData([])
        if (search.length > 2) {
          axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=30`)
        .then(res => {
          const items = res.data.results
          setData(items)
          setIsLoading(false)
        })
        }
        
    }, 250);
    return () => clearTimeout(timeout)
    
      /* if (genre) {
        await axios.get(`https://api.jikan.moe/v3/search/anime?genre=${genre}&limit=30`)
        .then(res => {
          let items = res.data.results
          setData(items)
          setIsLoading(false)
        })
      } */
    
    
  },[search /* genre */])

  const handleSearch = (input) => {
    setSearch(input)
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleGenreClick = (id) => {
    /* setGenre(id) */
    setClicked(false)
  }

  
  return (
    <div className="container">
      <Navbar clicked={clicked} handleClick={handleClick} handleSearch={handleSearch} />
      {search.length > 2 && <AnimeGrid data={data} />}
      <PopularAnime isLoading={isLoading} />
      <SeasonAnime isLoading={isLoading} />
      <Modal handleGenreClick={handleGenreClick} /* genres={genres} */ />
      <Footer />
    </div>
  );
}

export default App;

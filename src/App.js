import './App.css';
import Navbar from './components/navbar/Navbar';
import AnimeGrid from './components/animeGrid/AnimeGrid'
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [genre, setGenre] = useState('')
  const [clicked, setClicked] = useState(false)
  const genres = [
    "Action", "Adventure", "Cars", "Comedy", "Dementia", "Demons", "Mystery", "Drama", "Ecchi", "Fantasy", "Game", "Hentai", "Historical",
    "Horror", "Kids", "Magic", "Martial Arts", "Mecha", "Music", "Parody", "Samurai", "Romance", "School", "Sci Fi", "Shoujo", "Shoujo Ai", "Shounen", "Shounen Ai", "Space", "Sports", "Super Power", "Vampire", "Yaoi", "Yuri", "Harem", "Slice of Life", "Supernatural", "Military", "Police", "Psychological", "Thriller", "Seinen", "Josei"
  ]

  useEffect(() => {
    if (genre) {
      axios.get(`https://api.jikan.moe/v3/search/anime?genre=${genre}&limit=20`)
      .then(res => {
        let items = res.data.results
        setData(items)
      })
    }
    if (search.length > 2) {
      axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=20`)
      .then(res => {
        let items = res.data.results
        setData(items)
        setGenre('')
      })
    }
  },[search, genre])

  const handleSearch = (input) => {
    setSearch(input)
  }

  const handleClick = () => {
    setClicked(true)
  }

  const handleGenreClick = (id) => {
    setGenre(id)
    setClicked(false)
  }
  
  return (
    <div className="container">
      <Navbar handleClick={handleClick} handleSearch={handleSearch} />
      <AnimeGrid data={data} />
      <Modal clicked={clicked} handleGenreClick={handleGenreClick} genres={genres} />
    </div>
  );
}

export default App;

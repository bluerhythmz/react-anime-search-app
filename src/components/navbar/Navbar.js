import GenreButton from "../genreButton/GenreButton"
import Searchbar from "../searchbar/Searchbar"
import './navbar.css'

const Navbar = ({handleSearch, handleClick}) => {
    return (
        <nav className="nav">
            <h1 className="nav__title">SoftRoll</h1>
            <GenreButton handleClick={handleClick} />
            <Searchbar handleSearch={handleSearch} />
        </nav>
    )
}

export default Navbar

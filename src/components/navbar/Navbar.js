import GenreButton from "../genreButton/GenreButton"
import Searchbar from "../searchbar/Searchbar"
import './navbar.css'
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const Navbar = ({handleSearch, handleClick, clicked}) => {
    return (
        <>
        <nav className="nav">
            <div className="nav__items">
            <h1 className="nav__title">Bowl</h1>
            {/* <GenreButton handleClick={handleClick} /> */}
            <IconContext.Provider value={{className: "nav__search", color: "white", size: "2em"}}>
                <div onClick={handleClick}>
                    <BsSearch />
                </div>
            </IconContext.Provider>
            </div>
            <Searchbar clicked={clicked} handleSearch={handleSearch} />
        </nav>
            </>
    )
}

export default Navbar

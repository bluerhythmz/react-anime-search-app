import GenreButton from "../genreButton/GenreButton";
import Searchbar from "../searchbar/Searchbar";
import styles from "./navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearch, handleClick, clicked, search }) => {
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav__items"]}>
          <Link to="/" style={{textDecoration: "none"}}>
            <h1 className={styles["nav__title"]}>Bowl</h1>
          </Link>
          {/* <GenreButton handleClick={handleClick} /> */}
          <IconContext.Provider
            value={{ className: styles["nav__search"], color: "white", size: "2em" }}
          >
            <div onClick={handleClick}>
              <BsSearch />
            </div>
          </IconContext.Provider>
        </div>
        <Searchbar
          search={search}
          clicked={clicked}
          handleSearch={handleSearch}
        />
      </nav>
    </>
  );
};

export default Navbar;

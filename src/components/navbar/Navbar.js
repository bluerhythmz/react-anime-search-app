import styles from "./navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()
  
  const handleClick = () => {
    if (clicked) {
      navigate("/");
    } else {
      navigate(`search`);
    }
    setClicked((prev) => !prev);
  };
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav__items"]}>
          <Link to="/" style={{textDecoration: "none"}}>
            <h1 className={styles["nav__title"]}>Bowl</h1>
          </Link>
          <IconContext.Provider
            value={{ className: styles["nav__search"], color: "white", size: "2em" }}
          >
            <div onClick={handleClick}>
                <BsSearch />
            </div>
          </IconContext.Provider>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import styles from './genrebutton.module.css'

const GenreButton = ({handleClick}) => {
    return (
        <button className={styles["nav__genre"]} onClick={handleClick}>
         Genre   
        </button>
    )
}

export default GenreButton

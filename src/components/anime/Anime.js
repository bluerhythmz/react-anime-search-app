import styles from './anime.module.css'

const Anime = ({image, title}) => {
    return (
        <div className={styles["anime__item"]}>
            <img src={image} alt="" className={styles["anime__img"]} />
            <p className={styles["anime__title"]}>{title}</p>
        </div>
    )
}

export default Anime

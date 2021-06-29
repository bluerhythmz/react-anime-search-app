import './anime.css'

const Anime = ({image, title}) => {
    return (
        <div className="anime__item">
            <img src={image} alt="" className="anime__img" />
            <p className="anime__title">{title}</p>
        </div>
    )
}

export default Anime

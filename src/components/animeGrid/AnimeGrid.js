import './animeGrid.css'
import Anime from '../anime/Anime'

const AnimeGrid = ({data}) => {
    return (
        <section className="anime-container">
            {data.map(item => {
                return <Anime key={item.mal_id} image={item.image_url} title={item.title} />
            })}
        </section>
    )
}

export default AnimeGrid

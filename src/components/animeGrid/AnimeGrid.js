import './animeGrid.css'
import Anime from '../anime/Anime'

const AnimeGrid = ({data, isLoading}) => {
    return (
        <>
        {isLoading ? <h2 className="loading">Loading...</h2> :
            <section className="anime-container">
            {data.map(item => {
                return <Anime key={item.mal_id} image={item.image_url} title={item.title} />
            })}
        </section>
        }
        
        </>
    )
}

export default AnimeGrid

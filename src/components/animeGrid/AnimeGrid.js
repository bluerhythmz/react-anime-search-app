import './animeGrid.css'
import Anime from '../anime/Anime'

const AnimeGrid = ({data, isLoading, heading, description}) => {
    return (
        <>
        {isLoading ? <h2 className="loading">Loading...</h2> :
            <>
                <div className="anime__heading">
                    <h3 className="anime__heading-text">{heading}</h3>
                    <p className="anime__heading-description">{description}</p>
                    <div className="divider"></div>
                </div>
            <section className="anime-container">
                
            {data.map(item => {
                return <Anime key={item.mal_id} image={item.image_url} title={item.title} />
            })}
        </section>
        </>
        }
        
        </>
    )
}

export default AnimeGrid

import './genrebutton.css'

const GenreButton = ({handleClick}) => {
    return (
        <button className="nav__genre" onClick={handleClick}>
         Genre   
        </button>
    )
}

export default GenreButton

import './searchbar.css'

const Searchbar = ({handleSearch, clicked, search}) => {
    
    return (
        <div className="search-wrapper" style={clicked ? {display: "block"} : {display: "none"}}>
            <input className="search" type="search" placeholder="Search For Anime. . ." onChange={(e) => handleSearch(e.target.value)} value={search} />
        </div>
        
    )
}

export default Searchbar

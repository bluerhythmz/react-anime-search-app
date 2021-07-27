import './searchbar.css'

const Searchbar = ({handleSearch, clicked}) => {
    
    return (
        <div className="search-wrapper" style={clicked ? {display: "block"} : {display: "none"}}>
            <input className="search" type="search" placeholder="Search For Anime. . ." onChange={(e) => handleSearch(e.target.value)} />
        </div>
        
    )
}

export default Searchbar

import './searchbar.css'

const Searchbar = ({handleSearch}) => {
    
    return (
        <input className="search" type="search" placeholder="Search by title..." onChange={(e) => handleSearch(e.target.value)} />
    )
}

export default Searchbar

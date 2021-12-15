import styles from './searchbar.module.css'

const Searchbar = ({handleSearch, clicked, search}) => {
    
    return (
        <div className={styles["search-wrapper"]} style={clicked ? {display: "block"} : {display: "none"}}>
            <input className={styles["search"]} type="search" placeholder="Search For Anime. . ." onChange={(e) => handleSearch(e.target.value)} value={search} />
        </div>
        
    )
}

export default Searchbar

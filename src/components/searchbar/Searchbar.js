import styles from './searchbar.module.css'

const Searchbar = ({handleSearch,  search}) => {
    
    return (
        <div className={styles["search-wrapper"]}>
            <input className={styles["search"]} type="search" placeholder="Search For Anime. . ." onChange={(e) => handleSearch(e.target.value)} value={search} />
        </div>
        
    )
}

export default Searchbar

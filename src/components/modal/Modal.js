import styles from './modal.module.css'

const Modal = ({ /* genres */ handleGenreClick}) => {
    return (
        <div className={styles["modal"]} /* style={clicked ? {display: "flex"} : { display: "none"}} */>
            <div className={styles["modal__content"]}>
            {/* {genres.map((genre, index) => {
                return (
                    <div className="modal__item" key={index} onClick={() => handleGenreClick(index + 1)}>{genre}</div>
                )
            })} */}
            </div>
            
        </div>
    )
}

export default Modal

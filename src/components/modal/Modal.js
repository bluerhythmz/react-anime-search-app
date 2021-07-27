import './modal.css'

const Modal = ({ /* genres */ handleGenreClick}) => {
    return (
        <div className="modal" /* style={clicked ? {display: "flex"} : { display: "none"}} */>
            <div className="modal__content">
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

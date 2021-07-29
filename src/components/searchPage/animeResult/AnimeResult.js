import './animeResult.css'

const AnimeResult = ({anime, bottom, bottomImg, bottomInfo}) => {
    
  return (
    <div className={`anime ${bottom}`}>
      <img className={`anime__img ${bottomImg}`} src={anime.image_url} alt="" />
      <div className={`anime__info ${bottomInfo}`}>
        <h3 className="anime__title">{anime.title}</h3>
        <p className="anime__episodes">Episodes: {anime.episodes}</p>
        <p className="anime__type">{anime.type}</p>
      </div>
    </div>
  );
};

export default AnimeResult;

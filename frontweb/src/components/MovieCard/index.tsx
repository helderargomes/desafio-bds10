import { Movie } from "types/movie";
import "./styles.css";

const movie: Movie = {
  id: 6,
  title: "A Voz do Silêncio",
  subTitle: "Koe no Katachi",
  year: 2016,
  imgUrl:
    "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
  synopsis:
    'Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.',
  genre: {
    id: 1,
    name: "Comédia",
  },
};

const MovieCard = () => {
  return (
    <div className="movie-card base-card">
      <div className="movie-card-img-container">
        <img src={movie.imgUrl} alt={movie.title}></img>
      </div>

      <div className="card-info-container">
        <h1>{movie.title}</h1>
        <h4>{movie.year}</h4>
        <p>{movie.subTitle}</p>
      </div>

      <div className="card-synopsis-container">
        <p>{movie.synopsis}</p>
      </div>
    </div>
  );
};

export default MovieCard;

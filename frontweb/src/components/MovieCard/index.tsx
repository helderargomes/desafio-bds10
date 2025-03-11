import { Movie } from "types/movie";
import "./styles.css";

type Props = {
  movie: Movie;
}

const MovieCard = ( { movie }: Props ) => {
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

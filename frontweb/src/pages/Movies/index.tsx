import { Link } from "react-router-dom";
import "./styles.css";
import MovieCard from "components/MovieCard";

const Movies = () => {
  return (
    <div className="home-container movie-page-container">
      <MovieCard />
    </div>
  );
};

export default Movies;

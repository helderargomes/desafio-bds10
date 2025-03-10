import "./styles.css";
import MovieCard from "components/MovieCard";

const Movies = () => {
  return (
    <div className="home-container movie-page-container">
        <div className="row">
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-xl-3 movie-card-container">
            <MovieCard />
          </div>
        </div>
    </div>
  );
};

export default Movies;

import Pagination from "components/Pagination";
import "./styles.css";
import MovieCard from "components/MovieCard";
import MovieCategoryFilter from "components/MovieFilter";

const Movies = () => {
  return (
    <div className="home-base-container movie-page-container">
        <div className="movie-filter-container">
          <MovieCategoryFilter />
        </div>
        
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

        <div className="row movie-pagination-container">
          <Pagination />
        </div>
    </div>
  );
};

export default Movies;

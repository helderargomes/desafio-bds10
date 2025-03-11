import Pagination from "components/Pagination";
import "./styles.css";
import MovieCard from "components/MovieCard";
import MovieCategoryFilter from "components/MovieCategoryFilter";
import { useEffect, useState } from "react";
import { SpringPage } from "types/vendor/spring";
import { Movie } from "types/movie";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "utils/requests";

const Movies = () => {
  const [movies, setMovies] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/movies/`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="home-base-container movie-page-container">
      <div className="movie-filter-container">
        <MovieCategoryFilter />
      </div>

      <div className="row card-list-container">
        {movies?.content.map((movie) => (
          <div
            key={movie.id}
            className="col-sm-6 col-xl-3 movie-card-container"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      <div className="row movie-pagination-container">
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;

import Pagination from "components/Pagination";
import "./styles.css";
import MovieCard from "components/MovieCard";
import MovieCategoryFilter from "components/MovieGenreFilter";
import { useCallback, useEffect, useState } from "react";
import { SpringPage } from "types/vendor/spring";
import { Movie } from "types/movie";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "utils/requests";
import { Genre } from "types/genre";

type ControlComponentsData = {
  activePage: Number;
  genre: Genre | null;
};

const Movies = () => {
  const [movies, setMovies] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({ activePage: 0, genre: null });

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/movies/`,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.genre?.id,
      },
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovies(response.data);
    });
  }, [controlComponentsData]);
  

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handleSubmitFilter = (genre: Genre) => {
    setControlComponentsData({
      activePage: 0,
      genre: genre
    });
  };

  const handlePageChange = (pageNumber: Number) => {
    setControlComponentsData({
      activePage: pageNumber,
      genre: controlComponentsData.genre
    });
  };

  return (
    <div className="home-base-container movie-page-container">
      <div className="movie-filter-container">
        <MovieCategoryFilter onSubmitFilter={handleSubmitFilter} />
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
        <Pagination
          pageCount={movies ? movies.totalPages : 0}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
          forcePage={movies?.number}
        />
      </div>
    </div>
  );
};

export default Movies;

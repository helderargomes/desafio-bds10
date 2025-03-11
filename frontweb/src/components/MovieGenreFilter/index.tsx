import Select from "react-select";
import "./styles.css";
import { useEffect, useState } from "react";
import { Genre } from "types/genre";
import { BASE_URL, requestBackend } from "utils/requests";
import { AxiosRequestConfig } from "axios";

const MovieCategoryFilter = () => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/genres`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="base-card movie-category-filter-container">
      <form className="movie-category-filter-form">
        <div className="movie-category-filter-select">
          <Select
            options={selectGenres}
            isClearable
            classNamePrefix="movie-category-filter"
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => genre.id}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieCategoryFilter;

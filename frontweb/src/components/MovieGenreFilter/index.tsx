import Select from "react-select";
import "./styles.css";
import { useEffect, useState } from "react";
import { Genre } from "types/genre";
import { BASE_URL, requestBackend } from "utils/requests";
import { AxiosRequestConfig } from "axios";
import { useForm, Controller } from "react-hook-form";

type Props = {
  onSubmitFilter: (genre: Genre) => void,
}

type FilterData = {
  genre: Genre;
}
const MovieCategoryFilter = ({onSubmitFilter}:Props) => {
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

  const { control, setValue } = useForm<FilterData>();

  const handleChangeGenre = (genre: Genre) => {
    setValue("genre", genre);

    onSubmitFilter(genre);
  };

  return (
    <div className="base-card movie-category-filter-container">
      <form
        className="movie-category-filter-form"
      >
        <div className="movie-category-filter-select">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                isClearable
                classNamePrefix="movie-category-select"
                onChange={(value: Genre) => handleChangeGenre(value)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieCategoryFilter;

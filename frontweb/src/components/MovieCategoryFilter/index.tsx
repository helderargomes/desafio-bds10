import Select from "react-select";
import "./styles.css";

const MovieCategoryFilter = () => {
  
    const options = [
        { value: 'aventura', label: 'Aventura '},
        { value: 'drama', label: 'Drama '}, 
        { value: 'comedia', label: 'Comédia '}
    ]
  
    return (
    <div className="base-card movie-category-filter-container">
      <form className="movie-category-filter-form">
        <div className="movie-category-filter-select">
          <Select options={options}
          isClearable
          classNamePrefix="movie-category-filter"
          />
        </div>
      </form>
    </div>
  );
};

export default MovieCategoryFilter;

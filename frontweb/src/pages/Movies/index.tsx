import { Link } from "react-router-dom";
import "./styles.css";

const Movies = () => {
  return (
    <div className="home-container movie-page-container">
      <h1>Tela listagem de filmes</h1>
      <ul className="list-unstyled list-container">        
        <li>
          <Link to="/movies/1">Acessar /movies/1</Link>
        </li>
        <li>
          <Link to="/movies/2">Acessar /movies/2</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Movies;

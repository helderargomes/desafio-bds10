import ReviewForm from "./ReviewForm";
import Review from "./Review";
import "./styles.css";
import { MovieReview } from "types/movieReview";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "utils/requests";
import { useParams } from "react-router-dom";
import { hasAnyRoles } from "utils/auth";
import MovieCard from "components/MovieCard";
import { Movie } from "types/movie";

type UrlParams = {
  movieId: string;
};

const MovieReviews = () => {
  const [reviews, setReviews] = useState<MovieReview[]>([]);

  const [currentMovie, setCurrentMovie] = useState<Movie>();

  const { movieId } = useParams<UrlParams>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setCurrentMovie(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (movieReview: MovieReview) => {
    const clone = [...reviews];
    clone.push(movieReview);
    setReviews(clone);
  };

  return (
    <div className="home-review-container home-base-container">
      {currentMovie &&
      <div className="movie-card-review-page">
        <MovieCard movie={currentMovie}/>
      </div>
      }      
      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <div className="comment-form-card">
          <ReviewForm
            currentMovieId={movieId}
            onInsertReview={handleInsertReview}
          />
        </div>
      )}

      <div className="review-list-container base-card">
        <ul className="list-unstyled">
          {reviews?.map((movieReview) => (
            <li key={movieReview.id}>
              <Review review={movieReview} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieReviews;

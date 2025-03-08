import { useForm } from "react-hook-form";
import "./styles.css";
import { postReviewBackend } from "utils/requests";
import { useState } from "react";
import { MovieReview } from "types/movieReview";

type ReviewData = {
  text: string;
};

type Props = {
  currentMovieId: string;
  onInsertReview: (review: MovieReview) => void;
}

const ReviewForm = ({currentMovieId, onInsertReview} : Props) => {
  
  const [reviewData, setReviewData] = useState<ReviewData>();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<ReviewData>();

  const onSubmit = (reviewData: ReviewData) => {    
    setReviewData(reviewData);
    postReviewBackend(reviewData, currentMovieId).then(response => {
      setValue("text", "");
      onInsertReview(response.data);
      console.log("SUCESSO AO SALVAR", response);
    })
    .catch(error => {
      console.log("ERRO AO SALVAR", error);
    });
    };

  return (
    <div className="base-card comment-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            {...register("text", {
              required: "Campo obrigatório",
            })}
            type="text"
            className={`form-control base-input ${
              errors.text ? "is-invalid" : ""
            }`}
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
        </div>
        <div className="invalid-feedback d-block">{errors.text?.message}</div>
        <div className="comment-submit">
          <button className="bg-primary btn">Salvar Avaliação</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

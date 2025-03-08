import { MovieReview } from "types/movieReview";
import "./styles.css";
import ReviewIcon from "assets/images/comment-icon.png";

type Props = {
  review: MovieReview;
};

const Review = ({ review }: Props) => {
  return (
    <div>
      <div className="review-header">
        <img src={ReviewIcon} alt="review-icon" />
        <h4>{review.user.name}</h4>
      </div>
      <div className="review-box">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default Review;

import { Link } from "react-router-dom";
import "../css/ReviewCard.css";

export default function ReviewCard({
  owner,
  category,
  review_img_url,
  title,
  votes,
  comment_count,
  review_id,
}) {
  return (
    <Link to={`/reviews/${review_id}`}>
      <div className="reviewCardContainer">
        <h3>{title}</h3>
        <ul className="reviewCard">
          <li>Author: {owner}</li>
          <li>Category: {category}</li>
          <li>Comments: {comment_count}</li>
          <li>Votes: {votes}</li>
          <li>
            <img src={review_img_url} alt="img review" className="reviewImg" />
          </li>
        </ul>
      </div>
    </Link>
  );
}

import { Link } from "react-router-dom";

export default function ReviewCard({
  owner,
  category,
  review_img_url,
  title,
  comment_count,
  review_id,
}) {
  return (
    <div className="reviewCardContainer">
      <Link to={`/reviews/${review_id}`}>
        <h3>{title}</h3>
        <ul className="reviewCard">
          <li>Author: {owner}</li>
          <li>Category: {category}</li>
          <li>Comments: {comment_count}</li>
          <img src={review_img_url} alt="img review" className="reviewImg" />
        </ul>
      </Link>
    </div>
  );
}

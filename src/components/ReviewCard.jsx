export default function ReviewCard({
  owner,
  category,
  review_img_url,
  title,
  comment_count,
}) {
  return (
    <div className="review-card">
      <h3>{title}</h3>
      <ul>
        <li>Author: {owner}</li>
        <li>Category: {category}</li>
        <li>Comments: {comment_count}</li>
        <img src={review_img_url} alt="img review" className="review-img" />
      </ul>
    </div>
  );
}

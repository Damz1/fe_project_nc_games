import * as api from "../api";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";

export default function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getReviews().then((reviews) => {
      setReviewList(reviews);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p className="loading">Loading...</p>
  ) : (
    <div className="list-container">
      <h2>Reviews List</h2>
      <ul>
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </div>
  );
}

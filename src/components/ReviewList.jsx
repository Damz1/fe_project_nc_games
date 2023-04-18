import * as api from "../api";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
import "../css/ReviewList.css";

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
    <div className="listContainer">
      <h2 className="listHeader">Reviews List</h2>
      <ul className="list">
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </div>
  );
}

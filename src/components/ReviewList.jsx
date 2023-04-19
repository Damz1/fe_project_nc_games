import * as api from "../api";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
import "../css/ReviewList.css";
import { useSearchParams } from "react-router-dom";

export default function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  useEffect(() => {
    setIsLoading(true);
    api.getReviews(categoryQuery).then((reviews) => {
      setReviewList(reviews);
      setIsLoading(false);
    });
  }, [categoryQuery]);

  return isLoading ? (
    <p className="loading">Loading...</p>
  ) : (
    <div className="listContainer">
      <h2 className="listHeader">Reviews List</h2>

      {categoryQuery ? (
        <h2>In the category of: {categoryQuery}</h2>
      ) : (
        <h2>All Reviews</h2>
      )}

      <ul className="list">
        {reviewList.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </ul>
    </div>
  );
}

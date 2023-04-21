import * as api from "../api";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
import "../css/ReviewList.css";
import { useSearchParams } from "react-router-dom";
import SortedReviews from "./SortedReviews";

export default function ReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");
  const orderQuery = searchParams.get("order");
  const sortQuery = searchParams.get("sort_by");

  useEffect(() => {
    setIsLoading(true);
    api
      .getReviews(categoryQuery, orderQuery, sortQuery)
      .then((reviews) => {
        setReviewList(reviews);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [categoryQuery, orderQuery, sortQuery]);

  return isError ? (
    <h2 className="isErrorMessage">Something went wrong</h2>
  ) : isLoading ? (
    <h2 className="loadingReviews">Loading Reviews...</h2>
  ) : (
    <div className="listContainer">
      <h2 className="listHeader">Reviews List</h2>
      <SortedReviews
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
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

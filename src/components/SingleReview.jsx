import { useParams } from "react-router-dom";
import * as api from "../api";
import { useEffect, useState } from "react";
import "../css/SingleReview.css";

export default function SingleReview() {
  const { review_id } = useParams();
  const [activeReview, setActiveReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getReviewById(review_id)
      .then((review) => {
        setActiveReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [review_id]);

  return isError ? (
    <p>Something went wrong</p>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className="singleReviewContainer">
      <h2>{activeReview.title}</h2>
      <ul className="singleReview">
        <li>Category: {activeReview.category}</li>
        <li>Created on: {activeReview.created_at}</li>
        <li>
          <img src={activeReview.review_img_url} alt={activeReview.title} />
        </li>
        <li>
          <h3>review by: {activeReview.owner}</h3>
        </li>
      </ul>
      <p className="ReviewBody">{activeReview.review_body}</p>
    </main>
  );
}

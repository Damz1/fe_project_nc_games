import { useParams } from "react-router-dom";
import * as api from "../api";
import { useEffect, useState } from "react";
import "../css/SingleReview.css";
import CommentList from "./CommentList";

export default function SingleReview({ username }) {
  const { review_id } = useParams();
  const [activeReview, setActiveReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [activeVotes, setActiveVotes] = useState(null);
  const [likeClicked, setLikeClicked] = useState(false);
  const [unlikeClicked, setUnlikeClicked] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(false);

  const handleVotes = (incrementBy) => {
    setActiveVotes((currentVotes) => {
      return currentVotes + incrementBy;
    });
    incrementBy > 0 ? setLikeClicked(true) : setUnlikeClicked(true);
    api.patchReviewVotes(review_id, incrementBy).catch(() => {
      setErrorMessage(true);
      setActiveVotes((currentVotes) => {
        return currentVotes - incrementBy;
      });
    });
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getReviewById(review_id)
      .then((review) => {
        setActiveReview(review);
        setActiveVotes(review.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [review_id]);

  return isError ? (
    <p>Something went wrong</p>
  ) : isLoading ? (
    <p>Loading Review...</p>
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
      <div className="votes">
        <button
          type="button"
          onClick={() => {
            handleVotes(1);
          }}
          disabled={likeClicked}
        >
          Like
        </button>
        <button
          type="button"
          onClick={() => {
            handleVotes(-1);
          }}
          disabled={unlikeClicked}
        >
          Unlike
        </button>
      </div>
      {isErrorMessage ? (
        <p>Could not update votes counts, please try again later</p>
      ) : (
        <p>{activeVotes} Votes</p>
      )}
      <CommentList review_id={activeReview.review_id} username={username} />
    </main>
  );
}

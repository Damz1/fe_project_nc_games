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
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [isErrorMessage, setErrorMessage] = useState(false);

  const handleVotes = (incrementBy) => {
    if (incrementBy === 1 && likeClicked) {
      return;
    }
    if (incrementBy === -1 && dislikeClicked) {
      return;
    }

    setActiveVotes((currentVotes) => {
      return currentVotes + incrementBy;
    });

    if (incrementBy === 1) {
      setLikeClicked(true);
      setDislikeClicked(false);
    } else {
      setDislikeClicked(true);
      setLikeClicked(false);
    }

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
    <h2 className="isErrorMessage">Something went wrong</h2>
  ) : isLoading ? (
    <h2 className="loadingReviews">Loading Reviews...</h2>
  ) : (
    <main className="singleReviewContainer">
      <h2>{activeReview.title}</h2>
      <ul className="singleReview">
        <li>Category: {activeReview.category}</li>
        <li>Created on: {activeReview.created_at}</li>
        <li>
          <img
            src={activeReview.review_img_url}
            alt={activeReview.title}
            className="reviewImg"
          />
        </li>
        <li>
          <h3>review by: {activeReview.owner}</h3>
        </li>
      </ul>
      <p className="ReviewBody">{activeReview.review_body}</p>
      <div className="votes">
        <button
          className="voteButtons"
          type="button"
          onClick={() => {
            handleVotes(1);
          }}
        >
          Like
        </button>
        <button
          className="voteButtons"
          type="button"
          onClick={() => {
            handleVotes(-1);
          }}
        >
          Dislike
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

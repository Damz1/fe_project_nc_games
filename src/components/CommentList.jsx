import { useEffect, useState } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

export default function CommentList({ review_id }) {
  const [activeComments, setActiveComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getCommentsById(review_id)
      .then((comments) => {
        setActiveComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [review_id]);

  if (isError) {
    <p>Something went wrong</p>;
  }
  if (isLoading) {
    <p>Loading all Comments...</p>;
  }

  if (activeComments.length === 0) {
    return <h3>There are not comments for this review</h3>;
  } else {
    return (
      <main className="commentListContainer">
        <h4>This review has {activeComments.length} comments</h4>
        <ul>
          {activeComments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <CommentCard {...comment} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

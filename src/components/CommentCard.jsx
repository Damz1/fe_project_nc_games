import "../css/CommentCard.css";
import * as api from "../api";
import { useState } from "react";

export default function CommentCard({
  author,
  body,
  created_at,
  votes,
  comment_id,
  setActiveComments,
}) {
  const date = new Date(created_at).toDateString();
  const [isError, setIsError] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const logedInUser = "tickle122";

  const handleDelete = () => {
    setIsDeleted(true);
    api.deleteComment(comment_id).catch((error) => {
      setIsError(true);
    });
  };

  return (
    <div>
      <main className="CommentCard">
        <p>Username: {author}</p>
        <p>Comment Left: {date}</p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <br />
        {logedInUser === author && (
          <button
            onClick={() => {
              handleDelete();
            }}
          >
            delete comment
          </button>
        )}
      </main>
      {isError ? (
        <p>an Error has occure, try again later</p>
      ) : (
        isDeleted && (
          <div>
            <p>This Comment Has ben Deleted</p>{" "}
            <button onClick={() => window.location.reload()}>
              Reload Page
            </button>
          </div>
        )
      )}
    </div>
  );
}

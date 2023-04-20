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
    setActiveComments((currentComments) => {
      const copyComments = [...currentComments];
      return copyComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    console.log("isdeleted", isDeleted);
    api.deleteComment(comment_id).catch((error) => {
      setIsError(true);
    });
  };

  return (
    <main className="CommentCard">
      <p>Username: {author}</p>
      <p>
        Comment Left:
        {date}
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <br />
      {logedInUser === author && (
        <button onClick={handleDelete}>delete comment</button>
      )}
      {isDeleted && <p>Comment had been deleted</p>}
    </main>
  );
}

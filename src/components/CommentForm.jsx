import { useState } from "react";
import * as api from "../api";
export default function CommentForm({
  username,
  setActiveComments,
  review_id,
}) {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    const commentObj = {
      username: username,
      body: userInput,
    };
    api
      .postComment(review_id, commentObj)
      .then((comment) => {
        setActiveComments((currentComments) => {
          return [comment, ...currentComments];
        });
        setUserInput("");
        setIsSubmitted(true);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  return isError ? (
    <p>Something went wrong</p>
  ) : isPosting ? (
    <p>Posting your comment</p>
  ) : (
    <section className="FormContainer">
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="commentInput">Comment:</label>
        </section>
        <textarea
          name="commentInput"
          id="commentInput"
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
          maxLength={250}
          required
        ></textarea>
        <button className="submitButton" type="submit" disabled={isSubmitted}>
          Post my comment
        </button>
      </form>
    </section>
  );
}

import { useState } from "react";
import * as api from "../api";

export default function CommentForm({ setActiveComments, review_id }) {
  const [userInput, setUserInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    setIsSubmitted(true);
    const commentObj = {
      username: "tickle122",
      body: userInput,
    };
    api
      .postComment(review_id, commentObj)
      .then((createdComment) => {
        setActiveComments((currentComments) => {
          return [createdComment, ...currentComments];
        });
        setUserInput("");
        setIsPosting(false);
        setIsSubmitted(false);
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

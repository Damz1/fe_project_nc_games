import "../css/CommentCard.css";

export default function CommentCard({ author, body, created_at, votes }) {
  const date = new Date(created_at).toDateString();

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
    </main>
  );
}

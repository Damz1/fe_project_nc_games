import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/reviews">
        <button type="button">All Reviews</button>
      </Link>
      <Link to="/categories">
        <button type="button">All Categories</button>
      </Link>
    </div>
  );
}

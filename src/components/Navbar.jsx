import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar({ logedInUser }) {
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

import React from "react";
import { Link } from "react-router-dom";
import "../css/Error.css";

export default function Error() {
  return (
    <div className="errorContainer">
      <h2 className="errorHeader">
        Sorry, this URL is invalid, you can click on the followings:
      </h2>
      <ul className="errorUL">
        <li>
          <Link to="/reviews">To All Reviews</Link>
        </li>
        <li>
          <Link to="/categories">To All Categories</Link>
        </li>
      </ul>
    </div>
  );
}

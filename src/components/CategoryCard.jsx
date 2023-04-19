import { Link } from "react-router-dom";
import "../css/CategoryCard.css";

export default function CategoryCard({ slug, description }) {
  return (
    <section className="CategoryCardContainer">
      <Link to={`/reviews?category=${slug}`}>
        <h3>{slug}</h3>
      </Link>

      <p>{description}</p>
    </section>
  );
}

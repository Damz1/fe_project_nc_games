import { useEffect, useState } from "react";
import * as api from "../api";
import CategoryCard from "./CategoryCard";
import "../css/CategoryList.css";

export default function CategoryList() {
  const [activeCategories, setActiveCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getCategories().then((categories) => {
      setActiveCategories(categories);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <h2>Loading Categories...</h2>
  ) : (
    <section className="CategoryListContainer">
      <h2>Choose a Category</h2>
      <ul>
        {activeCategories.map((category) => {
          return (
            <li key={category.slug}>
              <CategoryCard {...category} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

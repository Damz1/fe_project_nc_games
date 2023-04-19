import { useState } from "react";
import "../css/SortedReviews.css";

export default function SortedReviews({ setSearchParams, searchParams }) {
  const [sortOrderSelect, setSortOrderSelect] = useState("desc");
  const [sortBySelect, setSortBySelect] = useState("created_at");

  const handleSubmit = (e) => {
    e.preventDefault();
    const copySearchParams = new URLSearchParams(searchParams);
    copySearchParams.set("order", sortOrderSelect);
    copySearchParams.set("sort_by", sortBySelect);
    setSearchParams(copySearchParams);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sortBy">Sort By:</label>
        <select
          name="sortBy"
          id="sortBy"
          value={sortBySelect}
          onChange={(e) => {
            setSortBySelect(e.target.value);
          }}
        >
          <option value="title">Title</option>
          <option value="designer">Designer</option>
          <option value="owner">Owner</option>
          <option value="category">Category</option>
          <option value="created_at">Date Posted</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="sortOrder">Order:</label>
        <select
          name="SortOrder"
          id="sortOrder"
          value={sortOrderSelect}
          onChange={(e) => {
            setSortOrderSelect(e.target.value);
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button>Sort!</button>
      </form>
    </section>
  );
}

import ReviewList from "./components/ReviewList";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SingleReview from "./components/SingleReview";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/categories" element={<CategoryList />} />
      </Routes>
    </div>
  );
}

export default App;
